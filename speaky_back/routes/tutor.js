// @ts-check
const express = require('express');
const router = express.Router();
const mongoDB = require('../controllers/mongocontrol').mongoDB;

router.post('/reserve', async (req, res) => {
  const result = await mongoDB.SetReservation(req.body);
  res.send(JSON.stringify(result));
});

router.get('/getreserve', async (req, res) => {
  const result = await mongoDB.GetReservation();
  res.send(JSON.stringify(result));
});

router.post('/:tutor', async (req, res) => {});

module.exports = router;
