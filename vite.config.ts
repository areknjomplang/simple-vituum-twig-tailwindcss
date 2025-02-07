import tailwindcss from "@tailwindcss/vite";
import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

export default {
  plugins: [
    tailwindcss(),
    vituum(),
    twig({
      root: "./src",
      formats: ["twig", "html", ".html.twig"],
    }),
  ],
};
