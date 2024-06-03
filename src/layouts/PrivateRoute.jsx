import LoadingState from "@components/LoadingState";
import { useAuth } from "@contexts/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export default ({ component }) => {
   const { isAuthenticating, user } = useAuth();
   const location = useLocation();

   if (isAuthenticating) return <LoadingState />;

   if (user) return component;

   return <Navigate to="/login" replace state={location?.pathname} />;
};
