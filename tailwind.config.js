/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0c2952",
        secondary: "#d0a26b",
        base: "#F8F8F9",
      },

      backgroundImage: {
        gradient:
          "linear-gradient(90deg, rgba(208,162,107,1) 0%, rgba(248,248,249,1) 95%)",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
        subtitle: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },

      borderRadius: {
        // Ensure correct key so `rounded-2xl` maps here
        '2xl': '1.25rem',
      },
    },
  },

  plugins: [],
};
