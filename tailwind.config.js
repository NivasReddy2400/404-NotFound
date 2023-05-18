/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      inco: ["inco", "sans-serif"],
      sm : ["sm", "sans-serif"],
    },
    fontSize: {
      base: ['24px', '25px'],
      sxl: ['64px', '95px'],
      cst:['24px','36px'],
    },
    letterSpacing: {
      tightest: '-.08em',
      tight : '-0.035em'
    },
    extend: {
      inset:{
        '5.35%':'5.35%',
        '57.21%':'57.21%',
        '24.54%':'24.54%',
        '34.03%':'34.03%',
        '40px':'40px',
        '77px': '77px',
        '-541px': '-541px',
        '-939px': '-939px',
        '577px':'577px',
        '1039px': '1039px',
        '740px': '740px',
        '663px': '663px',
        '740px': '740px',
        '265px':'265px',
        '735px': '735px',
        '491px':'491px',
        '736px':'736px',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',
      },
      width:{
        '539.33px':'530.22px',
        '133px':'133px',
        '1440px':'1440px',
        '300px': '300px',
        '216px': '216px',
        '586px': '586px',
        '381px': '381px',
      },
      height:{
        '447.43px':'447.43px',
        '25px':'25px',
        '1080px': '1080px',
        '17px': '17px',
        '68px': '68px',
        '190px': '190px',
        '108px': '108px',
      },
      colors: {
        'white': '#FFFFFF',
        'footergrey': '#BDBDBD',
        'gray-2': '#4F4F4F',
        'gray-1': '#333333',
      }
        
    },
  },
  plugins: [],
}

