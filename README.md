# Abdullah Khan — Portfolio

A plain HTML/CSS/JS portfolio site. No build step, no dependencies — open it and it works.

## Before you push this

1. Make sure `Abdullah_Khan_Resume.pdf` is in this folder — both
   "Download résumé" buttons (hero + Résumé section) already link to it
   by that exact name.
2. Check the project list in the "Projects" section matches what you want
   shown.
3. Optional: add a photo. Drop an image file (e.g. `photo.jpg`) into this
   folder and reference it in the hero section if you want a headshot.

## Run it locally

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

This site goes into the **existing** repo `Abdullah2139/Abdullah2139.github.io`
— it already has a `CNAME` file pointing at `iabdullahkhan.me`, set up via
Namecheap's GitHub Student Pack integration. Don't create a new repo.

```bash
git clone https://github.com/Abdullah2139/Abdullah2139.github.io.git
# copy index.html, style.css, script.js, Abdullah_Khan_Resume.pdf into that folder
cd Abdullah2139.github.io
git add .
git commit -m "Add portfolio site"
git push
```

Check **Settings → Pages** in the repo afterward — it should show the site
published at `iabdullahkhan.me` within a couple of minutes.

## File structure

```
Abdullah2139.github.io/
├── CNAME                       — already present, points to iabdullahkhan.me
├── index.html                  — all page content and structure
├── style.css                   — design system (colors, type, layout)
├── script.js                   — scroll-reveal, nav highlight, footer year
├── Abdullah_Khan_Resume.pdf    — your résumé
└── README.md                   — this file
```
