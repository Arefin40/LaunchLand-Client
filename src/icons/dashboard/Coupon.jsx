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
            d="M19 12a2.006 2.006 0 0 0 2 2v3a2.652 2.652 0 0 1-3 3H6a2.652 2.652 0 0 1-3-3v-3a2 2 0 0 0 0-4V7a2.652 2.652 0 0 1 3-3h12a2.652 2.652 0 0 1 3 3v3a2.006 2.006 0 0 0-2 2z"
         />
         <path d="m12.454 8.28.917 1.844a.473.473 0 0 0 .357.257l2.116.3a.469.469 0 0 1 .262.8l-1.53 1.48a.47.47 0 0 0-.137.417l.351 2.026a.505.505 0 0 1-.734.53l-1.836-.957a.475.475 0 0 0-.44 0l-1.834.957a.507.507 0 0 1-.735-.532l.35-2.024a.47.47 0 0 0-.137-.417l-1.53-1.48a.469.469 0 0 1 .262-.8l2.116-.3a.473.473 0 0 0 .357-.257l.917-1.844a.508.508 0 0 1 .908 0z" />
      </svg>
   );
};
