const SectionTitle = ({ title = "", className = "" }) => {
   return (
      <div className={`mb-6 ${className}`}>
         <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">{title}</h1>
      </div>
   );
};
export default SectionTitle;
