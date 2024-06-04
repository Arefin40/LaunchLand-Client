import { Trash } from "@icons/dashboard";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";
import Button from "@components/Button";

const Reports = () => {
   return (
      <section className="space-y-10">
         <DashboardTitle title="Reported products" />

         <section className="overflow-x-auto">
            <header className="px-5 py-3 bg-gray-100 text-gray-800 grid grid-cols-queue gap-x-4 sm:gap-x-8 font-semibold rounded justify-between text-sm">
               <p className="text-center">Icon</p>
               <p>Product name</p>
               <p className="text-center">Action</p>
               <p className="text-center">View Details</p>
            </header>

            <main className="rounded-b-md text-sm">
               {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="px-5 py-3 grid grid-cols-queue gap-x-4 sm:gap-x-8">
                     <div className="w-14 h-14 border rounded-md"></div>
                     <TitleAndSubtitle title="Product name" subtitle="Product tagline" />
                     <div className="flex items-center justify-center gap-x-3">
                        <ActionButton icon={<Trash />} />
                     </div>
                     <div className="flex justify-center items-center">
                        <Button size="small" variant="outlined">
                           View details
                        </Button>
                     </div>
                  </div>
               ))}
            </main>
         </section>
      </section>
   );
};
export default Reports;
