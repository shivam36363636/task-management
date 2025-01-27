import { GetAllTaskResponse } from "@/hooks/useGetAllTask";
import useStore from "@/state/state-store";

type TaskCardProps = {
  task: GetAllTaskResponse;
};

const statusDataMap = {
  "not_started": {
    color: "bg-red-500",
    text: "Not Started"
  },
  "in_progress": {
    color: "bg-yellow-500",
    text: "In Progress"
  },
  "completed": {
    color: "bg-green-500",
    text: "Completed"
  },
  "in_qa": {
    color: "bg-blue-500",
    text: "In QA"
  },
};

const priorityDataMap = {
  "low": {
    color: "bg-green-500/20",
    text: "Low"
  },
  "medium": {
    color: "bg-yellow-500/20",
    text: "Medium"
  },
  "high": {
    color: "bg-red-500/20",
    text: "High"
  },
};

const tagDataMap = {
  "bug": {
    color: "bg-red-500/20",
    text: "Bug"
  },
  "feature": {
    color: "bg-blue-500/20",
    text: "Feature"
  },
  "task": {
    color: "bg-green-500/20",
    text: "Task"
  },
};

export default function TaskCard({ task }: TaskCardProps) {
  const {  setIsTaskDetailsOpen } = useStore();
  return (
    <div
      className="bg-white rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300  border border-gray-200"
      onClick={() => {
        setIsTaskDetailsOpen(task);
      }}
    >
      <span
        className={`${
          statusDataMap[task.status as keyof typeof statusDataMap].color
        } rounded-full text-[10px] font-medium p-1 px-2`}
      >
        {statusDataMap[task.status as keyof typeof statusDataMap].text}
      </span>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-sm font-medium truncate">{task.title?.slice(0, 30)}</p>
        <p className="text-sm text-gray-500 truncate">
          {task.description?.slice(0, 30)}
        </p>

        <div className="flex gap-2 justify-end mt-4">
        <span className="text-[10px] font-medium mr-auto">Team: {task.team}</span>
        <span className={`${priorityDataMap[task.priority as keyof typeof priorityDataMap].color} text-sm rounded-full  px-2 text-[8px] font-medium`}>Priority: {priorityDataMap[task.priority as keyof typeof priorityDataMap].text}</span>
        <span className={`${tagDataMap[task.tag as keyof typeof tagDataMap].color} text-sm rounded-full  px-2 text-[8px] font-medium`}>Tag: {tagDataMap[task.tag as keyof typeof tagDataMap].text}</span>
        </div>
      </div>
    </div>
  );
}
