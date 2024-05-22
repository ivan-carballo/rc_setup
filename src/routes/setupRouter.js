import {Router} from "express";

import setupApiController from "../controllers/setup/setupApiController.js";
import setupViewController from "../controllers/setup/setupViewController.js";


const router  = Router();


router.post("/",setupViewController.create);
router.post("/find",setupViewController.getByProperty);
router.post("/remove",setupViewController.remove);
router.post("/update",setupViewController.update);


router.get("/",setupViewController.getAll);
router.get("/",setupApiController.getAll);
router.get("/new",setupViewController.createForm);
router.get("/find",setupViewController.findForm)
router.get("/update",setupViewController.updateForm)



export default router;