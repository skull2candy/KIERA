import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#f9e7b2",
          DEFAULT: "#e6ca7d",
          dark: "#a37e2c",
          shimmer: "#fff3cc",
        },
        champagne: {
          light: "#f3e8d2",
          DEFAULT: "#dfcca6",
          dark: "#a58957",
        },
        obsidian: {
          DEFAULT: "#070709",
          deep: "#050507",
          warm: "#0c0a0d",
        },
        amber: {
          warm: "#e08a3c",
          glow: "#ffaa40",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "-apple-system", "sans-serif"],
      },
      keyframes: {
        "flame-flicker": {
          "0%, 100%": {
            transform: "scale(1) rotate(-1deg)",
            opacity: "0.98",
          },
          "25%": {
            transform: "scale(1.05, 1.1) rotate(1.5deg) translateY(-1px)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(0.97, 0.95) rotate(-1deg)",
            opacity: "0.95",
          },
          "75%": {
            transform: "scale(1.02, 1.07) rotate(2deg) translateY(-2px)",
            opacity: "1",
          },
        },
        "flame-core": {
          "0%, 100%": {
            transform: "scale(1) translateY(0)",
            opacity: "0.9",
          },
          "50%": {
            transform: "scale(1.08, 1.15) translateY(-1px)",
            opacity: "1",
          },
        },
        "diya-halo": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.55",
          },
          "50%": {
            transform: "scale(1.14)",
            opacity: "0.75",
          },
        },
        "shimmer-sweep": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "progress-sweep": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(250%)",
          },
        },
        "pulse-amber": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        "float-particle": {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(-120px) translateX(20px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "flame-flicker": "flame-flicker 2.8s ease-in-out infinite",
        "flame-core": "flame-core 1.8s ease-in-out infinite",
        "diya-halo": "diya-halo 4s ease-in-out infinite",
        "shimmer-sweep": "shimmer-sweep 8s linear infinite",
        "progress-sweep": "progress-sweep 2.8s ease-in-out infinite",
        "pulse-amber": "pulse-amber 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
