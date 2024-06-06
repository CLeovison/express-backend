import { Router } from "express";
import { WishListController } from "../controllers/WishListController.mjs";
const WishListRouter = Router();

WishListRouter.post("/add", WishListController.addWishList);
WishListRouter.get("/", WishListController.getAllWish);
WishListRouter.delete("/remove", WishListController.removeWishList);
