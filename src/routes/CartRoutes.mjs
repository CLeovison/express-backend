import { Router } from "express";

export const CartRouter = Router();


CartRouter.post('/', CartController.addCart)