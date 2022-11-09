const express = require('express');
const router = express.Router();
const mongoDB = require('../controllers/mongocontrol').mongoDB;

router.post('/', async (req, res) => {
  console.log('@@', req.body);
  const message = await mongoDB.Setmessage(req.body);
  res.send(JSON.stringify(message));
});

// 전체 대화 내용 받아오기
router.post('/getAll', async (req, res) => {
  const allChatMessage = await mongoDB.Getmessage(req.body);
  res.send(JSON.stringify(allChatMessage));
});
module.exports = router;
