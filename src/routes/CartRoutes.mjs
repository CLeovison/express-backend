import { Router } from "express";
import { CartController } from "../controllers/CartController.mjs";
export const CartRouter = Router();

CartRouter.post("/", CartController.addCart);
CartRouter.get("/", CartController.getAllCart);
