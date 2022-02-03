import express from "express";
import res from "express/lib/response";

const PORT =4000;

const app = express(); //1. express 어플리케이션 생성

const logger = (req,res,next) => {
    console.log(` ${req.method} ${req.url}`);
    next();
}


const handlehome = (req,res) => {
     //return res.end();  //그냥 끝냄
     return res.send("I love middleware");
    //; <-없어도 되긴하지만 꼭 넣어야함 나중에 오류날수도있음.
};



// use - 전체에서 사용가능
app.use(logger);
//1.5 get request
app.get("/", handlehome ); ///의 의는 루트(홈) 그리고 그에대한 함수생성 /뒤에 더 붙이는데로 그 페이지 생성.


//2. 리스닝 상태 만들기
const handleListening = () => console.log(`erver Listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening) //포트 , callback 