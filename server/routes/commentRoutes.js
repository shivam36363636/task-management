const express = require("express");
const { createCommentController, getCommentsByTaskIdController } = require("../controllers/commentController");

const router = express.Router();

router.post("/", createCommentController);
router.get("/:taskId", getCommentsByTaskIdController);

module.exports = router;
