import { Router } from "express";

import apiRouter from "../routes/apiRoutes/apiRouter.js";
import viewRouter from "../routes/viewRoutes/viewRouter.js";

const router = Router();


router.use("/api",apiRouter);
router.use("/",viewRouter);






export default router;