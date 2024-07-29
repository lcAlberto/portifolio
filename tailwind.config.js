/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        "github": "#1f883d",
        "facebook": "#2176FF",
        "instagram": "#D300C5",
      }
    },
  },
  plugins: [require('daisyui')],//require('daisyui'),
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#F0BF6C",
          "primary-content": "#140d04",
          "secondary": "#3D3E42",
          "secondary-content": "#d5d5d6",
          "accent": "#0061ff",
          "accent-content": "#d0e3ff",
          "neutral": "#3D3E42",
          "neutral-content": "#d5d5d6",
          "base-100": "#272829",
          "base-200": "#31333B",
          "base-300": "#1a1b1c",
          "base-content": "#cfcfd0",
          "info": "#00edff",
          "info-content": "#001416",
          "success": "#85b300",
          "success-content": "#060c00",
          "warning": "#ff9f00",
          "warning-content": "#160900",
          "error": "#e44060",
          "error-content": "#120103",
      },
        mytheme2: {
          'primary': '#140438',
          'secondary': '#9503EC',
          'accent': '#00CEFF',
          'neutral': '#008CF1',
          'base-100': '#ffffff',
          'info': '#00f9ff',
          'success': '#00992f',
          'warning': '#ff9b00',
          'error': '#ff3557',
        },
      },
        'dark'
    ],
  },
}

