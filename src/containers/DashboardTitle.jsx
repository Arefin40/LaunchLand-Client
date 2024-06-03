const DashboardTitle = ({ title = "", children }) => {
   return (
      <header className="space-y-1">
         <h1 className="font-bold text-2xl text-gray-700">{title}</h1>
         {children && <p>{children}</p>}
      </header>
   );
};
export default DashboardTitle;
