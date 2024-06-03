export default ({ isActive, className = "w-6 h-6" }) => {
   const primaryColor = isActive ? "text-primary-500" : "text-gray-500";
   const secondaryColor = isActive ? "text-primary-500/30" : "text-gray-600/30";

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} ${primaryColor} fill-current`}
      >
         <path
            className={secondaryColor}
            d="M20.92 10h-8.17V3h-1.5v7H3.08A8.436 8.436 0 0 0 3 11.12V18a2.652 2.652 0 0 0 3 3h12a2.652 2.652 0 0 0 3-3v-6.88a8.436 8.436 0 0 0-.08-1.12z"
         />
         <path d="M7.26 3h3.99v7H3.08a8.32 8.32 0 0 1 .23-1.08l1.07-3.74C4.75 3.89 5 3 7.26 3zm13.66 7h-8.17V3h3.99c2.26 0 2.51.89 2.88 2.18l1.07 3.74a8.32 8.32 0 0 1 .23 1.08zm-9.753 7.75a.744.744 0 0 1-.53-.22L8.97 15.864a.75.75 0 1 1 1.06-1.064l1.137 1.136 2.8-2.8A.75.75 0 0 1 15.03 14.2l-3.33 3.33a.744.744 0 0 1-.533.22z" />
      </svg>
   );
};
