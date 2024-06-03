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
            d="M9.48 11.15a4.285 4.285 0 0 0 .77.24v9.52a2.64 2.64 0 0 1-.47-.17l-6-2.67A3 3 0 0 1 2 15.33V8.67a2.955 2.955 0 0 1 .11-.79z"
         />
         <path d="M11.92 9.77a2.268 2.268 0 0 1-1.84 0L2.87 6.56a2.909 2.909 0 0 1 .91-.63l6-2.67a2.966 2.966 0 0 1 2.44 0l6 2.67a2.909 2.909 0 0 1 .91.63z" />
         <path
            className={secondaryColor}
            d="M20 8.67v2.79a.3.3 0 0 1-.4.279 5.4 5.4 0 0 0-1.81-.235 5.531 5.531 0 0 0-5.235 4.672 5.446 5.446 0 0 0 .758 3.693.3.3 0 0 1-.125.434l-1.4.631-.038-.024v-9.52a5.275 5.275 0 0 0 .77-.24l7.37-3.27a2.955 2.955 0 0 1 .11.79z"
         />
         <path d="M18 13a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm1.25 4.5h-.75v.75a.5.5 0 0 1-1 0v-.75h-.75a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h.75v-.75a.5.5 0 0 1 1 0v.75h.75a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5z" />
      </svg>
   );
};
