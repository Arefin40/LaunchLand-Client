import { Link } from "react-router-dom";
import usePagination from "@hooks/usePagination";
import ClassNames from "@utils/ClassNames";

const PaginationDot = ({ size = "w-8 h-8" }) => {
   return (
      <div className={`${size} rounded-md flex items-center justify-center text-gray-500`}>
         <svg viewBox="0 0 24 24" className="mt-0.5 w-4 h-4 fill-current">
            <circle cx="2.2" cy="12" r="2.2" />
            <circle cx="12" cy="12" r="2.2" />
            <circle cx="21.8" cy="12" r="2.2" />
         </svg>
      </div>
   );
};

const PaginationItem = ({
   to,
   pageIndex,
   currentPage,
   size = "w-8 h-8",
   className = "rounded-md text-sm font-medium",
   activeClass = "bg-primary-50 text-primary-500",
}) => {
   const itemClasses = ClassNames({
      [size]: true,
      [className]: true,
      [activeClass]: currentPage === pageIndex,
   });

   return (
      <Link to={to} className={`${itemClasses} flex items-center justify-center`}>
         {pageIndex}
      </Link>
   );
};

const PaginationNavigationButton = ({
   onClick,
   size = "w-8 h-8",
   className = "bg-gray-100",
   itemClass = "rounded font-medium hover:bg-gray-200",
}) => {
   return (
      <button
         onClick={onClick}
         className={`${size} flex items-center justify-center ${itemClass} ${className} cursor-pointer select-none focus:outline-none transform active:scale-95`}
      >
         <svg
            viewBox="0 0 24 24"
            className="w-3 h-3 flex-shrink-0 fill-current transform rounded-180 repeated"
         >
            <path d="M18.2 11.2L7.5.4C7-.1 6.3-.1 5.8.3c0 0-.1 0-.1.1-.4.4-.4 1.1 0 1.6 0 0 0 .1.1.1l9.9 9.9-9.9 10c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l10.8-10.8c.4-.5.4-1.2-.1-1.7.1 0 .1 0 0 0z" />
         </svg>
      </button>
   );
};

const Pagination = ({
   edge = 1,
   siblings = 1,
   totalPages = 10,
   currentPage = 1,
   hideDots = false,
   size = "w-8 h-8",
   className = "gap-x-1.5 text-gray-700",
   itemClass = "rounded-lg font-medium hover:bg-gray-200",
   buttonClass = "bg-gray-100 text-gray-600",
   activeClass = "bg-teal-400 hover:bg-teal-400 text-white",
   goToPage,
}) => {
   currentPage = currentPage || 1;
   const pattern = usePagination({ currentPage, totalPages, edge, siblings, hideDots });

   return (
      <div className="inline-grid grid-flow-col justify-center items-center gap-x-3 text-sm">
         <PaginationNavigationButton
            size={size}
            itemclassName={itemClass}
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            className={`${buttonClass} rotate-180`}
         />

         <div className={`hidden sm:grid grid-flow-col ${className}`}>
            {pattern.map((key, i) => {
               return key !== null ? (
                  <PaginationItem
                     key={i}
                     to={`/products/${key}`}
                     pageIndex={key}
                     activeclassName={activeClass}
                     currentPage={currentPage}
                  />
               ) : (
                  <PaginationDot key={i} size={size} itemclassName={itemClass} />
               );
            })}
         </div>

         <PaginationNavigationButton
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            size={size}
            itemclassName={itemClass}
            className={buttonClass}
         />
      </div>
   );
};
export default Pagination;
