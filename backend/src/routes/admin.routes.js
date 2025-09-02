const express = require("express");
const router = express.Router();

// Placeholder controller functions
router.get("/", (req, res) => res.json({ message: "Admin route" }));

module.exports = router;
