import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";

//@desc Create a new user
//@route POST /api/user/register
//@access public
const createUser=asyncHandler(async(req,res)=>{
    const {username, email, password}=req.body

    try{
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable=await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    //hash Password
    const hashedPassword=await bcrypt.hash(password,10);
    
    const user=await User.create({username, email, password:hashedPassword});

    if(user)
    {
        res.status(201).json({_id:user.id,email:user.email});
    }
    else
    {
        res.status(400);
        throw new Error("User data is not valid");
    }
   res.json({message:"Register the user"});
}
catch(err)
{
    res.status(400).json(err.message);
}
});

//@desc Login user
//@route POST /api/user/login
//@access public 
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    try{
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user=await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password)))
    {
        const accessToken=jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
                currentBalance: user.currentBalance
            },
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"60m"});
        res.status(200).json({accessToken});
    }
    else{
        res.status(401);
        throw new Error("Email or Password does not match");
    }
}
catch(err)
{
    res.status(400).json(err.message);
}
 });

//@desc Current user info
//@route GET /api/user/current
//@access private 
const currentUser=asyncHandler(async(req,res)=>{
    try{
    const user=await User.findById(req.user.id);
    res.json(user);
    }
    catch(err)
    {
        res.status(400).json(err.message);
    }
 });

export {createUser,loginUser,currentUser}  