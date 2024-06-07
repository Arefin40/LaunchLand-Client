import { Navigate, useLocation } from "react-router-dom";
import useRole from "@hooks/useRole";

export default ({ component, accessibleBy = "member" }) => {
   const location = useLocation();
   const [role] = useRole();

   const dashboardNavigation = {
      admin: "/dashboard",
      moderator: "/dashboard/product-queue",
      member: "/dashboard/profile",
   };

   if (role === accessibleBy) return component;

   return <Navigate to={dashboardNavigation[role]} state={location?.pathname} />;
};
