const express = require("express");
const {assignTask, createTask, deleteTask, getAllTasks, getTask, getTasksByUser, updateTask} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/", getAllTasks);
router.post("/assign/:id", assignTask);
router.get("/tasks/user", getTasksByUser);

module.exports = router;

