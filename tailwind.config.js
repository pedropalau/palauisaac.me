const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindui = require('@tailwindcss/ui');

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [
    tailwindui(),
  ],
};
