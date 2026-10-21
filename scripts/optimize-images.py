"""Regenerate responsive images in public/img from the originals in src/assets.
Run: python3 scripts/optimize-images.py  (needs Pillow with WebP/AVIF support)"""
from PIL import Image

SRC, OUT = "src/assets", "public/img"
WIDTHS = {"city": [480, 800, 1200], "coffee": [480, 800, 912], "detail": [480, 800, 912],
          "dining": [480, 800, 1200], "majlis": [480, 800, 1200], "spa": [480, 800, 1200],
          "suite": [480, 800, 1200]}

def fit(im, w):
    W, H = im.size
    return im.resize((w, round(H * w / W)), Image.LANCZOS)

for name, widths in WIDTHS.items():
    im = Image.open(f"{SRC}/{name}.jpg").convert("RGB")
    for w in widths:
        fit(im, w).save(f"{OUT}/{name}-{w}.webp", "WEBP", quality=72, method=6)

# Hero: landscape set plus a centred portrait crop for phones (same framing as object-cover).
hero = Image.open(f"{SRC}/hero.jpg").convert("RGB")
W, H = hero.size
for w, q in [(480, 60), (800, 58), (1200, 58), (1920, 55)]:
    fit(hero, w).save(f"{OUT}/hero-{w}.webp", "WEBP", quality=q, method=6)
for w in [800, 1200, 1920]:
    fit(hero, w).save(f"{OUT}/hero-{w}.avif", "AVIF", quality=40, speed=4)
cw = round(H * 0.6); x = (W - cw) // 2
crop = hero.crop((x, 0, x + cw, H))
for w, q in [(480, 55), (653, 52)]:
    fit(crop, w).save(f"{OUT}/hero-m-{w}.webp", "WEBP", quality=q, method=6)
    fit(crop, w).save(f"{OUT}/hero-m-{w}.avif", "AVIF", quality=38, speed=4)
# Light hero (arched frame): 4:5 centre crop.
cw = round(H * 0.8); x = (W - cw) // 2
crop45 = hero.crop((x, 0, x + cw, H))
for w in [480, 720, 870]:
    fit(crop45, w).save(f"{OUT}/hero-p-{w}.avif", "AVIF", quality=45, speed=4)
    fit(crop45, w).save(f"{OUT}/hero-p-{w}.webp", "WEBP", quality=70, method=6)
