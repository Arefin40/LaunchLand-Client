import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         "@api": resolve(__dirname, "./src/api"),
         "@assets": resolve(__dirname, "./src/assets"),
         "@icons": resolve(__dirname, "./src/icons"),
         "@components": resolve(__dirname, "./src/components"),
         "@containers": resolve(__dirname, "./src/containers"),
         "@pages": resolve(__dirname, "./src/pages"),
         "@routes": resolve(__dirname, "./src/routes"),
         "@layouts": resolve(__dirname, "./src/layouts"),
         "@utils": resolve(__dirname, "./src/utils"),
         "@hooks": resolve(__dirname, "./src/hooks"),
         "@contexts": resolve(__dirname, "./src/contexts"),
         "@provider": resolve(__dirname, "./src/provider"),
         "@services": resolve(__dirname, "./src/services"),
      },
   },
   envPrefix: "APP",
   plugins: [react()],
});
