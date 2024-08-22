/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#fbf2c0',
        'dark-brown': '#48392a',
        'deep-brown': '#43281c',
        'rust': '#c06e52',
        'coral': '#f96f5d',
      },
    },
  },
  plugins: [],
}