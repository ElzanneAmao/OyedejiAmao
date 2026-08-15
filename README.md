# Oyedeji Amao — Portfolio Site

Plain HTML/CSS/JS, no build step, no dependencies. All links between pages use relative paths, so the site works unmodified whether it's hosted at a domain root (Netlify, Vercel) or a subpath (a GitHub Pages project site).

## Preview locally

Relative paths still need an actual server — opening files directly via `file://` won't resolve them correctly from every folder depth.

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this branch, then merge it into the repo's default branch (Pages serves from a single branch, not arbitrary branches, unless you point it at this one directly).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, pick the branch (e.g. `main` or this one) and folder **/ (root)**, then **Save**.
5. GitHub builds and publishes in about a minute. The URL appears at the top of that same Settings → Pages screen — for this repo it will be `https://elzanneamao.github.io/OyedejiAmao/`.
6. Revisit the page and refresh after a minute if it shows "Pages not built yet."

## Deploy elsewhere

Netlify, Vercel, Cloudflare Pages, etc. all work with zero configuration — point the host at the repo root, no build command needed.

If the live domain isn't `elzanneamao.github.io/OyedejiAmao`, update the domain in `robots.txt` and `sitemap.xml` to match.

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
