/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // why we use string ? cause we are seperating words with dash: then they are two words
        // why string is wroking object's key? cause they are under the hood strings
        'OpenSans-Regular': 'OpenSans_400Regular',
        'OpenSans-SemiBold': 'OpenSans_600SemiBold',
        'OpenSans-Bold': 'OpenSans_700Bold',
      },
      colors: {
        action: '#3b82f6'
      }
    },
  },
  plugins: [],
};
