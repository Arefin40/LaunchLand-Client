import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import PrivateRoute from "@layouts/PrivateRoute";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Homepage from "@pages/Homepage";
import Products from "@pages/Products";
import ProductDetails from "@pages/ProductDetails";
import DashboardLayout from "@layouts/DashboardLayout";
import Dashboard from "@pages/dashboard/Dashboard";
import ManageUsers from "@pages/dashboard/ManageUsers";
import ManageCoupons from "@pages/dashboard/ManageCoupons";
import Profile from "@pages/dashboard/Profile";
import MyProducts from "@pages/dashboard/MyProducts";
import AddProduct from "@pages/dashboard/AddProduct";
import ProductQueue from "@pages/dashboard/ProductQueue";
import Reports from "@pages/dashboard/Reports";

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
      element: <DashboardLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/dashboard",
            element: <Dashboard />,
         },
         {
            path: "/dashboard/Profile",
            element: <Profile />,
         },
         {
            path: "/dashboard/products",
            element: <MyProducts />,
         },
         {
            path: "/dashboard/add-product",
            element: <AddProduct />,
         },
         {
            path: "/dashboard/manage-users",
            element: <ManageUsers />,
         },
         {
            path: "/dashboard/manage-coupons",
            element: <ManageCoupons />,
         },
         {
            path: "/dashboard/product-queue",
            element: <ProductQueue />,
         },
         {
            path: "/dashboard/reported-products",
            element: <Reports />,
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
