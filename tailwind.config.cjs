/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#EDB731",
        "bg-smoke-white": "#FBFBFB",
        "text-gray": "#AFAFAF",
        "text-color": "#222",
        "nav-color": "#222222d6",
      },
      backgroundImage: {
        "header-img": "url('./public/assets/header/image 2.svg')",
      },
    },
  },
  plugins: [],
};
