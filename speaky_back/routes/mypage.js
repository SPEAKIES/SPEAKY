// @ts-check

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const mongoClient = require('../controllers/mongocontrol').mongoDB;

const dir = './images';
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
router.get('/'),
  async (req, res) => {
    res.send(JSON.stringify(res.img));
  };

router.post('/', async (req, res) => {
  const data = {
    userEmail: req.body.userEmail,
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
  const data = {
    id: req.body.id,
    email: req.body.email,
    nickname: req.body.nickname,
    nation: req.body.nation,
    img: `http://localhost:4000/images/${req.body.img}`,
    text: req.body.text,
  };
  const result = await mongoClient.SetData(data);
  res.send(data);
});

module.exports = { router, multer };
