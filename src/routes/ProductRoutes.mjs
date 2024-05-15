import { Router } from "express";
import { ProductController } from "../controllers/ProductController.mjs";

export const ProductRouter = Router()


ProductRouter.post('/create',ProductController.createProduct)