import { useChangeProductStatus, useFeatureProduct, useProductQueue } from "@hooks/useProduct";
import { Accept, Reject } from "@icons/dashboard";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";
import Button from "@components/Button";

const TableRow = ({ product }) => {
   const productStatusMutation = useChangeProductStatus();
   const featureProductMuation = useFeatureProduct();

   const acceptProduct = () => {
      productStatusMutation.mutate({ id: product._id, status: "accepted" });
   };

   const rejectProduct = () => {
      productStatusMutation.mutate({ id: product._id, status: "rejected" });
   };

   const makeFeatured = () => featureProductMuation.mutate(product._id);

   return (
      <div className="px-5 py-3 grid grid-cols-queue gap-x-4 sm:gap-x-8">
         <img src={product.icon} className="w-14 h-14 rounded-md object-cover object-center" />
         <TitleAndSubtitle title={product.name} subtitle={product.tagline} />
         <div className="flex items-center justify-center gap-x-3">
            {product.featured ? (
               <p className="text-primary-500">Featured</p>
            ) : product.status === "pending" ? (
               <>
                  <ActionButton onClick={acceptProduct} icon={<Accept />} />
                  <ActionButton onClick={rejectProduct} icon={<Reject />} />
               </>
            ) : product.status === "accepted" ? (
               <Button
                  disabled={product.featured}
                  onClick={makeFeatured}
                  size="small"
                  variant="outlined"
               >
                  {product.featured ? "Featured" : "Make Featured"}
               </Button>
            ) : (
               <p>Rejected</p>
            )}
         </div>
         <div className="flex justify-center items-center">
            <Button to={`/product/${product._id}`} size="small" variant="outlined">
               View details
            </Button>
         </div>
      </div>
   );
};

const Skeleton = () => {
   return (
      <div className="px-5 py-3 grid grid-cols-queue gap-x-4 sm:gap-x-8">
         <div className="w-14 h-14 rounded-md shrink-0 bg-gray-100 animate-pulse" />
         <div className="space-y-2">
            <div className="w-1/2 h-6 bg-gray-100 animate-pulse" />
            <div className="w-full h-6 bg-gray-100 animate-pulse" />
         </div>
         <div className="flex items-center justify-center gap-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
            <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
         </div>
         <div className="flex justify-center items-center">
            <div className="w-3/4 h-8 rounded-md bg-gray-100 animate-pulse" />
         </div>
      </div>
   );
};

const ProductQueue = () => {
   const productQueue = useProductQueue();

   return (
      <section className="space-y-10">
         <DashboardTitle title="Product review queue" />

         <section className="overflow-x-auto">
            <header className="px-5 py-3 bg-gray-100 text-gray-800 grid grid-cols-queue gap-x-4 sm:gap-x-8 font-semibold rounded justify-between text-sm">
               <p className="text-center">Icon</p>
               <p>Product name</p>
               <p className="text-center">Action</p>
               <p className="text-center">View Details</p>
            </header>

            <main className="rounded-b-md text-sm">
               {productQueue.isLoading
                  ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} />)
                  : productQueue.data.data.map((product) => (
                       <TableRow key={product._id} product={product} />
                    ))}
            </main>
         </section>
      </section>
   );
};
export default ProductQueue;
