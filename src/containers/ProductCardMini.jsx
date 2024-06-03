import { Link } from "react-router-dom";

const ProductCardMini = () => {
   return (
      <div className="h-auto flex gap-x-5">
         <div className="aspect-square h-full max-h-20 rounded border shrink-0"></div>
         <div className="space-y-2 text-sm">
            <Link to="/product/1">
               <h1 className="font-semibold text-gray-800">Product name</h1>
            </Link>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, nobis?</p>
         </div>
      </div>
   );
};
export default ProductCardMini;
