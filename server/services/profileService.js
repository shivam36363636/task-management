const Profile = require("../models/profileModel");

exports.createProfile = async ({ name, jobProfile, location, user, team, bio, skills, department, role, email, phone, timezone, status }) => {
  const profile = await Profile.create({
    jobProfile,
    location,
    name,
    user,
    team,
    bio,
    skills,
    department,
    role,
    email,
    phone,
    timezone,
    status,
  });
  return profile;
};

exports.getProfile = async (userId) => {
  const profile = await Profile.findOne({ user: userId });
  return profile;
};

exports.updateProfile = async (
  {
    name,
    jobProfile,
    location,
    team,
    bio,
    skills,
    department,
    role,
    email,
    phone,
    timezone,
    status,
    id
  }
) => {
  const profile = await Profile.findOneAndUpdate(
    { _id: id },
    { name, jobProfile, location, team, bio, skills, department, role, email, phone, timezone, status },
    { new: true }
  );
  return profile;
};

