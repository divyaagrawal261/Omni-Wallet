import mongoose from "mongoose";

const transactionSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "Please enter a userId"]
    },
    wallet_id:{
        type:mongoose.Types.ObjectId,
        ref:"Wallet",
        required:[true, "Please enter a wallet ID"]
    },
    amount:{
        type:Number,
        required:[true, "Please enter an amount"]
    },
    type:{
        type:String,
        required:[true, "Please specify a transaction type"],
        default:"expense"
    },
    date:{
        type:Date,
        required:[true, "Please enter a Date"]
    },
    note:{
        type:String
    }
})

export const Transaction=new mongoose.model("Transaction",transactionSchema);