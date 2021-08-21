module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',
        secondary:{
          100:'#e2e2d5',
          200:'#888883',
        },
      },//end of custom colors

      fontFamily:{
        custom:['Nunito']
      }//end of custom font
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
