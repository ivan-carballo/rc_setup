import { Router } from "express";

import chasisViewController from "../../controllers/chasisController/chasisViewController.js";
//import { hasSession } from "../../middlewares/authMiddleware.js";

const router = Router();


//router.get("/",userViewController.getAll);
router.get("/",chasisViewController.getAll);
/* router.get("/new",hasSession,chasisViewController.createForm);
router.post("/",hasSession,chasisViewController.create);
router.get("/:id",chasisViewController.getById);
router.get("/:id/update",hasSession,chasisViewController.updateForm);
router.post("/:id",hasSession,chasisViewController.update);
router.post("/:id/remove",hasSession,chasisViewController.remove);
router.get("/letter/:letter",chasisViewController.getByLetter); */




export default router;