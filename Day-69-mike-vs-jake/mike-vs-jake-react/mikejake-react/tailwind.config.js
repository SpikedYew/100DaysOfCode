/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      bebaskNeue: ["Bebas Neue", "sans-serif"],
      hostGrotesk: ["Host Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
