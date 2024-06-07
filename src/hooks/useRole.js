import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@contexts/AuthContext";
import { useAxiosSecure } from "@hooks/axios";

const useRole = () => {
   const { user, isAuthenticating } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { data: role = "", isLoading: isUserLoading } = useQuery({
      queryKey: ["role", user?.email],
      enabled: !isAuthenticating && !!user?.email,
      queryFn: async () => {
         const response = await axiosSecure(`/users/email/${user?.email}`);
         return response?.data?.role;
      },
   });

   return [role, isUserLoading];
};

export default useRole;
