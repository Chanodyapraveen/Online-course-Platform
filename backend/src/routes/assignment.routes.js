const express = require("express");
const router = express.Router();
const { getAllAssignments } = require("../controllers/assignment.controller.js");

router.get("/", getAllAssignments);

module.exports = router;
