export default ({ isActive, className = "w-6 h-6" }) => {
   const primaryColor = isActive ? "text-primary-500" : "text-gray-500";
   const secondaryColor = isActive ? "text-primary-500/30" : "text-gray-600/30";

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} ${primaryColor} fill-current`}
      >
         <circle cx="10.009" cy="6.5" r="4" />
         <path
            className={secondaryColor}
            d="M16.057 14.18a.309.309 0 0 1-.087.21l-4.03 4.05a1.5 1.5 0 0 0-.44 1.06v1.7a.324.324 0 0 1-.09.215.272.272 0 0 1-.21.09H6c-2.29 0-3.5-1.2-3.5-3.48 0-2.55 1.44-5.52 5.5-5.52h4a5.356 5.356 0 0 1 3.93 1.44.4.4 0 0 1 .127.235z"
         />
         <path d="M20.038 17.481 15.5 22H13v-2.5l4.519-4.539zm1.67-3.069-1.12-1.12a1 1 0 0 0-1.41 0l-.959.97 2.519 2.519.97-.959a1 1 0 0 0 0-1.41z" />
      </svg>
   );
};
