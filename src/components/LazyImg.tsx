import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

// True lazy loading: the image source is only attached when the visitor scrolls
// within ~300px of it (native loading="lazy" fetches far ahead on mobile).
export function LazyImg({ src, srcSet, sizes, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (!("IntersectionObserver" in window)) return setNear(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near]);
  return (
    <img
      ref={ref}
      {...rest}
      {...(near ? { src, srcSet, sizes } : {})}
      loading="lazy"
      decoding="async"
    />
  );
}
