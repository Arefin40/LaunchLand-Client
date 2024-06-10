import { useReportedProducts, useSettleReport } from "@hooks/useProduct";
import { Trash } from "@icons/dashboard";
import DashboardTitle from "@containers/DashboardTitle";
import ActionButton from "@containers/ActionButton";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";
import Button from "@components/Button";
import useVisibility from "@hooks/useVisibility";
import DeleteConfirmationModal from "@containers/modal/ConfirmationModal";

const TableRow = ({ report }) => {
   const deleteModal = useVisibility();
   const settleReportMuation = useSettleReport();

   const settleReport = () => {
      deleteModal.hide();
      settleReportMuation.mutate(report._id);
   };

   return (
      <>
         <div className="px-5 py-3 grid grid-cols-queue gap-x-4 sm:gap-x-8">
            <img
               src={report.product.icon}
               className="w-14 h-14 rounded-md object-cover object-center"
            />
            <TitleAndSubtitle title={report.product.name} subtitle={report.product.tagline} />
            <div className="flex items-center justify-center gap-x-3">
               <ActionButton onClick={deleteModal.show} icon={<Trash />} />
            </div>
            <div className="flex justify-center items-center">
               <Button to={`/product/${report.product._id}`} size="small" variant="outlined">
                  View details
               </Button>
            </div>
         </div>

         {deleteModal.isVisible && (
            <DeleteConfirmationModal onConfirmDelete={settleReport} onCancel={deleteModal.hide} />
         )}
      </>
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
         <div className="flex justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
         </div>
         <div className="flex justify-center items-center">
            <div className="w-3/4 h-8 rounded-md bg-gray-100 animate-pulse" />
         </div>
      </div>
   );
};

const Reports = () => {
   const reportedProducts = useReportedProducts();

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
               {reportedProducts.isLoading
                  ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} />)
                  : reportedProducts.data.map((report) => (
                       <TableRow key={report._id} report={report} />
                    ))}
            </main>
         </section>
      </section>
   );
};
export default Reports;
