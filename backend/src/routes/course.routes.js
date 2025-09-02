const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
// const { createCourse, getAllCourses } = require("../controllers/courseController.js");

const router = express.Router();

// Placeholder controller functions
const createCourse = (req, res) => res.json({ message: "Course created" });
const getAllCourses = (req, res) => res.json({ message: "All courses" });

router.post("/create", authMiddleware(["INSTRUCTOR", "ADMIN"]), createCourse);
router.get("/", authMiddleware(["STUDENT", "INSTRUCTOR", "ADMIN"]), getAllCourses);

module.exports = router;
