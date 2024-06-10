import axios, { useAxiosSecure } from "@hooks/axios";

// Create a coupon
export const create = () => {
   const axiosSecure = useAxiosSecure();
   return async (data) => {
      const response = await axiosSecure.post("/coupons", data);
      return response.data;
   };
};

// Get all coupons
export const getAll = () => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get("/coupons");
      return response.data;
   };
};

// Get all valid coupons (not expired)
export const getValidCoupons = () => {
   return async () => {
      const response = await axios.get("/coupons/valid");
      return response.data;
   };
};

// Update a coupon
export const update = () => {
   const axiosSecure = useAxiosSecure();
   return async ({ id, data }) => {
      const response = await axiosSecure.patch(`/coupons/${id}`, data);
      return response.data;
   };
};

// Delete a coupon
export const remove = () => {
   const axiosSecure = useAxiosSecure();
   return async (id) => {
      const response = await axiosSecure.delete(`/coupons/${id}`);
      return response.data;
   };
};
