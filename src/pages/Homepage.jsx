import Button from "@components/Button";
import ProductCard from "@containers/ProductCard";
import SectionTitle from "@containers/SectionTitle";

const Homepage = () => {
   return (
      <section className="my-12 container grid gap-y-12">
         <section>
            <SectionTitle title="Featured Products" />
            <div className="grid grid-cols-products gap-6">
               {Array.from({ length: 6 }).map((_, i) => (
                  <ProductCard key={i} />
               ))}
            </div>
         </section>

         <section>
            <SectionTitle title="Trending Products" />
            <div className="grid grid-cols-products gap-6">
               {Array.from({ length: 6 }).map((_, i) => (
                  <ProductCard key={i} />
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
