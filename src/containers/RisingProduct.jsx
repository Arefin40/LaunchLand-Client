import Upvote from "@icons/Upvote";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import StarRating from "./StarRating";

const Card = ({ product }) => {
   return (
      <SwiperSlide className="h-auto min-w-0 flex gap-x-5">
         <img
            src={product.icon}
            className="w-16 h-16 sm:w-24 sm:h-24 rounded border shrink-0 object-cover object-center"
         />

         <div className="space-y-2 text-sm">
            <Link to={`/product/${product._id}`}>
               <h1 className="font-semibold text-gray-800">{product.name}</h1>
            </Link>
            <p>{product.description}</p>
            <div className="flex items-center gap-x-3 divide-x flex-wrap">
               {/* <div className="flex items-center gap-x-1.5">
                  <StarRating rating={0} fillColor="text-primary-300" />
                  <span className="scale-50">•</span>
                  <span>0 reviews</span>
               </div> */}
               <div className="pl-3 flex items-center gap-x-1.5">
                  <Upvote className="w-3.5 h-3.5" />
                  <span className="font-medium">{product.upvotes}</span>
                  <span className="hidden sm:inline">upvotes</span>
               </div>
            </div>
         </div>
      </SwiperSlide>
   );
};

const Skeleton = () => {
   return (
      <>
         <div className="w-24 h-24 rounded bg-gray-100 animate-pulse shrink-0" />

         <div className="w-full sm:max-w-lg space-y-2">
            <div className="h-6 w-full max-w-48 bg-gray-100 animate-pulse" />
            <div className="h-6 bg-gray-100 animate-pulse w-full" />
            <div className="flex items-center gap-x-3 divide-x">
               <div className="w-full grid grid-cols-3 items-center gap-x-1.5">
                  <div className="h-6 bg-gray-100 animate-pulse" />
                  <div className="h-6 bg-gray-100 animate-pulse" />
                  <div className="h-6 bg-gray-100 animate-pulse" />
               </div>
            </div>
         </div>
      </>
   );
};

export default { Card, Skeleton };
