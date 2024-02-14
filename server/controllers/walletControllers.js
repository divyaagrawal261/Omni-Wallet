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
    if(!walletName)
    res.status(400).json({message:"Please enter a Wallet Name"});

    const wallet=await Wallet.create({user_id, walletBalance, walletName});

    const user=await User.findOne({_id:user_id});
    user.currentBalance+=walletBalance

    await user.save();

    res.status(201).json(wallet);
})

//@desc delete a Wallet
//@route DELETE /api/wallets/
//@access private
const deleteWallet=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const walletId=req.body;

    const wallet =await Wallet.findOneAndDelete({user_id, walletId})

    if(!wallet)
    res.status(400).json({message:"Wallet does not exist"});
    
    res.status(201).json(wallet);
})

//@desc update a Wallet
//@route PATCH /api/wallets/
//@access private
const updateWallet=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const {walletId, walletName}=req.body;

    const wallet =await Wallet.findOneAndUpdate({user_id, walletId})

    if(!wallet)
    res.status(400).json({message:"Wallet does not exist"});
    
    res.status(201).json(wallet);
})
export {createWallet, getWallets, deleteWallet, updateWallet};