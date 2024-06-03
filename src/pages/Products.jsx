import { useParams, useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Search, Rising, Upvote } from "@icons";
import Pagination from "@components/Pagination";
import ProductCard from "@containers/ProductCard";
import StarRating from "@containers/StarRating";

const Products = () => {
   const { page } = useParams();
   const navigate = useNavigate();
   const goToPage = (page) => navigate(`/products/${page}`);

   return (
      <>
         <div className="mt-6 mb-6 container">
            <div className="flex justify-between">
               <Swiper
                  loop
                  speed={1000}
                  slidesPerView={1}
                  modules={[Autoplay]}
                  autoplay={{ delay: 5000 }}
               >
                  {Array.from({ length: 3 }).map(() => (
                     <SwiperSlide className="h-auto min-w-0 flex gap-x-5">
                        <div className="w-24 h-24 rounded border shrink-0"></div>
                        <div className="space-y-2 text-sm">
                           <Link to="/product/1">
                              <h1 className="font-semibold text-gray-800">Product name</h1>
                           </Link>
                           <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus,
                              nobis?
                           </p>
                           <div className="flex items-center gap-x-3 divide-x">
                              <div className="flex items-center gap-x-1.5">
                                 <StarRating rating={4} fillColor="text-primary-300" />
                                 <span className="scale-50">•</span>
                                 <span>35 reviews</span>
                              </div>
                              <div className="pl-3 flex items-center gap-x-1.5">
                                 <Upvote className="w-3.5 h-3.5" />
                                 <span className="font-medium">20</span> upvotes
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>

               <div className="grid justify-items-center flex-shrink-0">
                  <Rising className="w-20 h-20" />
                  <h3 className="text-sm font-medium text-primary-500">Rising Product</h3>
               </div>
            </div>
         </div>

         <div className="h-20 mb-16 relative bg-gradient-to-r from-[#e3f1fd] to-[#fddad8]">
            <div className="px-4 sm:px-6 lg:px-8 absolute -bottom-8 w-full flex justify-center">
               <div className="px-5 h-16 mx-auto w-full max-w-lg flex items-center gap-x-4 rounded-md bg-white shadow-lg shadow-gray-200">
                  <Search />
                  <input
                     type="text"
                     placeholder="Search..."
                     className="h-full w-full max-w-lg rounded-md outline-none"
                  />
               </div>
            </div>
         </div>

         <section className="mb-12 container space-y-12">
            <div className="space-y-6">
               <div className="grid grid-cols-products gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                     <ProductCard key={i} />
                  ))}
               </div>

               <div className="flex justify-center">
                  <Pagination currentPage={parseInt(page)} goToPage={goToPage} />
               </div>
            </div>
         </section>
      </>
   );
};
export default Products;
