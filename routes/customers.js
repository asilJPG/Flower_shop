const express = require("express");
const customerController = require("../controllers/customers");
const router = express.Router();

router.get("/", customerController.getCustomers);
router.post("/", customerController.createCustomer);
router.get("/:id", customerController.getCustomerbyId);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
