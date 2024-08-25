import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [
    require('daisyui'),
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
};
export default config;
