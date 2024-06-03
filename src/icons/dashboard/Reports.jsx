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
            d="M17 9a2.652 2.652 0 0 1-3-3V3H8a2.652 2.652 0 0 0-3 3v12a2.652 2.652 0 0 0 3 3h9a2.652 2.652 0 0 0 3-3V9z"
         />
         <path d="M17 9h3l-6-6v3a2.652 2.652 0 0 0 3 3zm-4.5 1.25a4.25 4.25 0 1 0 4.25 4.25 4.254 4.254 0 0 0-4.25-4.25zm0 1.5a2.711 2.711 0 0 1 1.331.359l-3.723 3.722A2.721 2.721 0 0 1 9.75 14.5a2.753 2.753 0 0 1 2.75-2.75zm0 5.5a2.711 2.711 0 0 1-1.331-.359l3.723-3.722a2.721 2.721 0 0 1 .358 1.331 2.753 2.753 0 0 1-2.75 2.75z" />
      </svg>
   );
};
