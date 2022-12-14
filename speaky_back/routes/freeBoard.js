// @ts-check

// EXPRESS
const express = require('express');
const router = express.Router();

// MongoDB
const mongoClient = require('./mongo');

// Multer Upload
const multer = require('multer');
const fs = require('fs');
const dir = './images';
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
  const postLen = POST.length;
  res.send(JSON.stringify(POST));
});

// 글 쓰기 모드로 이동
router.get('/write', (req, res) => {
  res.render('freeBoard_write');
});

// 이미지 받기
router.post('/image', upload.single('file'), async (req, res) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  res.send(JSON.stringify(req.file?.filename));
});

// 글 추가 요청
router.post('/write', async (req, res) => {
  const client = await mongoClient.connect();
  const fBcursor = client.db('speaky').collection('freeBoard');
  const counterCursor = await client.db('speaky').collection('counters');
  const userImgCursor = await client.db('project').collection('user');
  const userImg = await userImgCursor.findOne({id: req.body.userName})
  const totalFBPost = await counterCursor.findOne({ counter: '카운터' });
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  let getDate = date.getDate();
  if(getDate.toString.length == 1){
    getDate = parseInt('0'+getDate);
  }

  if(req.body.userName) {
    const newPost = {
      contentIndex: totalFBPost.totalFBPost + 1,
      image: req.body.imgSrc,
      cardContent: req.body.content,
      userName: req.body.userName,
      userImage: userImg.img,
      contentDate: req.body.contentDate,
    };
    const result = await fBcursor.insertOne(newPost);
    if(result.acknowledged){
      const countResult = await counterCursor.updateOne(
        { counter: '카운터' },
        { $inc: { totalFBPost: 1 } }
      );
      
      if(countResult.acknowledged){
        res.send(JSON.stringify('POST 등록 성공'));
        console.log(newPost);
      }
    }
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
router.post('/modify/:_id', async (req, res) => {
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
router.delete('/delete/:contentIndex', async (req, res) => {
  const client = await mongoClient.connect();
  const cursor = client.db('speaky').collection('freeBoard');
  // 예외처리
  const result = await cursor.deleteOne({ contentIndex: parseInt(req.params.contentIndex) });
  if (result.acknowledged) {
    res.send(JSON.stringify('삭제완료'));
  }
});

module.exports = router;
