import { Router } from "express";
import { UserController } from "../controllers/UserController.mjs";
import { registerValidation, validationQuery } from "../middleware/Validation.mjs";
import { authenticateToken } from "../middleware/Auth.mjs";
import { AdminOnly } from "../middleware/AdminOnly.mjs";

export const UserRouter = Router();

UserRouter.post("/register",registerValidation, UserController.registerUser);
UserRouter.post('/login', UserController.loginUser);
UserRouter.get("/user",authenticateToken, AdminOnly, validationQuery, UserController.getPaginatedUser);
UserRouter.get("/user/search", authenticateToken, AdminOnly, UserController.getSearch);
UserRouter.get("/user/:id",authenticateToken, AdminOnly, UserController.getUserID);
UserRouter.put("/user/:id",authenticateToken, AdminOnly, UserController.updateUser);
UserRouter.delete("/user/:id",authenticateToken, AdminOnly , UserController.deleteUser);
