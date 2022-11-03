// @ts-check

// EXPRESS
const express = require('express');
const router = express.Router();

// MongoDB
const mongoClient = require('./mongo');

// Multer Upload
const multer = require('multer');
const fs = require('fs');
const dir = './uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now());
  },
});
const limits = {
  fileSize: 1024 * 1028 * 2,
};
const upload = multer({ storage, limits });


// 글 전체 목록 보여주기
router.get('/', async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('speaky').collection('freeBoard');
  const POST = await cursor.find({}).toArray();
  res.send(JSON.stringify(POST));
});

// 글 쓰기 모드로 이동
router.get('/write', (req, res) => {
  res.render('freeBoard_write');
});

// 글 추가 모드로 이동
router.post('/write', upload.array('img'), async (req, res) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  const imgLen = req.files?.length;
  console.log(imgLen);
  const client = await mongoClient.connect();
  const fBcursor = client.db('speaky').collection('freeBoard');
  const counterCursor = await client.db('speaky').collection('counters');
  const totalFBPost = await counterCursor.findOne({counter: "카운터"});
  const img = [];

  for(let i = 0; i < imgLen; i++){
    img.push(req.files[i]?.filename);
  }


  if (req.body.title && req.body.content) {
    const newPost = {
      _id: totalFBPost.totalFBPost +1,
      title: req.body.title,
      content: req.body.content,
      img: img,
    };
    await fBcursor.insertOne(newPost);
    await counterCursor.updateOne( {counter : '카운터' } , { $inc : { totalFBPost : 1 } });
    res.redirect('/freeBoard');
  }
});

// 글 수정 모드로 이동
router.get('/modify/:_id', upload.array('img'), async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('speaky').collection('freeBoard');
  const selectedPost = await cursor.findOne({ _id: parseInt(req.params._id) });
  res.render('freeBoard_modify', { selectedPost });
});

// 글 수정 기능 수행
router.post('/modify/:_id',  async (req, res) => {
  if (req.body.title && req.body.content) {
    const client = await mongoClient.connect();
    const cursor = client.db('speaky').collection('freeBoard');
    await cursor.updateOne(
      { _id: parseInt(req.params._id) },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );
    res.redirect('/freeBoard');
  }
});

// 글 삭제 기능 수행
router.delete('/delete/:_id', async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('speaky').collection('freeBoard');
  // 예외처리
  const result = await cursor.deleteOne({ _id: parseInt(req.params._id) });
  if (result.acknowledged) {
    res.send('삭제완료');
  }
});

// 글 자세히 보기 기능 수행
router.get('/detail/:_id', async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('speaky').collection('freeBoard');
  const POST = await cursor.findOne({ _id: parseInt(req.params._id) });

  const replyCursor = client.db('speaky').collection('reply');
  const REPLY = await replyCursor.findOne({ _id: parseInt(req.params._id) });


  res.render('freeBoard_detail', { POST, REPLY });
});

// 댓글 작성 기능 수행
// router.post('/reply', async (req, res) => {

// });

module.exports = router;
