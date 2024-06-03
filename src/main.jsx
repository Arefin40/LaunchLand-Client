import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@pages/RouterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "swiper/css";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider />
      </QueryClientProvider>
   </React.StrictMode>
);
