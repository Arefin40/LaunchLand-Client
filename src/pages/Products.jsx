import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts, useRisingProducts, useSearchProductByTags } from "@hooks/useProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Search, Rising } from "@icons";
import Pagination from "@components/Pagination";
import ProductCard from "@containers/ProductCard";
import ProductCardSkeleton from "@containers/ProductCardSkeleton";
import RisingProduct from "@containers/RisingProduct";

const Products = () => {
   const { page } = useParams();
   const navigate = useNavigate();
   const goToPage = (page) => navigate(`/products/${page}`);

   const [searchTags, setSearchTags] = useState("");
   const products = useProducts(page, 6, searchTags);
   const risingProducts = useRisingProducts();

   const search = (e) => {
      if (e.key === "Enter") {
         const tags = e.target.value.trim().split(" ").join(",");
         navigate(`/products/1`);
         setSearchTags(tags);
      }
   };

   return (
      <>
         <div className="mt-6 mb-6 container">
            <div className="w-full flex justify-between">
               <Swiper
                  loop
                  speed={1000}
                  slidesPerView={1}
                  modules={[Autoplay]}
                  autoplay={{ delay: 5000 }}
               >
                  {risingProducts.isLoading
                     ? Array.from({ length: 3 }).map((_, i) => (
                          <SwiperSlide key={i} className="h-auto min-w-0 flex gap-x-5">
                             <RisingProduct.Skeleton />
                          </SwiperSlide>
                       ))
                     : risingProducts.data.data.map((product, i) => (
                          <SwiperSlide key={product._id} className="h-auto min-w-0 flex gap-x-5">
                             <RisingProduct.Card product={product} />
                          </SwiperSlide>
                       ))}
               </Swiper>

               <div className="hidden sm:grid justify-items-center flex-shrink-0">
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
                     enterKeyHint="search"
                     onKeyDown={search}
                     className="h-full w-full max-w-lg rounded-md outline-none"
                  />
               </div>
            </div>
         </div>

         <section className="mb-12 container space-y-12">
            <div className="space-y-6">
               <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.isLoading
                     ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
                     : products?.data?.products.map((product, i) => (
                          <ProductCard key={i} product={product} />
                       ))}
               </div>

               <div className="flex justify-center">
                  {products.isLoading ? (
                     <div className="flex gap-x-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                           <div key={i} className="w-8 h-8 rounded bg-gray-100" />
                        ))}
                     </div>
                  ) : (
                     <Pagination
                        currentPage={products.data.page}
                        totalPages={products.data.pages}
                        goToPage={goToPage}
                     />
                  )}
               </div>
            </div>
         </section>
      </>
   );
};
export default Products;
