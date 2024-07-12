const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const verifyBearerToken = require("../middleware/security");

router.get("/", verifyBearerToken, (req, res) => {
  userController.getUsers(req, res);
});

router.get("/:id", verifyBearerToken, (res, req) => {
  userController.getUserById(res, req);
});

router.put("/", verifyBearerToken, (req, res) => {
  userController.updateUser(req, res);
});

module.exports = router;
