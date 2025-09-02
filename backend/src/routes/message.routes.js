const express = require("express");
const { getAllMessages } = require("../controllers/message.controller.js");
const router = express.Router();

// Add more CRUD endpoints as needed
router.get("/", getAllMessages);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
