const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({ where: { id: Number(req.params.id) } });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const course = await prisma.course.create({ data: req.body });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a course
exports.updateCourse = async (req, res) => {
  try {
    const course = await prisma.course.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    await prisma.course.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
