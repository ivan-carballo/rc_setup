import {Router} from "express";

import setupApiController from "../controllers/setup/setupApiController.js";


const router  = Router();

router.get("/",setupApiController.getAll);
router.get("/byproperty",setupApiController.getByProperty);
router.get("/:id",setupApiController.getById);
router.post("/",setupApiController.create);
router.put("/:id",setupApiController.update);
router.delete("/:id",setupApiController.remove);

export default router;