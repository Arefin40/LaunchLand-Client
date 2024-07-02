import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "@icons";

export default () => {
   return (
      <footer className="border-y py-12">
         <footer className="px-5 lg:px-0 mx-auto container grid gap-y-10 justify-items-center text-center text-gray-700">
            <Link to="/" className="flex items-center gap-x-3">
               <h1 className="w-9 h-9 flex items-center justify-center font-bold text-white text-2xl rounded-full bg-primary-600 shrink-0">
                  L
               </h1>
               <h1 className="text-2xl lg:text-3xl font-extrabold flex-shrink-0 text-primary-500">
                  <span>LaunchLand</span>
               </h1>
            </Link>

            <ul className="flex items-center gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-4 text-sm justify-center flex-wrap">
               <Link to="/" className="hover:text-primary-600">
                  Home
               </Link>
               <Link to="/products" className="hover:text-primary-600">
                  Products
               </Link>
               <Link to="/contact" className="hover:text-primary-600">
                  Contact us
               </Link>
               <Link to="/login" className="hover:text-primary-600">
                  Login
               </Link>
            </ul>

            <div className="flex items-center gap-x-10 text-gray-400">
               <Facebook />
               <Instagram />
               <Twitter />
               <Github />
            </div>

            <small className="text-gray-500">© 2024 LaunchLand.com. All rights reserved.</small>
         </footer>
      </footer>
   );
};
