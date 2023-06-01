const express = require("express");
const flowerController = require("../controllers/flower");
const router = express.Router();

//Get all flowers
router.get("/", flowerController.getAllFlowers);
//create new flower
router.post("/", flowerController.createFlower);
//Get flower by id
router.get("/:id", flowerController.getFlowerbyId);
// update flowerbyid
router.put("/:id", flowerController.updateflower);
// deletee flower
router.delete("/:id", flowerController.deleteflower);
module.exports = router;
