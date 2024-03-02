const express = require("express");
const { createUser, getUser } = require("../controllers/userController");

const router = express.Router();

//Get all recipes
router.get("/", getUser);

//Post a new recipe
router.post("/", createUser);

module.exports = router;
