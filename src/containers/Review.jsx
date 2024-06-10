import StarRating from "@containers/StarRating";
import { formattedDate } from "@utils/DateTime";

const Review = ({ review }) => {
   return (
      <div className="space-y-5">
         <div className="flex items-center justify-between gap-x-8 gap-y-5 flex-wrap">
            <div className="flex items-center gap-x-5">
               <img
                  src={review.user.photoUrl}
                  className="object-cover w-12 h-12 rounded-full flex-shrink-0 border"
               />

               <div className="grid content-center">
                  <h2 className="text-gray-800 font-semibold">{review.user.name}</h2>
                  <div className="flex items-center gap-x-2">
                     <StarRating rating={review.rating} />·
                     <time dateTime="" className="text-sm">
                        {formattedDate(review.createdAt)}
                     </time>
                  </div>
               </div>
            </div>
         </div>

         <p className="leading-6">{review.comment}</p>
      </div>
   );
};
export default Review;
