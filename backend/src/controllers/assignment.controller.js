const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await prisma.assignment.findMany();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await prisma.assignment.findUnique({ where: { id: Number(req.params.id) } });
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' });
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAssignment = async (req, res) => {
  try {
    const assignment = await prisma.assignment.create({ data: req.body });
    res.status(201).json(assignment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await prisma.assignment.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(assignment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    await prisma.assignment.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
