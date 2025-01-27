'use client'
import axios from "axios";
import { useEffect } from "react";



export default function AuthProvider({children}:{children:React.ReactNode}) {

  useEffect(() => {
    const data = localStorage.getItem("loginToken");
    if (data) {
      const parsedData = JSON.parse(data);

      // Configure axios defaults
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedData.accessToken}`;

      // Add axios interceptor to handle token refresh
      axios.interceptors.response.use(
        (response) => response,
        async (error) => {
          const originalRequest = error.config;

          // If error is 401 and we haven't tried refreshing yet
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
              // Call refresh token endpoint
              const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
                refreshToken: parsedData.refreshToken
              });

              const { accessToken: newAccessToken } = response.data;
              
              // Update access token in state and localStorage
              const updatedData = { ...parsedData, accessToken: newAccessToken };
              localStorage.setItem("loginToken", JSON.stringify(updatedData));

              // Update axios default header
              axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

              // Retry original request
              originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
              return axios(originalRequest);
            } catch (error) {
              // If refresh fails, logout user
              localStorage.removeItem("loginToken");
              return Promise.reject(error);
            }
          }
          return Promise.reject(error);
        }
      );

    }
  }, []);


  return children;
}

