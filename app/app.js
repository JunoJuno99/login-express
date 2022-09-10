"use strict";

// http를 사용한 서버 만들기
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': "text/html; charset=utf-8" });
//     if (req.url === "/") {
//         res.end("/ 입니다.");
//     } else if (req.url === "/login") {
//         res.end("/login 입니다.");
//     }
// });
//
// app.listen(3001, () => {
//     console.log("http로 가동");
// })


// express를 사용한 서버 만들기

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.


module.exports = app;