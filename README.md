# Dar Al Sama Hotel & Residences

Bilingual (English / Arabic) landing page for Dar Al Sama, a boutique hotel concept in Old Sana'a, Yemen.

Live: https://mohammedbagowabair.github.io/yemen-hotel-elegance/

## Stack

TanStack Start (React 19, TanStack Router), Vite, Tailwind CSS v4, Radix UI. The home page is prerendered to static HTML for GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build & deploy

```sh
BASE_PATH=/yemen-hotel-elegance/ npm run build:pages   # dist/client, plus a prerendered 404.html
npm run deploy                                   # publishes dist/client to the gh-pages branch
```
