import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tymbola/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      public: "/public",
    },
  },
});
