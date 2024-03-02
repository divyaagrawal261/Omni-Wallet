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
            wallet.walletBalance-=amount;
        }
        else
        {
            wallet.walletBalance+=Number(amount);
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
    const {wallet_id, note, transaction_id}=req.body;

    const transaction=await Transaction.findOne({user_id, wallet_id, transaction_id});

    transaction.note=note;
    await transaction.save();
    
    res.status(201).json(transaction);
})
export {createTransaction, updateTransaction, getAllTransactions};