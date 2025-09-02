const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await prisma.enrollment.findMany();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await prisma.enrollment.findUnique({ where: { id: Number(req.params.id) } });
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEnrollment = async (req, res) => {
  try {
    const enrollment = await prisma.enrollment.create({ data: req.body });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEnrollment = async (req, res) => {
  try {
    const enrollment = await prisma.enrollment.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEnrollment = async (req, res) => {
  try {
    await prisma.enrollment.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
