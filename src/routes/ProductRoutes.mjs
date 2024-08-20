import { Router } from "express";
import { ProductController } from "../controllers/ProductController.mjs";
import { upload } from "../middleware/MulterConfig.mjs";
export const ProductRouter = Router();

ProductRouter.post("/create",upload.single("image"), ProductController.createProduct);
ProductRouter.get("/", ProductController.paginatedProducts);
ProductRouter.get("/:id", ProductController.getProductID);
ProductRouter.put("/:id", upload.single("image"), ProductController.updateProduct);
ProductRouter.delete("/:id", ProductController.deleteProduct);
