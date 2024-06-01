import { Outlet } from "react-router-dom";
import Header from "@containers/Header";
import Footer from "@containers/Footer";

const Layout = () => {
   return (
      <>
         <Header />

         <main className="w-full min-h-[calc(100vh-23.625rem)] lg:min-h-[calc(100vh-24.375rem)]">
            <Outlet />
         </main>

         <Footer />
      </>
   );
};
export default Layout;
