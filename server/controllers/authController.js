const authService = require("../services/authService");

exports.registerUser = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ success: true, data: user });
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
