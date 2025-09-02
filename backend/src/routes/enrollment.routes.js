const express = require("express");
const router = express.Router();
const { getAllEnrollments } = require("../controllers/enrollment.controller.js");

router.get("/", getAllEnrollments);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
