import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../components/footer";
import { projects as allProjects } from "../data/projects";

/* ─────────────────────────────────────────────
   DESIGN TOKEN SYSTEM — mirrors ServicesPage & ProjectDetail
   Single source: --c-*, --f-*, --px, --max-w
───────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;600;700;800&display=swap');

  .ow-root *, .ow-root *::before, .ow-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }

  .ow-root {
    --c-ink:        #0e0e0c;
    --c-surface:    #fff;
    --c-muted:      #fafaf8;
    --c-border:     #e8e8e4;
    --c-orange:     #F04E1A;
    --c-orange-08:  rgba(240,78,26,0.08);
    --c-orange-20:  rgba(240,78,26,0.2);
    --c-text-body:  #555;
    --c-text-muted: #999;
    --f-display:    'Fraunces', serif;
    --f-body:       'Cabinet Grotesk', sans-serif;
    --px:           64px;
    --max-w:        1300px;

    font-family: var(--f-body);
    background: var(--c-surface);
    color: var(--c-ink);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── SHARED ATOMS ── */
  @keyframes ow-pulse {
    0%,100%{ opacity:1; transform:scale(1); }
    50%{ opacity:.4; transform:scale(1.6); }
  }

  .ow-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--c-orange-08);
    border: 1px solid var(--c-orange-20);
    border-radius: 40px; padding: 5px 14px 5px 8px;
    margin-bottom: 22px;
  }
  .ow-eyebrow__dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--c-orange);
    animation: ow-pulse 2s ease-in-out infinite;
  }
  .ow-eyebrow__text {
    font-size: 11px; font-weight: 700;
    color: var(--c-orange); letter-spacing: 0.12em; text-transform: uppercase;
  }

  .ow-live-pill {
    display: flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.12); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 40px; padding: 5px 13px;
  }
  .ow-live-pill__dot {
    width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
    animation: ow-pulse 2.5s ease-in-out infinite;
  }
  .ow-live-pill__text { font-size: 10.5px; font-weight: 700; color: #fff; letter-spacing: 0.06em; text-transform: uppercase; }

  .ow-own-tag {
    font-size: 10.5px; font-weight: 700;
    background: rgba(240,78,26,0.82); backdrop-filter: blur(8px);
    color: #fff; border-radius: 20px; padding: 4px 12px;
  }

  /* ══════════════════════════════
     HERO
  ══════════════════════════════ */
  .ow-hero {
    max-width: var(--max-w); margin: 0 auto;
    padding: 112px var(--px) 72px;
    display: grid; grid-template-columns: 1.2fr 0.8fr;
    gap: 80px; align-items: center;
    border-bottom: 1px solid var(--c-border);
  }

  .ow-hero__title {
    font-family: var(--f-display);
    font-size: clamp(60px, 8vw, 108px);
    font-weight: 900; color: var(--c-ink);
    line-height: 0.9; letter-spacing: -0.05em; margin: 0 0 28px;
  }
  .ow-hero__title em { color: var(--c-orange); font-style: italic; font-weight: 300; }

  .ow-hero__meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .ow-hero__badge {
    font-family: var(--f-display); font-size: 12px; font-weight: 700;
    background: var(--c-muted); border: 1px solid var(--c-border);
    color: var(--c-ink); border-radius: 20px; padding: 5px 14px;
  }

  .ow-hero__quote {
    font-family: var(--f-display);
    font-size: clamp(17px, 1.9vw, 22px);
    font-weight: 300; font-style: italic;
    color: #333; line-height: 1.6; margin: 0 0 22px;
    padding-left: 18px; border-left: 3px solid var(--c-orange);
  }
  .ow-hero__sub { font-size: 14.5px; color: var(--c-text-muted); line-height: 1.75; margin: 0; }

  /* ── STAT BAR ── */
  .ow-statbar {
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 1px; background: var(--c-border);
    border-bottom: 1px solid var(--c-border);
  }
  .ow-stat {
    background: var(--c-muted); padding: 28px 20px;
    text-align: center; transition: background 0.18s;
  }
  .ow-stat:hover { background: var(--c-surface); }
  .ow-stat__val {
    font-family: var(--f-display); font-size: 38px; font-weight: 900;
    color: var(--c-ink); letter-spacing: -0.05em; line-height: 1;
    display: block; margin-bottom: 5px;
  }
  .ow-stat__val span { color: var(--c-orange); }
  .ow-stat__lbl { font-size: 12px; color: var(--c-text-muted); font-weight: 500; }

  /* ══════════════════════════════
     FILTER TABS
  ══════════════════════════════ */
  .ow-filters {
    max-width: var(--max-w); margin: 0 auto;
    padding: 48px var(--px) 36px;
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  }

  .ow-filter-btn {
    font-family: var(--f-body); font-size: 13.5px; font-weight: 600;
    border-radius: 40px; padding: 8px 18px;
    border: 1.5px solid var(--c-border);
    background: var(--c-muted); color: var(--c-text-body);
    cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
  }
  .ow-filter-btn:hover {
    border-color: var(--c-orange-20); color: var(--c-orange);
    background: var(--c-orange-08);
  }
  .ow-filter-btn.active {
    background: var(--c-ink); color: #fff;
    border-color: var(--c-ink); box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }

  .ow-filter-count {
    margin-left: auto; font-size: 13px; color: #ccc; font-weight: 500;
  }

  /* ══════════════════════════════
     GRID WRAPPER
  ══════════════════════════════ */
  .ow-grid-wrap {
    max-width: var(--max-w); margin: 0 auto;
    padding: 0 var(--px) 96px;
  }

  /* ── FEATURED CARDS (dark overlay, tall) ── */
  .ow-featured-row {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin-bottom: 20px;
  }

  .ow-feat-card {
    border-radius: 24px; overflow: hidden;
    position: relative; cursor: pointer;
    text-decoration: none; display: block;
    transition: transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
  }
  .ow-feat-card:hover { transform: translateY(-7px); }

  .ow-feat-img {
    width: 100%; height: 400px; object-fit: cover; display: block;
    transition: transform 0.7s ease;
  }
  .ow-feat-card:hover .ow-feat-img { transform: scale(1.05); }

  .ow-feat-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.9) 100%);
    transition: background 0.3s ease;
  }
  .ow-feat-card:hover .ow-feat-overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.94) 100%);
  }

  .ow-feat-top {
    position: absolute; top: 18px; left: 18px; right: 18px;
    display: flex; align-items: center; justify-content: space-between;
  }

  .ow-feat-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px 26px 28px; }
  .ow-feat-type { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--c-orange); margin-bottom: 6px; }
  .ow-feat-name {
    font-family: var(--f-display); font-size: 24px; font-weight: 900;
    color: #fff; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 8px;
  }
  .ow-feat-desc { font-size: 13px; color: rgba(255,255,255,0.58); line-height: 1.6; margin-bottom: 14px; }

  .ow-feat-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
  .ow-feat-tag {
    font-size: 11px; font-weight: 600;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.14);
    color: rgba(255,255,255,0.72); border-radius: 20px; padding: 3px 10px;
    backdrop-filter: blur(4px);
  }

  .ow-feat-cta {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--c-orange); color: #fff;
    border-radius: 40px; padding: 8px 16px;
    font-size: 12.5px; font-weight: 700; text-decoration: none;
    font-family: var(--f-body);
    box-shadow: 0 3px 12px rgba(240,78,26,0.38);
    opacity: 0; transform: translateY(8px); transition: all 0.25s ease;
  }
  .ow-feat-card:hover .ow-feat-cta { opacity: 1; transform: translateY(0); }

  /* ── REGULAR CARDS (light surface) ── */
  .ow-regular-row {
    display: grid; grid-template-columns: repeat(3,1fr); gap: 20px;
  }

  .ow-card {
    background: var(--c-muted); border: 1.5px solid var(--c-border);
    border-radius: 20px; overflow: hidden;
    text-decoration: none; display: block;
    transition: all 0.28s ease; position: relative;
  }
  /* accent top stripe — set via inline style on the element */
  .ow-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: var(--card-accent, var(--c-orange));
    opacity: 0; transition: opacity 0.25s ease;
    border-radius: 20px 20px 0 0;
  }
  .ow-card:hover {
    background: var(--c-surface);
    border-color: var(--c-orange-20);
    box-shadow: 0 14px 44px rgba(0,0,0,0.08);
    transform: translateY(-4px);
  }
  .ow-card:hover::before { opacity: 1; }

  .ow-card__img-wrap { height: 188px; overflow: hidden; position: relative; }
  .ow-card__img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.65s ease;
  }
  .ow-card:hover .ow-card__img { transform: scale(1.06); }
  .ow-card__img-scrim {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.2) 100%);
  }
  .ow-card__live {
    position: absolute; bottom: 10px; left: 12px;
    display: flex; align-items: center; gap: 5px;
    font-size: 10px; font-weight: 700; color: #fff;
    background: rgba(0,0,0,0.38); backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 3px 10px;
  }
  .ow-card__live-dot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; }

  .ow-card__body { padding: 18px 20px 20px; }
  .ow-card__type { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: #bbb; margin: 0 0 5px; }
  .ow-card__name {
    font-family: var(--f-display); font-size: 17px; font-weight: 700;
    color: var(--c-ink); letter-spacing: -0.02em; margin: 0 0 8px; line-height: 1.2;
  }
  .ow-card__desc { font-size: 12.5px; color: #888; line-height: 1.65; margin: 0 0 14px; }
  .ow-card__divider { height: 1px; background: var(--c-border); margin: 0 0 13px; }
  .ow-card__footer { display: flex; align-items: center; justify-content: space-between; }
  .ow-card__tags { display: flex; gap: 5px; flex-wrap: wrap; }
  .ow-card__tag {
    font-size: 10.5px; font-weight: 600;
    background: #f4f4f0; color: #666;
    border: 1px solid #e4e4e0; border-radius: 20px; padding: 2px 9px;
  }

  /* Arrow button — correct colors at rest + hover */
  .ow-card__arrow {
    width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: #f0f0ec; border: 1.5px solid var(--c-border);
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .ow-card__arrow svg path { stroke: #999; transition: stroke 0.2s ease; }
  .ow-card:hover .ow-card__arrow { background: var(--c-orange); border-color: var(--c-orange); }
  .ow-card:hover .ow-card__arrow svg path { stroke: #fff; }

  /* ── EMPTY STATE ── */
  .ow-empty { text-align: center; padding: 88px 0; }
  .ow-empty__icon { font-size: 40px; margin-bottom: 14px; }
  .ow-empty__text { font-family: var(--f-display); font-size: 22px; font-weight: 700; color: #ccc; letter-spacing: -0.02em; }

  /* ══════════════════════════════
     CTA
  ══════════════════════════════ */
  .ow-cta-wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 var(--px) 96px; }
  .ow-cta-box {
    background: var(--c-ink); border-radius: 28px;
    padding: 64px; position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center;
  }
  .ow-cta-box::before {
    content: ''; position: absolute; top: -100px; right: 60px;
    width: 360px; height: 360px; border-radius: 50%;
    background: radial-gradient(circle, rgba(240,78,26,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .ow-cta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.28); margin-bottom: 14px; }
  .ow-cta-title { font-family: var(--f-display); font-size: clamp(30px, 3.5vw, 50px); font-weight: 900; color: #fff; letter-spacing: -0.04em; line-height: 1.1; margin: 0; }
  .ow-cta-title em { color: var(--c-orange); font-style: italic; font-weight: 300; }
  .ow-cta-btns { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }

  .btn-orange {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--c-orange); color: #fff;
    border: none; border-radius: 40px; padding: 14px 28px;
    font-size: 14px; font-weight: 700; cursor: pointer;
    text-decoration: none; white-space: nowrap; font-family: var(--f-body);
    box-shadow: 0 4px 18px rgba(240,78,26,0.38); transition: all 0.22s ease;
  }
  .btn-orange:hover { background: #cc3a0f; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(240,78,26,0.45); }

  .btn-ghost {
    display: inline-flex; align-items: center; justify-content: center;
    background: transparent; color: rgba(255,255,255,0.5);
    border: 1.5px solid rgba(255,255,255,0.14); border-radius: 40px;
    padding: 14px 28px; font-size: 14px; font-weight: 600;
    cursor: pointer; text-decoration: none; white-space: nowrap; font-family: var(--f-body);
    transition: all 0.2s ease;
  }
  .btn-ghost:hover { border-color: rgba(255,255,255,0.35); color: #fff; transform: translateY(-2px); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .ow-root { --px: 40px; }
    .ow-hero { grid-template-columns: 1fr; gap: 40px; }
    .ow-statbar { grid-template-columns: repeat(2,1fr); }
    .ow-featured-row { grid-template-columns: 1fr; }
    .ow-regular-row { grid-template-columns: repeat(2,1fr); }
    .ow-cta-box { grid-template-columns: 1fr; }
    .ow-cta-btns { flex-direction: row; }
  }
  @media (max-width: 640px) {
    .ow-root { --px: 20px; }
    .ow-hero { padding-top: 80px; }
    .ow-statbar { grid-template-columns: 1fr 1fr; }
    .ow-regular-row { grid-template-columns: 1fr; }
    .ow-cta-btns { flex-direction: column; }
    .ow-cta-box { padding: 36px 24px; }
  }
`;

const ALL = "All";
const FILTERS = [ALL, "Software", "Website", "AI"];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */
function FeaturedCard({ p }) {
  return (
    <Link className="ow-feat-card" to={`/works/${p.slug}`}>
      <img src={p.img} alt={p.name} className="ow-feat-img" />
      <div className="ow-feat-overlay" />

      <div className="ow-feat-top">
        <div className="ow-live-pill">
          <div className="ow-live-pill__dot" />
          <span className="ow-live-pill__text">Live</span>
        </div>
        {p.own && <span className="ow-own-tag">Koworks Product</span>}
      </div>

      <div className="ow-feat-body">
        <p className="ow-feat-type">{p.type}</p>
        <h3 className="ow-feat-name">{p.name}</h3>
        <p className="ow-feat-desc">{p.desc}</p>
        <div className="ow-feat-tags">
          {p.tags.map((t) => (
            <span className="ow-feat-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <span className="ow-feat-cta">
          View case study
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7h8M8 4l3 3-3 3"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function RegularCard({ p }) {
  return (
    <Link
      className="ow-card"
      to={`/works/${p.slug}`}
      style={{ "--card-accent": p.accent || "var(--c-orange)" }}
    >
      <div className="ow-card__img-wrap">
        <img src={p.img} alt={p.name} className="ow-card__img" />
        <div className="ow-card__img-scrim" />
        <div className="ow-card__live">
          <div className="ow-card__live-dot" />
          Live
        </div>
      </div>
      <div className="ow-card__body">
        <p className="ow-card__type">{p.type}</p>
        <p className="ow-card__name">{p.name}</p>
        <p className="ow-card__desc">{p.desc}</p>
        <div className="ow-card__divider" />
        <div className="ow-card__footer">
          <div className="ow-card__tags">
            {p.tags.slice(0, 2).map((t) => (
              <span className="ow-card__tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="ow-card__arrow">
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M8 4l3 3-3 3"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function OurWorks() {
  const [active, setActive] = useState(ALL);

  const projects = allProjects;
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  const filteredFeatured =
    active === ALL ? featured : featured.filter((p) => p.category === active);
  const filteredRegular =
    active === ALL ? regular : regular.filter((p) => p.category === active);
  const totalShown = filteredFeatured.length + filteredRegular.length;

  return (
    <div className="ow-root">
      <Helmet>
        <title>Our Works — Software, ERP &amp; Web Projects | Koworks</title>
        <meta
          name="description"
          content="Explore Koworks' portfolio of custom software, ERP systems, inventory management, and web development projects. Real products, built and used by real businesses."
        />
        <meta
          name="keywords"
          content="software development portfolio, web development projects, ERP case studies, school management software, inventory software, Koworks portfolio"
        />
        <link rel="canonical" href="https://koworks.in/works" />
        <meta
          property="og:title"
          content="Our Works — Software, ERP & Web Projects | Koworks"
        />
        <meta
          property="og:description"
          content="Explore Koworks' portfolio of custom software, ERP systems, and web development projects."
        />
        <meta property="og:url" content="https://koworks.in/works" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Works — Koworks Portfolio",
            description:
              "Portfolio of software, ERP, and web projects built by Koworks Technologies.",
            url: "https://koworks.in/works",
            publisher: {
              "@type": "Organization",
              name: "Koworks Technologies",
              url: "https://koworks.in",
            },
          })}
        </script>
      </Helmet>
      <style>{css}</style>

      {/* ════ HERO ════ */}
      <div className="ow-hero">
        <div>
          <div className="ow-eyebrow">
            <div className="ow-eyebrow__dot" />
            <span className="ow-eyebrow__text">Portfolio</span>
          </div>
          <h1 className="ow-hero__title">
            Our
            <br />
            <em>Works</em>
          </h1>
          <div className="ow-hero__meta">
            <span className="ow-hero__badge">Since 2023</span>
          </div>
        </div>
        <div>
          <p className="ow-hero__quote">
            "Real software, used by real businesses every day. Every project is
            fully owned by the client — source code, documentation, and all."
          </p>
          <p className="ow-hero__sub">
            From school management platforms to AI-powered automation — every
            project listed here is live, documented, and maintained with the
            same standard of care.
          </p>
        </div>
      </div>

      {/* ── STAT BAR ── */}
      <div className="ow-statbar">
        {[
          { val: "10", acc: "+", lbl: "Projects delivered" },
          { val: "2", acc: "", lbl: "Koworks products" },
          { val: "100", acc: "%", lbl: "Code ownership" },
          { val: "4.9", acc: "/5", lbl: "Client rating" },
        ].map((s) => (
          <div className="ow-stat" key={s.lbl}>
            <span className="ow-stat__val">
              {s.val}
              <span>{s.acc}</span>
            </span>
            <p className="ow-stat__lbl">{s.lbl}</p>
          </div>
        ))}
      </div>

      {/* ════ FILTERS ════ */}
      <div className="ow-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`ow-filter-btn${active === f ? " active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f === ALL ? "All Projects" : f}
          </button>
        ))}
        <span className="ow-filter-count">
          {totalShown} project{totalShown !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ════ GRID ════ */}
      <div className="ow-grid-wrap">
        {/* Featured — tall dark cards */}
        {filteredFeatured.length > 0 && (
          <div
            className="ow-featured-row"
            style={{
              gridTemplateColumns:
                filteredFeatured.length === 1 ? "1fr" : "1fr 1fr",
            }}
          >
            {filteredFeatured.map((p) => (
              <FeaturedCard key={p.slug} p={p} />
            ))}
          </div>
        )}

        {/* Regular — light surface cards */}
        {filteredRegular.length > 0 && (
          <div
            className="ow-regular-row"
            style={{ marginTop: filteredFeatured.length > 0 ? 20 : 0 }}
          >
            {filteredRegular.map((p) => (
              <RegularCard key={p.slug} p={p} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {totalShown === 0 && (
          <div className="ow-empty">
            <div className="ow-empty__icon">🔍</div>
            <p className="ow-empty__text">No projects in this category yet.</p>
          </div>
        )}
      </div>

      {/* ════ CTA ════ */}
      <div className="ow-cta-wrap">
        <div className="ow-cta-box">
          <div>
            <p className="ow-cta-label">Start a project</p>
            <h2 className="ow-cta-title">
              Let's build
              <br />
              <em>something real.</em>
            </h2>
          </div>
          <div className="ow-cta-btns">
            <Link to="/contact" className="btn-orange">
              Get a free estimate
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link to="/services" className="btn-ghost">
              Our services ↗
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
