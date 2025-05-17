/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0072ff',
          600: '#005bcc',
          700: '#004499',
          800: '#002d66',
          900: '#001733',
        },
        secondary: {
          50: '#e6f7fa',
          100: '#cceff5',
          200: '#99deeb',
          300: '#66cee0',
          400: '#33bdd6',
          500: '#00adcc',
          600: '#008aa3',
          700: '#00687a',
          800: '#004552',
          900: '#002329',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffe0cc',
          200: '#ffc299',
          300: '#ffa366',
          400: '#ff8533',
          500: '#ff6600',
          600: '#cc5200',
          700: '#993d00',
          800: '#662900',
          900: '#331400',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'text-slide': 'text-slide 5s infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 16.67%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 50%': {
            transform: 'translateY(-25%)',
          },
          '66.67%, 83.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
