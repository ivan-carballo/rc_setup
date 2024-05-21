import {Router} from "express";

import surfaceApiController from "../controllers/surface/surfaceApiController.js";


const router  = Router();

router.get("/",surfaceApiController.getAll);
router.get("/byproperty",surfaceApiController.getByProperty);
router.get("/:id",surfaceApiController.getById);
router.post("/",surfaceApiController.create);
router.put("/:id",surfaceApiController.update);
router.delete("/:id",surfaceApiController.remove);

export default router;