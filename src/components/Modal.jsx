import { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Header = ({ title = "", description = "" }) => {
   return (
      <div className="px-5 space-y-1 text-center">
         <h1 className="text-xl text-gray-800 font-semibold">{title}</h1>
         <p>{description}</p>
      </div>
   );
};

const SubmitButton = ({ children, className = "", ...restProps }) => {
   return (
      <Button {...restProps} type="submit" color="primary" className={`${className} w-full`}>
         {children}
      </Button>
   );
};

const CancelButton = ({ children, className = "", ...restProps }) => {
   return (
      <Button {...restProps} variant="outlined" className={`${className} w-full`}>
         {children}
      </Button>
   );
};

const ButtonGroup = ({ children }) => {
   return (
      <div className="px-5 mt-5 w-full mx-auto sm:max-w-[23rem] grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-2">
         {children}
      </div>
   );
};

const Dialog = ({
   children,
   offset = "p-4 sm:p-5",
   spacing = "p-5 sm:p-6",
   className = "space-y-6",
   onFormSubmit,
   component = "div",
}) => {
   const Component = component;

   useEffect(() => {
      document.body.classList.add("overflow-hidden");
      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, []);

   return ReactDOM.createPortal(
      <div className={`${offset} fixed inset-0 z-50 flex items-center justify-center`}>
         <Component
            onSubmit={onFormSubmit}
            className={`${spacing} w-full max-w-[28.75rem] rounded-xl shadow-xl z-50 border flex-shrink-0 bg-white animate-scale-in ${className}`}
         >
            {children}
         </Component>
      </div>,
      document.getElementById("modal-root")
   );
};

export default {
   Header,
   Dialog,
   SubmitButton,
   CancelButton,
   ButtonGroup,
};
