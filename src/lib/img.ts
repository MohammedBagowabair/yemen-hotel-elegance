// Responsive WebP variants generated into public/img (see scripts/optimize-images.py).
const BASE = import.meta.env.BASE_URL;
const widths: Record<string, number[]> = {
  city: [480, 800, 1200],
  coffee: [480, 800, 912],
  detail: [480, 800, 912],
  dining: [480, 800, 1200],
  majlis: [480, 800, 1200],
  spa: [480, 800, 1200],
  suite: [480, 800, 1200],
  hero: [480, 800, 1200, 1920],
};
export type Pic = { src: string; srcSet: string };
export const imgUrl = (name: string, w: number) => `${BASE}img/${name}-${w}.webp`;
export function pic(name: keyof typeof widths | string): Pic {
  const ws = widths[name] ?? [];
  return {
    src: imgUrl(name, ws[ws.length - 2] ?? ws[0]!),
    srcSet: ws.map((w) => `${imgUrl(name, w)} ${w}w`).join(", "),
  };
}
export const heroMobileSrcSet = `${imgUrl("hero-m", 480)} 480w, ${imgUrl("hero-m", 653)} 653w`;
export const heroMobileAvifSrcSet = `${BASE}img/hero-m-480.avif 480w, ${BASE}img/hero-m-653.avif 653w`;
export const heroAvifSrcSet = [800, 1200, 1920].map((w) => `${BASE}img/hero-${w}.avif ${w}w`).join(", ");
