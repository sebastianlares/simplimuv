import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#180A2A",
        secondary: "#903DF7",
        terciary: "#ECDFFD",
        gray: {
          primary: "#626262",
          secondary: "#9A9A9A",
        },
        disabled: "#ECDFFD",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["SF UI Display", "sans-serif"],
      },
      fontSize: {
        h4: "25px",
        h5: "18px",
        h6: "16px",
        p: "16px",
        title: "13px",
        small: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
