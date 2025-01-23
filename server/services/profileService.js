const Profile = require("../models/profileModel");

exports.createProfile = async ({ name, jobProfile, location, user }) => {
  const profile = await Profile.create({
    jobProfile,
    location,
    name,
    user,
  });
  return profile;
};

exports.getProfile = async (userId) => {
  const profile = await Profile.findOne({ user: userId });
  return profile;
};

exports.updateProfile = async (userId, { name, jobProfile, location }) => {
  const profile = await Profile.findOneAndUpdate(
    { user: userId },
    { name, jobProfile, location },
    { new: true }
  );
  return profile;
};

