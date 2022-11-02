const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const server = express();
const passport = require("passport");
LocalStrategy = require('passport-local').Strategy;
// const PORT = 4000;

server.set("view engine", "ejs");
server.use("/public", express.static("public"));
server.set('views', 'views'); // 공식화
server.use('/uploads', express.static('uploads'));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(cookieParser('speaky'));

// dotenv
require('dotenv').config();

// ROUTER
const router = require('./routes/index');

server.use('/', router);

// ERROR 처리
server.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.send(err.message);
});

const mypageRouter = require("./routes/mypage");
server.use("/mypage", mypageRouter.router);

const loginRouter = require("./routes/login");
server.use("/login", loginRouter);

server.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.end(err.message);
});


server.listen(process.env.PORT, (req, res) => {
  console.log(`${process.env.PORT}로 연결 완료`);
});
