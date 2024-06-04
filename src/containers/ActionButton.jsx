const ActionButton = ({
   icon,
   onClick,
   className = "bg-gray-100 hover:bg-gray-200 text-gray-500",
}) => {
   return (
      <button
         onClick={onClick}
         className={`w-9 h-9 ${className} rounded-full flex items-center justify-center transition-all active:scale-90`}
      >
         {icon}
      </button>
   );
};
export default ActionButton;
