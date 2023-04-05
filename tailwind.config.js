/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-100": "#1D5F6B",
        "blue-200": "#18515C",
        "blue-300": "#11373F",
        "corail-100": "#F7645D",
        "corail-200": "#EC5052",
        "corail-300": "#BD3E43",
        "nude-100": "#F0E5D3",
        "nude-200": "#E9DBC1",
        "nude-300": "#DCCDB6",
        "gris-100": "#3E3943",
        "gris-200": "#2E2B31",
        "gris-300": "#1D1923",
      },
    },
    fontFamily: {
      'Jost': ["Jost"],
      title: ["Neue Machina"],
    },
  },
  plugins: [],
};

