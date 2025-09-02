const express = require("express");
const { body } = require("express-validator");
// const { registerUser } = require("../controllers/authController.js");

const router = express.Router();

// Placeholder controller function
const registerUser = (req, res) => res.json({ message: "User registered" });

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  registerUser
);

module.exports = router;
