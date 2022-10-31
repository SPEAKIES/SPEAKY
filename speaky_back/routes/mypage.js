// @ts-check

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const mongoClient = require('../controllers/mongocontrol').mongoDB;

const dir = '../../speaky_front/public/images';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now());
  },
});

const limits = {
  fileSize: 1024 * 1024 * 2,
};

const upload = multer({ storage, limits });

router.get('/', async (req, res) => {
  const data = {
    id: req.body.id,
  };
  const result = await mongoClient.Getmypage(data);
  res.send(JSON.stringify(result));
});

//이미지 가져오기
router.post('/setimg', upload.single('img'), async (req, res) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  res.send(JSON.stringify(req.file?.filename));
});

// 마이페이지 데이터 가져오기
router.post('/setdata', upload.single('img'), async (req, res) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  console.log(req.file);
  const data = {
    pw: req.body.pw,
    email: req.body.email,
    nickname: req.body.nickname,
    langugae: req.body.language,
    img: req.body.img,
    text: req.body.text,
  };
  const result = await mongoClient.SetData(data);
  res.send('성공');
});

module.exports = { router, multer };
