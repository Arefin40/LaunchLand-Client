const ActionButton = ({ icon, onClick }) => {
   return (
      <button
         onClick={onClick}
         className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-all active:scale-90"
      >
         {icon}
      </button>
   );
};
export default ActionButton;
