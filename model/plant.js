const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Plant = sequelize.define("Plant", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  commonName: {
    // Nom commun de la plante (ex: Ortie)
    type: DataTypes.STRING,
    allowNull: false,
  },
  scientificName: {
    // Nom scientifique de la plante (ex: Urtica dioica)
    type: DataTypes.STRING,
    allowNull: true,
  },
  family: {
    // Famille botanique de la plante (ex: Urticaceae)
    type: DataTypes.STRING,
    allowNull: true,
  },
  genus: {
    // Genre de la plante (ex: Urtica)
    type: DataTypes.STRING,
    allowNull: true,
  },
  species: {
    // Espèce de la plante (ex: dioica)
    type: DataTypes.STRING,
    allowNull: true,
  },
  plantType: {
    // Type de plante (ex: vivace)
    type: DataTypes.STRING,
    allowNull: true,
  },
  origin: {
    // Origine géographique de la plante (ex: Europe)
    type: DataTypes.STRING,
    allowNull: true,
  },
  hardinessZone: {
    // Zone de rusticité de la plante (ex: 5)
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  maxHeight: {
    // Hauteur maximale de la plante (en mètres)
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  maxWidth: {
    // Largeur maximale de la plante (en mètres)
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  lightRequirement: {
    // Exigence en lumière de la plante (ex: plein soleil)
    type: DataTypes.STRING,
    allowNull: true,
  },
  soilPreference: {
    // Type de sol préféré par la plante (ex: sol bien drainé)
    type: DataTypes.STRING,
    allowNull: true,
  },
  waterRequirement: {
    // Besoin en eau de la plante (ex: arrosage régulier)
    type: DataTypes.STRING,
    allowNull: true,
  },
  floweringPeriod: {
    // Période de floraison de la plante (ex: juin-août)
    type: DataTypes.STRING,
    allowNull: true,
  },
  flowerColor: {
    // Couleur des fleurs de la plante (ex: blanc)
    type: DataTypes.STRING,
    allowNull: true,
  },
  foliageType: {
    // Type de feuillage de la plante (ex: persistant)
    type: DataTypes.STRING,
    allowNull: true,
  },
  usage: {
    // Utilisation de la plante (ex: ornementale)
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    // Description détaillée de la plante
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageUrl: {
    // URL de l'image de la plante
    type: DataTypes.STRING,
    allowNull: true,
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

Plant.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = Plant;
