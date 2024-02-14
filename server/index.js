import express from "express";
import dotenv from "dotenv";
// const errorHandler = require("./middleware/errorHandler");
import connectDb from "./config/dbConnect.js";
import walletRoutes from "./routes/walletRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();


connectDb();
const app=express();

const port=process.env.PORT; 

app.use(express.json());
// app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",userRoutes);
app.use("/api/wallets",walletRoutes);

// app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is listening on the port ${port}...`);
})