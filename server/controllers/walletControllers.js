import {Wallet} from "../models/walletModel.js";
import asycnHandler from "express-async-handler";
import { User } from "../models/userModel.js";

//@desc Get all Wallets
//@route GET /api/wallets
//@access private
const getWallets=asycnHandler(async(req,res)=>{
    const Wallets=await Wallet.find({user_id:req.user.id})
    res.status(200).json(Wallets);
})

//@desc create a Wallet
//@route POST /api/wallets/
//@access private
const createWallet=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const {walletBalance, walletName}=req.body;
    try{
    if(walletBalance<0)
    throw new Error("Please enter a non-negative balance");

    if(!walletName)
    res.status(400).json({message:"Please enter a Wallet Name"});

    const wallet=await Wallet.create({user_id, walletBalance, walletName});

    const user=await User.findOne({_id:user_id});
    user.currentBalance=Number(user.currentBalance)+Number(walletBalance);

    await user.save();

    res.status(201).json(wallet);
    }
    catch(err)
    {
        res.status(400).json(err.message);
    }

})

//@desc delete a Wallet
//@route DELETE /api/wallets/
//@access private
const deleteWallet=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const _id=req.params.walletId;

    const wallet =await Wallet.findOneAndDelete({user_id,_id})

    if(!wallet)
    res.status(400).json({message:"Wallet does not exist"});

    const user=await User.findOne({_id:user_id});
    user.currentBalance-=Number(wallet.walletBalance);
    await user.save();
    
    res.status(201).json(wallet);
})

//@desc update a Wallet
//@route PATCH /api/wallets/
//@access private
const updateWallet=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const {walletId, walletName}=req.body;

    const wallet = await Wallet.findOneAndUpdate(
        { user_id: user_id, _id: walletId },
        { $set: { walletName: walletName } },
        { new: true });

    if(!wallet)
    res.status(400).json({message:"Wallet does not exist"});
    
    res.status(201).json(wallet);
})
export {createWallet, getWallets, deleteWallet, updateWallet};