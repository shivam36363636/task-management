import api from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => api.get("/profile/get"),
  });
};
