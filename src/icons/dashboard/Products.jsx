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
            d="M10.48 11.15a4.285 4.285 0 0 0 .77.24v9.52a2.64 2.64 0 0 1-.47-.17l-6-2.67A3 3 0 0 1 3 15.33V8.67a2.955 2.955 0 0 1 .11-.79zm9.65-4.59-3.49 1.55-1.82.81-1.9.85a2.268 2.268 0 0 1-1.84 0L3.87 6.56a2.909 2.909 0 0 1 .91-.63l1.89-.84 1.82-.81 2.29-1.02a2.966 2.966 0 0 1 2.44 0l6 2.67a2.909 2.909 0 0 1 .91.63zM21 8.67v6.66a3 3 0 0 1-1.78 2.74l-6 2.67a2.64 2.64 0 0 1-.47.17v-9.52a5.275 5.275 0 0 0 .77-.24l2.36-1.05 1.5-.66 3.51-1.56a2.955 2.955 0 0 1 .11.79z"
         />
         <path d="m16.64 8.11-1.82.81-8.15-3.83 1.82-.81zm.74 1.33v2.45a.75.75 0 1 1-1.5 0V10.1z" />
      </svg>
   );
};
