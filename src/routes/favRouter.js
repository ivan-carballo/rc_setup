import {Router} from "express";

import favViewController from "../controllers/fav/favViewController.js";


const router  = Router();


router.get("/",favViewController.getAll)


router.post("/remove",favViewController.remove)
router.post("/add",favViewController.create)



export default router;