import api from "@/utils/axiosInstance";
import { MutateOptions, useMutation } from "@tanstack/react-query";

type Task = {
  title: string;
  description: string;
  status: string;
  assignedTo: string[];
  tag: string;
  priority: string;
    team: string;
    userId: string;
};

export const useCreateTask = (options?: MutateOptions<Task, unknown, Task, unknown>) => {
  return  useMutation({
    mutationFn: (task: Task) => api.post<Task, Task>("/api/task", task),
    ...options,
  });
};
