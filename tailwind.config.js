module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        titlisRed:"#ED1C24",
       
        
      },
      fontFamily: {
        fontHubballi: "Hubballi",
        sansserif: "Titillium Web",
        josefinSans:'Josefin Sans',
        lexendDeca:'Lexend Deca',
        inder: "Inder",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
 
};