import { Upvote } from "@icons";

const ProductCardSkeleton = () => {
   return (
      <div className="p-5 border rounded-md">
         <div className="gap-4 flex items-start">
            <div className="w-14 h-14 rounded bg-gray-100 animate-pulse shrink-0"></div>

            <div className="flex items-center justify-between w-full">
               <div className="grid gap-y-1">
                  <div className="h-6 bg-gray-100 animate-pulse w-36 rounded" />
                  <div className="h-6 w-full bg-gray-100 animate-pulse min-w-48 rounded" />
               </div>

               <div className="py-1.5 w-14 grid gap-y-1.5 content-center justify-items-center rounded border shrink-0 border-gray-100">
                  <Upvote className="w-[1.125rem] text-gray-100" />
                  <div className="w-3/4 h-4 bg-gray-100 animate-pulse" />
               </div>
            </div>
         </div>
         <div className="h-20 mt-2 bg-gray-100 animate-pulse rounded" />

         <div className="mt-2 flex items-center gap-x-4 text-gray-400">
            <div className="h-5 w-12 bg-gray-100 animate-pulse" />
            <div className="h-5 w-16 bg-gray-100 animate-pulse" />
            <div className="h-5 w-14 bg-gray-100 animate-pulse" />
            <div className="h-5 w-12 bg-gray-100 animate-pulse" />
         </div>
      </div>
   );
};
export default ProductCardSkeleton;
