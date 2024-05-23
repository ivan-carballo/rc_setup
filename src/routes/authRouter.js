import {Router} from "express";

import userApiController from "../controllers/users/userApiController.js";


const router  = Router();


router.post("/register",userApiController.register);
router.post("/login",userApiController.login);

router.get("/register",userApiController.registerForm);
router.get("/login",userApiController.loginForm);
router.get("/",userApiController.loginForm);

export default router;