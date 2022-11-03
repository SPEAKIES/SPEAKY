// @ts-check

// EXPRESS
const express = require('express');
const router = express.Router();

// MongoDB
const mongoClient = require('./mongo');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('speaky').collection('users');
  const duplicated = await userCursor.findOne({ email: req.body.email });
  const counterCursor = client.db('speaky').collection('counters');
  const counter = await counterCursor.findOne({counter:'카운터'});
  const language = [];
  language.push(req.body.language);

  // 중복이 아닌경우
  if (duplicated === null) {
    // console.log((counter.totalUsers)+1)
    const newUser = {
      _id: (counter.totalUsers)+1,
      email: req.body.email,
      name: req.body.name,
      nickname: req.body.nickname,
      pw: req.body.pw,
      language: language,
    }
    const result = await userCursor.insertOne(newUser);
    await counterCursor.updateOne( {counter : '카운터' } , { $inc : { totalUsers : 1 } });
    if (result.acknowledged) {
      res.status(200);
      res.render('login');
    } else {
      res.status(500);
      res.send(
        '회원 가입 문제 발생!<br><a href="/register">회원가입 페이지로 이동</a>'
      );
    }
    // 중복된 경우
  } else {
    res.status(300);
    res.send(
      '중복된 id가 존재합니다!<br><a href="/register">회원가입 페이지로 이동</a>'
    );
  }
});

module.exports = router;