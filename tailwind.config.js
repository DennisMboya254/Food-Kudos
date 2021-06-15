const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      colors: {
        primary: "red",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        header: ["Lobster"],
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
