const User = require("../models/userModel");

// @route GET /
const checkConnection = (req, res) => {
  try {
    res.send("Server is Running");
  } catch (err) {
    res.send("Server error", err.message);
  }
};

// @desc    Get all users
// @route   GET /users
// @access  Public
const getUsers = async (req, res) => {
  console.log("GET USERS RAN!");
  try {
    // Simulating fetching users from the database
    const users = await User.find().catch((err) => console.error(err)); // Uncomment when you connect to a DB
    // const users = [{ hello: "slkdfjsld" }];
    res.status(200).json(users); // Send the list of users
  } catch (error) {
    // If an error occurs, return a status 500 error
    console.error("Error fetching users:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error" }); // Return error message
  }
};

// @desc    Create a new user
// @route   POST /register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("REGISTER RAN!");
  console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete a User
// @route DELETE /delete_user
const deleteUser = async (req, res) => {};

module.exports = {
  getUsers,
  registerUser,
  checkConnection,
};
