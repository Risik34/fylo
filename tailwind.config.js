/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    // },
    extend: {
      colors: {
        bg: "#181f2a",
        footerbg: "#0b1523",
        testimonialsbg: "#202a3c",

        cyan: "#65e2d9",
        blue: "#339ecc",
      },

      fontFamily: {
        raleway: "Raleway ,sans-serif",
        opensans: "Open sans , sans-serif",
      },
    },
  },
  plugins: [],
};
