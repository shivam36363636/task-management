const authService = require("../services/authService");

exports.registerUser = async (req, res) => {
  try {
    await authService.register(req.body);
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const tokens = await authService.login(req.body);
    res.status(200).json({ success: true, data: tokens });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const tokens = await authService.refresh(req.body.refreshToken);
    res.status(200).json({ success: true, data: tokens });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await authService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
