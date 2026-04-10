# Own Your Website

A simple, modern template for building your own website.
No subscriptions, no platforms, no algorithms.
Just your content, your design, your rules.

Built with Jekyll and Tailwind CSS 4.
Deploy to GitHub Pages for free, or use any static host.

* [Live demo](https://afomi.github.io/jekyll-with-tailwind/)
* [Use this template](https://github.com/new?template_name=jekyll-with-tailwind&template_owner=afomi)
* [Wiki](https://github.com/afomi/jekyll-with-tailwind/wiki)

## Development

Tailwind 4.x uses the tailwindcss/cli to build assets.
`npm run build:css` generates `assets/css/main.css`,
based on the Tailwind classes that are used in the project.

### Option 1: Simple (build CSS once, then serve)

```bash
npm run build:css
bundle exec jekyll serve --livereload
```

### Option 2: Watch for CSS changes (two terminals)

**Terminal 1** - Watch and rebuild CSS on changes:
```bash
npx @tailwindcss/cli -i ./assets/css/tailwind.css -o ./assets/css/main.css --watch
```

**Terminal 2** - Serve Jekyll with live reload:
```bash
bundle exec jekyll serve --livereload
```

This setup watches for changes to your CSS and HTML files, rebuilds the CSS, and auto-refreshes the browser.