const sequelize = require("../config/database");

const User = require("./user");

const initializeDatabase = async () => {
  await sequelize.sync({ force: true });
};

module.exports = initializeDatabase;
