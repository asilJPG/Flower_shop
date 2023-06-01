const express = require("express");
const router = express.Router();

const flowerRoutes = require("./flower");
const ordersRoutes = require("./orders");
const customersRoutes = require("./customers");

router.use("/flowers", flowerRoutes);
router.use("/orders", ordersRoutes);
router.use("/customers", customersRoutes);

module.exports = router;
