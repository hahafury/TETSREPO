/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0085E7",
        "dark-blue": "#0066B3",
        "custom-coral": "#C0472C",
        "custom-yellow": "#FFB31A"
      },
      maxWidth: {
        600: "600px",
      },
      padding: {
        '7px': '7px',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
