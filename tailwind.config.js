/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-cyan':   '#6EE7F7',
        'accent-violet': '#A78BFA',
        'deep-bg':       '#050810',
        'surface':       '#0D1117',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}