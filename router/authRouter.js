const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verifyBearerToken = require("../middleware/security");
const codeHandler = require("../util/codeHandler");

const User = require("../model/user");
const userController = require("../controller/userController");

const expirationTime = 3600;

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    codeHandler.handle201Success(res, user);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return codeHandler.handle401Error(res);
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: expirationTime,
    });

    const response = {
      username: user.username,
      token,
      expiresIn: expirationTime,
    };

    codeHandler.handle200Success(res, response);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
});

router.get("/users", verifyBearerToken, userController.getUsers);

module.exports = router;
