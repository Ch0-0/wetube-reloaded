import "./db"
import express from "express";
import log_morgan from "morgan";
import globalRouter from "./routers/globalRouters";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const PORT =4000;

const app = express(); //1. express 어플리케이션 생성
const logger = log_morgan("dev"); //로그 사용하기



//5. pug 사용하기
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

//로그 사용하기
app.use(logger);

//form에서 body 이해할 수 있도록 / express apllication 이 form의 value 들을 이해하도록 하고 자바스크립트형식으로 변형해줌.
app.use(express.urlencoded({extended: true}));

// use - 전체에서 사용가능
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users", userRouter);





//2. 리스닝 상태 만들기
const handleListening = () => console.log(`😄server Listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening) //포트 , callback 