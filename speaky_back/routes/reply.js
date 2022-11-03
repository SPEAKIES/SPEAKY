// @ts-check

// EXPRESS
const express = require('express');
const router = express.Router();

// MongoDB
const mongoClient = require('./mongo');

router.post('/write', async (req, res) => {
  const client = await mongoClient.connect();
  const replyCursor = client.db('speaky').collection('reply');
  const fBcursor = client.db('speaky').collection('freeBoard');
  const _id = parseInt(req.body._id);
  const postId = client.db('speaky').collection('reply').findOne({_id:_id})
  const replyArr = []

  if (req.body.reply) {
    replyArr.push(req.body.reply);
    const newReply = {
      _id: _id,
      reply: replyArr,
    };
    if(await postId){
      await replyCursor.updateOne({_id:_id},{$push:{reply:req.body.reply}});
    }else{
      await replyCursor.insertOne(newReply);
    }

    res.redirect(`/freeBoard/detail/${_id}`);
  }

  });

  module.exports = router;