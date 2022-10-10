/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark_Text: "hsl(229, 25%, 31%)",
      score_Text: "hsl(229, 64%, 46%)",
      Header: "hsl(217, 16%, 45%)",
      /**
       *
       */
    },
    fontFamily: {
      barlow: [`"Barlow Semi Condensed", sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}
