import tailwindcss from "@tailwindcss/vite";
import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";
import lightningCss from "vite-plugin-lightningcss";
import { browserslist as bl } from "./package.json";

export default {
  plugins: [
    tailwindcss(),
    vituum(),
    twig({
      root: "./src",
      formats: ["twig", "html", ".html.twig"],
    }),
    lightningCss({
      browserslist: bl,
    }),
  ],
};
