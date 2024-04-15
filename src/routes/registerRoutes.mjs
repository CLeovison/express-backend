import express from "express";
import { RegisterController } from "../controllers/RegistererController.mjs";

export const RegisterRouter = Router();

RegisterRouter.post("/", RegisterController.createRegister)

