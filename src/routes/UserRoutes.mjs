import { Router } from "express";
import { UserController } from "../controllers/UserController.mjs";
import { validationQuery } from "../middleware/Validation.mjs";

export const UserRouter = Router();

UserRouter.post("/", UserController.createUser);
UserRouter.get("/", validationQuery, UserController.getPaginatedUser);
UserRouter.get("/search", UserController.getSearch);
UserRouter.get("/:id", UserController.getUserID);
UserRouter.put("/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);
