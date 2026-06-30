import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { gold: '#F5A623', 'gold-light': '#FFD580', navy: '#1A2B4A', 'navy-light': '#2A3F6A', green: '#2ECC71', 'green-light': '#A8E6CF' },
        solar: { 50: '#FFFBF0', 100: '#FFF3D4', 200: '#FFE4A0', 300: '#FFD066', 400: '#F5A623', 500: '#E09000', 600: '#B87300', 700: '#8A5700', 800: '#5C3A00', 900: '#2E1D00' },
      },
      fontFamily: { heading: ['Inter', 'sans-serif'], body: ['Open Sans', 'sans-serif'] },
    },
  },
  plugins: [],
};
export default config;
