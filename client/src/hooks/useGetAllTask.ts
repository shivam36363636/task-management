'use client'
import api from "@/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"


export type GetAllTaskResponse = {
  _id: string;
  title: string;
  description: string;
  status: string;
  createdBy: string;
  assignedTo: string[];
  tag: string;
  priority: string;
  team: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
};

export const useGetAllTask = () => {
    return useQuery({
      queryKey: ["tasks"],
      queryFn: () => api.get("/task"),
    });
}
