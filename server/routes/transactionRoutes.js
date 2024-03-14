import { getAllTransactions, createTransaction, updateTransaction } from "../controllers/transactionControllers.js";
import validateToken from "../middlewares/validateTokenHandler.js";
import express from "express";
const router=express.Router();
router.use(validateToken);
router.post("/create",createTransaction);
router.patch("/update/:transactionId",updateTransaction);
router.get("/",getAllTransactions);

export default router;