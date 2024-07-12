const express = require("express");
const router = express.Router();
const plantController = require("../../controller/plantController");
const verifyBearerToken = require("../../middleware/security");

router.get("/", (req, res) => {
  plantController.getPlants(req, res);
});

router.post("/", verifyBearerToken, (req, res) => {
  plantController.postPlant(req, res);
});

router.put("/:id", verifyBearerToken, (req, res) => {
  plantController.putPlantById(req, res);
});

router.delete("/:id", verifyBearerToken, (req, res) => {
  plantController.deletePlantById(req, res);
});

module.exports = router;
