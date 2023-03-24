/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#f1f1f1",
        green: "#50a584",
        blackground: "#181616",
      },

      fontFamily: {
        Montserrat : ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      }
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }

  },
  plugins: [],
}
