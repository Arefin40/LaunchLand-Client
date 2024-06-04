import Cross from "@icons/Cross";

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

const TagsInput = ({ name, tags, addTag, deleteTag }) => {
   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         e.preventDefault();
         addTag(e.target.value);
         e.target.value = "";
      }
   };

   return (
      <div className="space-y-1">
         <label htmlFor={name} className="text-sm font-medium leading-6 text-gray-900">
            Tags
         </label>

         <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag) => (
               <Tag key={tag} onDelete={() => deleteTag(tag)}>
                  {tag}
               </Tag>
            ))}

            <input
               type="text"
               id={name}
               name={name}
               enterkeyhint="done"
               placeholder="add tag"
               onKeyDown={handleKeyDown}
               className="ml-2 text-sm text-gray-900 outline-none bg-transparent"
            />
         </div>
      </div>
   );
};
export default TagsInput;
