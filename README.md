# Oyedeji Amao — Portfolio Site

Plain HTML/CSS/JS, no build step, no dependencies.

## Preview locally

Root-relative paths (`/css/style.css`, `/about.html`) need a local server — opening files directly via `file://` won't resolve them.

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

Any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages). No build command or environment variables are required — just point the host at the repo root.

If deploying somewhere other than `oyedejiamao.netlify.app`, update the domain in `robots.txt` and `sitemap.xml`.

## Structure

```
index.html                     Home
about.html
how-i-work.html
results.html
contact.html
case-studies/index.html        Case studies overview
case-studies/*.html            4 individual case studies
css/style.css                  Design system
js/main.js                     Nav, mobile menu, scroll reveal
assets/favicon.svg             Monogram mark
```
