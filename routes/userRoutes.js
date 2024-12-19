// const JWTToken = require("../middleware/JWTToken");

const express = require("express");
const {
  getUsers,
  registerUser,
  checkConnection,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", checkConnection);
router.get("/get_users", getUsers);
router.post("/register_user", registerUser);

module.exports = router;
