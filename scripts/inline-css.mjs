// After build: inline the (small, ~17 KB gzipped) stylesheet into the static
// HTML so first paint doesn't wait on an extra render-blocking request.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const base = process.env.BASE_PATH ?? "/";
function fontFile(css, prefix) {
  return css.match(new RegExp(`${prefix}-[\\w]+\\.woff2`))[0];
}
const dir = new URL("../dist/client/", import.meta.url);
for (const page of ["index.html", "404.html"]) {
  const file = new URL(page, dir);
  if (!existsSync(file)) continue;
  let html = readFileSync(file, "utf8");
  html = html.replace(/<link rel="stylesheet" href="([^"]+\/assets\/(styles-[^"]+\.css))"[^>]*\/?>/, (m, href, name) => {
    const css = readFileSync(new URL(`assets/${name}`, dir), "utf8");
    // First layout uses a plain system face (cheap); the site fonts swap in right
    // after first paint, exactly like font-display: swap.
    // The hero heading paints in its final face right away: its display font
    // (Reem Kufi arabic subset for AR, Marcellus latin for EN, 12-15 KB) is
    // declared inline and preloaded for the visitor's language.
    const ff = readFileSync(new URL("fonts/fonts.css", dir), "utf8");
    const pick = (file) => ff.match(new RegExp(`/\\* (?:arabic|latin) \\*/\\s*@font-face \\{[^}]*${file}[^}]*\\}`, "g")) ?? [];
    const heroFaces = [...pick("ReemKufi-arabic"), ...pick("Marcellus-latin")]
      .join("")
      .replace(/url\(\.\//g, `url(${base}fonts/`)
      .replace(/font-display: swap/g, "font-display: block");
    const fontBoot = `(function(){var d=document.documentElement,en=false;try{var q=new URLSearchParams(location.search).get("lang");en=(q==="en"||q==="ar"?q:localStorage.getItem("daralsama-lang"))==="en"}catch(e){}if(en){d.lang="en";d.dir="ltr"}d.classList.add("fp");window.afterPaint=function(cb){var n=2;function k(){if(--n===0)requestAnimationFrame(function(){setTimeout(cb,0)})}if(document.readyState==="complete")k();else addEventListener("load",k);try{if(performance.getEntriesByName("first-contentful-paint").length)k();else new PerformanceObserver(function(l,o){o.disconnect();k()}).observe({type:"paint",buffered:true})}catch(e){k()}};window.fontsReady=function(l){if(!l.r){l.r=1;afterPaint(function(){fontsReady(l)});return}l.media="all";var f=document.fonts,w=["300","400","500","600"],q=[];if(!f||!f.load){d.classList.remove("fp");return}w.forEach(function(x){q.push(f.load(x+" 1em 'IBM Plex Sans Arabic'","a\\u0639"),f.load(x+" 1em Jost","a"),f.load(x+" 1em 'Reem Kufi'","a\\u0639"))});q.push(f.load("1em Marcellus","a"));Promise.all(q).then(function(){},function(){}).then(function(){d.classList.remove("fp")})};var l=document.createElement("link");l.rel="preload";l.as="font";l.type="font/woff2";l.crossOrigin="anonymous";l.href=${JSON.stringify(base + "fonts/")}+(en?${JSON.stringify(fontFile(ff, "Marcellus-latin"))}:${JSON.stringify(fontFile(ff, "ReemKufi-arabic"))});document.head.appendChild(l)})()`;
    // Everything except the hero heading lays out in a plain system face first
    // (cheap); the remaining site fonts swap in right after first paint.
    return `<script>${fontBoot}</script><style>${heroFaces}html.fp body *:not(h1):not(h1 *){font-family:sans-serif!important}</style><style data-href="${href}">${css}</style>`;
  });
  // The entry is an async module script; separate modulepreload hints only make
  // ~140 KB of JS compete with the hero image and fonts before first paint.
  html = html.replace(/<link rel="modulepreload" href="[^"]+"\/?>/g, "");
  // Start the app bundle once the page (hero image, hero font) has loaded so the static (prerendered)
  // page paints without competing with ~120 KB of JS; hydration follows.
  html = html.replace(
    /<script type="module" async="" src="([^"]+)"><\/script>/,
    (m, src) =>
      `<script>(function(){var d=document.documentElement,en=false;try{var q=new URLSearchParams(location.search).get("lang");en=(q==="en"||q==="ar"?q:localStorage.getItem("daralsama-lang"))==="en"}catch(e){}function go(){var s=document.createElement("script");s.type="module";s.src=${JSON.stringify(src)};document.head.appendChild(s)}afterPaint(go)})()</script>`,
  );
  // Self-hosted fonts (font-display: swap) load without blocking first paint.
  const fontsHref = `${base}fonts/fonts.css`;
  if (!html.includes(fontsHref)) {
    html = html.replace(
      "</head>",
      `<link rel="stylesheet" href="${fontsHref}" media="print" onload="fontsReady(this)"><noscript><link rel="stylesheet" href="${fontsHref}"></noscript></head>`,
    );
  }
  writeFileSync(file, html);
  console.log(`inlined css into ${page}`);
}
