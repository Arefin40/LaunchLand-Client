import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as User from "@api/userApi";
import { useAuth } from "@contexts/AuthContext";

// Get all users
export const useUsers = () => {
   return useQuery({
      queryKey: ["users"],
      queryFn: User.getAll(),
   });
};

// Get logged in user information
export const useLoggedUser = () => {
   const { user, isAuthenticating } = useAuth();
   return useQuery({
      queryKey: ["user", user?.email],
      queryFn: User.getByEmail(user?.email),
      enabled: !isAuthenticating && !!user?.email,
   });
};

// Get user by ID/Email
export const useUser = ({ id, email }) => {
   if (id) {
      return useQuery({
         queryKey: ["user", id],
         queryFn: User.getById(id),
         enabled: !!id,
      });
   } else if (email) {
      return useQuery({
         queryKey: ["user", email],
         queryFn: User.getByEmail(email),
         enabled: !!email,
      });
   }
};

// Update user info
export const useUpdateUser = (id) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: User.update(id),
      onSuccess: async () => {
         await queryClient.invalidateQueries(["users"]);
         await queryClient.invalidateQueries(["user", id]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Change user role
export const useChangeUserRole = (id) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: User.changeRole(id),
      onSuccess: () => queryClient.invalidateQueries("users"),
   });
};
