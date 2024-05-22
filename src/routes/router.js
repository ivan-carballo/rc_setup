import {Router} from "express";

import userRouter from "./userRouter.js";
import setupRouter from "./setupRouter.js";

import authRouter from "./authRouter.js";

import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";


const router  =  Router();


/* router.get("/",(req,res)=>{
    res.json({data:"hello api"});
}) */


router.use("/user", isAdmin, userRouter);
router.use("/setup", isAuthenticated, setupRouter);

router.use("/",authRouter);


export default router;