// After `vite build`: render the app's not-found view with the built server
// bundle and save it as dist/client/404.html, so GitHub Pages serves a page
// that hydrates cleanly on unknown URLs.
import { writeFileSync } from "node:fs";
const base = process.env.BASE_PATH ?? "/";
const { default: server } = await import("../dist/server/server.js");
const res = await server.fetch(new Request(`http://localhost${base}__not-found`), {}, {});
const html = await res.text();
if (!html.includes("<html")) throw new Error(`unexpected 404 render (status ${res.status})`);
writeFileSync(new URL("../dist/client/404.html", import.meta.url), html);
console.log(`404.html written (status ${res.status})`);
