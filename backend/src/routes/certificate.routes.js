const express = require("express");
const { getAllCertificates } = require("../controllers/certificate.controller.js");
const router = express.Router();

// Add more CRUD endpoints as needed
router.get("/", getAllCertificates);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
