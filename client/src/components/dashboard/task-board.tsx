"use client";

import TaskBoxCard from "./task-box-card";

const data = [
  {
    id: 4,
    title: "Not Started",
    taskStatus: "not_started",
  },

  {
    id: 2,
    title: "In Progress",
    taskStatus: "in_progress",
  },
  {
    id: 3,
    title: "Completed",
    taskStatus: "completed",
  },
  {
    id: 1,
    title: "In QA",
    taskStatus: "in_qa",
  },
];

export default function TaskBoard() {

  return (
    <div className="bg-white rounded-md flex-1 p-4 overflow-y-auto">
      <div className="flex gap-4 h-full">
        {data.map((item) => (
          <TaskBoxCard
            key={item.id}
            title={item.title}
            taskStatus={item.taskStatus}
          />
        ))}
      </div>
    </div>
  );
}
