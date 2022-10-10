/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      dark_Text: "hsl(229, 25%, 31%)",
      score_Text: "hsl(229, 64%, 46%)",
      Header: "hsl(217, 16%, 45%)",
      bg_gradient_1: "hsl(214, 47%, 23%)",
      bg_gradient_2: "hsl(237, 49%, 15%)",
      scissors_gradient_1: "hsl(39, 89%, 49%)",
      scissors_gradient_2: "hsl(40, 84%, 53%)",
      paper_gradient_1: "hsl(230, 89%, 62%)",
      paper_gradient_2: "hsl(230, 89%, 65%)",
      rock_gradient_1: "hsl(349, 71%, 52%)",
      rock_gradient_2: "hsl(349, 70%, 56%)",
      cyan: "hsl(189, 59%, 53%)",
      cyan2: "hsl(189, 58%, 57%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      barlow: [`"Barlow Semi Condensed", sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}
