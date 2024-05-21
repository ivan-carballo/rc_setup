import {Router} from "express";

import chasisApiController from "../controllers/chasis/chasisApiController.js";


const router  = Router();

router.get("/",chasisApiController.getAll);
router.get("/byproperty",chasisApiController.getByProperty);
router.get("/:id",chasisApiController.getById);
router.post("/",chasisApiController.create);
router.put("/:id",chasisApiController.update);
router.delete("/:id",chasisApiController.remove);

export default router;