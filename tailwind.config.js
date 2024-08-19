/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'github': '#1f883d',
        'facebook': '#2176FF',
        'instagram': '#D300C5',

        'typescript': 'rgba(49,120,198,0.6)',
        'vue': 'rgba(60,142,117,0.6)',
        'nuxt': 'rgba(16,135,117,0.6)',
        'vite': 'rgba(157,94,255,0.42)',
        'postgresql': 'rgba(88,99,119,0.8)',
        'mongo': 'rgba(89,150,54,0.27)',
        'mysql': 'rgba(0,117,143,0.25)',
        'docker': 'rgba(29,145,180,0.8)',
        'laravel': 'rgba(255,45,32,0.19)',
        'git': 'rgba(240,81,51,0.4)',
        'ubuntu': 'rgba(221,72,20,0.4)'

      }
    }
  },
  plugins: [require('daisyui')],//require('daisyui'),
  daisyui: {
    themes: [
      {
        default: {
          'primary': '#F0BF6C',
          'primary-content': '#140d04',
          'secondary': '#3D3E42',
          'secondary-content': '#d5d5d6',
          'accent': '#0061ff',
          'accent-content': '#d0e3ff',
          'neutral': '#3D3E42',
          'neutral-content': '#d5d5d6',
          'base-100': '#272829',
          'base-200': '#31333B',
          'base-300': '#1a1b1c',
          'base-content': '#cfcfd0',
          'info': '#00edff',
          'info-content': '#001416',
          'success': '#85b300',
          'success-content': '#060c00',
          'warning': '#ff9f00',
          'warning-content': '#160900',
          'error': '#e44060',
          'error-content': '#120103'
        },
        night: {
          ...require('daisyui/src/theming/themes')['night'],
          'accent-content': '#fff',
          'secondary': '#0F2429'
        }
      }, 'emerald'
    ]
  }
}

