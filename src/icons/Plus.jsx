export default ({ className = "w-4 h-4" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className={`fill-current ${className}`}
      >
         <path d="M256 439.98c-13.81 0-25-11.19-25-25V97.02c0-13.81 11.19-25 25-25s25 11.19 25 25v317.96c0 13.81-11.19 25-25 25z" />
         <path d="M414.98 281H97.02c-13.81 0-25-11.19-25-25s11.19-25 25-25h317.96c13.81 0 25 11.19 25 25s-11.19 25-25 25z" />
      </svg>
   );
};
