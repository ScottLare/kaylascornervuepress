module.exports = {
  purge: ["./src/**/*.md", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'letter': ['Indie Flower'],
      },
      backgroundImage: {
        main: "url('/images/kaylaCornerMain_1.png')",
        main2: "url('/images/KalyaCornerPage2_1.png')",
        book1: "url('/images/KaylaPoems.png')",
        book2: "url('/images/KaylaShortStoriesBook.png')",
      },
      colors: {
        teal: {
          50: "#f2f9f9",
          100: "#e6f2f2",
          200: "#bfdfdf",
          300: "#99cccc",
          400: "#4da6a6",
          500: "#008080",
          600: "#007373",
          700: "#006060",
          800: "#004d4d",
          900: "#003f3f",
        },
        navText: "rgb(75, 85, 99)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};