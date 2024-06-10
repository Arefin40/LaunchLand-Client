import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useProductById, useUpdateProduct } from "@hooks/useProduct";
import { Input, Textarea } from "@components/Form";
import DashboardTitle from "@containers/DashboardTitle";
import ImageInput from "@containers/ImageInput";
import TagsInput from "@containers/TagsInput";
import Button from "@components/Button";

const ProductUpdateForm = () => {
   const { id } = useParams();
   const { data: product } = useProductById(id);
   const navigate = useNavigate();
   const updateProductMutation = useUpdateProduct();
   //prettier-ignore
   const { register, watch, handleSubmit, control, reset, formState: { errors }} = useForm();

   useEffect(() => {
      if (product) {
         const { name, icon, tags, images, tagline, description } = product;
         reset({ name, icon, tags, images, tagline, description });
      }
   }, [product]);

   const onSubmit = (data) => {
      updateProductMutation.mutate({ id: product?._id, data });
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
                  Update your product details from here
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

         <div className="flex justify-center">
            <Button type="submit" color="primary" className="w-full max-w-72">
               Submit
            </Button>
         </div>
      </form>
   );
};

const UpdateProduct = () => {
   return (
      <section className="space-y-10">
         <DashboardTitle title="Update product" />

         <main className="w-full">
            <ProductUpdateForm />
         </main>
      </section>
   );
};
export default UpdateProduct;
