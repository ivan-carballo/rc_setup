import {Router} from "express";

import styleApiController from "../controllers/style/styleApiController.js";


const router  = Router();

router.get("/",styleApiController.getAll);
router.get("/byproperty",styleApiController.getByProperty);
router.get("/:id",styleApiController.getById);
router.post("/",styleApiController.create);
router.put("/:id",styleApiController.update);
router.delete("/:id",styleApiController.remove);

export default router;