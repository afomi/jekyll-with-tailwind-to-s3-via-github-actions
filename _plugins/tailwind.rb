Jekyll::Hooks.register :site, :post_write do |site|
  system("npx @tailwindcss/cli -i ./assets/css/tailwind.css -o #{site.dest}/assets/css/main.css --minify")
end
