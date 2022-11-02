// @ts-check

// EXPRESS
const express = require('express');
const router = express.Router();

// MongoDB
const mongoClient = require('./mongo');

// 전체 친구목록 출력
router.get('/', async (req, res) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('speaky').collection('users');
  const selectedUsers = await userCursor.find().toArray();
  res.render('friend', { selectedUsers });
});

// 특정언어 친구목록 출력
router.get('/language/:language', async (req, res) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('speaky').collection('users');
  const language = req.params.language;
  const selectedUsers = await userCursor.find({language:language}).toArray();
  res.render('friend_language', { selectedUsers });
});
// 친구 프로필 페이지로 이동
router.get('/:nickname', async (req, res) => {
  const client = await mongoClient.connect();
  const userCursor = client.db('speaky').collection('users');
  const nickname = req.params.nickname;
  const selectedUsers = await userCursor.find({nickname:nickname}).toArray();
  res.render('friend_profile', { selectedUsers });
});
module.exports = router;
