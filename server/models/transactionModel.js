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

export async function getMonthlyTransactions(year, month) {
    const startDate = new Date(Date.UTC(year, month - 1, 1)); 
    const endDate = new Date(Date.UTC(year, month, 1));
  
    const monthlyTransactions = await Transaction.aggregate([
      {
        $match: {
          date: {
            $gte: startDate,
            $lt: endDate
          }
        }
      },
      {
        $group: {
          _id: { year: { $year: "$date" }, month: { $month: "$date" } },
          totalAmount: { $sum: "$amount" },
          transactions: { $push: "$$ROOT" } 
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 }
      }
    ]);
  
    return monthlyTransactions;
  }

export const Transaction=new mongoose.model("Transaction",transactionSchema);