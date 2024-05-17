import { Router } from "express";

import userApiController from "../../controllers/userController/userApiController.js";
import userViewController from "../../controllers/userController/userViewController.js";

const router = Router();


router.get("/",userViewController.getAll);
/* router.get("/create",styleApiController.create);
router.get("/:id",styleApiController.getById);
router.get("/:id/update",styleApiController.update);
router.get("/:id/remove",styleApiController.remove); */



export default router;