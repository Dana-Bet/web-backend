const User = require("../models/UserModel");
const jwt = require('jsonwebtoken');


const getUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Find user by username
    // Assuming you have a mechanism to compare hashed passwords,
    // For simplicity, this example just checks if a user with the given username exists.
    const user = await User.findOne({ username: username });

    if (user) {
      // Here you should compare the provided password with the stored hash.
      // This example assumes the authentication is successful.
      
      // Generate JWT Token
      const accessToken = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '24h' } // Token expires in 24 hours
      );

      res.json({ message: "Login successful", accessToken: accessToken });
    } else {
      // User not found or password does not match
      res.status(401).json({ message: "Login failed. User not found or password incorrect." });
    }
  } catch (error) {
    console.log("Server error during login:", error);
    res.status(500).json({ message: "Server error during login." });
  }
};

const createUser = async (req, res) => {
  try {
    // Assuming password hashing is done within your User model's pre-save middleware
    const user = await User.create(req.body);
    console.log(`User created: ${req.body.username}`);
    res.status(201).json(user);
  } catch (error) {
    console.log("Failed to create user:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
};