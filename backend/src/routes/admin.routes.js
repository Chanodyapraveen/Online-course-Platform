const express = require("express");
const { getAdminDashboard } = require("../controllers/admin.controller.js");
const router = express.Router();

// Add more admin endpoints as needed
router.get("/", getAdminDashboard);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
