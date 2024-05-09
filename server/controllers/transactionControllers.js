import {Transaction} from "../models/transactionModel.js";
import asycnHandler from "express-async-handler";
import { Wallet } from "../models/walletModel.js";
import { User } from "../models/userModel.js";
import { getMonthlyTransactions } from "../models/transactionModel.js";
import expressAsyncHandler from "express-async-handler";

//@desc Get all Transactions
//@route GET /api/transactions
//@access private
const getAllTransactions=asycnHandler(async(req,res)=>{
    const Transactions=await Transaction.find({user_id:req.user.id}).populate("wallet_id");
    let transactions=Transactions;
    transactions.sort((a, b) => new Date(b.date) - new Date(a.date))
    res.status(200).json(Transactions);
})

//@desc create a Transaction
//@route POST /api/transaction/create
//@access private
const createTransaction=asycnHandler(async(req,res)=>{

    const user_id=req.user.id;
    const {wallet_id, amount, note, date, type}=req.body;
    try{
        if(amount<=0)
        throw new Error("Amount should be greater than 0");

        const wallet=await Wallet.findOne({user_id, _id:wallet_id});
        
        if(!wallet)
        throw new Error("Wallet does not exist"); 
    
    if(type==="expense")
    {
        if(wallet.balance<amount)
        throw new Error("Insufficient balance");
        wallet.walletBalance-=Number(amount);
        const transaction=await Transaction.create({user_id, wallet_id, amount, date, note,type});
        const user=await User.findOneAndUpdate({_id:user_id},{$inc:{currentBalance:-amount}});
        }
        else
        {
            wallet.walletBalance+=Number(amount);
            const user=await User.findOneAndUpdate({_id:user_id},{$inc:{currentBalance:amount}});
            const transaction=await Transaction.create({user_id, wallet_id, amount, date, note,type});
        }

        await wallet.save();
    
        res.status(201).json(wallet);
    }
    catch(err)
    {
        res.status(400).json(err.message);
    }
})

//@desc update a transaction
//@route PATCH /api/transaction/    
//@access private
const updateTransaction=asycnHandler(async(req,res)=>{
    const user_id=req.user.id;
    const {wallet_id, note}=req.body;
    const transaction_id=req.params.transactionId;
    try{
    const transaction=await Transaction.findOneAndUpdate({user_id, wallet_id, _id: transaction_id},{$set:{note}});
    
    if(!transaction)
    throw new Error("No such transaction found");

    res.status(201).json(transaction);
    }
    catch(err)
    {
        res.status(400).json(err.message);
    }
})

//@desc update a transaction
//@route PATCH /api/transaction/    
//@access private
const getTheMonthlyTransactions=expressAsyncHandler(async(req, res)=>{
    const transactions=await getMonthlyTransactions(req.params.year, req.params.month);
    res.status(200).json(transactions);
})
export {createTransaction, updateTransaction, getAllTransactions, getTheMonthlyTransactions};