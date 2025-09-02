const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await prisma.quiz.findMany();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await prisma.quiz.findUnique({ where: { id: Number(req.params.id) } });
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await prisma.quiz.create({ data: req.body });
    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const quiz = await prisma.quiz.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    await prisma.quiz.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
