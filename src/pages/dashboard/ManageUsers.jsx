import { useChangeUserRole, useUsers } from "@hooks/useUser";
import { useAuth } from "@contexts/AuthContext";
import DashboardTitle from "@containers/DashboardTitle";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";
import Button from "@components/Button";

const TableRow = ({ user }) => {
   const auth = useAuth();
   const userRoleMutation = useChangeUserRole(user?._id);
   const changeRole = (role) => userRoleMutation.mutate(role);

   return (
      <div className="px-5 py-3 grid grid-cols-users gap-x-4 sm:gap-x-8  text-gray-800">
         <div className="flex items-center gap-x-4">
            <img src={user?.photoUrl} className="w-12 h-12 border rounded-full"></img>
            <TitleAndSubtitle title={user?.name} subtitle={user?.email} />
         </div>

         <div className="flex items-center justify-center">
            {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
         </div>

         <div className="flex items-center justify-center gap-x-3">
            <span
               className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  false ? "bg-green-500" : "bg-gray-800"
               }`}
            />
            <span>{false ? "Active" : "Inactive"}</span>
         </div>

         <div className="relative flex items-center justify-center gap-x-2 text-gray-500">
            {user?.email !== auth?.user.email ? (
               <div className="relative group">
                  <Button rounded size="small" variant="outlined">
                     Change role
                  </Button>

                  <div className="hidden py-1 group-hover:grid gap-y-1 absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md z-20 whitespace-nowrap border border-gray-100 rounded-md">
                     {user?.role !== "admin" && (
                        <button
                           onClick={() => changeRole("admin")}
                           className="px-4 py-1.5 hover:bg-gray-100 hover:text-gray-800 text-left"
                        >
                           Make Admin
                        </button>
                     )}
                     {user?.role !== "moderator" && (
                        <button
                           onClick={() => changeRole("moderator")}
                           className="px-4 py-1.5 hover:bg-gray-100 hover:text-gray-800 text-left"
                        >
                           Make Moderator
                        </button>
                     )}
                  </div>
               </div>
            ) : (
               "YOU"
            )}
         </div>
      </div>
   );
};

const ManageUsers = () => {
   const { data: users, isLoading } = useUsers();

   return (
      <section className="space-y-10">
         <DashboardTitle title="Manage users" />

         <section className="pb-4 overflow-x-auto">
            <header className="px-5 py-3 bg-gray-100 text-gray-800 grid grid-cols-users gap-x-4 sm:gap-x-8 font-semibold rounded justify-between text-sm">
               <p>User information</p>
               <p className="text-center">Role</p>
               <p className="text-center">Active Status</p>
               <p className="text-center">Action</p>
            </header>

            <main className="rounded-b-md text-sm">
               {isLoading
                  ? Array.from({ length: 5 }).map((_, i) => (
                       <div
                          key={i}
                          className="px-5 py-3 grid grid-cols-users gap-x-4 sm:gap-x-8 items-center text-gray-800"
                       >
                          <div className="flex items-center gap-x-4">
                             <div className="w-12 h-12 rounded-full bg-gray-100 animate-pulse flex-shrink-0"></div>
                             <div className="w-full space-y-2.5">
                                <div className="w-1/2 h-4 bg-gray-100 rounded-md animate-pulse" />
                                <div className="h-4 bg-gray-100 rounded-md animate-pulse" />
                             </div>
                          </div>

                          <div className="h-6 bg-gray-100 rounded-md animate-pulse" />
                          <div className="h-6 bg-gray-100 rounded-md animate-pulse" />

                          <div className="h-10 bg-gray-100 rounded-full animate-pulse" />
                       </div>
                    ))
                  : users.map((user) => <TableRow key={user?._id} user={user} />)}
            </main>
         </section>
      </section>
   );
};
export default ManageUsers;
