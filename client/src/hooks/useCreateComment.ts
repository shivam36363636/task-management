import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";
import { toast } from "react-hot-toast";
type CommentData = {
    task: string;
    content: string;
    user: string;
};
const useCreateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data:CommentData) => api.post(`/comment`, data),
        onSuccess: (_, data) => {
            queryClient.invalidateQueries({ queryKey: ['comments', data.task] });
            toast.success('Comment created successfully');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export default useCreateComment;
