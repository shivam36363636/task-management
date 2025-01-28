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

exports.updateTask = async ({ title, description, status, _id, assignedTo, tag, priority, team, dueDate }) => {
  const task = await Task.findByIdAndUpdate(
    _id,
    {
      title,
      description,
      status,
      assignedTo,
      tag,
      priority,
      team,
      dueDate,
    },
    { new: true }
  );
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


exports.updateTaskStatus = async ({_id, status}) => {
  const task = await Task.findByIdAndUpdate(_id, { status }, { new: true });
  if (!task) {
    throw new Error('Task not found');
  }
  return task;
};
