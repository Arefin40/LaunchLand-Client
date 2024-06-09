import ClassNames from "@utils/ClassNames";

const LoadingBar = ({
   className = "",
   origin = "center",
   color = "bg-white",
   size = "w-[1.875rem] h-9 gap-x-2",
}) => {
   const classes = ClassNames({
      "items-start": origin === "start",
      "items-center": origin === "center",
      "items-end": origin === "end",
   });
   return (
      <div className={`loading ${size} inline-grid ${className} grid-cols-3 ${classes}`}>
         {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={`${color} rounded-full`} />
         ))}
      </div>
   );
};
export default LoadingBar;
