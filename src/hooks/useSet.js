import { useState } from "react";

const useUniqueList = (initialState = []) => {
   initialState = Array.from(new Set(initialState));
   const [items, setItems] = useState(initialState);

   const addItem = (item) => {
      if (!items.includes(item)) {
         setItems((prevValues) => [...prevValues, item.trim()]);
      }
   };

   const removeItem = (item) => {
      setItems((prevValues) => prevValues.filter((i) => i !== item));
   };

   const clearItems = () => {
      setItems([]);
   };

   return [items, addItem, removeItem, clearItems];
};
export default useUniqueList;
