/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
        meow: ['"Meow Script"', "cursive"],
        geist_mono: ['"Geist Mono"', "monospace"],
        geist: ['"Geist"', "sans-serif"],
      },
      colors: {
        primary: {
          // DEFAULT: "#606C38", // Dark Olive Green
          // dark: "#283618", // Dark Green
          DEFAULT: "#000000",
          light: "#333333",
          dark: "#111111",
        },
        secondary: {
          // DEFAULT: "#DDA15E", // Golden Brown
          // dark: "#BC6C25", // Rust Orange
          DEFAULT: "#ffffff",
          light: "#f5f5f5",
          dark: "#e0e0e0",
        },
        neutral: {
          DEFAULT: "#FEFAE0",
        },
      },
    },
  },
  plugins: [],
};
