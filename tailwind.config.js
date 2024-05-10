/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokemon-bg': "url('/assets/bg/background/list-pokemons.svg')",
      }
    },
  },
  plugins: [],
}
