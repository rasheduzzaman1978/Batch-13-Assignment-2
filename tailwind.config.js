/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",  // Small device ends at 576px
      md: "992px",  // Medium ends at 992px
      lg: "992px",  // Large starts at 992px (use lg: for large layout)
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {},
  },
  plugins: [],
};
