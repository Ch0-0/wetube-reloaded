import express from "express";

import { see,logout,edit,remove } from "../controllers/userController";

//user 라우터
const userRouter = express.Router();



userRouter.get("/:id", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/removeete", remove);


export default userRouter;