/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cs': "0 0 10px 5px rgba(0,0,0,.1)"
      },
      fontFamily: {
        jjk: ["JJK", "sans-serif"]
      },
    },
  },
  plugins: [],
};
