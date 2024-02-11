import mongoose from "mongoose";

const walletSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "Please enter a userId"]
    },
    walletBalance:{
        type:Number,
        default:0
    },
    walletName:{
        type:String
    }
})

export const Wallet=new mongoose.model("Wallet",walletSchema);