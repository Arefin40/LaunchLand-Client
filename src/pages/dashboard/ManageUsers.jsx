import DashboardTitle from "@containers/DashboardTitle";
import TitleAndSubtitle from "@containers/TitleAndSubtitle";
import Button from "@components/Button";

const ManageUsers = () => {
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
               {Array.from({ length: 5 }).map((_, i) => (
                  <div
                     key={i}
                     className="px-5 py-3 grid grid-cols-users gap-x-4 sm:gap-x-8  text-gray-800"
                  >
                     <div className="flex items-center gap-x-4">
                        <div className="w-12 h-12 border rounded-full"></div>
                        <TitleAndSubtitle title="user name" subtitle="user@email.com" />
                     </div>

                     <div className="flex items-center justify-center">Member</div>

                     <div className="flex items-center justify-center gap-x-3">
                        <span
                           className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              false ? "bg-green-500" : "bg-gray-800"
                           }`}
                        />
                        <span>{false ? "Active" : "Inactive"}</span>
                     </div>

                     <div className="relative flex items-center justify-center gap-x-2 text-gray-500">
                        <div className="relative group">
                           <Button rounded size="small" variant="outlined">
                              Change role
                           </Button>

                           <div className="hidden py-1 group-hover:grid gap-y-1 absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md z-20 whitespace-nowrap border border-gray-100 rounded-md">
                              <button className="px-4 py-1.5 hover:bg-gray-100 hover:text-gray-800 text-left">
                                 Make Admin
                              </button>
                              <button className="px-4 py-1.5 hover:bg-gray-100 hover:text-gray-800 text-left">
                                 Make Moderator
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </main>
         </section>
      </section>
   );
};
export default ManageUsers;
