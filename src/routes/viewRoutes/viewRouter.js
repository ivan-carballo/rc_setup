import { Router } from "express";

import styleViewRouter from "./styleViewRouter.js";


const router = Router();



router.use("/",styleViewRouter);

export default router;