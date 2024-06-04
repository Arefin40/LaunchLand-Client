import { Link, Trash } from "@icons/dashboard";
import Plus from "@icons/Plus";

const ImageInput = ({ name, images, addImage, deleteImage }) => {
   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         e.preventDefault();
         addImage(e.target.value);
         e.target.value = "";
      }
   };

   return (
      <div className="space-y-1">
         <label htmlFor={name} className="text-sm font-medium leading-6 text-gray-900">
            Slider images
         </label>

         <div className="pb-4 space-y-2 max-w-lg">
            {images.map((image, i) => (
               <div key={i} className="flex h-8 items-center gap-x-3 group">
                  <button
                     type="button"
                     onClick={() => deleteImage(image)}
                     className="w-7 h-7 rounded-full bg-gray-50 hover:bg-gray-100 active:scale-75 transition-all flex-shrink-0 flex items-center justify-center"
                  >
                     <Link className="w-4 h-4 group-hover:hidden" />
                     <Trash className="w-4 h-4 hidden group-hover:block" />
                  </button>

                  <p className="text-sm text-gray-900">{image}</p>
               </div>
            ))}
            <div className="flex h-8 items-center gap-x-3">
               <Plus />
               <input
                  type="text"
                  id={name}
                  name={name}
                  enterkeyhint="done"
                  onKeyDown={handleKeyDown}
                  placeholder="add image"
                  className="w-full text-sm text-gray-900 outline-none bg-transparent"
               />
            </div>
         </div>
      </div>
   );
};
export default ImageInput;
