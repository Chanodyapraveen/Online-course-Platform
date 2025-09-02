const express = require("express");
const { getAllQuizzes } = require("../controllers/quiz.controller.js");
const router = express.Router();

// Add more CRUD endpoints as needed
router.get("/", getAllQuizzes);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
