import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConnect.js";
import walletRoutes from "./routes/walletRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import cors from "cors";
dotenv.config();

connectDb();
const app=express();

const port=process.env.PORT; 

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/wallets",walletRoutes);
app.use("/api/transactions",transactionRoutes);

app.listen(port,()=>{
    console.log(`Server is listening on the port ${port}...`);
})