/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        "my-white": "#F6F4EB",
        "sky-blue": "#91C8E4",
        "my-blue": "#749BC2",
        "dark-blue": "#4682A9",
      },
    },
  },
  plugins: [],
};
