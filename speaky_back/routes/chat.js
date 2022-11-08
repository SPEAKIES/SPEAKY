const express = require('express');
const router = express.Router();
const mongoDB = require('../controllers/mongocontrol').mongoDB;

router.post('/', (req, res) => {
  console.log(req.body);
  const message = {};
});
module.exports = router;
