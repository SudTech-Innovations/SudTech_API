const express = require("express");
const router = express.Router();
const noteRouter = require("./Apps/noteRouter.js");
const plantRouter = require("./Apps/plantRouter.js");

router.use("/note", noteRouter);
router.use("/plant", plantRouter);

module.exports = router;
