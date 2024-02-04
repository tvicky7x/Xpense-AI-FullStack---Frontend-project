/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      keyframes: {
        popupAnimation: {
          "0%": {
            top: "0",
          },
          "100%": {
            top: "1.75rem",
          },
        },
      },
      animation: {
        popupAnimation: "popupAnimation 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
