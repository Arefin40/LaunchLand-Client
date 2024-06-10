import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import PrivateRoute from "@layouts/PrivateRoute";
import DashboardLayout from "@layouts/DashboardLayout";
import RoleProtectedRoute from "@layouts/RoleProtectedRoute";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Homepage from "@pages/Homepage";
import Products from "@pages/Products";
import ProductDetails from "@pages/ProductDetails";
import Dashboard from "@pages/dashboard/Dashboard";
import ManageUsers from "@pages/dashboard/ManageUsers";
import ManageCoupons from "@pages/dashboard/ManageCoupons";
import Profile from "@pages/dashboard/Profile";
import MyProducts from "@pages/dashboard/MyProducts";
import AddProduct from "@pages/dashboard/AddProduct";
import UpdateProduct from "@pages/dashboard/UpdateProduct";
import ProductQueue from "@pages/dashboard/ProductQueue";
import Reports from "@pages/dashboard/Reports";

const roleProtected = (role, path, component) => ({
   path: `/dashboard${path}`,
   element: <RoleProtectedRoute accessibleBy={role} component={component} />,
});

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Homepage />,
         },
         {
            path: "/products/:page?",
            element: <Products />,
         },
         {
            path: "/product/:id",
            element: <PrivateRoute component={<ProductDetails />} />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
   {
      path: "/dashboard",
      element: <PrivateRoute component={<DashboardLayout />} loadingState="skeleton" />,
      errorElement: <ErrorPage />,
      children: [
         // admin routes
         roleProtected("admin", "", <Dashboard />),
         roleProtected("admin", "/manage-users", <ManageUsers />),
         roleProtected("admin", "/manage-coupons", <ManageCoupons />),

         // moderator routes
         roleProtected("moderator", "/product-queue", <ProductQueue />),
         roleProtected("moderator", "/reported-products", <Reports />),

         // member routes
         roleProtected("member", "/profile", <Profile />),
         roleProtected("member", "/products", <MyProducts />),
         roleProtected("member", "/add-product", <AddProduct />),
         roleProtected("member", "/update-product/:id", <UpdateProduct />),
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
