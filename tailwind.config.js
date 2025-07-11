/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a'
        },
        'accent-cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2'
        },
        'accent-lime': {
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d'
        }
      }
    }
  },
}