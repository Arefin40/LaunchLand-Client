import { Link } from "react-router-dom";

const UserMenu = ({ onLogOut, user }) => {
   return (
      <ul className="py-2 z-50 shadow-md rounded-md bg-white border text-sm">
         <div className="mx-2 pb-2 mb-2 flex items-center gap-x-3 border-b">
            <img src={user?.photoURL} className="w-8 h-8 rounded-full border" />
            <h3 className="text-gray-800">{user?.displayName}</h3>
         </div>

         <Link
            to="/dashboard"
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
