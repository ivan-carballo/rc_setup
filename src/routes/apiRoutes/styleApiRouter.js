import { Router } from "express";

import styleApiController from "../../controllers/styleController/styleApiController.js";
import styleViewController from "../../controllers/styleController/styleViewController.js";

const router = Router();


router.get("/",styleViewController.getAll);
/* router.get("/create",styleApiController.create);
router.get("/:id",styleApiController.getById);
router.get("/:id/update",styleApiController.update);
router.get("/:id/remove",styleApiController.remove); */



export default router;

