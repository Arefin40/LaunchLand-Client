import { useForm } from "react-hook-form";
import { Input, Textarea } from "@components/Form";
import DashboardTitle from "@containers/DashboardTitle";
import ImageInput from "@containers/ImageInput";
import TagsInput from "@containers/TagsInput";
import Button from "@components/Button";
import { useEffect } from "react";
import { useLoggedUser } from "@hooks/useUser";
import { useCreateProduct } from "@hooks/useProduct";
import { useNavigate } from "react-router-dom";

const ProductAddForm = ({ user }) => {
   const navigate = useNavigate();
   const createProductMutation = useCreateProduct();
   //prettier-ignore
   const { register, watch, handleSubmit, control, reset, formState: { errors }} = useForm();

   // retrieve formData from sessionStorage
   useEffect(() => {
      const formData = sessionStorage.getItem("product-form-data");
      if (formData) reset(JSON.parse(formData));
   }, [reset]);

   // auto save formData to sessionStorage
   useEffect(() => {
      const subscription = watch((data) => {
         sessionStorage.setItem("product-form-data", JSON.stringify(data));
      });
      return () => subscription.unsubscribe();
   }, [watch]);

   const onSubmit = (data) => {
      createProductMutation.mutate(data);
      sessionStorage.removeItem("product-form-data");
      navigate("/dashboard/products");
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl grid gap-y-8 sm:gap-y-12">
         <div className="space-y-6">
            <div className="pb-6 border-b border-gray-100">
               <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Product Information
               </h3>
               <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Introduce your product to the world
               </p>
            </div>

            <div className="flex gap-x-4 items-center">
               <div className="space-y-1 w-full">
                  <label htmlFor="logo" className="text-sm font-medium leading-6 text-gray-900">
                     Product logo
                  </label>
                  <Input
                     placeholder="Enter product logo url"
                     spellCheck={false}
                     errors={errors}
                     {...register("icon", {
                        required: "Icon is required",
                     })}
                  />
               </div>

               <img
                  src={watch("icon")}
                  className="p-2 w-24 h-24 rounded-md shadow border border-gray-100 flex-shrink-0 object-cover object-center"
               />
            </div>

            <div className="grid sm:grid-cols-2 gap-y-6 sm:gap-4">
               <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium leading-6 text-gray-900">
                     Name
                  </label>
                  <Input
                     placeholder="Enter product name"
                     spellCheck={false}
                     errors={errors}
                     {...register("name", {
                        required: "Product name is required",
                     })}
                  />
               </div>

               <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium leading-6 text-gray-900">
                     Tagline
                  </label>
                  <Input
                     placeholder="Enter product tagline"
                     className="sm:col-span-2"
                     spellCheck={false}
                     errors={errors}
                     {...register("tagline", {
                        required: "Product tagline is required",
                     })}
                  />
               </div>
            </div>

            <div className="space-y-1">
               <label htmlFor="description" className="text-sm font-medium leading-6 text-gray-900">
                  Description
               </label>
               <Textarea
                  placeholder="Write about your product"
                  spellCheck={false}
                  errors={errors}
                  {...register("description", {
                     required: "Description is required",
                  })}
               />
            </div>

            <div>
               <TagsInput name="tags" control={control} />
               {errors.tags && (
                  <small className="text-sm text-rose-500">{errors.tags.message}</small>
               )}
            </div>

            <ImageInput name="images" control={control} />
         </div>

         <div>
            <div>
               <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Owner Information
               </h3>
               <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Product owner information
               </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
               <div className="divide-y divide-gray-100">
                  <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                     <label
                        htmlFor="owner.name"
                        className="text-sm font-medium leading-6 text-gray-900"
                     >
                        Full name
                     </label>
                     <Input
                        disabled
                        placeholder="Enter your name"
                        className="sm:col-span-2"
                        spellCheck={false}
                        value={user?.name}
                     />
                  </div>

                  <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                     <label
                        htmlFor="owner.photoUrl"
                        className="text-sm font-medium leading-6 text-gray-900"
                     >
                        Photo url
                     </label>
                     <Input
                        disabled
                        type="url"
                        placeholder="Enter your photo url"
                        className="sm:col-span-2"
                        value={user?.photoUrl}
                     />
                  </div>

                  <div className="py-6 grid sm:grid-cols-3 gap-y-1 sm:gap-4 sm:px-0 sm:items-center">
                     <label
                        htmlFor="owner.email"
                        className="text-sm font-medium leading-6 text-gray-900"
                     >
                        Email address
                     </label>
                     <Input
                        disabled
                        placeholder="Enter your email"
                        className="sm:col-span-2"
                        spellCheck={false}
                        value={user?.email}
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className="flex justify-center">
            <Button type="submit" color="primary" className="w-full max-w-72">
               Submit
            </Button>
         </div>
      </form>
   );
};

const AddNewProduct = () => {
   const { data: user, isLoading } = useLoggedUser();
   if (!user || isLoading) return;

   return (
      <section className="space-y-10">
         <DashboardTitle title="Lauch product" />

         <main className="w-full">
            <ProductAddForm user={user} />
         </main>
      </section>
   );
};
export default AddNewProduct;
