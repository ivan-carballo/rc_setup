import {Router} from "express";

import userRouter from "./userRouter.js";
import chasisRouter from "./chasisRouter.js";
import styleRouter from "./styleRouter.js";
import surfaceRouter from "./surfaceRouter.js";
import setupRouter from "./setupRouter.js";


const router  =  Router();


router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})


router.use("/user",userRouter);
router.use("/style",styleRouter);
router.use("/setup",setupRouter);
router.use("/surface",surfaceRouter);
router.use("/chasis",chasisRouter);


export default router;