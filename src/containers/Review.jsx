import StarRating from "@containers/StarRating";

const Review = () => {
   return (
      <div className="space-y-5">
         <div className="flex items-center justify-between gap-x-8 gap-y-5 flex-wrap">
            <div className="flex items-center gap-x-5">
               <img src="" className="object-cover w-12 h-12 rounded-full flex-shrink-0 border" />

               <div className="grid content-center">
                  <h2 className="text-gray-800 font-semibold">Username</h2>
                  <div className="flex items-center gap-x-2">
                     <StarRating rating={4} />·
                     <time dateTime="" className="text-sm">
                        02/06/2024
                     </time>
                  </div>
               </div>
            </div>
         </div>

         <p className="leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nesciunt pariatur
            numquam a delectus expedita placeat minus quae nostrum ipsa officia consequatur quisquam
            consequuntur sunt qui inventore soluta libero facere?
         </p>
      </div>
   );
};
export default Review;
