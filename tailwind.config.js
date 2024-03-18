/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/src/assets/png/hero-img.png')",
        overlay: "url('/src/assets/png/fadeOverlay.png')",
      },
      fontFamily: {
        spectral: ["Spectral "],
        ppeiko: ["PPEiko", "sans"],
      },
    },
  },
  plugins: [],
};
