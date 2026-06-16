/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#202124",
        paper: "#fbfaf7",
        brick: "#9f4f3a",
        harbor: "#1d5c63",
        taxi: "#f2b84b",
        denim: "#284b7a",
        sage: "#6f846a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(32, 33, 36, 0.11)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
