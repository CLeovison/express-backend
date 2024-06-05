import { Router } from "express";

export const MainRouter = Router();


MainRouter.get("/", (req, res) =>{
    res.render('index')
})
MainRouter.get("/users/reset-password/:id/:token", (req, res) =>{
    res.render('reset')
})


