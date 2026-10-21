// After build: inline the (small, ~17 KB gzipped) stylesheet into the static
// HTML so first paint doesn't wait on an extra render-blocking request.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const base = process.env.BASE_PATH ?? "/";
const dir = new URL("../dist/client/", import.meta.url);
for (const page of ["index.html", "404.html"]) {
  const file = new URL(page, dir);
  if (!existsSync(file)) continue;
  let html = readFileSync(file, "utf8");
  html = html.replace(/<link rel="stylesheet" href="([^"]+\/assets\/(styles-[^"]+\.css))"[^>]*\/?>/, (m, href, name) => {
    const css = readFileSync(new URL(`assets/${name}`, dir), "utf8");
    // First layout uses a plain system face (cheap); the site fonts swap in right
    // after first paint, exactly like font-display: swap.
    return `<script>document.documentElement.classList.add("fp")</script><style>html.fp *{font-family:sans-serif!important}</style><style data-href="${href}">${css}</style>`;
  });
  // The entry is an async module script; separate modulepreload hints only make
  // ~140 KB of JS compete with the hero image and fonts before first paint.
  html = html.replace(/<link rel="modulepreload" href="[^"]+"\/?>/g, "");
  // Start the app bundle right after first paint so the static (prerendered)
  // page paints without competing with ~120 KB of JS; hydration follows.
  html = html.replace(
    /<script type="module" async="" src="([^"]+)"><\/script>/,
    (m, src) =>
      `<script>(function(){var d=document.documentElement,en=false;try{var q=new URLSearchParams(location.search).get("lang");en=(q==="en"||q==="ar"?q:localStorage.getItem("daralsama-lang"))==="en"}catch(e){}function go(){var s=document.createElement("script");s.type="module";s.src=${JSON.stringify(src)};document.head.appendChild(s)}if(en){d.lang="en";d.dir="ltr"}requestAnimationFrame(function(){setTimeout(go,0)})})()</script>`,
  );
  // Self-hosted fonts (font-display: swap) load without blocking first paint.
  const fontsHref = `${base}fonts/fonts.css`;
  if (!html.includes(fontsHref)) {
    html = html.replace(
      "</head>",
      `<link rel="stylesheet" href="${fontsHref}" media="print" onload="var l=this;requestAnimationFrame(function(){setTimeout(function(){l.media='all';document.documentElement.classList.remove('fp')},0)})"><noscript><link rel="stylesheet" href="${fontsHref}"></noscript></head>`,
    );
  }
  writeFileSync(file, html);
  console.log(`inlined css into ${page}`);
}
