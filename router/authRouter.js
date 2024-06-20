const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verifyBearerToken = require("../middleware/security");
const codeHandler = require("../util/codeHandler");
const bcrypt = require("bcrypt");

const User = require("../model/user");
const userController = require("../controller/userController");

const expirationTime = 3600;

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    codeHandler.handle201Success(res, user);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user.id }, process.env.SECRET_TOKEN, {
        expiresIn: expirationTime,
      });
      codeHandler.handle200Success(res, { token, expiresIn: expirationTime });
    } else {
      codeHandler.handle401Error(res);
    }
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
});

router.get("/users", verifyBearerToken, userController.getUsers);

module.exports = router;
