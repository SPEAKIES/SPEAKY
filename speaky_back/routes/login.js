const express = require('express');
const router = express.Router();
const mongoDB = require('../controllers/mongocontrol').mongoDB;
const multer = require('multer');
const fs = require('fs');
const { REFUSED } = require('dns');

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
//로그인
router.post('/setid', async (req, res) => {
  const result = await mongoDB.SetId(req.body.id, req.body.pw);
  res.send(JSON.stringify(result));
});

//회원가입
router.post('/incimg', upload.single('img'), async (req, res) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  res.send(JSON.stringify(req.file?.filename));
});

router.post('/incid', async (req, res) => {
  const result = await mongoDB.IncId(
    req.body.id,
    req.body.pw,
    req.body.email,
    req.body.userName,
    `http://localhost:4000/images/${req.body.userImg}`
  );
  res.send(JSON.stringify(result));
});

module.exports = router;
