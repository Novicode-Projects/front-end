/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0101",
        secondary: "#020203",
        tertiary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
