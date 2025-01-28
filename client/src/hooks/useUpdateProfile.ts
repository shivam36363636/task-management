import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProfileData } from "./useCreateProfile";
import api from "@/utils/axiosInstance";

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data:CreateProfileData & { id: string })=>api.put("/profile/update",data),
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['profile'] });
        }
    });
};