/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#4e63ce",

        "secondary": "#6cd8d3",

        "accent": "#4711c4",

        "neutral": "#231727",

        "base-100": "#E4EBF2",

        "info": "#4FA1C9",

        "success": "#1FB270",

        "warning": "#966703",

        "error": "#ED737D",
      },
    },
  ],
  plugins: [require("daisyui")],
}

