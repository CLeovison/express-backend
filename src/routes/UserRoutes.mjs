import { Router } from "express";
import { UserController } from "../controllers/UserController.mjs";
import { registerValidation, validationQuery } from "../middleware/Validation.mjs";
import { authenticateToken } from "../middleware/Auth.mjs";
import { authorizeRoles } from "../middleware/AuthRole.mjs";

export const UserRouter = Router();

UserRouter.post("/register",registerValidation, UserController.registerUser);
UserRouter.post('/login', UserController.loginUser);
UserRouter.get("/user", authenticateToken, authorizeRoles(['Admin']), validationQuery, UserController.getPaginatedUser);
UserRouter.get("/user/search", authenticateToken, authorizeRoles(['Admin']), UserController.getSearch);
UserRouter.get("/user/:id",authenticateToken, authorizeRoles(['Admin']), UserController.getUserID);
UserRouter.put("/user/:id",authenticateToken, authorizeRoles(['Admin']), UserController.updateUser);
UserRouter.delete("/user/:id",authenticateToken, authorizeRoles(['Admin']) , UserController.deleteUser);
