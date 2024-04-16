import { Router } from "express";
import { createPost } from "../controllers/RegistererController.mjs";

export const RegisterRouter = Router();

RegisterRouter.post("/", createPost);
