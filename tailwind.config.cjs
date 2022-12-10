/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      colors: {
        prime: "#FACA13",
        second: "#DDE31E",
      },
    },
    fontFamily: {
      serif: ["NotoSerif", "serif"],
      sans: ["NotoSans", "sans"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),

    plugin(({ addVariant }) => {
      addVariant("work", `.work &`);
    }),
  ],
};
