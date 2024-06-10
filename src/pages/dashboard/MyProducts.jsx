import { useNavigate } from "react-router-dom";
import useVisibility from "@hooks/useVisibility";
import { useDeleteProduct, useMyProducts } from "@hooks/useProduct";
import { Edit } from "@icons";
import { Trash } from "@icons/dashboard";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import Status from "@containers/Status";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";
import DeleteConfirmationModal from "@containers/modal/ConfirmationModal";

const TableRow = ({ product }) => {
   const navigate = useNavigate();
   const deleteModal = useVisibility();
   const deleteProductMuation = useDeleteProduct();

   const deleteProduct = () => {
      deleteProductMuation.mutate(product._id);
   };

   const redirectToUpdatePage = () => {
      navigate(`/dashboard/update-product/${product._id}`);
   };

   return (
      <>
         <div className="px-5 py-3 grid grid-cols-myproducts gap-x-4 sm:gap-x-8">
            <img
               src={product.icon}
               className="w-14 h-14 border rounded-md object-cover object-center shrink-0"
            />
            <TitleAndSubtitle title={product.name} subtitle={product.tagline} />
            <div className="flex items-center justify-center">{product.upvotes}</div>
            <Status status={product.status} />

            <div className="flex items-center justify-center gap-x-2">
               <ActionButton onClick={redirectToUpdatePage} icon={<Edit className="w-3 h-3" />} />
               <ActionButton onClick={deleteModal.show} icon={<Trash className="w-5 h-5" />} />
            </div>
         </div>

         {deleteModal.isVisible && (
            <DeleteConfirmationModal onConfirmDelete={deleteProduct} onCancel={deleteModal.hide} />
         )}
      </>
   );
};

const Skeleton = () => {
   return (
      <div className="px-5 py-3 grid grid-cols-myproducts items-end gap-x-4 sm:gap-x-8">
         <div className="w-14 h-14 rounded-md shrink-0 bg-gray-100 animate-pulse" />
         <div className="space-y-2">
            <div className="w-1/2 h-6 bg-gray-100 animate-pulse" />
            <div className="w-full h-6 bg-gray-100 animate-pulse" />
         </div>
         <div className="w-full h-6 bg-gray-100 animate-pulse" />
         <div className="w-full h-6 bg-gray-100 animate-pulse" />

         <div className="flex items-center justify-center gap-x-2">
            <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse" />
            <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse" />
         </div>
      </div>
   );
};

const MyProducts = () => {
   const myproducts = useMyProducts();

   return (
      <section className="space-y-10">
         <DashboardTitle title="My products" />

         <section className="overflow-x-auto">
            <header className="px-5 py-3 bg-gray-100 text-gray-800 grid grid-cols-myproducts gap-x-4 sm:gap-x-8 font-semibold rounded justify-between text-sm">
               <p className="text-center">Icon</p>
               <p>Product name</p>
               <p className="text-center">Up votes</p>
               <p className="text-center">Status</p>
               <p className="text-center">Actions</p>
            </header>

            <main className="rounded-b-md text-sm">
               {myproducts.isLoading
                  ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} />)
                  : myproducts.data.map((product) => (
                       <TableRow key={product._id} product={product} />
                    ))}
            </main>
         </section>
      </section>
   );
};
export default MyProducts;
