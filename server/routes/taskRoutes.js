const express = require("express");
const { createTask, deleteTask, getAllTasks, getTask, getTasksByUser, updateTask, updateTaskStatus} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/", getAllTasks);
router.get("/tasks/user", getTasksByUser);
router.put("/status", updateTaskStatus);

module.exports = router;

