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
            d="M21 5a29.088 29.088 0 0 1-8.983-3A29.729 29.729 0 0 1 3 5v5.889c0 6.667 5.667 10 9 11.111 3.333-1.111 9-4.444 9-11.111z"
         />
         <path d="M9.856 9.65a2.15 2.15 0 1 1 2.15 2.15 2.152 2.152 0 0 1-2.15-2.15zM12.642 13h-1.284A2.687 2.687 0 0 0 8.5 15.7v.3a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-.3a2.687 2.687 0 0 0-2.858-2.7z" />
      </svg>
   );
};
