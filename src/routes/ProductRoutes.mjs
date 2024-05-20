import { Router } from "express";
import { ProductController } from "../controllers/ProductController.mjs";
import { productValidationQuery } from "../middleware/Validation.mjs";
import { authorizeRoles } from "../middleware/AuthRole.mjs";

export const ProductRouter = Router();

ProductRouter.post("/create",authorizeRoles(['Admin']), productValidationQuery, ProductController.createProduct);
ProductRouter.get("/", ProductController.paginatedProducts);
ProductRouter.get("/search", ProductController.searchProduct);
ProductRouter.get("/:id", ProductController.getProductID);
ProductRouter.put("/:id",authorizeRoles(['Admin']), ProductController.updateProduct);
ProductRouter.delete("/:id",authorizeRoles(['Admin']), ProductController.deleteProduct);
