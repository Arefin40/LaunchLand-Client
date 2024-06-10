import { useAxiosSecure } from "@hooks/axios";

// Basic admin analytics
export const getAdminAnalytics = () => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get("/admin/analytics");
      return response.data;
   };
};
