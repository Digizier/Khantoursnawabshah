import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F1F7F4",
          100: "#E0EFE8",
          200: "#C0DFD1",
          300: "#91C8B1",
          400: "#5BAA8A",
          500: "#368E6B",
          600: "#247154",
          700: "#1A5741",
          800: "#133E2F",
          900: "#0C2B1D",
          950: "#061810",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F3ECD7",
          200: "#E6D8AE",
          300: "#D6BF7F",
          400: "#C5A059",
          500: "#B88E3E",
          600: "#A17830",
          700: "#7F5B24",
          800: "#654820",
          900: "#533C1D",
        },
        ivory: {
          50: "#FCFBF8",
          100: "#FAF8F2",
          200: "#F5F2E7",
          300: "#EFEBD9",
          400: "#E2DCC3",
          500: "#CFC7A7",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "var(--font-playfair)",
          "Georgia",
          "Cambria",
          "serif",
        ],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0,0,0,0.04)",
        card: "0 10px 30px -10px rgba(12, 43, 29, 0.08)",
        floating: "0 20px 40px -15px rgba(12, 43, 29, 0.15)",
        gold: "0 4px 20px -2px rgba(197, 160, 89, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
