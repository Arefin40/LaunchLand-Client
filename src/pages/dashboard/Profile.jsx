import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUpdateUser, useLoggedUser } from "@hooks/useUser";
import { Input } from "@components/Form";
import Button from "@components/Button";
import DashboardTitle from "@containers/DashboardTitle";
import { useEffect } from "react";

const Profile = () => {
   const [editable, setEditable] = useState(false);
   const { data: user } = useLoggedUser();
   const updateInfoMutation = useUpdateUser(user?._id);
   const { register, setValue, handleSubmit, formState: { errors } } = useForm(); // prettier-ignore

   useEffect(() => {
      if (user) {
         setValue("name", user.name);
         setValue("photoUrl", user.photoUrl);
      }
   }, [user]);

   const updateInfo = (data) => {
      if (data.name !== user.name || data.photoUrl !== user.photoUrl)
         updateInfoMutation.mutate(data);
   };

   return (
      <section className="space-y-10">
         <DashboardTitle title="Profile" />

         <main className="w-full">
            <div className="w-full max-w-3xl grid gap-y-8 sm:gap-y-12">
               <form onSubmit={handleSubmit(updateInfo)}>
                  <div className="flex items-center justify-between gap-y-1 sm:gap-4 sm:px-0 sm:items-center flex-wrap">
                     <div>
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                           Personal Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                           Personal info and options to manage it.
                        </p>
                     </div>

                     <Button
                        type={editable ? "button" : "submit"}
                        onClick={() => setEditable((prev) => !prev)}
                        size="small"
                        variant="outlined"
                        className="mt-1 sm:mt-0 px-6"
                     >
                        {editable ? "Save" : "Edit"}
                     </Button>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                     <div className="divide-y divide-gray-100">
                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <label
                              htmlFor="name"
                              className="text-sm font-medium leading-6 text-gray-900"
                           >
                              Full name
                           </label>
                           <Input
                              placeholder="Enter your name"
                              className="sm:col-span-2"
                              spellCheck={false}
                              hideBorder={!editable}
                              disabled={!editable}
                              errors={errors}
                              {...register("name", {
                                 required: "Name is required",
                              })}
                           />
                        </div>

                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <label
                              htmlFor="photoUrl"
                              className="text-sm font-medium leading-6 text-gray-900"
                           >
                              Photo url
                           </label>
                           <Input
                              type="url"
                              placeholder="Enter your photo url"
                              className="sm:col-span-2"
                              errors={errors}
                              hideBorder={!editable}
                              disabled={!editable}
                              {...register("photoUrl", {
                                 required: "Photo url is required",
                              })}
                           />
                        </div>

                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <h3 className="text-sm font-medium leading-6 text-gray-900">
                              Email address
                           </h3>
                           <p className="mt-1 px-3 max-w-2xl text-sm leading-6 text-gray-900">
                              {user?.email}
                           </p>
                        </div>
                     </div>
                  </div>
               </form>

               <div>
                  <div>
                     <h3 className="text-base font-semibold leading-7 text-gray-900">Membership</h3>
                     <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Join with us to enjoy premium features
                     </p>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                     <div className="divide-y divide-gray-100">
                        <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                           <h3 className="text-sm font-medium leading-6 text-gray-900">Status</h3>
                           {!true ? (
                              <p className="p-3 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 tracking-wider">
                                 Verified
                              </p>
                           ) : (
                                 <Button
                                    variant="text"
                                    color="primary"
                                    className="justify-self-start"
                                 >
                                    Subscribe now
                                 </Button>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </section>
   );
};
export default Profile;
