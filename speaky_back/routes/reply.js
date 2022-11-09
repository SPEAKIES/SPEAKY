// @ts-check

// EXPRESS
const express = require('express');
const router = express.Router();

// MongoDB
const mongoClient = require('./mongo');

// 댓글 전체 목록 보여주기
router.get('/', async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('speaky').collection('reply');
  const REPLY = await cursor.find({}).toArray();
  res.send(JSON.stringify(REPLY));
});

// 댓글 추가 요청
router.post('/write', async (req, res) => {
  const client = await mongoClient.connect();
  const replyCursor = client.db('speaky').collection('reply');
  const fBcursor = client.db('speaky').collection('freeBoard');
  const _id = parseInt(req.body._id);
  const postId = client.db('speaky').collection('reply').findOne({contentIndex:req.body.contentIndex})
  const commentArr = []
  const userImgCursor = await client.db('project').collection('user');
  const userImg = await userImgCursor.findOne({id: req.body.userName})

  if (req.body.comment) {
    commentArr.push(req.body.comment);
    const newReply = {
      contentIndex: req.body.contentIndex,
      comment: commentArr,
      userName: req.body.userName,
      userImage: userImg.img,
    };
    if(await postId){
      await replyCursor.updateOne({contentIndex:req.body.contentIndex},{$push:{comment:req.body.comment}});
      res.send(JSON.stringify('POST 등록 성공'));
      console.log(newReply);
    }else{
      await replyCursor.insertOne(newReply);
      res.send(JSON.stringify('POST 등록 성공'));
      console.log(newReply);
    }

  }

  });

  module.exports = router;