import { Link } from "react-router-dom";

const UserMenu = ({ onLogOut, user }) => {
   const dashboardNavigation = {
      admin: "/dashboard",
      moderator: "/dashboard/product-queue",
      member: "/dashboard/profile",
   };

   return (
      <ul className="py-2 z-50 shadow-md rounded-md bg-white border text-sm">
         <div className="mx-2 pb-2 mb-2 flex items-center gap-x-3 border-b">
            <img src={user?.photoUrl} className="w-8 h-8 rounded-full border" />
            <h3 className="text-gray-800">{user?.name}</h3>
         </div>

         <Link
            to={dashboardNavigation[user?.role] || ""}
            className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 hover:text-gray-800"
         >
            <span>Dashboard</span>
         </Link>

         <button
            onClick={onLogOut}
            className="w-full px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 hover:text-gray-800"
         >
            <span>Log out</span>
         </button>
      </ul>
   );
};
export default UserMenu;
