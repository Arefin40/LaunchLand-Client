import { Edit } from "@icons";
import { Trash } from "@icons/dashboard";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import Button from "@components/Button";
import Plus from "@icons/Plus";

const ManageCoupons = () => {
   return (
      <section className="space-y-10">
         <DashboardTitle title="Coupons" />

         <div className="space-y-6">
            <div className="flex justify-end">
               <Button startIcon={<Plus />} size="small" color="primary">
                  Add Coupon
               </Button>
            </div>

            <section className="overflow-x-auto">
               <header className="px-5 py-3 bg-gray-100 text-gray-800 grid grid-cols-coupons gap-x-4 sm:gap-x-8 font-semibold rounded justify-between text-sm">
                  <p className="text-center">Coupon Code</p>
                  <p>Description</p>
                  <p className="text-center">Expiry Date</p>
                  <p className="text-center">Discount Amount</p>
                  <p className="text-center">Action</p>
               </header>

               <main className="rounded-b-md text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                     <div key={i} className="px-5 py-3 grid grid-cols-coupons gap-x-4 sm:gap-x-8">
                        <div className="flex justify-center items-center text-gray-800 font-medium">
                           HUNT24
                        </div>
                        <div className="flex items-center">Flat 24% discount</div>
                        <div className="flex items-center justify-center">Jul 20, 2024</div>
                        <div className="flex items-center justify-center">24%</div>
                        <div className="flex items-center justify-center gap-x-2">
                           <ActionButton icon={<Edit className="w-3 h-3" />} />
                           <ActionButton icon={<Trash className="w-5 h-5" />} />
                        </div>
                     </div>
                  ))}
               </main>
            </section>
         </div>
      </section>
   );
};
export default ManageCoupons;
