const express = require("express");
const { getAllForumPosts } = require("../controllers/forum.controller.js");
const router = express.Router();

// Add more CRUD endpoints as needed
router.get("/", getAllForumPosts);
// router.post("/", ...);
// router.put(":id", ...);
// router.delete(":id", ...);

module.exports = router;
