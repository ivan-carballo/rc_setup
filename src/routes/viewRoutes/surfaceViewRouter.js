import { Router } from "express";

import surfaceViewController from "../../controllers/surfaceController/surfaceViewController.js";
//import { hasSession } from "../../middlewares/authMiddleware.js";

const router = Router();


//router.get("/",userViewController.getAll);
router.get("/",surfaceViewController.getAll);
/* router.get("/new",hasSession,surfaceViewController.createForm);
router.post("/",hasSession,surfaceViewController.create);
router.get("/:id",surfaceViewController.getById);
router.get("/:id/update",hasSession,surfaceViewController.updateForm);
router.post("/:id",hasSession,surfaceViewController.update);
router.post("/:id/remove",hasSession,surfaceViewController.remove);
router.get("/letter/:letter",surfaceViewController.getByLetter); */




export default router;