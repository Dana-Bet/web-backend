const User = require("../models/UserModel");

const getUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const username = req.body.username;
    const password = req.body.password;
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Find user by username
    const user = await User.find(req.body);
    console.log(user);
    if(user.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      console.log('Login error:', error);
      res.status(500).json({ message: 'Server error during login.' });
    }
  } catch (error) {
    console.log("User Not Found.");
  }
};

const createUser =  async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(`Created: ${req.body.username}`);
    res.status(201).json(user);
  } catch (error) {
    console.log("Failed to create user:", req.body.username);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
};