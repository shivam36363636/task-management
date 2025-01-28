import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

export const useDeleteTask = (options?:{onSuccess:()=>void}) => {
    const queryClient = useQueryClient();
    return useMutation({mutationFn:(id:string)=>api.delete(`/task/${id}`),onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        options?.onSuccess?.();
    }});
};