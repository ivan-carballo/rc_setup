import {Router} from "express";

import userRouter from "./userRouter.js";
import setupRouter from "./setupRouter.js";
import favRouter from "./favRouter.js";

import authRouter from "./authRouter.js";

import { hasSession } from "../middlewares/authMiddleware.js";


const router  =  Router();


router.use("/user", hasSession, userRouter);
router.use("/setup", setupRouter);
router.use("/fav", favRouter);



router.use("/",authRouter);


export default router;