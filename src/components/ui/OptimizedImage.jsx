import { useState, useRef, useEffect } from "react";

/**
 * OptimizedImage — lazy-loaded, WebP-first, SEO alt text enforced
 *
 * File naming convention (apply at source):
 *   ✅ koworks-web-development-team-mysore.webp
 *   ✅ react-nextjs-project-screenshot-karnataka.webp
 *   ❌ IMG_001.jpg  ❌ image2.png
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  eager = false, // true for hero / above-fold images
  className = "",
  style = {},
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px",
}) {
  const [isVisible, setIsVisible] = useState(eager);
  const ref = useRef(null);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  // Warn on missing alt text in development
  if (import.meta.env.DEV && !alt) {
    console.warn(`[OptimizedImage] Missing alt text for: ${src}`);
  }

  return (
    <div ref={ref} style={{ width, height, ...style }} className={className}>
      {isVisible && (
        <picture>
          {/* WebP source */}
          <source
            srcSet={src.replace(/\.(jpg|jpeg|png)$/, ".webp")}
            type="image/webp"
            sizes={sizes}
          />
          {/* Fallback */}
          <img
            src={src}
            alt={alt || ""}
            width={width}
            height={height}
            loading={eager ? "eager" : "lazy"}
            decoding={eager ? "sync" : "async"}
            fetchpriority={eager ? "high" : "auto"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </picture>
      )}
    </div>
  );
}
