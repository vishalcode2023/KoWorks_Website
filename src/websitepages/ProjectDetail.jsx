import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getProjectBySlug, projects } from "../data/projects";
import Footer from "../components/footer";

const RelatedProjects = lazy(
  () => import("../components/works/RelatedProjects"),
);

/* ─────────────────────────────────────────────
   DESIGN TOKEN SYSTEM — mirrors ServicesPage
   Keep in sync: same CSS vars, same font import
───────────────────────────────────────────── */
const sharedCss = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;600;700;800&display=swap');

  .pd-root {
    --c-ink:      #0e0e0c;
    --c-ink-60:   rgba(14,14,12,0.6);
    --c-surface:  #fff;
    --c-muted:    #fafaf8;
    --c-border:   #e8e8e4;
    --c-orange:   #F04E1A;
    --c-orange-08: rgba(240,78,26,0.08);
    --c-orange-15: rgba(240,78,26,0.15);
    --c-orange-20: rgba(240,78,26,0.2);
    --c-text-body: #555;
    --c-text-muted: #999;
    --f-display: 'Fraunces', serif;
    --f-body: 'Cabinet Grotesk', sans-serif;
    --px: 48px;
    --max-w: 1160px;

    font-family: var(--f-body);
    background: var(--c-surface);
    color: var(--c-ink);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── ANIMATIONS ── */
  @keyframes pd-shimmer {
    0%  { background-position: 200% 0; }
    100%{ background-position: -200% 0; }
  }
  @keyframes pd-pulse {
    0%,100%{ opacity:1; transform:scale(1); }
    50%{ opacity:.4; transform:scale(1.6); }
  }
  @keyframes pd-fadeUp {
    from{ opacity:0; transform:translateY(28px); }
    to  { opacity:1; transform:translateY(0); }
  }

  /* ── SHARED ATOMS (same as ServicesPage) ── */
  .pd-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--c-orange-08);
    border: 1px solid var(--c-orange-20);
    border-radius: 40px; padding: 5px 14px 5px 8px;
    margin-bottom: 20px;
  }
  .pd-eyebrow__dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--c-orange);
    animation: pd-pulse 2s ease-in-out infinite;
  }
  .pd-eyebrow__text {
    font-size: 11px; font-weight: 700;
    color: var(--c-orange); letter-spacing: 0.12em; text-transform: uppercase;
  }

  .pd-tag {
    display: inline-block; font-size: 13px; font-weight: 600;
    background: #f4f4f0; color: #444;
    border: 1.5px solid #e4e4e0;
    border-radius: 40px; padding: 6px 15px;
  }

  /* ── BREADCRUMB ── */
  .pd-breadcrumb {
    max-width: var(--max-w); margin: 0 auto;
    padding: 24px var(--px) 0;
    font-size: 13px; color: var(--c-text-muted);
    display: flex; gap: 8px; align-items: center; flex-wrap: wrap;
  }
  .pd-breadcrumb a { color: var(--c-text-muted); text-decoration: none; transition: color 0.18s; }
  .pd-breadcrumb a:hover { color: var(--c-ink); }
  .pd-breadcrumb__current { color: var(--c-ink); font-weight: 600; }

  /* ── HERO TEXT ── */
  .pd-hero {
    max-width: var(--max-w); margin: 0 auto;
    padding: 48px var(--px) 56px;
  }

  .pd-hero__badge-row {
    display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;
  }

  .pd-hero__own-tag {
    font-size: 11px; font-weight: 700;
    background: var(--c-ink); color: #fff;
    border-radius: 20px; padding: 4px 12px; letter-spacing: 0.05em;
  }

  .pd-hero__h1 {
    font-family: var(--f-display);
    font-size: clamp(44px, 6.5vw, 84px);
    font-weight: 900; letter-spacing: -0.045em;
    line-height: 0.95; margin: 0 0 18px; color: var(--c-ink);
  }

  .pd-hero__tagline {
    font-family: var(--f-display);
    font-size: clamp(18px, 2.2vw, 26px);
    font-weight: 300; font-style: italic;
    color: var(--c-text-body); margin: 0 0 36px;
    max-width: 680px; line-height: 1.5;
  }

  .pd-hero__meta {
    display: flex; gap: 28px; flex-wrap: wrap; border-top: 1px solid var(--c-border); padding-top: 24px;
  }
  .pd-hero__meta-item {}
  .pd-hero__meta-label {
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; color: #ccc; margin-bottom: 3px;
  }
  .pd-hero__meta-value { font-weight: 700; font-size: 14px; color: var(--c-ink); }

  /* ── HERO IMAGE ── */
  .pd-hero-image {
    max-width: var(--max-w); margin: 0 auto; padding: 0 var(--px);
  }
  .pd-hero-image__frame {
    height: clamp(280px, 44vw, 540px);
    border-radius: 20px; overflow: hidden; position: relative;
    background: #f4f4f0;
  }
  .pd-hero-image__shimmer {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, #f0f0ec 25%, #e8e8e4 50%, #f0f0ec 75%);
    background-size: 200% 100%;
    animation: pd-shimmer 1.5s infinite;
  }
  .pd-hero-image__img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: opacity 0.5s ease;
  }

  /* ── BEFORE / AFTER ── */
  .pd-narrative {
    max-width: var(--max-w); margin: 0 auto;
    padding: 72px var(--px) 64px;
  }

  /* Side-by-side on wide, stacked on mobile */
  .pd-narrative__layout {
    display: grid; grid-template-columns: 1fr 40px 1fr; gap: 0; align-items: start;
  }

  .pd-narrative__connector {
    display: flex; flex-direction: column; align-items: center;
    padding-top: 56px; color: #ccc; font-size: 22px; line-height: 1;
  }
  .pd-narrative__connector-line {
    width: 1px; height: 40px; background: var(--c-border); margin-bottom: 6px;
  }
  .pd-narrative__connector-arrow { transform: rotate(90deg); display: block; }

  /* Before / After card */
  .pd-card {
    background: var(--c-muted); border: 1.5px solid var(--c-border);
    border-radius: 20px; overflow: hidden;
  }
  .pd-card--before { border-top: 3px solid #ef4444; }
  .pd-card--after  { border-top: 3px solid #16a34a; }

  .pd-card__header {
    display: flex; align-items: center; gap: 12px;
    padding: 22px 26px 18px; border-bottom: 1px solid var(--c-border);
  }
  .pd-card__icon {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;
  }
  .pd-card__icon--before { background: #fef2f2; border: 2px solid #fecaca; }
  .pd-card__icon--after  { background: #f0fdf4; border: 2px solid #bbf7d0; }
  .pd-card__header-label {
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; margin-bottom: 3px;
  }
  .pd-card__header-label--before { color: #ef4444; }
  .pd-card__header-label--after  { color: #16a34a; }
  .pd-card__headline {
    font-family: var(--f-display);
    font-size: clamp(16px, 2vw, 22px); font-weight: 700;
    letter-spacing: -0.025em; margin: 0; line-height: 1.25; color: var(--c-ink);
  }

  .pd-card__body { padding: 22px 26px 24px; }

  .pd-points { list-style: none; padding: 0; margin: 0 0 18px; display: flex; flex-direction: column; gap: 12px; }
  .pd-points__item { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; color: #444; line-height: 1.65; }
  .pd-points__bullet { font-weight: 700; flex-shrink: 0; margin-top: 2px; font-size: 13px; }
  .pd-points__bullet--x { color: #ef4444; }
  .pd-points__bullet--check { color: #16a34a; }

  .pd-pain {
    background: #fff0ee; border: 1px solid #fecaca;
    border-radius: 12px; padding: 14px 18px;
    font-size: 13.5px; color: #b91c1c; font-style: italic; line-height: 1.65;
  }

  /* ── IMPACT ── */
  .pd-impact {
    background: var(--c-ink);
    padding: 64px var(--px);
  }
  .pd-impact-inner { max-width: var(--max-w); margin: 0 auto; }
  .pd-impact__label {
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.14em; color: rgba(255,255,255,0.28); margin-bottom: 12px;
  }
  .pd-impact__title {
    font-family: var(--f-display);
    font-size: clamp(26px, 3vw, 42px); font-weight: 900;
    color: #fff; letter-spacing: -0.04em; margin: 0 0 40px; line-height: 1.1;
  }
  .pd-impact__grid {
    display: grid;
    gap: 1px; background: rgba(255,255,255,0.07);
    border-radius: 16px; overflow: hidden;
  }
  .pd-impact__cell {
    background: var(--c-ink); padding: 32px 28px; text-align: center;
    transition: background 0.2s ease;
  }
  .pd-impact__cell:hover { background: #161614; }
  .pd-impact__metric {
    font-family: var(--f-display);
    font-size: clamp(30px, 3.8vw, 48px); font-weight: 900;
    letter-spacing: -0.045em; color: var(--c-orange);
    line-height: 1; margin-bottom: 8px; display: block;
  }
  .pd-impact__metric-label { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 500; }

  /* ── TECH TAGS ── */
  .pd-tech {
    max-width: var(--max-w); margin: 0 auto;
    padding: 52px var(--px) 48px;
    border-bottom: 1px solid var(--c-border);
  }
  .pd-tech__label {
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; color: #bbb; margin-bottom: 16px;
  }
  .pd-tech__tags { display: flex; flex-wrap: wrap; gap: 10px; }

  /* ── CTA ── */
  .pd-cta {
    max-width: var(--max-w); margin: 0 auto;
    padding: 56px var(--px) 80px;
  }
  .pd-cta__box {
    background: var(--c-muted); border: 1.5px solid var(--c-border);
    border-radius: 24px; padding: 48px 52px;
    display: flex; align-items: center;
    justify-content: space-between; gap: 36px; flex-wrap: wrap;
  }
  .pd-cta__label {
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; color: #bbb; margin-bottom: 12px;
  }
  .pd-cta__headline {
    font-family: var(--f-display);
    font-size: clamp(22px, 2.6vw, 34px); font-weight: 900;
    letter-spacing: -0.04em; margin: 0; color: var(--c-ink);
    line-height: 1.15;
  }
  .pd-cta__headline em { color: var(--c-orange); font-style: italic; font-weight: 300; }

  .pd-cta__actions { display: flex; gap: 12px; flex-wrap: wrap; }

  .pd-btn {
    display: inline-flex; align-items: center; gap: 8px;
    border-radius: 40px; padding: 12px 24px;
    font-size: 13.5px; font-weight: 700;
    text-decoration: none; border: none; cursor: pointer;
    font-family: var(--f-body); transition: all 0.22s ease;
  }
  .pd-btn--orange {
    background: var(--c-orange); color: #fff;
    box-shadow: 0 4px 18px rgba(240,78,26,0.32);
  }
  .pd-btn--orange:hover { background: #cc3a0f; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(240,78,26,0.42); }
  .pd-btn--ghost {
    background: transparent; color: #666;
    border: 1.5px solid var(--c-border);
  }
  .pd-btn--ghost:hover { border-color: var(--c-ink); color: var(--c-ink); transform: translateY(-2px); }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .pd-root { --px: 28px; }
    .pd-narrative__layout {
      grid-template-columns: 1fr;
    }
    .pd-narrative__connector {
      flex-direction: row; padding: 12px 0; gap: 8px;
    }
    .pd-narrative__connector-line { width: 40px; height: 1px; }
    .pd-narrative__connector-arrow { transform: none; }
    .pd-impact__grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 480px) {
    .pd-root { --px: 18px; }
    .pd-impact__grid { grid-template-columns: 1fr 1fr !important; }
    .pd-cta__box { padding: 32px 24px; }
  }
`;

/* ── Hooks ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Lazy image ── */
function LazyImage({ src, alt, className }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="pd-hero-image__frame">
      {!loaded && <div className="pd-hero-image__shimmer" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="pd-hero-image__img"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}

/* ── Animated counter ── */
function Counter({ value, active }) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);

  useEffect(() => {
    if (!active || ran.current) return;
    ran.current = true;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const prefix = value.match(/^[^\d]*/)?.[0] || "";
    const suffix = value.match(/[^\d.]+$/)?.[0] || "";
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 1200;
    const step = 16;
    const inc = num / (duration / step);
    const timer = setInterval(() => {
      start += inc;
      if (start >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(
          `${prefix}${Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)}${suffix}`,
        );
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, value]);

  return <>{display}</>;
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  const [heroRef, heroVisible] = useReveal(0.1);
  const [beforeRef, beforeVisible] = useReveal(0.12);
  const [afterRef, afterVisible] = useReveal(0.12);
  const [impactRef, impactVisible] = useReveal(0.15);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div
        style={{
          padding: "120px 40px",
          textAlign: "center",
          fontFamily: "'Cabinet Grotesk', sans-serif",
        }}
      >
        <h1 style={{ fontSize: 32, color: "#0e0e0c", marginBottom: 16 }}>
          Project not found
        </h1>
        <Link to="/works" style={{ color: "#F04E1A", fontWeight: 700 }}>
          ← Back to Our Works
        </Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);
  const impactCols = project.after.impact.length;

  return (
    <>
      <Helmet>
        <title>{project.seo.title}</title>
        <meta name="description" content={project.seo.description} />
        <meta name="keywords" content={project.seo.keywords.join(", ")} />
        <link rel="canonical" href={project.seo.canonical} />
        <meta property="og:title" content={project.seo.title} />
        <meta property="og:description" content={project.seo.description} />
        <meta
          property="og:image"
          content={`https://koworks.in${project.img}`}
        />
        <meta property="og:url" content={project.seo.canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.seo.title} />
        <meta name="twitter:description" content={project.seo.description} />
        <meta
          name="twitter:image"
          content={`https://koworks.in${project.img}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.seo.title,
            description: project.seo.description,
            image: `https://koworks.in${project.img}`,
            author: {
              "@type": "Organization",
              name: "Koworks Technologies",
              url: "https://koworks.in",
            },
            publisher: {
              "@type": "Organization",
              name: "Koworks Technologies",
              url: "https://koworks.in",
            },
            datePublished: `${project.year}-01-01`,
            mainEntityOfPage: project.seo.canonical,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://koworks.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Our Works",
                item: "https://koworks.in/works",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.name,
                item: project.seo.canonical,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="pd-root">
        <style>{sharedCss}</style>

        {/* ── BREADCRUMB ── */}
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/works">Our Works</Link>
          <span>›</span>
          <span className="pd-breadcrumb__current">{project.name}</span>
        </nav>

        {/* ── HERO ── */}
        <header
          ref={heroRef}
          className="pd-hero"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="pd-hero__badge-row">
            <div className="pd-eyebrow">
              <div className="pd-eyebrow__dot" />
              <span className="pd-eyebrow__text">{project.type}</span>
            </div>
           
          </div>

          <h1 className="pd-hero__h1">{project.name}</h1>

          <p className="pd-hero__tagline">{project.tagline}</p>

          <div className="pd-hero__meta">
            {[
              ["Category", project.category],
              ["Year", project.year],
              ["Duration", project.duration],
              ["Client", project.client],
            ].map(([label, val]) => (
              <div className="pd-hero__meta-item" key={label}>
                <div className="pd-hero__meta-label">{label}</div>
                <div className="pd-hero__meta-value">{val}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="pd-hero-image">
          <LazyImage
            src={project.img}
            alt={`${project.name} — project screenshot`}
          />
        </div>

        {/* ── BEFORE / AFTER ── */}
        <section className="pd-narrative">
          <div className="pd-narrative__layout">
            {/* Before */}
            <div
              ref={beforeRef}
              style={{
                opacity: beforeVisible ? 1 : 0,
                transform: beforeVisible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.65s ease, transform 0.65s ease",
              }}
            >
              <div className="pd-card pd-card--before">
                <div className="pd-card__header">
                  <div className="pd-card__icon pd-card__icon--before">😓</div>
                  <div>
                    <div className="pd-card__header-label pd-card__header-label--before">
                      Before Koworks
                    </div>
                    <h2 className="pd-card__headline">
                      {project.before.headline}
                    </h2>
                  </div>
                </div>
                <div className="pd-card__body">
                  <ul className="pd-points">
                    {project.before.points.map((point, i) => (
                      <li key={i} className="pd-points__item">
                        <span className="pd-points__bullet pd-points__bullet--x">
                          ✕
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="pd-pain">💬 {project.before.pain}</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="pd-narrative__connector">
              <div className="pd-narrative__connector-line" />
              <span className="pd-narrative__connector-arrow">↓</span>
            </div>

            {/* After */}
            <div
              ref={afterRef}
              style={{
                opacity: afterVisible ? 1 : 0,
                transform: afterVisible ? "translateY(0)" : "translateY(28px)",
                transition:
                  "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
              }}
            >
              <div className="pd-card pd-card--after">
                <div className="pd-card__header">
                  <div className="pd-card__icon pd-card__icon--after">🚀</div>
                  <div>
                    <div className="pd-card__header-label pd-card__header-label--after">
                      After Koworks
                    </div>
                    <h2 className="pd-card__headline">
                      {project.after.headline}
                    </h2>
                  </div>
                </div>
                <div className="pd-card__body">
                  <ul className="pd-points" style={{ marginBottom: 0 }}>
                    {project.after.points.map((point, i) => (
                      <li key={i} className="pd-points__item">
                        <span className="pd-points__bullet pd-points__bullet--check">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPACT METRICS ── */}
        <section
          ref={impactRef}
          className="pd-impact"
          style={{
            opacity: impactVisible ? 1 : 0,
            transform: impactVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="pd-impact-inner">
            <div className="pd-impact__label">Impact</div>
            <h2 className="pd-impact__title">The results, in numbers</h2>
            <div
              className="pd-impact__grid"
              style={{ gridTemplateColumns: `repeat(${impactCols}, 1fr)` }}
            >
              {project.after.impact.map((item, i) => (
                <div key={i} className="pd-impact__cell">
                  <span className="pd-impact__metric">
                    <Counter value={item.metric} active={impactVisible} />
                  </span>
                  <div className="pd-impact__metric-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH TAGS ── */}
        <section className="pd-tech">
          <div className="pd-tech__label">Technologies used</div>
          <div className="pd-tech__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="pd-tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pd-cta">
          <div className="pd-cta__box">
            <div>
              <div className="pd-cta__label">
                Ready to build something like this?
              </div>
              <h3 className="pd-cta__headline">
                Let's solve your real problem — <em>not just ship code.</em>
              </h3>
            </div>
            <div className="pd-cta__actions">
              <Link to="/contact" className="pd-btn pd-btn--orange">
                Start a project
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link to="/services" className="pd-btn pd-btn--ghost">
                Our services ↗
              </Link>
              <Link to="/works" className="pd-btn pd-btn--ghost">
                ← More projects
              </Link>
            </div>
          </div>
        </section>

        {/* ── RELATED PROJECTS ── */}
        <Suspense
          fallback={
            <div
              style={{
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ccc",
                fontSize: 14,
              }}
            >
              Loading more projects…
            </div>
          }
        >
          <RelatedProjects related={related} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
