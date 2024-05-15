import { Router } from "express";

import styleApiRouter from "./styleApiRouter.js";


const router = Router();



router.use("/",styleApiRouter);



export default router;