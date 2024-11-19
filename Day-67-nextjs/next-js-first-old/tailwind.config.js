/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        host: ['"Host Grotesk"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        nosifer: ['"Nosifer"', "cursive"],
        rethink: ['"Rethink Sans"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
