# Personal site

A single-page, static personal site. Tabs for **Apps**, **Portfolio**, and **Misc**, a
prominent LinkedIn button, and a card per project.

## Editing content

Everything lives in **`data.js`** — no build step.

- `PROFILE` — your name, tagline, blurb, and the LinkedIn / GitHub / email links.
  - **Replace the LinkedIn URL** (`linkedin:`) with your real profile URL.
- `PROJECTS` — one object per card. To add a project, copy a block and change the fields.
  - `tab`: `"apps"`, `"portfolio"`, or `"misc"`
  - `link`: leave as `""` to hide the button (use for private/unreleased work)

## Local preview

Just open `index.html` in a browser, or:

```
py -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repo (e.g. `JacobRHess/jacobhess.github.io` for a root site, or any
   name for a project site).
2. Push these files:
   ```
   git init
   git add .
   git commit -m "Personal site"
   git branch -M main
   git remote add origin git@github.com:JacobRHess/<repo>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source: `main` / root**, save.
4. Live at `https://jacobrhess.github.io/<repo>/` (or `https://jacobrhess.github.io/`
   if you named the repo `jacobrhess.github.io`).

### Custom domain (optional)

Add a `CNAME` file containing your domain, then set the DNS records GitHub shows you.
