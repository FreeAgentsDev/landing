/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'teal': {
          50: '#B4E6F2',
          100: '#8BD5E9',
          200: '#62BFDF',
          300: '#39A8D5',
          400: '#2092BF',
          500: '#1A7599',
          600: '#166483',
          700: '#12536D',
          800: '#0E4257',
          900: '#0A3141',
        },
        'cyan': {
          50: '#CCF9F9',
          100: '#99F3F3',
          200: '#66EFEF',
          300: '#33EAEA',
          400: '#00E6E6',
          500: '#00CCCC',
          600: '#00B2B2',
          700: '#009999',
          800: '#007F7F',
          900: '#006666',
        },
        'brown': {
          50: '#F0EAE4',
          100: '#DCD1C8',
          200: '#C8B9AD',
          300: '#B3A191',
          400: '#9F8976',
          500: '#8A6F5C',
          600: '#7A6451',
          700: '#6A5746',
          800: '#5A493C',
          900: '#4A3C31',
        },
      },
      boxShadow: {
        'neon': '0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color), 0 0 30px var(--tw-shadow-color)',
        'neon-sm': '0 0 5px var(--tw-shadow-color), 0 0 15px var(--tw-shadow-color)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}