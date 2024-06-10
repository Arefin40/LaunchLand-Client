import { useQuery } from "@tanstack/react-query";
import * as Analytics from "@api/analyticsApi";

// Basic admin analytics
export const useAdminAnalytics = () => {
   return useQuery({
      queryKey: ["analytics", "admin"],
      queryFn: Analytics.getAdminAnalytics(),
   });
};
