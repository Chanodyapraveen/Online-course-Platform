const adminService = require('../services/adminService');
const jwt = require('jsonwebtoken');

// Register Admin
exports.createAdmin = async (req, res) => {
  try {
    const admin = await adminService.createAdmin(req.body);
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admins = await adminService.getAllAdmins();
    const admin = admins.find(a => a.email === email);

    if (!admin) return res.status(400).json({ error: 'Invalid credentials' });
    if (password !== admin.password) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  const admins = await adminService.getAllAdmins();
  res.json(admins);
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
  const admin = await adminService.getAdminById(Number(req.params.id));
  if (!admin) return res.status(404).json({ error: 'Admin not found' });
  res.json(admin);
};

// Update admin
exports.updateAdmin = async (req, res) => {
  try {
    const admin = await adminService.updateAdmin(Number(req.params.id), req.body);
    res.json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete admin
exports.deleteAdmin = async (req, res) => {
  try {
    await adminService.deleteAdmin(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
