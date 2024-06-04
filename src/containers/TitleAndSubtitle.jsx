const TitleAndSubtitle = ({ title = "", subtitle = "", className = "gap-y-1" }) => {
   return (
      <div className={`grid content-center ${className}`}>
         <h1 className="font-semibold text-gray-800">{title}</h1>
         <p className="text-gray-400">{subtitle}</p>
      </div>
   );
};
export default TitleAndSubtitle;
