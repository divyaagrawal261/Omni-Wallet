import { getAllTransactions, createTransaction, updateTransaction, getTheMonthlyTransactions, getRecentTransactions } from "../controllers/transactionControllers.js";
import validateToken from "../middlewares/validateTokenHandler.js";
import express from "express";
const router=express.Router();
router.use(validateToken);
router.post("/create",createTransaction);
router.patch("/update/:transactionId",updateTransaction);
router.get("/",getAllTransactions);
router.get("/monthly/:year/:month",getTheMonthlyTransactions);
router.get("/recents",getRecentTransactions);

export default router;