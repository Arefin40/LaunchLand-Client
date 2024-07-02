import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import { useVisibility } from "@hooks";
import Drawer from "@components/Drawer";
import Menu from "@icons/Menu";
import Avatar from "@components/Avatar";
import UserMenu from "./UserMenu";
import { useLoggedUser } from "@hooks/useUser";

const Header = () => {
   const { signOut } = useAuth();
   const { data: user } = useLoggedUser();
   const { isVisible, toggle, hide } = useVisibility(false);

   const navigations = [
      {
         path: "/",
         label: "Home",
      },
      {
         path: "/products",
         label: "Products",
      },
      {
         path: "/contact",
         label: "Contact us",
      },
   ];

   return (
      <header className="w-full sticky inset-x-0 top-0 z-40 bg-white border-b">
         <section className="px-5 sm:px-8 h-16 lg:h-auto lg:py-5 mx-auto container flex items-center justify-between">
            <div className="w-full max-w-48 sm:max-w-64 flex items-center gap-x-3">
               <button onClick={toggle} className="lg:hidden active:scale-90 transition-all">
                  <Menu />
               </button>

               <Link to="/" className="flex items-center gap-x-3">
                  <h1 className="w-9 h-9 hidden sm:flex items-center justify-center font-bold text-white text-2xl rounded-full bg-primary-600 shrink-0">
                     L
                  </h1>
                  <h1 className="text-2xl font-extrabold flex-shrink-0 text-primary-500">
                     <span>LaunchLand</span>
                  </h1>
               </Link>
            </div>

            <Drawer
               open={isVisible}
               onClose={hide}
               className="top-16 lg:static flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-full lg:max-w-none lg:translate-x-0 border-t lg:border-0"
            >
               <ul className="p-6 lg:p-0 text-base grid lg:flex lg:justify-center items-center gap-x-12 gap-y-6 font-medium text-gray-700">
                  {navigations.map(({ path, label }) => (
                     <NavLink
                        to={path}
                        key={path}
                        onClick={hide}
                        className={({ isActive }) => (isActive ? "text-primary-500" : "")}
                     >
                        {label}
                     </NavLink>
                  ))}
               </ul>
            </Drawer>

            <div className="w-full max-w-48 sm:max-w-64 flex items-center gap-x-3 justify-end">
               {user ? (
                  <div className="relative flex-shrink-0 group">
                     <Avatar src={user?.photoUrl} size="w-10 h-10" />

                     <div className="hidden group-hover:block absolute right-0 pt-7 top-3/4 w-48">
                        <UserMenu user={user} onLogOut={signOut} />
                     </div>
                  </div>
               ) : (
                  <Link
                     to="/login"
                     className="px-4 py-1.5 flex items-center gap-x-3 bg-primary-50 text-primary-600 rounded-md"
                  >
                     <span>Log in</span>
                  </Link>
               )}
            </div>
         </section>
      </header>
   );
};

export default Header;
