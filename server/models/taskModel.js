const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    required: true,
    default: "not_started",
    enum: [ "completed", "not_started", "in_progress", "in_qa"]
  },
  createdBy: { type: mongoose.Schema.Types.String, ref: "User" },
  assignedTo: [{ type: mongoose.Schema.Types.String, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tag: { type: String, required: true, enum: ["bug", "feature", "task"] },
  priority: { type: String, required: true, enum: ["low", "medium", "high"] },
  team: { type: String, required: true, enum: ["development", "design", "marketing", "sales", "support", "finance", "legal", "hr", "product", "engineering", "customer_success", "other"] },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model("Task", taskSchema);
