const Task = require("../models/taskModel");

exports.createTask = async ({ title, description, user }) => {
  const task = await Task.create({
    title,
    description,
    createdBy: user?.id,
  });
  return task;
};

exports.getTask = async (taskId) => {
  const task = await Task.findById(taskId);
  return task;
};

exports.updateTask = async (taskId, { title, description, status }) => {
  const task = await Task.findByIdAndUpdate(taskId, { title, description, status }, { new: true });
  return task;
};

exports.deleteTask = async (taskId) => {
  await Task.findByIdAndDelete(taskId);
};

exports.getTasksByUser = async (userId) => {
  const tasks = await Task.find({ createdBy: userId });
  return tasks;
};

exports.getAllTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

exports.assignTask = async (taskId, userIds) => {
  const task = await Task.findByIdAndUpdate(
    taskId,
    { assignedTo: userIds },
    { new: true }
  );
  return task;
};

