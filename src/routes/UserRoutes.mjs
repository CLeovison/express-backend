import { Router } from "express";
import { UserController } from "../controllers/UserController.mjs";
import { registerValidation, validationQuery } from "../middleware/Validation.mjs";
import { authenticateToken } from "../middleware/Auth.mjs";

export const UserRouter = Router();

UserRouter.post("/register",registerValidation, UserController.registerUser);
UserRouter.post('/login', UserController.loginUser);
UserRouter.get("/",authenticateToken, validationQuery, UserController.getPaginatedUser);
UserRouter.get("/search", UserController.getSearch);
UserRouter.get("/:id",authenticateToken, UserController.getUserID);
UserRouter.put("/:id",authenticateToken, UserController.updateUser);
UserRouter.delete("/:id",authenticateToken, UserController.deleteUser);
