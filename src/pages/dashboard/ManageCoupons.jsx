import { useCoupons, useCreateCoupon, useDeleteCoupon, useUpdateCoupon } from "@hooks/useCoupon";
import { Edit } from "@icons";
import { Trash } from "@icons/dashboard";
import { formattedDate } from "@utils/DateTime";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import Button from "@components/Button";
import Plus from "@icons/Plus";
import useVisibility from "@hooks/useVisibility";
import DeleteConfirmationModal from "@containers/modal/ConfirmationModal";
import MutateCouponModal from "@containers/modal/MutateCouponModal";

const TableRow = ({ coupon }) => {
   const deleteModal = useVisibility();
   const updateModal = useVisibility();
   const updateCouponMutation = useUpdateCoupon();
   const deleteCouponMutation = useDeleteCoupon();

   const updateCoupon = (data) => {
      updateCouponMutation.mutate({ id: coupon?._id, data });
      updateModal.hide();
   };

   const deleteCoupon = () => {
      deleteCouponMutation.mutate(coupon?._id);
      updateModal.hide();
   };

   return (
      <>
         <div className="px-5 py-3 grid grid-cols-coupons gap-x-4 sm:gap-x-8">
            <div className="flex items-center text-gray-800 font-medium">{coupon?.code}</div>
            <div className="flex items-center">{coupon?.description}</div>
            <div className="flex items-center justify-center text-gray-800">
               {formattedDate(coupon?.expiryDate)}
            </div>
            <div className="flex items-center justify-center text-gray-800">
               {coupon?.discountType === "percent"
                  ? `${coupon?.discount}%`
                  : `$${coupon?.discount}`}
            </div>
            <div className="flex items-center justify-center gap-x-2">
               <ActionButton onClick={updateModal.show} icon={<Edit className="w-3 h-3" />} />
               <ActionButton onClick={deleteModal.show} icon={<Trash className="w-5 h-5" />} />
            </div>
         </div>

         {updateModal.isVisible && (
            <MutateCouponModal
               title="Update Coupon"
               description="Update coupon information and terms"
               Submitlabel="Update"
               coupon={coupon}
               onSubmit={updateCoupon}
               onCancel={updateModal.hide}
            />
         )}
         {deleteModal.isVisible && (
            <DeleteConfirmationModal onConfirmDelete={deleteCoupon} onCancel={deleteModal.hide} />
         )}
      </>
   );
};

const CreateCouponModal = () => {
   const createCouponMutation = useCreateCoupon();
   const { isVisible, show, hide } = useVisibility();

   const addCoupon = (data) => {
      createCouponMutation.mutate(data);
      hide();
   };

   return (
      <>
         <div className="flex justify-end">
            <Button onClick={show} startIcon={<Plus />} size="small" color="primary">
               Add Coupon
            </Button>
         </div>

         {isVisible && (
            <MutateCouponModal
               title="Add New Coupon"
               description="Create a fresh discount coupon"
               Submitlabel="Update"
               onSubmit={addCoupon}
               onCancel={hide}
            />
         )}
      </>
   );
};

const ManageCoupons = () => {
   const { data: coupons, isLoading } = useCoupons();

   return (
      <section className="space-y-10">
         <DashboardTitle title="Coupons" />

         <div className="space-y-6">
            <CreateCouponModal />

            <section className="overflow-x-auto">
               <header className="px-5 py-3 bg-gray-100 text-gray-800 grid grid-cols-coupons gap-x-4 sm:gap-x-8 font-semibold rounded justify-between text-sm">
                  <p>Coupon Code</p>
                  <p>Description</p>
                  <p className="text-center">Expiry Date</p>
                  <p className="text-center">Discount Amount</p>
                  <p className="text-center">Action</p>
               </header>

               <main className="rounded-b-md text-sm">
                  {isLoading
                     ? Array.from({ length: 5 }).map((_, i) => (
                          <div
                             key={i}
                             className="px-5 py-3 grid grid-cols-coupons gap-x-4 sm:gap-x-8"
                          >
                             {Array.from({ length: 5 }).map((_, j) => (
                                <div
                                   key={i + j}
                                   className="h-6 bg-gray-100 rounded-md animate-pulse"
                                />
                             ))}
                          </div>
                       ))
                     : coupons.map((coupon) => <TableRow key={coupon?._id} coupon={coupon} />)}
               </main>
            </section>
         </div>
      </section>
   );
};
export default ManageCoupons;
