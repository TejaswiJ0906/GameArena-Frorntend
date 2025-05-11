// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",     // blue-900
        secondary: "#facc15",   // yellow-400
        dark: "#111827",        // gray-900
      },
    },
  },
  plugins: [],
};
