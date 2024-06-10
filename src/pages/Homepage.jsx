import { useFeaturedProducts, useTrendingProducts } from "@hooks/useProduct";
import { useValidCoupons } from "@hooks/useCoupon";
import Button from "@components/Button";
import ProductCard from "@containers/ProductCard";
import ProductCardSkeleton from "@containers/ProductCardSkeleton";
import SectionTitle from "@containers/SectionTitle";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { formattedDate } from "@utils/DateTime";

const Homepage = () => {
   const featuredProducts = useFeaturedProducts();
   const trendingProducts = useTrendingProducts();
   const validCoupons = useValidCoupons();

   return (
      <section className="my-12 container grid gap-y-12">
         <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
               <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
                     Share your product with the world
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                     Experience the future of innovation with our groundbreaking app. Seamless,
                     intuitive, and powerful—revolutionize your digital life today.
                  </p>
                  <a
                     href="#"
                     className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
                  >
                     Get started
                     <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                           clipRule="evenodd"
                        ></path>
                     </svg>
                  </a>
                  <a
                     href="#"
                     className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100    "
                  >
                     Speak to Sales
                  </a>
               </div>
               <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src="https://www.gizchina.com/wp-content/uploads/images/2024/01/1_VRp9TYSbKCCag94Vv8vuxg.png" />
               </div>
            </div>
         </section>

         <section>
            <SectionTitle title="Featured Products" />
            <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-6">
               {featuredProducts.isLoading
                  ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
                  : featuredProducts?.data?.data.map((product, i) => (
                       <ProductCard key={product._id} product={product} />
                    ))}
            </div>
         </section>

         <section>
            <SectionTitle title="Trending Products" />
            <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-6">
               {trendingProducts.isLoading
                  ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
                  : trendingProducts?.data?.data.map((product, i) => (
                       <ProductCard key={product._id} product={product} />
                    ))}
            </div>
            <div className="mt-5 flex justify-center">
               <Button to="/products" rounded variant="outlined">
                  Show All Products
               </Button>
            </div>
         </section>

         {!validCoupons.isLoading && (
            <section className="mt-8 pt-8 border-t border-gray-200 min-w-0">
               <Swiper slidesPerView={1} modules={[Autoplay]} autoplay loop>
                  {validCoupons.data.map((coupon) => (
                     <SwiperSlide key={coupon._id} className={`mb-2 overflow-hidden text-center`}>
                        <div className="space-y-6">
                           <p className="text-lg font-semibold text-gray-800 sm:text-xl">
                              {coupon.description}
                           </p>
                           <h3 className="text-primary-500 font-bold text-4xl">{coupon.code}</h3>
                           <p>Valid till: {formattedDate(coupon.expiryDate)}</p>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </section>
         )}
      </section>
   );
};
export default Homepage;
