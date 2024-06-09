import { useAxiosSecure } from "@hooks/axios";

// Subscribe to pro membership
export const subscribe = () => {
   const axiosSecure = useAxiosSecure();
   return async (data) => {
      const response = await axiosSecure.post("/subscriptions", data);
      return response.data;
   };
};
