/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        fira: ['"Fira Code"', "monospace"],
        meow: ['"Meow Script"', "cursive"],
        geist_mono: ['"Geist Mono"', "monospace"],
        geist: ['"Geist"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
          pink: "#FFC0CB",
          yellow: "#FFD700",
        },
        secondary: {
          DEFAULT: "#ffffff",
          blue: "#8BAEDF",
        },
        neutral: {
          DEFAULT: "#F6F6F6",
          text: "#111827",
        },
      },
      animation: {
        wave: "waveMove 5s linear infinite",
      },
      keyframes: {
        waveMove: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
    },
  },
  plugins: [],
};
