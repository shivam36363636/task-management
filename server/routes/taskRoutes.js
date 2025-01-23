const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", taskController.createTask);
router.get("/:id", taskController.getTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.get("/all", taskController.getAllTasks);
router.post("/assign/:id", taskController.assignTask);
router.get("/all/user", taskController.getTasksByUser);

module.exports = router;

