const { createComment, getCommentsByTaskId } = require("../services/commentService");

const createCommentController = async (req, res) => {
    try {   
        const comment = await createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCommentsByTaskIdController = async (req, res) => {
    try {
        const comments = await getCommentsByTaskId(req.params.taskId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  createCommentController,
  getCommentsByTaskIdController,
};

