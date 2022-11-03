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
  res.render('chat', { selectedUsers });
});


module.exports = router;
