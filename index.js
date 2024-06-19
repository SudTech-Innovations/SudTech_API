const express = require("express");
const app = express();
const mainRouter = require("./router/mainRouter");

app.use("/", mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
