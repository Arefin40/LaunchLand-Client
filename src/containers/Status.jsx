import ClassNames from "@utils/ClassNames";

const Status = ({ status }) => {
   const statusClasses = ClassNames({
      "bg-[#ffe5e4] text-[#6b0b0c]": status === "rejected",
      "bg-[#e5f1ff] text-[#04123b]": status === "pending",
      "bg-[#ecfdf5] text-[#0a402d]": status === "accepted",
   });
   return (
      <div className="flex items-center justify-center">
         <span className={`px-3 py-1 rounded-md text-xs font-medium ${statusClasses}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
         </span>
      </div>
   );
};
export default Status;
