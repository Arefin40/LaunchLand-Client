import { Edit } from "@icons";
import { Trash } from "@icons/dashboard";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import Status from "@containers/Status";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";

const MyProducts = () => {
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
               {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="px-5 py-3 grid grid-cols-myproducts gap-x-4 sm:gap-x-8">
                     <div className="w-14 h-14 border rounded-md"></div>
                     <TitleAndSubtitle title="Product name" subtitle="Product tagline" />
                     <div className="flex items-center justify-center">5173</div>
                     <Status status="pending" />

                     <div className="flex items-center justify-center gap-x-2">
                        <ActionButton icon={<Edit className="w-3 h-3" />} />
                        <ActionButton icon={<Trash className="w-5 h-5" />} />
                     </div>
                  </div>
               ))}
            </main>
         </section>
      </section>
   );
};
export default MyProducts;
