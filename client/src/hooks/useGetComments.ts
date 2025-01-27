import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

const useGetComments = (taskId: string) => {
    return useQuery({
        queryKey: ["comments", taskId],
        queryFn: () => api.get(`/comment/${taskId}`),
        enabled: !!taskId,
    });
};

export default useGetComments;
