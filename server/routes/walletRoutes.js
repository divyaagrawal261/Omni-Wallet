import express from "express";
import validateToken from "../middlewares/validateTokenHandler.js";
import {
  createWallet,
  getWallets,
  updateWallet,
  deleteWallet,
} from "../controllers/walletControllers.js";
const Router = express.Router();
Router.use(validateToken)
Router.post("/create",createWallet)
      .delete("/delete/:walletId", deleteWallet)
      .get("/",validateToken,getWallets)
      .patch("/update", updateWallet);

export default Router;