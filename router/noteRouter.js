const express = require("express");
const router = express.Router();
const noteController = require("../controller/noteController");
const verifyBearerToken = require("../middleware/security");

router.get("/", (req, res) => {
  noteController.getNotes(req, res);
});

router.post("/", verifyBearerToken, (req, res) => {
  noteController.postNote(req, res);
});

module.exports = router;
