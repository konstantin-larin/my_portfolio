/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  important: true,
  darkMode: 'selector',
  theme: {
    extend: {},
    fontFamily: {
      title: ['Roboto Bold', 'serif'],
      roboto: ['Roboto Regular', 'sans-serif'],
      sans: ["Open Sans", 'sans-serif']
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    colors: {
      white: '#e2e8f0',
      'pale_pink': '#fecaca',
      teel: '#10b981',
      blue: '#1d4ed8',
      light_blue: '#7394ec',
      purple: '#7e22ce',
      pink: "#a21caf",
      orange: '#f97316',
      red: "#ea0c5a",
      lime: '#84cc16',
      indigo: '#1e1b4b',
      black: '#020617',
      dark: '#18181b',
      pale_red: '#fee2e2',
      gray: '#9ca3af',
    },
  },
  plugins: [],
}
