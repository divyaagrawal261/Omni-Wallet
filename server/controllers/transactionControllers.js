import {Transaction} from "../models/transactionModel.js";
import asycnHandler from "express-async-handler";
import { Wallet } from "../models/walletModel.js";

//@desc Get all Transactions
//@route GET /api/transactions
//@access private
const getAllTransactions=asycnHandler(async(req,res)=>{
    const Transactions=await Transaction.find({user_id:req.user.id})
    res.status(200).json(Transactions);
})

//@desc create a Transaction
//@route POST /api/transaction/
//@access private
const createTransaction=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const {wallet_Id, amount, type, date, note}=req.body;
    
    const wallet=await Wallet.findOne({user_id, _id:wallet_Id});
    
    if(!wallet)
    return res.status(404).json({message:"Wallet does not exist"})
    
    const transaction=await Transaction.create({user_id, wallet_Id, amount, date, type, note});

    if(type=="income")
    wallet.balance+=amount
    else if(type=="expense")
    wallet.balance-=amount

    await wallet.save();

    res.status(200).json(wallet,transaction);
})

//@desc update a transaction
//@route PATCH /api/transaction/
//@access private
const updateTransaction=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const {wallet_id, note, transaction_id}=req.body;

    const transaction=await Transaction.findOne({user_id, wallet_id, transaction_id});

    transaction.note=note;
    await transaction.save();
    
    res.status(201).json(transaction);
})
export {createTransaction, updateTransaction, getAllTransactions};