/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      boxShadow: {
        "xl-dark":
          "0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3);",
        "xl-dark-centered": "0 0 15px rgb(0 0 0 / 0.2)",
        "primary-shadow": "0 2px 20px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "boxhouse-primary": "#004BFA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
