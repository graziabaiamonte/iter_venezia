import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6EFE3",
        parchment: "#EDE3D0",
        terracotta: "#B8482E",
        terracottaDark: "#8E351F",
        teal: "#1F5D66",
        tealDark: "#103C42",
        ink: "#1F1C17",
        muted: "#6B6256",
        gold: "#B79452",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(0,0,0,0.03), 0 20px 50px -20px rgba(47,36,23,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
