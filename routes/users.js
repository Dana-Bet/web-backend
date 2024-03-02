const express = require("express");
const { createUser, getUser } = require("../controllers/userController");

const router = express.Router();

// Get all users
router.post("/login", getUser);

// Creates new user
router.post("/", createUser);

module.exports = router;
