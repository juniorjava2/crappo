/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "body-small-regular": "Rubik",
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "neutral-white": "#fff",
        "gray-6": "#f2f2f2",
        "color-accent": "#3671e9",
        "neutral-grey-5": "#e0e0e0",
        "color-primary": "#0d0d2b",
        "neutral-grey-3": "#828282",
        "neutral-grey-4": "#bdbdbd",
        midnightblue: "#280569",
        "color-secondary": "#2b076e",
        indigo: "#491f98",
        lightgray: "#cfcfcf",
        aqua: "#42ffff",
        mediumaquamarine: "#6edcb5",
        crimson: "#ff325f",
        lightsteelblue: "#b9c1d9",
        aquamarine: "#8fffbe",
        salmon: "#ff7676",
        darkblue: "#4610ad",
        "color-primary-kingfisher-daisy": "#35068c",

        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.svg')",
      },
    },
  },
  plugins: [],
};
