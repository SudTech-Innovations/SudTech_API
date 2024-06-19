const express = require("express");
const router = express.Router();
const security = require("../middleware/security");

router.get("/", security, async (req, res) => {
  try {
    const message = "API oppérationnelle";
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
