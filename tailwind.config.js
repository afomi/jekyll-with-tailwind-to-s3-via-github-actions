module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Public Sans"', 'sans-serif'], // this overrides default `font-sans`
        },
      },
    },
  },
  plugins: []
}
