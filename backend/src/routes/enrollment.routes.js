const express = require("express");
const router = express.Router();
const { getAllEnrollments } = require("../controllers/enrollment.controller.js");

router.get("/", getAllEnrollments);

module.exports = router;
