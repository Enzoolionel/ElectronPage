/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 10px 15px 3px rgba(0, 0, 0, 0.1), 0 4px 6px 4px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "main-img": "url('*/img/fondoMain.jpg')",
      },
    },
  },
  plugins: [],
};
