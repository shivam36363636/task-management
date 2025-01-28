const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  jobProfile: { type: String, required: true },
  location: { type: String, required: true },
  team: { type: String },
  bio: { type: String },
  skills: [{ type: String }],
  department: { type: String },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  timezone: { type: String },
  status: { type: String, enum: ['available', 'busy', 'away', 'offline'], default: 'available' },
});

module.exports = mongoose.model("Profile", profileSchema);
