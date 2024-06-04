import { Outlet, NavLink, useLocation } from "react-router-dom";
import { AddProduct, ManageProducts, ManageUser, Products, Reports, User } from "@icons/dashboard";
import { Menu } from "@icons";
import Drawer from "@components/Drawer";
import useVisibility from "@hooks/useVisibility";

const DashboardLayout = () => {
   const { isVisible, toggle, hide } = useVisibility();
   const role = "admin";

   const navigations = {
      admin: [
         {
            icon: ManageUser,
            path: "manage-users",
            label: "Manage Users",
         },
      ],
      moderator: [
         {
            icon: ManageProducts,
            path: "product-queue",
            label: "Products Queue",
         },
         {
            icon: Reports,
            path: "reported-contents",
            label: "Reported Contents",
         },
      ],
      user: [
         {
            icon: User,
            path: "profile",
            label: "My Profile",
         },
         {
            icon: Products,
            path: "products",
            label: "My Products",
         },
         {
            icon: AddProduct,
            path: "add-product",
            label: "Add Product",
         },
      ],
   };

   const location = useLocation();
   const isActivePath = (path) => location.pathname === path;

   return (
      <>
         <section className="relative grid lg:grid-cols-[16rem,1fr]">
            <div className="hidden lg:block w-96 h-96 fixed top-0 right-0 rounded-full bg-orange-100 -z-10 blur-3xl bg-opacity-5 pointer-events-none" />
            <div className="hidden lg:block w-96 h-96 fixed bottom-0 left-0 translate-x-1/4 translate-y-1/4 rounded-full bg-yellow-100 -z-10 pointer-events-none blur-3xl bg-opacity-5" />
            <div className="fixed top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-200/10 to-orange-50/10"></div>

            <div className="p-4 sm:p-6 lg:hidden h-16 sticky top-0 flex items-center justify-between border bg-white z-50">
               <h1 className="font-bold text-2xl text-primary-500">
                  <span>ProductHunt</span>
               </h1>

               <button onClick={toggle}>
                  <Menu className="w-5 h-5" />
               </button>
            </div>

            <Drawer
               open={isVisible}
               onClose={hide}
               className="p-5 lg:p-8 top-16 lg:top-0 lg:h-screen lg:w-64 lg:fixed lg:translate-x-0 z-50 border-r border-gray-100 lg:!bg-[#fffaf6b0]"
            >
               <div className="hidden lg:flex items-center gap-x-3">
                  <h1 className="w-8 h-8 flex items-center justify-center font-bold text-white text-xl rounded-full bg-primary-600 shrink-0">
                     P
                  </h1>
                  <h1 className="font-bold text-2xl text-primary-500">
                     <span>ProductHunt</span>
                  </h1>
               </div>

               <div className="lg:mt-10 space-y-8">
                  {navigations[role].map(({ icon: Icon, path, label }) => (
                     <div
                        key={path}
                        className="flex items-center gap-x-4 font-medium text-gray-700"
                     >
                        <Icon />
                        <NavLink
                           end
                           to={`/dashboard/${path}`}
                           className={({ isActive }) => (isActive ? "text-primary-500" : "")}
                        >
                           {label}
                        </NavLink>
                     </div>
                  ))}
               </div>
            </Drawer>

            <main className="min-w-0 relative p-4 sm:p-6 lg:p-8 lg:col-start-2">
               <Outlet />
            </main>
         </section>
      </>
   );
};
export default DashboardLayout;
