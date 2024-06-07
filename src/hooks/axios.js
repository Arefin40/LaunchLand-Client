import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import axios from "axios";
import { useEffect } from "react";

export default axios.create({
   baseURL: import.meta.env.APP_API_URL,
});

const axiosSecure = axios.create({
   baseURL: import.meta.env.APP_API_URL,
   withCredentials: true,
});

export const useAxiosSecure = () => {
   const { signOut } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      // Request Interceptor
      axiosSecure.interceptors.request.use(
         (config) => {
            const token = localStorage.getItem("access-token");
            config.headers.Authorization = `Bearer ${token}`;
            return config;
         },
         (error) => Promise.reject(error)
      );

      // Response Interceptor
      axiosSecure.interceptors.response.use(
         (response) => response,
         async (error) => {
            if (error.response.status === 401 || error.response.status === 403) {
               await signOut();
               navigate("/login");
            }
            return Promise.reject(error);
         }
      );
   }, [signOut, navigate]);

   return axiosSecure;
};
