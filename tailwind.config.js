/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#1A2330",
        // Texts
        lightGrey: "#747E8B",
        darkGrey: "#525A60",
        selected: "#C4C4C4",
        unselected: "#A2A9B1",
        // Buttons & Answers
        lightBlue: "#05C0E1",
        lightGreen: "#33C202",
      },
    },
  },
  plugins: [],
};
