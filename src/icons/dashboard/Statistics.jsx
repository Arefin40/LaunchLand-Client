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
            d="M12.5 21h-1a1.326 1.326 0 0 1-1.5-1.5v-15A1.326 1.326 0 0 1 11.5 3h1A1.326 1.326 0 0 1 14 4.5v15a1.326 1.326 0 0 1-1.5 1.5z"
         />
         <path d="M19.5 21h-1a1.326 1.326 0 0 1-1.5-1.5v-10A1.326 1.326 0 0 1 18.5 8h1A1.326 1.326 0 0 1 21 9.5v10a1.326 1.326 0 0 1-1.5 1.5zm-14 0h-1A1.326 1.326 0 0 1 3 19.5v-6A1.326 1.326 0 0 1 4.5 12h1A1.326 1.326 0 0 1 7 13.5v6A1.326 1.326 0 0 1 5.5 21z" />
      </svg>
   );
};
