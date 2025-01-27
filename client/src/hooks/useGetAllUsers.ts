import { useQuery } from "@tanstack/react-query";
import api from "@/utils/axiosInstance";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("/auth/users"),
  });
};