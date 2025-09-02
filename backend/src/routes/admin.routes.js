const express = require("express");
const router = express.Router();
const { getAdminDashboard } = require("../controllers/admin.controller.js");

router.get("/", getAdminDashboard);

module.exports = router;
