import { Router } from "express";
import { TrialController } from "../controllers/TrialController.mjs";
export const TrialRouter = Router();

TrialRouter.get("/trial/forgot-password", TrialController.forgotPassword)
TrialRouter.get("/trial/reset-password/:id/:token", TrialController.resetPass)