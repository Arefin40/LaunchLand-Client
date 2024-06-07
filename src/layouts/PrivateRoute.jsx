import LoadingState from "@components/LoadingState";
import Skeleton from "@containers/Skeleton";
import { useAuth } from "@contexts/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export default ({ component, children, loadingState = "" }) => {
   const { isAuthenticating, user } = useAuth();
   const location = useLocation();

   if (isAuthenticating) return loadingState === "skeleton" ? <Skeleton /> : <LoadingState />;

   if (user) return component || children;

   return <Navigate to="/login" replace state={location?.pathname} />;
};
