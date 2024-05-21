import {Router} from "express";

import setupApiController from "../controllers/setup/setupApiController.js";
import setupViewController from "../controllers/setup/setupViewController.js";


const router  = Router();


router.get("/byproperty",setupApiController.getByProperty);
//router.get("/:id",setupApiController.getById);
router.put("/:id",setupApiController.update);
router.delete("/:id",setupApiController.remove); 



router.get("/",setupViewController.getAll);
router.get("/new",setupViewController.createForm);



export default router;