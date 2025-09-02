const express = require("express");
const { getAllPayments } = require("../controllers/payment.controller.js");
const router = express.Router();

// Add more CRUD endpoints as needed
router.get("/", getAllPayments);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
