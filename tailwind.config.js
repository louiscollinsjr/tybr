// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        herop: "url('~/static/images/moses.png')"
      })
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".safe-top": {
          paddingTop: "constant(safe-area-inset-top)",
          paddingTop: "env(safe-area-inset-top)"
        },
        ".safe-left": {
          paddingLeft: "constant(safe-area-inset-left)",
          paddingLeft: "env(safe-area-inset-left)"
        },
        ".safe-right": {
          paddingRight: "constant(safe-area-inset-right)",
          paddingRight: "env(safe-area-inset-right)"
        },
        ".safe-bottom": {
          paddingBottom: "constant(safe-area-inset-bottom)",
          paddingBottom: "env(safe-area-inset-bottom)"
        },
        ".disable-scrollbars": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
            display: "none"
          },
          "& *::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
            display: "none"
          },
          "& *": {
            scrollbarWidth: "none",
            "-ms-overflow-style": "none"
          }
        },
        ".no-tap-highlighting": {
          "webkit-tap-highlight-color": "rgba(0,0,0,0)"
        }
      };

      addUtilities(newUtilities);
    })
  ]
};
