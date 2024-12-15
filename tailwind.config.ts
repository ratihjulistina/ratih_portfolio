import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}", //additional line
  ],
  theme: {
    screens: {
      mobile: { max: "1023px" },
      desktop: { min: "1024px" },
    },
    extend: {
      colors: {
        lightcyan: "#84ffff",
        gradientLeft: "#8e24aa",
        gradientRight: "#1e88e5",
      },
      animation: { scalepulse: "scalepulse 8s ease-in-out infinite" },
      keyframes: {
        scalepulse: {
          "0%": { scale: "1" },
          "50%": { scale: "1.05" },
          "100%": { scale: "1" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
