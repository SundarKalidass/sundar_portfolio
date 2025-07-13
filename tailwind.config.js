/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // dark navy
        lightText: "#e2e8f0", // near-white for light text
        primary: "#10b981", // emerald green
        accent: "#34d399", // softer green
        muted: "#64748b", // slate gray
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
