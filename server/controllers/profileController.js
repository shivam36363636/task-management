const profileService = require("../services/profileService");

exports.createProfile = async (req, res) => {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await profileService.getProfile(req.user.id);
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await profileService.updateProfile(req.user.id, req.body);
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
