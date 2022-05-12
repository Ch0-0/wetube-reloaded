import express from "express";

import { trending_home} from "../controllers/videoController";
import { join,login } from "../controllers/userController";

//4.1 글로벌 라우터
const globalRouter = express.Router();





globalRouter.get("/", trending_home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);




export default globalRouter;
