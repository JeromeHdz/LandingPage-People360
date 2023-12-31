const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderColor: {
        "floral-white": "#FFF6ED",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",
        "purple-people": "#D48C73",

        "light-cerulean": "#00bd9f",
        "dark-cerulean": "#00856c",
        "dark-grey": "#402e32",
        "light-grey": "#bca79d",
        "peps-orange": "#F77F3A",
      },
      backgroundColor: {
        "floral-white": "#FFF6ED",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",
        "orange-people": "#E89C5A",
        "purple-people": "#D48C73",


        "light-cerulean": "#00bd9f",
        "dark-cerulean": "#00856c",
        "dark-grey": "#402e32",
        "light-grey": "#bca79d",
        "peps-orange": "#F77F3A",
      },
      textColor: {
        "floral-white": "#FFF6ED",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",
        "orange-people": "#E89C5A",
        "purple-people": "#D48C73",


        "light-cerulean": "#00bd9f",
        "dark-cerulean": "#00856c",
        "dark-grey": "#402e32",
        "light-grey": "#bca79d",
      },
      colors: {
        trueGray: colors.neutral,
        "floral-white": "#FFF6ED",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",
        "orange-people": "#E89C5A",
        "purple-people": "#D48C73",


        "light-cerulean": "#00bd9f",
        "dark-cerulean": "#00856c",
        "dark-grey": "#402e32",
        "light-grey": "#bca79d",
        borderColor: {
          // extend the border color
          "border-red-600": "#1D4ED8",
          "purple-people": "#D48C73",

        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
      },
    },
    fontFamily: {
      sans: ["quicksand", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("daisyui")],
};
