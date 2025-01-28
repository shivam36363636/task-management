import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import toast from "react-hot-toast";

export const useStatusUpdate = (options?: { onSuccess: () => void }) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ taskId, status }: { taskId: string; status: string }) => api.put(`/task/status`, { _id: taskId, status }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            toast.success("Task updated successfully");
            options?.onSuccess?.();
        }
    });
};

