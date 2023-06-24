/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      personalFont: {
        barlow: "Barlow",
        fraunces: "Fraunces",
      },
      customColors: {
        AzulNoSatu: "#23303e",
        SuperGrisAzulOscuro: "#5a636c",
        PocoGrisAzul: "#818498",
        grisAzul: "#a7abae",
        foot: "#63c9b5",
      },
    },
  },

  plugins: [],
};
