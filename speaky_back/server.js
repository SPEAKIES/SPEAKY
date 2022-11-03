const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const server = express();
const passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
const PORT = 4000;

server.set('view engine', 'ejs');
server.use('/public', express.static('public'));
server.set('views', 'views'); // 공식화
server.use('/images', express.static('images'));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(cookieParser('speaky'));

// dotenv
require('dotenv').config();

// ROUTER
const router = require('./routes/index');
const mypageRouter = require('./routes/mypage');
const freeBoardRouter = require('./routes/freeBoard');
const replyRouter = require('./routes/reply');
const tutorRouter = require('./routes/tutor');
const loginRouter = require('./routes/login');

// ERROR 처리
server.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.send(err.message);
});

server.use('/', router);
server.use('/mypage', mypageRouter.router);
server.use('/login', loginRouter);
server.use('/freeBoard', freeBoardRouter);
server.use('/tutor', tutorRouter);
server.use('/reply', replyRouter);

server.listen(PORT, (req, res) => {
  console.log(`${PORT}로 연결 완료`);
});
