import { Link } from "react-router-dom";

const ProductCardMini = ({ product }) => {
   return (
      <div className="h-auto flex gap-x-5">
         <img
            src={product.icon}
            className="aspect-square h-full max-h-20 rounded border shrink-0 object-cover"
         />
         <div className="space-y-2 text-sm">
            <Link to={`/product/${product._id}`}>
               <h1 className="font-semibold text-gray-800">{product.name}</h1>
            </Link>
            <p className="line-clamp-2">{product.description}</p>
         </div>
      </div>
   );
};
export default ProductCardMini;
