const express = require("express");
const app = express();
const mainRouter = require("./router/mainRouter");
const initializeDatabase = require("./model/model");
const sequelize = require("./config/database");

app.use(express.json());

initializeDatabase();

app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
