/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Mulish", "sans-serif"],
         },
         colors: {
            primary: {
               50: "#fbe9e7",
               100: "#ffccbc",
               200: "#ffab91",
               300: "#ff8a65",
               400: "#ff7043",
               500: "#ff5722",
               600: "#f4511e",
               700: "#e64a19",
               800: "#d84315",
               900: "#bf360c",
               950: "#431407",
            },
         },
         gridTemplateColumns: {
            table: "minmax(12.5rem,1fr) 10rem 10rem 9rem 9rem 13.125rem",
         },
         keyframes: {
            "scale-in": {
               "0%": { opacity: 0, transform: "scale(0.5)" },
               "100%": { opacity: 1, transform: "scale(1)" },
            },
            "scale-bounce": {
               "0%": { opacity: 0, transform: "scale(0)" },
               "60%": { opacity: 1, transform: "scale(1.125)" },
               "100%": { transform: "scale(1)" },
            },
            "scale-check": {
               "0%": { visibility: "hidden", transform: "scale(0)" },
               "100%": { visibility: "visible", transform: "scale(1)" },
            },
            checkmark: {
               to: { "stroke-dashoffset": "0" },
            },
         },
         animation: {
            "scale-in": "scale-in 150ms cubic-bezier(0.2, 0, 0.13, 1.5) forwards",
            "scale-check": "scale-check 250ms forwards",
            "scale-bounce": "scale-bounce 350ms forwards",
         },
      },
   },
   plugins: [],
};
