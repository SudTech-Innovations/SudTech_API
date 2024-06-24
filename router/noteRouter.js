const express = require("express");
const router = express.Router();
const noteController = require("../controller/noteController");

router.get("/", (req, res) => {
  noteController.getNotes(req, res);
});

router.post("/", (req, res) => {
  noteController.postNote(req, res);
});

module.exports = router;
