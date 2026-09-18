/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          50: "#FBF6F1",
          100: "#F3E6D8",
          200: "#E4C9A8",
          300: "#C9A07A",
          400: "#A06B42",
          500: "#7B4B2A",
          600: "#5C3A21",
          700: "#4A2C1A",
          800: "#3D2314",
          900: "#2A160C",
        },
        blush: {
          50: "#FFF8FA",
          100: "#FCE8EE",
          200: "#F8D0DC",
          300: "#F4B8CB",
          400: "#E8A0BF",
          500: "#D484A8",
          600: "#C06B94",
        },
        cream: {
          50: "#FFFEFB",
          100: "#FFFBF5",
          200: "#FFF8F0",
          300: "#FAF3E8",
          400: "#F5E6D3",
          500: "#E8D4B8",
        },
        caramel: {
          DEFAULT: "#C4A484",
          light: "#E8D5C4",
          dark: "#A67C52",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(61, 35, 20, 0.18)",
        blush: "0 8px 24px -8px rgba(232, 160, 191, 0.45)",
      },
    },
  },
  plugins: [],
};
