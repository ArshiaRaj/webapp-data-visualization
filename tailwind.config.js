/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'myapp/templates/**/*.html',  // All HTML files in templates
    'myapp/src/**/*.css',         // All CSS files in src
    'myapp/src/**/*.js',          // All JS files in src (if using Tailwind in JS)
    'myapp/**/*.py',              // All Python files if using Tailwind classes in templates

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

