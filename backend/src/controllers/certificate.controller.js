const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await prisma.certificate.findMany();
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCertificateById = async (req, res) => {
  try {
    const certificate = await prisma.certificate.findUnique({ where: { id: Number(req.params.id) } });
    if (!certificate) return res.status(404).json({ error: 'Certificate not found' });
    res.json(certificate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCertificate = async (req, res) => {
  try {
    const certificate = await prisma.certificate.create({ data: req.body });
    res.status(201).json(certificate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCertificate = async (req, res) => {
  try {
    const certificate = await prisma.certificate.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(certificate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCertificate = async (req, res) => {
  try {
    await prisma.certificate.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
