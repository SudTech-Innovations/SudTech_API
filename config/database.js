const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./config/database/database.sqlite",
});

module.exports = sequelize;
