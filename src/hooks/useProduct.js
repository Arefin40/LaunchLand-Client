import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as Product from "@api/productApi";

// Get all products with pagination
export const useProducts = (page = 1, limit = 6) => {
   return useQuery({
      queryKey: ["products", page, limit],
      queryFn: Product.getAll(page, limit),
      keepPreviousData: true,
   });
};

// Get product by ID
export const useProductById = (id) => {
   return useQuery({
      queryKey: ["product", id],
      queryFn: Product.getById(id),
      enabled: !!id,
   });
};

// Get my products
export const useMyProducts = () => {
   return useQuery({
      queryKey: ["products", "myproducts"],
      queryFn: Product.getMyProducts(),
   });
};

// Get featured products
export const useFeaturedProducts = () => {
   return useQuery({
      queryKey: ["products", "featured"],
      queryFn: Product.getFeatured(),
   });
};

// Get trending products
export const useTrendingProducts = () => {
   return useQuery({
      queryKey: ["products", "trending"],
      queryFn: Product.getTrending(),
   });
};

// Get rising products
export const useRisingProducts = () => {
   return useQuery({
      queryKey: ["products", "rising"],
      queryFn: Product.getRising(),
   });
};

// Get product queue (moderator only)
export const useProductQueue = () => {
   return useQuery({
      queryKey: ["products", "queue"],
      queryFn: Product.getProductQueue(),
   });
};

// Get all reported products
export const useReportedProducts = () => {
   return useQuery({
      queryKey: ["products", "reports"],
      queryFn: Product.getReportedProducts(),
   });
};

// Create a product
export const useCreateProduct = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.create(),
      onSuccess: () => {
         queryClient.invalidateQueries(["products"]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Update product info
export const useUpdateProduct = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.update(),
      onSuccess: (_, { id }) => {
         queryClient.invalidateQueries(["products"]);
         queryClient.invalidateQueries(["product", id]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Delete a product
export const useDeleteProduct = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.remove(),
      onSuccess: () => {
         queryClient.invalidateQueries(["products"]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Upvote a product
export const useUpvoteProduct = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.upvote(),
      onSuccess: (_, id) => {
         queryClient.invalidateQueries(["product", id]);
         queryClient.invalidateQueries(["products"]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Accept/Reject a product
export const useChangeProductStatus = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.changeStatus(),
      onSuccess: () => {
         queryClient.invalidateQueries(["products", "queue"]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Feature a product
export const useFeatureProduct = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.feature(),
      onSuccess: () => {
         queryClient.invalidateQueries(["products", "featured"]);
      },
      onError: (err) => console.log(err.message),
   });
};

// Report a product
export const useReportProduct = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: Product.report(),
      onSuccess: () => {
         queryClient.invalidateQueries(["products", "reports"]);
      },
      onError: (err) => console.log(err.message),
   });
};
