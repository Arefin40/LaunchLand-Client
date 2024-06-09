import { Navigate, useLocation } from "react-router-dom";
import { useLoggedUser } from "@hooks/useUser";

export default ({ component, accessibleBy = "member" }) => {
   const location = useLocation();
   const { data: user } = useLoggedUser();

   const dashboardNavigation = {
      admin: "/dashboard",
      moderator: "/dashboard/product-queue",
      member: "/dashboard/profile",
   };

   if (user?.role === accessibleBy) return component;

   return <Navigate to={dashboardNavigation[user?.role]} state={location?.pathname} />;
};
