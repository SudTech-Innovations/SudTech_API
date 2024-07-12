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

  const notes = await Note.findAll();
  if (notes.length === 0) {
    await Note.create({
      title: "Nouvelle note",
      content:
        "Eu reprehenderit labore ea aliquip sit aliqua aliquip mollit nisi cupidatat elit aliquip Lorem.",
    });
  }
};

module.exports = initializeDatabase;
