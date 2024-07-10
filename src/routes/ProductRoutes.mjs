import { Router } from "express";
import { ProductController } from "../controllers/ProductController.mjs";

export const ProductRouter = Router();

ProductRouter.post("/products/create", ProductController.createProduct);
ProductRouter.get("/products/", ProductController.paginatedProducts);
ProductRouter.get("/products/search", ProductController.getSearch);
ProductRouter.get("/products/:id", ProductController.getProductID);
ProductRouter.put("/products/:id", ProductController.updateProduct);
ProductRouter.delete("/products/:id", ProductController.deleteProduct);
