const express = require("express");
const ordersCustomers = require("../controllers/orders");
const router = express.Router();

router.get("/", ordersCustomers.getOrders);
router.post("/", ordersCustomers.createorder);
router.get("/:id", ordersCustomers.getOrderbyId);
router.put("/:id", ordersCustomers.updateOrder);
router.delete("/:id", ordersCustomers.deleteOrder);

module.exports = router;
