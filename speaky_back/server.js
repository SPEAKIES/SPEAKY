const express = require("express");
const cors = require("cors");
const monogClient = require("mongoose");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const server = express();
const passport = require("passport");
LocalStrategy = require('passport-local').Strategy;
const PORT = 4000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.set("view engine", "ejs");
server.use("/public", express.static("public"));

// PASSPORT 미들웨어
server.use(passport.initialize());
server.use(passport.session());

server.listen(PORT, (req, res) => {
  console.log(`${PORT}로 연결 완료`);
});
