import { Router } from "express";
import { UserController } from "../controllers/UserController.mjs";

export const TrialRouter = Router();

TrialRouter.get("/trial/forgot-password", UserController.forgotPassword)
TrialRouter.get("/trial/reset-password/:id/:token", UserController.resetPass)