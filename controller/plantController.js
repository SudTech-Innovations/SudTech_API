const Plant = require("../model/plant");
const codeHandler = require("../util/codeHandler");

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();
    if (plants.length === 0) {
      return codeHandler.handle204Success(res);
    }
    return codeHandler.handle200Success(res, plants);
  } catch (error) {
    console.error(error);
    return codeHandler.handle204Success(res);
  }
};

exports.postPlant = async (req, res) => {
  try {
    const plant = new Plant({
      commonName: req.body.commonName,
      scientificName: req.body.scientificName,
      family: req.body.family,
      genus: req.body.genus,
      species: req.body.species,
      plantType: req.body.plantType,
      origin: req.body.origin,
      hardinessZone: req.body.hardinessZone,
      maxHeight: req.body.maxHeight,
      maxWidth: req.body.maxWidth,
      lightRequirement: req.body.lightRequirement,
      soilPreference: req.body.soilPreference,
      waterRequirement: req.body.waterRequirement,
      floweringPeriod: req.body.floweringPeriod,
      flowerColor: req.body.flowerColor,
      foliageType: req.body.foliageType,
      usage: req.body.usage,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      userId: req.userId,
    });
    await plant.save();
    codeHandler.handle201Success(res, plant);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
};

exports.putPlantById = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return codeHandler.handle404PlantById(res);
    }
    if (plant.userId !== req.userId) {
      return codeHandler.handle403Error(res);
    }
    plant.commonName = req.body.commonName;
    plant.scientificName = req.body.scientificName;
    plant.family = req.body.family;
    plant.genus = req.body.genus;
    plant.species = req.body.species;
    plant.plantType = req.body.plantType;
    plant.origin = req.body.origin;
    plant.hardinessZone = req.body.hardinessZone;
    plant.maxHeight = req.body.maxHeight;
    plant.maxWidth = req.body.maxWidth;
    plant.lightRequirement = req.body.lightRequirement;
    plant.soilPreference = req.body.soilPreference;
    plant.waterRequirement = req.body.waterRequirement;
    plant.floweringPeriod = req.body.floweringPeriod;
    plant.flowerColor = req.body.flowerColor;
    plant.foliageType = req.body.foliageType;
    plant.usage = req.body.usage;
    plant.description = req.body.description;
    plant.imageUrl = req.body.imageUrl;
    await plant.save();
    codeHandler.handle200Success(res, plant);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
};

exports.deletePlantById = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return codeHandler.handle404PlantById(res);
    }
    if (plant.userId !== req.userId) {
      return codeHandler.handle403Error(res);
    }
    await plant.destroy();
    codeHandler.handle204Success(res);
  } catch (error) {
    console.error("Error deleting plant:", error);
    codeHandler.handle500Error(res);
  }
};
