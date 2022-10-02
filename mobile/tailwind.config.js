/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-black": "#424242",
        black: "#1a231f",
        white: "#f8f8f8",
        "green-primary": "#5a8f7b",
        "green-medium": "#94b49f",
      },
      backgroundColor: {
        "text-black": "#424242",
        black: "#1a231f",
        white: "#f8f8f8",
        "green-primary": "#5a8f7b",
        "green-medium": "#94b49f",
      },
      fontFamily: {
        kollektif: ["Kollektif"],
        "kollektif-bold": ["Kollektif-Bold"],
        "kollektif-italic": ["Kollektif-Italic"],
        "kollektif-bold-italic": ["Kollektif-BoldItalic"],
        sans: ["Kollektif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
