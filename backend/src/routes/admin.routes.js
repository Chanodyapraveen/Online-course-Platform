const express = require("express");
const {
  createAdmin,
  loginAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
} = require("../controllers/admin.controller.js");

const router = express.Router();

// Create new admin
router.post("/", createAdmin);

// Login
router.post("/login", loginAdmin);

// Get all admins
router.get("/", getAllAdmins);

// Get admin by ID
router.get("/:id", getAdminById);

// Update admin
router.put("/:id", updateAdmin);

// Delete admin
router.delete("/:id", deleteAdmin);

module.exports = router;
