import { useFeaturedProducts, useTrendingProducts } from "@hooks/useProduct";
import Button from "@components/Button";
import ProductCard from "@containers/ProductCard";
import ProductCardSkeleton from "@containers/ProductCardSkeleton";
import SectionTitle from "@containers/SectionTitle";

const Homepage = () => {
   const featuredProducts = useFeaturedProducts();
   const trendingProducts = useTrendingProducts();

   return (
      <section className="my-12 container grid gap-y-12">
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
      </section>
   );
};
export default Homepage;
