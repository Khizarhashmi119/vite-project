import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    pages({
      dirs: "src/pages",
    }),
  ],
});
