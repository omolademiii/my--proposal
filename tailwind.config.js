/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      scale: {
        0: "0",
        25: ".25",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        225: "2.25",
        250: "2.5",
        275: "2.75",
        300: "3",
      },
    },
  },
  plugins: [],
};
