const express = require("express");
const { getAllAssignments } = require("../controllers/assignment.controller.js");
const router = express.Router();

// Add more CRUD endpoints as needed
router.get("/", getAllAssignments);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
