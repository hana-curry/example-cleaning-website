import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-2": "var(--background-2)",
        foreground: "var(--foreground)",
        "foreground-2": "var(--foreground-2)",
        primary: "var(--primary)",
        wrong: "var(--wrong)"
      },
      backgroundImage: {
        floatline: "url(/images/floatline.jpg)",
        "floatline-mobile": "url(/images/floatline_mobile.jpg)"
      }
    },
  },
  plugins: [],
};
export default config;
