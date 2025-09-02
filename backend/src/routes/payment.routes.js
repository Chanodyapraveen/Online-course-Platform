const express = require("express");
const router = express.Router();
const { getAllPayments } = require("../controllers/payment.controller.js");

router.get("/", getAllPayments);

module.exports = router;
