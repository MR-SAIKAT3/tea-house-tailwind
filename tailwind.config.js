/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-dark": "#1C1C1C",
        "text-light": "#999999",
        "bg-form-dark": "#FF8436",
        "bg-to-dark": "#FF0402",
        "bg-form-light": "#FFF2EA",
        "bg-to-light": "#FFE5E5",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
};
