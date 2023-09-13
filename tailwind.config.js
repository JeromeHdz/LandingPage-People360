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
      backgroundColor: {
        "floral-white": "#FBFBEF",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",
        

        "light-cerulean":"#00bd9f",
        "dark-ceruelean":"#00856c",
        "dark-grey":"#402e32",
        "light-grey":"#bca79d",
      },
      textColor:{
        "floral-white": "#FBFBEF",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",

        "light-cerulean": "#00bd9f",
        "dark-ceruelean": "#00856c",
        "dark-grey": "#402e32",
        "light-grey": "#bca79d",
      },
      colors: {
        trueGray: colors.neutral,
        "floral-white": "#FBFBEF",
        "powder-blue": "#B1DFE7",
        "antique-white": "#FFE9D6",
        "pale-salmon": "#FFBE85",
        "pale-copper": "#D48C73",
        
        "light-cerulean": "#00bd9f",
        "dark-ceruelean": "#00856c",
        "dark-grey": "#402e32",
        "light-grey": "#bca79d",
        borderColor: {
          // extend the border color
          "border-red-600": "#1D4ED8",
        },
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      fontWeight: {
        'light':'300',
        'regular': '400',
        'medium': '500',
        'semi-bold': '600',
        'bold': '700',
      }
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
