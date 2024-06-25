const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Note = sequelize.define("Note", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Note.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = Note;
