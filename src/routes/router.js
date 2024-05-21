import {Router} from "express";

import userRouter from "./userRouter.js";
import setupRouter from "./setupRouter.js";


const router  =  Router();


router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})


router.use("/user",userRouter);
router.use("/setup",setupRouter);


export default router;