import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/AuthContext";
import { Input, Textarea } from "@components/Form";
import useSet from "@hooks/useSet";
import DashboardTitle from "@containers/DashboardTitle";
import ImageInput from "@containers/ImageInput";
import TagsInput from "@containers/TagsInput";
import Button from "@components/Button";

const ProductAddForm = ({ user }) => {
   const [images, addImage, deleteImage] = useSet();
   const [tags, addTag, deleteTag] = useSet();

   const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: "",
         logo: "",
         description: "",
         owner: {
            name: user?.displayName || "",
            photoUrl: user?.photoURL || "",
            email: user?.email || "",
         },
      },
   });

   return (
      <form className="w-full max-w-3xl grid gap-y-8 sm:gap-y-12">
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
                     {...register("logo", {
                        required: "Logo photo url is required",
                     })}
                  />
               </div>

               <img
                  src={watch("logo")}
                  className="w-24 h-24 object-cover rounded-full shadow border border-gray-100 flex-shrink-0"
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

            <TagsInput name="product-tags" tags={tags} addTag={addTag} deleteTag={deleteTag} />

            <ImageInput
               name="product-images"
               images={images}
               addImage={addImage}
               deleteImage={deleteImage}
            />
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
                        errors={errors}
                        {...register("owner.name", {
                           required: "Name is required",
                        })}
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
                        errors={errors}
                        {...register("owner.photoUrl", {
                           required: "Photo url is required",
                        })}
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
                        errors={errors}
                        {...register("owner.email", {
                           required: "Email is required",
                        })}
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className="flex justify-center">
            <Button color="primary" className="w-full max-w-72">
               Submit
            </Button>
         </div>
      </form>
   );
};

const AddNewProduct = () => {
   const { user, isAuthenticating } = useAuth();
   if (!user || isAuthenticating) return;

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
