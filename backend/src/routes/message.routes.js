const express = require("express");
const router = express.Router();
const { getAllMessages } = require("../controllers/message.controller.js");

router.get("/", getAllMessages);

module.exports = router;
