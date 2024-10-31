/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "640px",
      lg: "1200px",
    },
    extend: {
      colors: {
        lime: "hsl(61, 70%, 52%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        slate100: "hsl(202, 86%, 94%)",
        slate300: "hsl(203, 41%, 72%)",
        slate500: "hsl(200, 26%, 54%)",
        slate700: "#4e6e7e",
        slate900: "#122f3f",
        payBg: "hsla(201, 55%, 23%, 0.993)",
        limeActive: "hsl(62, 85%, 92%)",
        btnHover: "hsl(61, 70%, 70%)",
      },
      borderRadius: {
        scale_md: "30px",
        scale_sm: "20px",
        scale_lg: "12%",
      },
    },
  },
  plugins: [],
};
