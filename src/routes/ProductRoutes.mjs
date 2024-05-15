import { Router } from "express";
import { ProductController } from "../controllers/ProductController.mjs";

export const ProductRouter = Router()


ProductRouter.post('/create',ProductController.createProduct)
ProductController.get('/')
ProductRouter.get('/search',ProductController.searchProduct)
ProductRouter.delete('/:id', ProductController.deleteProduct)