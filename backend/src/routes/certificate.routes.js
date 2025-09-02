const express = require("express");
const router = express.Router();
const { getAllCertificates } = require("../controllers/certificate.controller.js");

router.get("/", getAllCertificates);

module.exports = router;
