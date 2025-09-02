const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const message = await prisma.message.findUnique({ where: { id: Number(req.params.id) } });
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMessage = async (req, res) => {
  try {
    const message = await prisma.message.create({ data: req.body });
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMessage = async (req, res) => {
  try {
    const message = await prisma.message.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    await prisma.message.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
