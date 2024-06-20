const sequelize = require("../config/database");

const User = require("./user");

const initializeDatabase = async () => {
  await sequelize.sync({ force: false });
};

module.exports = initializeDatabase;
