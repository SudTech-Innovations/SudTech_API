const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  // TODO
  res.send("User route");
});

module.exports = router;
