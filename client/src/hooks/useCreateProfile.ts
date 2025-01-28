import api from "@/utils/axiosInstance";
import { MutateOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export type CreateProfileData = {
  jobProfile: string;
  location: string;
  name: string;
  user: string;
  team: string;
  bio: string;
  skills: string[];
  department: string;
  role: string;
  email: string;
  phone: string;
  timezone: string;
    status: string;
};

type CreateProfileResponse = {
  data: {
    data: CreateProfileData & { _id: string };
  };
};

type CreateProfileError = {
  message: string;
};

export const useCreateProfile = (
  options?: MutateOptions<CreateProfileResponse, CreateProfileError, CreateProfileData>
) => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProfileData) => {
      return api.post("/profile/create", data);
    },
    onSuccess: () => {
      toast.success('Profile created successfully');
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: () => {
      toast.error('Failed to create profile');
    },
    ...options,
  });
};