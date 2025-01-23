const express = require("express");
const {
  createProfile,
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

const router = express.Router();

router.post("/create", createProfile);
router.get("/get", getProfile);
router.put("/update", updateProfile);

module.exports = router;
