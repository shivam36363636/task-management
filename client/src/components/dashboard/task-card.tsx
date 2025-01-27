import { GetAllTaskResponse } from "@/hooks/useGetAllTask";
import useStore from "@/state/state-store";
import AssignedUsers from "../task/assigned-users";

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
    color: "bg-green-500/20 text-green-700",
    text: "Low"
  },
  "medium": {
    color: "bg-yellow-500/20 text-yellow-700",
    text: "Medium"
  },
  "high": {
    color: "bg-red-500/20 text-red-700",
    text: "High"
  },
};

const tagDataMap = {
  "bug": {
    color: "bg-red-500/20 text-red-700",
    text: "Bug"
  },
  "feature": {
    color: "bg-blue-500/20 text-blue-700",
    text: "Feature"
  },
  "task": {
    color: "bg-green-500/20 text-green-700",
    text: "Task"
  },
};

export default function TaskCard({ task }: TaskCardProps) {
  const { setIsTaskDetailsOpen } = useStore();
  return (
    <div
      className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-200 border border-gray-100"
      onClick={() => {
        setIsTaskDetailsOpen(task);
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`${
            statusDataMap[task.status as keyof typeof statusDataMap].color
          } rounded-full text-[11px] font-medium py-1 px-3 text-white`}
        >
          {statusDataMap[task.status as keyof typeof statusDataMap].text}
        </span>
        <span className="text-xs font-medium text-gray-400">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
          {task.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {task.description}
        </p>
        
        <AssignedUsers assignedUsers={task.assignedTo} />
        
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">
            {task.team.replace('_', ' ').charAt(0).toUpperCase() + task.team.slice(1)}
          </span>
          <span className={`${priorityDataMap[task.priority as keyof typeof priorityDataMap].color} rounded-full px-3 py-1 text-xs font-medium`}>
            {priorityDataMap[task.priority as keyof typeof priorityDataMap].text}
          </span>
          <span className={`${tagDataMap[task.tag as keyof typeof tagDataMap].color} rounded-full px-3 py-1 text-xs font-medium`}>
            {tagDataMap[task.tag as keyof typeof tagDataMap].text}
          </span>
        </div>
      </div>
    </div>
  );
}
