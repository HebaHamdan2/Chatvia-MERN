import express from "express"
import * as userController from "./user.controller.js"
import protectRoute from "../../middleware/protectRoute.js";
const router=express.Router();
router.get("/",protectRoute,userController.getUsers);
export default router;

