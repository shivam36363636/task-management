"use client";

import { GetAllTaskResponse, useGetAllTask } from "@/hooks/useGetAllTask";
import TaskCard from "./task-card";

type TaskBoxCardProps = {
  title: string;
  taskStatus: string;
}

export default function TaskBoxCard({ title, taskStatus }: TaskBoxCardProps) {
  const { data: getAllTask } = useGetAllTask();
  const tasks = getAllTask?.data?.data?.filter(
    (task: GetAllTaskResponse) => task.status === taskStatus
  );
  return <div className=" bg-gray-100 rounded-md p-2 flex-1 flex flex-col gap-2 shadow-md">
    <p className=" text-xs text-gray-500 font-bold border-b border-gray-200 pb-2">{title}</p>
    <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
      {tasks?.map((task: GetAllTaskResponse) => (
        <TaskCard  key={task._id} task={task} />
      ))}
    </div>
  </div>
}