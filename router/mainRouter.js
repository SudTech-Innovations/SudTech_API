const express = require("express");
const router = express.Router();
const security = require("../middleware/security");
const authRouter = require("../router/authRouter");
const codeHandler = require("../util/codeHandler");

router.use("/auth", authRouter);

router.use("/api", security, require("./apiRouter.js"));

router.get("/", security, async (req, res) => {
  try {
    const api_status = "online";
    const datetime = new Date().toLocaleString("fr-FR").toString();
    const message = "Bienvenue sur l'API de SudTech";

    const response = { api_status, datetime, message };
    codeHandler.handle200Success(res, response);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
});

router.post("/logout", (req, res) => {
  const message = "Vous avez été déconnecté";
  const token = "";
  res.json({ message, token });
});

module.exports = router;
