const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse, uploadMaterial } = require("../controllers/course.controller.js");

const router = express.Router();

router.post("/create", authMiddleware(["INSTRUCTOR", "ADMIN"]), createCourse);
router.get("/", authMiddleware(), getAllCourses);
router.get("/:id", authMiddleware(), getCourseById);
router.put("/:id", authMiddleware(["INSTRUCTOR", "ADMIN"]), updateCourse);
router.delete("/:id", authMiddleware(["INSTRUCTOR", "ADMIN"]), deleteCourse);
router.post("/:id/material", authMiddleware(["STUDENT", "INSTRUCTOR", "ADMIN"]), upload.single('file'), uploadMaterial);

module.exports = router;
