import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

interface TaskData {
    title: string;
    description: string;
    status: string;
    _id: string;
    assignedTo: string[];
    tag: string;
    priority: string;
    team: string;
    dueDate: string;
}

export const useUpdateTask = (options?:{onSuccess:()=>void}) => {
    const queryClient = useQueryClient();
    return useMutation({mutationFn:(data:TaskData)=>api.put("/task/update",data),onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        options?.onSuccess?.();
    }});
};