import api from "@/utils/axiosInstance";
import {  useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useGetTaskById = (taskId: string | null, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ["task", taskId],
        queryFn: () => api.get(`/api/task/${taskId}`),
        enabled: !!taskId,
        ...options,
    });
};