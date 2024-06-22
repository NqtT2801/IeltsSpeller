/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(234,175,203,1) 0%, rgba(148,187,233,1) 0%, rgba(177,183,223,1) 100%);',
      },
    },
  },
  plugins: [],
}

