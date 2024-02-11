import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please enter a username"],
    },
    password:{
        type:String,
        required:[true, "Please enter a password"]
    },
    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique:[true, "Email already taken"]
    },
    currentBalance:{
        type:Number,
        default:0
    }
})

export const User=new mongoose.model("User", userSchema);