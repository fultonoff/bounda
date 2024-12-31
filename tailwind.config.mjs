/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          main: ['var(--font-main)'],
          second: ['var(--font-second)'],
      },
      colors: {
        mainColor: '#08090A'
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
