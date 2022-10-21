const express = require("express");
const cors = require("cors");
const monogClient = require("mongoose");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const server = express();
const passport = require("passport");
const PORT = 4000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.listen(PORT, (req, res) => {
  console.log(`${PORT}로 연결 완료`);
});
