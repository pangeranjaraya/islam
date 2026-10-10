import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06110c",
        emerald: "#16a34a",
        gold: "#d4af37"
      },
      boxShadow: {
        glow: "0 0 30px rgba(34,197,94,.16)"
      }
    }
  },
  plugins: []
};
export default config;