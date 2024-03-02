const User = require("../models/UserModel");

const getUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Find user by username
    const user = await User.find({ username });

    if (user && (password === user.password)) {
      // Passwords match, login successful
      // Implement token generation or session management here
      res.json({ message: 'Login successful' });
    } else {
      // Login failed
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

const createUser =  async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser
};
