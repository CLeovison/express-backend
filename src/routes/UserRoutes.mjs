import express from "express";
import { UserController } from "../controllers/UserController.mjs";


export const UserRouter = Router();

UserRouter.post("/", UserController.createRegister)

