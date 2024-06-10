import Cross from "@icons/Cross";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";

const Tag = ({ children, className = "", onDelete }) => {
   return (
      <div
         className={`${className} px-2 py-1 flex items-center gap-x-1 bg-gray-100 rounded text-sm`}
      >
         <span className="text-gray-700">{children}</span>
         <button
            type="button"
            onClick={onDelete}
            className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-200 active:scale-75 transition-all "
         >
            <Cross className="w-2 h-2" />
         </button>
      </div>
   );
};

const TagsInputBase = forwardRef(({ name, value = [], onChange, onBlur }, ref) => {
   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         e.preventDefault();
         const inputValue = e.target.value;
         e.target.value = "";
         onChange([...value, inputValue.trim()]);
      }
   };

   const handleDelete = (tag) => {
      onChange(value.filter((t) => t !== tag));
   };

   return (
      <div className="space-y-1">
         <label htmlFor={name} className="text-sm font-medium leading-6 text-gray-900">
            Tags
         </label>

         <div className="flex items-center gap-2 flex-wrap">
            {value.map((tag) => (
               <Tag key={tag} onDelete={() => handleDelete(tag)}>
                  {tag}
               </Tag>
            ))}

            <input
               type="text"
               ref={ref}
               id={name}
               name={name}
               enterKeyHint="done"
               placeholder="add tag"
               onKeyDown={handleKeyDown}
               onBlur={onBlur}
               className="ml-2 text-sm text-gray-900 outline-none bg-transparent"
            />
         </div>
      </div>
   );
});

const TagsInput = ({ control, name }) => {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={[]}
         rules={{ validate: (value) => value.length > 0 || "At least one tag is required" }}
         render={({ field }) => (
            <TagsInputBase
               name={name}
               ref={field.ref}
               value={field.value || []}
               onChange={field.onChange}
               onBlur={field.onBlur}
            />
         )}
      />
   );
};

export default TagsInput;
