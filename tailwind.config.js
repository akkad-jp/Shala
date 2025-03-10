/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.html',
    './src/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
    ]
  }
}
