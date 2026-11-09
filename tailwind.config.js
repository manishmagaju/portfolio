/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "ui-monospace", "monospace"] },
      colors: { ink: "#0a0a0f", panel: "#111118", accent: "#7c83ff", violet: "#a78bfa" },
    },
  },
  plugins: [],
};
