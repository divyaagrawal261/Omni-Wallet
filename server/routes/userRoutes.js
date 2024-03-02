import express from "express";
const router=express.Router();
import { createUser, loginUser, currentUser } from "../controllers/userControllers.js";
import validateToken from "../middlewares/validateTokenHandler.js";

router.post("/register",createUser);
router.post("/login",loginUser);
router.get("/current",validateToken,currentUser);

export default router;