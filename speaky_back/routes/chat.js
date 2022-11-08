const express = require('express');
const router = express.Router();
const mongoDB = require('../controllers/mongocontrol').mongoDB;

//id는 못받아온 상태
router.post('/', async (req, res) => {
  console.log(req.body);
  const message = await mongoDB.Setmessage(req.body.message);
  res.send(JSON.stringify(message));
});
module.exports = router;
