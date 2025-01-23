const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  jobProfile: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("Profile", profileSchema);
