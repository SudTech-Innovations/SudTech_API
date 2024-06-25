const express = require("express");
const router = express.Router();

router.use("/note", require("./noteRouter"));

module.exports = router;
