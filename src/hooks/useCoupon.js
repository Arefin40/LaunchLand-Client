import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as Coupon from "@api/couponApi";

// Create a coupon
export const useCreateCoupon = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Coupon.create(),
      onSuccess: async () => {
         await queryClient.invalidateQueries(["coupons"]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Get all coupons
export const useCoupons = () => {
   return useQuery({
      queryKey: ["coupons"],
      queryFn: Coupon.getAll(),
   });
};

// Get all valid coupons (not expired)
export const useValidCoupons = () => {
   return useQuery({
      queryKey: ["coupons", "valid"],
      queryFn: Coupon.getValidCoupons(),
   });
};

// Update a coupon
export const useUpdateCoupon = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Coupon.update(),
      onSuccess: async (_, { id }) => {
         await queryClient.invalidateQueries(["coupons"]);
         await queryClient.invalidateQueries(["coupon", id]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Delete a coupon
export const useDeleteCoupon = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Coupon.remove(),
      onSuccess: async () => {
         await queryClient.invalidateQueries(["coupons"]);
      },
      onError: (err) => console.log(err.message),
   });
};
