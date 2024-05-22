import {Router} from "express";

import setupApiController from "../controllers/setup/setupApiController.js";
import setupViewController from "../controllers/setup/setupViewController.js";


const router  = Router();


router.get("/byproperty",setupApiController.getByProperty);
//router.get("/:id",setupApiController.getById);
router.put("/:id",setupApiController.update);
router.delete("/:id",setupApiController.remove); 



//router.post("/",setupViewController.create);
router.post("/",setupViewController.getByProperty);

router.get("/",setupViewController.getAll);
router.get("/",setupApiController.getAll);
router.get("/new",setupViewController.createForm);
router.get("/find",setupViewController.findForm)



export default router;