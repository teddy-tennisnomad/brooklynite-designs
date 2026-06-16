/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#202124",
        paper: "#fbfaf7",
        cream: "#f4efe5",
        brick: "#974832",
        mortar: "#d7c7b7",
        harbor: "#1d5c63",
        taxi: "#f2b84b",
        steel: "#456b7c",
        navy: "#132f57",
        asphalt: "#151515",
        denim: "#284b7a",
        sage: "#6f846a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        brand: ["Fraunces", "Georgia", "serif"],
        editorial: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(32, 33, 36, 0.11)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
