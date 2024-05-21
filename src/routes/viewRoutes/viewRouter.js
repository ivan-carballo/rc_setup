import { Router } from "express";

import styleViewRouter from "./styleViewRouter.js";
import userViewRouter from "./userViewRouter.js";
import surfaceViewRouter from "./surfaceViewRouter.js";
import chasisViewRouter from "./chasisViewRouter.js";


const router = Router();



router.use("/",styleViewRouter);
router.use("/user",userViewRouter);
router.use("/surface",surfaceViewRouter);
router.use("/chasis",chasisViewRouter);

export default router;