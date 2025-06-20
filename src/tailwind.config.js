/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-primary",
    "text-text"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Default blue, change if you want a different color
        text: '#ffffff',    // For text-text usage
      },
    },
  },
  plugins: [],
};