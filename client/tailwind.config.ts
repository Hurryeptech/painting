import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/antd/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-70%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 1s ease-in",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        aclonica: ["var(--font-aclonica)", "sans-serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
      colors: {
        brown: "#4F310D",
        cardBg: "#4E300C",
        cardText: "#fdd293",
        cardBorder: "rgba(0, 0, 0, 0.175)",
        sandal: "#e6bf84",
        // gold: "#e3b77c",
        gold: "#E9AB0D",
        lightBrown: "#3b240b",
        lightSandal: "#fac55b",
        iconBrown: "#53320a",
        darkBrown: "#291807",
      },
      backgroundImage: {
        "custom-bg": "url('/assets/bgImage.png')",
        "custom-bg2": "url('/assets/bgImage2.svg')",
        "header-bg": "url('/assets/header.jpg')",
        gradientBg:
          "linear-gradient(0deg, rgba(167,103,31,1) 0%, rgba(65,40,12,1) 49%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
