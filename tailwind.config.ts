import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A962",
          rose: "#B8956B",
          cream: "#FAF8F5",
          taupe: "#3D3835",
          muted: "#5C5652",
          light: "#F5F3F0",
          dark: "#2A2523",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
