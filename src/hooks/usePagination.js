/**
 * Returns first value of the center section
 */
const getIndex = (currentPage, count, edge, beforeCenter) => {
   if (currentPage <= beforeCenter + 1) return edge + 2;
   if (currentPage >= count - beforeCenter) return count - beforeCenter - 1;
   return currentPage - edge;
};

const usePagination = ({
   currentPage = 1,
   totalPages = 10,
   edge = 1,
   siblings = 1,
   hideDots = false,
}) => {
   const dots = !hideDots ? 2 : 0;
   const totalPlaces = edge * 2 + siblings * 2 + dots + 1;
   const beforeCenter = edge + siblings + 1;

   let pattern = new Array(totalPlaces);

   // totalPlaces can't be greater than count
   if (totalPlaces > totalPages) return Array.from({ length: totalPages }, (_, i) => i + 1);

   // generates: start and end [(1),---, (10)]
   for (let i = 1; i <= edge; i++) {
      pattern[i - 1] = i;
      pattern[totalPlaces - i] = totalPages - i + 1;
   }

   // generates: dots or number [-, (2/dot),---,(9/dot), -]
   pattern[edge] = currentPage <= beforeCenter + 1 ? edge + 1 : null;
   pattern[totalPlaces - (edge + 1)] =
      currentPage >= totalPages - beforeCenter ? totalPages - edge : null;

   // generates: center along with siblings [---, (4,5,6) ,---]
   const index = getIndex(currentPage, totalPages, edge, beforeCenter);
   for (let i = 0; i < siblings * 2 + 1; i++) {
      pattern[edge + i + 1] = index + i;
   }

   return pattern;
};
export default usePagination;
