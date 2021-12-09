module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: {
        DEFAULT: "#7d71f2",
      },
      pink: {
        DEFAULT: "#f12e65",
      },
      blue: {
        DEFAULT: "#0148e8",
      },
      yellow: {
        DEFAULT: "#ffcf2e",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
      },
      orange: {
        DEFAULT: "#FD4B3C",
      },
      honey: {
        DEFAULT: "#FEBC36",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      mobile: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
