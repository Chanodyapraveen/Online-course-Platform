
const adminService = require('../services/adminService');
const jwt = require('jsonwebtoken');

exports.createAdmin = async (req, res) => {
  try {
    const admin = await adminService.createAdmin(req.body);
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllAdmins = async (req, res) => {
  const admins = await adminService.getAllAdmins();
  res.json(admins);
};

exports.getAdminById = async (req, res) => {
  const admin = await adminService.getAdminById(Number(req.params.id));
  if (!admin) return res.status(404).json({ error: 'Admin not found' });
  res.json(admin);
};

exports.updateAdmin = async (req, res) => {
  try {
    const admin = await adminService.updateAdmin(Number(req.params.id), req.body);
    res.json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    await adminService.deleteAdmin(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
