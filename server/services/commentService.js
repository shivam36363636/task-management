const Comment = require("../models/commentModel");

const createComment = async (commentData) => {
  const comment = await Comment.create(commentData);
  return comment;
};

const getCommentsByTaskId = async (taskId) => {
  const comments = await Comment.find({ task: taskId });
  return comments;
};

module.exports = {
  createComment,
  getCommentsByTaskId,
};
