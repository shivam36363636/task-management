const express = require("express");
const {
  registerUser,
  loginUser,
  refreshToken,
  getAllUsers
} = require("../controllers/authController");
const { verifyAccessToken } = require('../utils/authMiddleware')
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshToken);
router.get("/users", verifyAccessToken, getAllUsers);

module.exports = router;
