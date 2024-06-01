import { Router } from "express";
import { UserController } from "../controllers/UserController.mjs";
import { registerValidation, validationQuery } from "../middleware/Validation.mjs";
import { authenticateToken } from "../middleware/Auth.mjs";
import { authorizeRoles } from "../middleware/AuthRole.mjs";

export const UserRouter = Router();

UserRouter.post("/register",registerValidation, UserController.registerUser);
UserRouter.post('/login', UserController.loginUser);
UserRouter.get("/users", authenticateToken, authorizeRoles(['Admin']), validationQuery, UserController.getPaginatedUser);
UserRouter.get("/users/search", authenticateToken, authorizeRoles(['Admin']), UserController.getSearch);
UserRouter.get("/users/:id",authenticateToken, authorizeRoles(['Admin']), UserController.getUserID);
UserRouter.put("/users/:id",authenticateToken, authorizeRoles(['Admin']), UserController.updateUser);
UserRouter.delete("/users/:id",authenticateToken, authorizeRoles(['Admin']) , UserController.deleteUser);
UserRouter.post("/users/forgot-password", UserController.forgotPassword)
UserRouter.get("/users/reset-password/:id/:token", UserController.resetPass)


//Idemponent API Practices - https://blog.hubspot.com/website/idempotent-api