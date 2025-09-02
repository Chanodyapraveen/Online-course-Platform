const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await prisma.payment.findMany();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await prisma.payment.findUnique({ where: { id: Number(req.params.id) } });
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const payment = await prisma.payment.create({ data: req.body });
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await prisma.payment.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    await prisma.payment.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
