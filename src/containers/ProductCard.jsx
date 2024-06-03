import { Link } from "react-router-dom";
import { Upvote } from "@icons";

const ProductCard = () => {
   return (
      <div className="p-5 border rounded-md">
         <div className="gap-4 flex items-start">
            <Link to="/product/1">
               <div className="w-14 h-14 rounded border shrink-0"></div>
            </Link>

            <div className="flex items-center justify-between w-full">
               <div className="grid gap-y-1">
                  <Link to="/product/1">
                     <h1 className="text-gray-800 font-semibold">Product name</h1>
                  </Link>
                  <h3 className="text-sm">Tagline</h3>
               </div>

               <button className="py-1.5 w-14 text-xs font-semibold grid gap-y-1.5 content-center justify-items-center rounded border active:scale-90 transition-all shrink-0 border-gray-200">
                  <Upvote />
                  <span>1250</span>
               </button>
            </div>
         </div>
         <p className="mt-2 text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore laboriosam aliquid
            esse et nesciunt ad?
         </p>

         <p className="mt-2 text-xs flex items-center gap-x-4 text-gray-400">
            <span>#tag1</span>
            <span>#tag2</span>
            <span>#tag3</span>
            <span>#tag4</span>
         </p>
      </div>
   );
};
export default ProductCard;
