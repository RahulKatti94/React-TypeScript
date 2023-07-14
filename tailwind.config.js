/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  rules: [
    // Other rules...
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              // Specify your PostCSS plugins here
              require('autoprefixer'),
              require('postcss-preset-env'),
            ],
          },
        },
      ],
    },
  ],
}

