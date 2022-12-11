import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkReadingTime from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://leonid.at",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  trailingSlash: "never",
});
