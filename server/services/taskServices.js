const Task = require("../models/taskModel");

exports.createTask = async ({ title, description,status, userId, assignedTo, tag, priority, team, dueDate }) => {
  const task = await Task.create({
    title,
    description,
    status,
    createdBy: userId,
    assignedTo,
    tag,
    priority,
    team,
    dueDate
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
  return await Task.find({});
};

exports.assignTask = async (taskId, userIds) => {
  const task = await Task.findByIdAndUpdate(
    taskId,
    { assignedTo: userIds },
    { new: true }
  );
  return task;
};

