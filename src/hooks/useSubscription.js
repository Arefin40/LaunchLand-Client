import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Subscription from "@api/subscriptionApi";

// Subscribe to pro membership
export const useSubscribe = (id) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Subscription.subscribe(),
      onSuccess: async () => {
         await queryClient.invalidateQueries(["user", id]);
      },
      onError: (err) => console.log(err.message),
   });
};
