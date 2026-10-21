// Above-the-fold text rendered in both languages; CSS shows the one matching
// <html lang>. The static (Arabic) HTML can therefore paint English instantly
// for English visitors, before the app bundle has loaded.
export function T({ v }: { v: { ar: string; en: string } }) {
  return (
    <>
      <span lang="ar" className="t-ar">{v.ar}</span>
      <span lang="en" className="t-en">{v.en}</span>
    </>
  );
}
