/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["13px", "13px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        primary: "#3E9E6C",
        "green-dark": "#0E381F",
        "green-lght": "#73B443",
        "indigo-lght": "#563A92",
        "red-md": "#882611",
        "orange-lght": "#BB7622",
        "slate-lght": "#E3EDED",
        "slate-md": "#7C9BC2",
        "yellow-md": "#E6D02A",
        "gray-lght": "#949494",
      },
      boxShadow: {
        even: "0 0 10px 2px rgba(0, 0, 0, 0.15)", // Define your custom shadow here
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      width: {
        70: "17.2rem",
      },
    },
  },
  plugins: [scrollbarHide],
};
