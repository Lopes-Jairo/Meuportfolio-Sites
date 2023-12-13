/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./success.html"],
  theme: {
    extend: {

      //-------------------------------- ANIMAÇÕES -------------------------------------------------
      keyframes: {

        cloudLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '5%': { opacity: '1' },
          '50%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(-100vw)' }
        },

        cloudRight: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '5%': { opacity: '1' },
          '50%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(100vw)' }
        },

        slideTop: {
          '0%': { opacity: '0', transform: 'translateY(10rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },

        slideBottom: {
          '0%': { opacity: '0', transform: 'translateY(-10rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },

        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(10rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-10rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },

        floatImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3.5rem)' }
        }

      },


      animation: {
        cloudLeft: 'cloudLeft 32s linear infinite',
        cloudRight: 'cloudRight 32s linear infinite',

        slideTop: 'slideTop 1s 0.4s ease forwards',
        slideBottom: 'slideBottom 1s 0.4s ease forwards',
        slideLeft: 'slideLeft 1s 0.5s ease forwards',
        slideRight: 'slideRight 1s 0.5s ease forwards',
        zoomIn: 'zoomIn 1s 0.2s ease forwards',
        floatImage: 'floatImage 4s 0.2s ease-in-out infinite'
      },

      //___________________________________ FIM ANIMAÇÕES ____________________________________________________


      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2400': '2400ms',
        '2600': '2600ms',
        '3200': '3200ms',
        '4000': '4000ms',
      },


      backgroundImage: {

        'mountain': 'url(../img/mountain-bg.jpg)'

      },


      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      colors: {
        /* 'color-text': '#ff6600', */
        'color-text': '#0099ff',
        'color-bg': '#141a1a'
      },

      screens: {
        // Telas adaptaveis para a NAV
        'mobnav': { 'max': '768px' }, // telas do nav para mobile
        'mobnav2': { 'max': '1049px' }, // telas do nav para mobile
        'mobnav3': { 'min': '1050px' }, // telas do nav para mobile

        'desknav': { 'min': '769px' }, // telas do nav para desktop em diante



        // telas adaptaveis para BANNER
        'deskbanner': { 'max': '1200px' }, // telas do nav para desktop em diante

        'little': { 'max': '500px' },
        'small': { 'max': '639px' },
        'mobile': { 'min': '640px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1280px' },
        'desktop': { 'min': '1281px', 'max': '1536px' },
        'large': '1537'

      },

      spacing: {

        '5percent': '5%',
        '10percent': '10%',
        '15percent': '15%',
        '20percent': '20%',
        '30percent': '30%',
        '40percent': '40%',
        '50percent': '50%',
        '60percent': '60%',
        '70percent': '70%',
        '80percent': '80%',
        '90percent': '90%',
      }
    },
  },
  plugins: [],
}


