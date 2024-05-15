import { Router } from "express";

import styleViewController from "../../controllers/styleController/styleViewController.js";
//import { hasSession } from "../../middlewares/authMiddleware.js";

const router = Router();


router.get("/",styleViewController.getAll);
/* router.get("/new",hasSession,styleViewController.createForm);
router.post("/",hasSession,styleViewController.create);
router.get("/:id",styleViewController.getById);
router.get("/:id/update",hasSession,styleViewController.updateForm);
router.post("/:id",hasSession,styleViewController.update);
router.post("/:id/remove",hasSession,styleViewController.remove);
router.get("/letter/:letter",styleViewController.getByLetter); */




export default router;

