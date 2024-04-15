import express from "express";
import { CreatePost } from "../controllers/RegistererController.mjs";


export const RegisterRouter = express.Router();

RegisterRouter.post("/", CreatePost)

