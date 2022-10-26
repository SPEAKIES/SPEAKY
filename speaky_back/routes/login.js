const express = require("express");
const router = express.Router();
const mongoDB = require("../controllers/mongocontrol").mongoDB;

//로그인
router.post("/setid:", async (req, res) => {
  const result = await mongoDB.SetId(req.body.id, req.body.pw);
  res.send(JSON.stringify(result));
});

//회원가입
router.post("/incid", async (req, res) => {
  const result = await mongoDB.IncId(req.body.id, req.body.pw, req.body.email);
  res.send(JSON.stringify(result));
});

router.get("/logout", (req, res) => {
  req.session.destory((err) => {
    res.redirect("/login");
  });
});

module.exports = router;
