const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const mainRouter = require("./router/mainRouter");
const initializeDatabase = require("./model/model");
const sequelize = require("./config/database");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

initializeDatabase();

app.use("/", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
