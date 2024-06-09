import { useAxiosSecure } from "@hooks/axios";

// Get all users
export const getAll = () => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
   };
};

// Get user by ID
export const getById = (id) => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get(`/users/${id}`);
      return response.data;
   };
};

// Get user by email
export const getByEmail = (email) => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get(`/users/email/${email}`);
      return response.data;
   };
};

// Update user info
export const update = (id) => {
   const axiosSecure = useAxiosSecure();
   return async (data) => {
      const response = await axiosSecure.patch(`/users/${id}`, data);
      return response.data;
   };
};

// Change user role
export const changeRole = (id) => {
   const axiosSecure = useAxiosSecure();
   return async (role) => {
      const response = await axiosSecure.patch(`/users/make/${id}`, { role });
      return response.data;
   };
};
