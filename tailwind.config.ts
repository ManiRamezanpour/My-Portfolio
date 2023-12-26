import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#66d89f",
        darkColor: "#0c121e",
        bgColor: "#0C121E",
        textColor: "#C3C9D3",
      },
      boxShadow: {
        "custom-shadow": "#10b981 0px 0px 5px",
      },
      lineHeight: {
        extra: "28px",
        "12": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
