import { Arrow } from "@icons";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductMedia = ({ images }) => {
   return (
      <div className="relative">
         <Swiper
            cssMode
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={"auto"}
            navigation={{
               nextEl: ".media-slide-next",
               prevEl: ".media-slide-prev",
            }}
         >
            {images.map((image, i) => (
               <SwiperSlide
                  key={i}
                  className={`mb-2 h-80 w-auto border border-gray-100 rounded-md shadow-md overflow-hidden`}
               >
                  <img src={image} className="max-h-full" />
               </SwiperSlide>
            ))}
         </Swiper>

         <button className="media-slide-prev w-14 h-14 absolute -left-7 top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full bg-white border border-gray-100 shadow-md z-10">
            <Arrow direction="backward" />
         </button>
         <button className="media-slide-next w-14 h-14 absolute -right-7 top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full bg-white border border-gray-100 shadow-md z-10">
            <Arrow />
         </button>
      </div>
   );
};
export default ProductMedia;
