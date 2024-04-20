import {Router} from "express";
import { UserController } from "../controllers/UserController.mjs";


export const UserRouter = Router();

UserRouter.post("/", UserController.createUser)
UserRouter.get("/", UserController.getPaginatedUser)
UserRouter.get('/:id', UserController.getUserID)
UserRouter.put('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)

