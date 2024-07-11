const sequelize = require("../config/database");
const dotenv = require("dotenv");

const User = require("./user");
const Plant = require("./plant");
const Note = require("./note");

const initializeDatabase = async () => {
  await sequelize.sync({ force: false });

  // Créer un utilisateur par défaut avec les données du fichier .env
  const users = await User.findAll();
  if (users.length === 0) {
    await User.create({
      username: process.env.DEFAULT_USERNAME,
      password: process.env.DEFAULT_PASSWORD,
    });
  }
};

module.exports = initializeDatabase;
