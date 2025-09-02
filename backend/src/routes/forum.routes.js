const express = require("express");
const router = express.Router();
const { getAllForumPosts } = require("../controllers/forum.controller.js");

router.get("/", getAllForumPosts);

module.exports = router;
