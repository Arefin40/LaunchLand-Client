import { Link } from "react-router-dom";
import { Upvote } from "@icons";

const ProductCard = ({ product }) => {
   return (
      <div className="p-5 border rounded-md">
         <div className="gap-4 flex items-start">
            <Link to={`/product/${product._id}`} className="shrink-0">
               <img
                  src={product.icon}
                  className="w-14 h-14 rounded shrink-0 object-cover object-center"
               ></img>
            </Link>

            <div className="flex items-center justify-between w-full">
               <div className="grid gap-y-1">
                  <Link to={`/product/${product._id}`}>
                     <h1 className="text-gray-800 font-semibold">{product.name}</h1>
                  </Link>
                  <h3 className="text-sm line-clamp-1">{product.tagline}</h3>
               </div>

               <button className="py-1.5 w-14 text-xs font-semibold grid gap-y-1.5 content-center justify-items-center rounded border active:scale-90 transition-all shrink-0 border-gray-200">
                  <Upvote />
                  <span>{product.upvotes}</span>
               </button>
            </div>
         </div>

         <p className="mt-2 text-sm leading-6 line-clamp-3">{product.description}</p>

         <p className="mt-2 text-xs flex items-center gap-x-4 text-gray-500">
            {product.tags.map((tag) => (
               <span key={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
            ))}
         </p>
      </div>
   );
};
export default ProductCard;
