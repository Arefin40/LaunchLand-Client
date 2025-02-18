import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@pages/RouterProvider";
import { AuthProvider } from "@contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "swiper/css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 5,
         refetchOnWindowFocus: false,
      },
   },
});

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <RouterProvider />
         </AuthProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
