const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { uploadMaterial } = require("../controllers/course.controller.js");
router.post("/:id/material", authMiddleware(["STUDENT", "INSTRUCTOR", "ADMIN"]), upload.single('file'), uploadMaterial);
const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require("../controllers/course.controller.js");

const router = express.Router();

router.post("/create", authMiddleware(["INSTRUCTOR", "ADMIN"]), createCourse);
router.get("/", authMiddleware(), getAllCourses);
router.get("/:id", authMiddleware(), getCourseById);
router.put("/:id", authMiddleware(["INSTRUCTOR", "ADMIN"]), updateCourse);
router.delete("/:id", authMiddleware(["INSTRUCTOR", "ADMIN"]), deleteCourse);

module.exports = router;
