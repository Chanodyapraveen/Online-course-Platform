const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const { createCourse, getAllCourses } = require("../controllers/course.controller.js");

const router = express.Router();

router.post("/create", authMiddleware(["INSTRUCTOR", "ADMIN"]), createCourse);
router.get("/", authMiddleware(), getAllCourses);

module.exports = router;
