const ProductCardMiniSkeleton = () => {
   return (
      <div className="h-auto min-w-full flex gap-x-5">
         <div className="aspect-square h-full max-h-20 rounded bg-gray-100 animate-pulse shrink-0" />
         <div className="w-full space-y-2 text-sm">
            <div className="h-6 w-1/2 bg-gray-100 animate-pulse rounded" />
            <div className="h-6 w-full bg-gray-100 animate-pulse rounded" />
         </div>
      </div>
   );
};
export default ProductCardMiniSkeleton;
