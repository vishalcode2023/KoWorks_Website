import { Link } from "react-router-dom";
import Footer from "../components/footer";
import SEOHead from "../components/seo/SEOHead";
import { PAGE_SEO } from "../seo/seo.config";

/* ─────────────────────────────────────────────
   DESIGN TOKEN SYSTEM
   All values derived from a single source
───────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;600;700;800&display=swap');

  /* ── RESET & TOKENS ── */
  .sp-root *, .sp-root *::before, .sp-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }

  .sp-root {
    /* Color tokens */
    --c-ink:      #0e0e0c;
    --c-ink-60:   rgba(14,14,12,0.6);
    --c-ink-30:   rgba(14,14,12,0.3);
    --c-surface:  #fff;
    --c-muted:    #fafaf8;
    --c-border:   #e8e8e4;
    --c-border-light: #f0f0ec;
    --c-orange:   #F04E1A;
    --c-orange-08: rgba(240,78,26,0.08);
    --c-orange-15: rgba(240,78,26,0.15);
    --c-orange-20: rgba(240,78,26,0.2);
    --c-text-body: #555;
    --c-text-muted: #999;
    /* Type tokens */
    --f-display: 'Fraunces', serif;
    --f-body:    'Cabinet Grotesk', sans-serif;
    /* Space tokens */
    --gap-xs: 8px;
    --gap-sm: 16px;
    --gap-md: 24px;
    --gap-lg: 48px;
    --gap-xl: 80px;
    --gap-2xl: 120px;
    --r-sm: 12px;
    --r-md: 20px;
    --r-lg: 28px;
    /* Section horizontal padding */
    --px: 64px;
    --max-w: 1300px;

    font-family: var(--f-body);
    background: var(--c-surface);
    color: var(--c-ink);
    -webkit-font-smoothing: antialiased;
  }

  /* ── SHARED ATOMS ── */
  .eyebrow {
    display: inline-flex; align-items: center; gap: var(--gap-xs);
    background: var(--c-orange-08);
    border: 1px solid var(--c-orange-20);
    border-radius: 40px; padding: 5px 14px 5px 8px;
    margin-bottom: 20px;
  }
  .eyebrow__dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--c-orange);
    animation: pulse 2s ease-in-out infinite;
  }
  .eyebrow__text {
    font-size: 11px; font-weight: 700;
    color: var(--c-orange); letter-spacing: 0.12em; text-transform: uppercase;
  }

  @keyframes pulse {
    0%,100%{ opacity:1; transform:scale(1); }
    50%{ opacity:.4; transform:scale(1.6); }
  }

  .display-title {
    font-family: var(--f-display);
    font-size: clamp(38px, 4.5vw, 58px);
    font-weight: 900; color: var(--c-ink);
    letter-spacing: -0.04em; line-height: 1.0; margin: 0;
  }
  .display-title em { color: var(--c-orange); font-style: italic; font-weight: 300; }

  .section-desc {
    font-size: 15px; color: var(--c-text-muted); line-height: 1.75;
    margin: 0; max-width: 340px;
  }

  .section-header {
    display: flex; justify-content: space-between;
    align-items: flex-end; margin-bottom: 52px;
    flex-wrap: wrap; gap: var(--gap-md);
  }

  /* Shared btn */
  .btn { display: inline-flex; align-items: center; gap: 8px; border-radius: 40px;
    padding: 12px 24px; font-size: 13.5px; font-weight: 700;
    text-decoration: none; cursor: pointer; border: none;
    font-family: var(--f-body); transition: all 0.22s ease; white-space: nowrap; }

  .btn--orange {
    background: var(--c-orange); color: #fff;
    box-shadow: 0 4px 18px rgba(240,78,26,0.32);
  }
  .btn--orange:hover { background: #cc3a0f; transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(240,78,26,0.42); }

  .btn--ghost-dark {
    background: transparent; color: rgba(255,255,255,0.55);
    border: 1.5px solid rgba(255,255,255,0.14);
  }
  .btn--ghost-dark:hover { border-color: rgba(255,255,255,0.35); color: #fff; transform: translateY(-2px); }

  .btn--ghost-light {
    background: transparent; color: var(--c-text-body);
    border: 1.5px solid var(--c-border);
  }
  .btn--ghost-light:hover { border-color: var(--c-ink); color: var(--c-ink); transform: translateY(-2px); }

  .tag {
    font-size: 11px; font-weight: 600; border-radius: 20px; padding: 3px 10px;
  }
  .tag--dark-glass {
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.16);
    color: rgba(255,255,255,0.7); backdrop-filter: blur(4px);
  }
  .tag--light {
    background: #f4f4f0; border: 1px solid #e4e4e0; color: #666;
  }

  .live-badge {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 10.5px; font-weight: 700; color: #1a7a4a;
    background: rgba(26,122,74,0.08); border: 1px solid rgba(26,122,74,0.2);
    border-radius: 20px; padding: 3px 10px;
  }
  .live-badge__dot {
    width: 5px; height: 5px; border-radius: 50%; background: #1a7a4a;
  }

  /* ══════════════════════════════
     PAGE HEADER
  ══════════════════════════════ */
  .sp-header {
    max-width: var(--max-w); margin: 0 auto;
    padding: 112px var(--px) 80px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
    border-bottom: 1px solid var(--c-border);
  }

  .sp-header__title {
    font-family: var(--f-display);
    font-size: clamp(52px, 6.5vw, 90px);
    font-weight: 900; color: var(--c-ink);
    line-height: 0.95; letter-spacing: -0.045em; margin: 0 0 28px;
  }
  .sp-header__title em { color: var(--c-orange); font-style: italic; font-weight: 300; }

  .sp-header__meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }

  .sp-header__badge {
    font-family: var(--f-display);
    font-size: 12px; font-weight: 700;
    background: var(--c-muted); border: 1px solid var(--c-border);
    color: var(--c-ink); border-radius: 20px; padding: 5px 14px;
  }

  .sp-header__loc {
    font-size: 13px; color: var(--c-text-muted); font-weight: 500;
    display: flex; align-items: center; gap: 5px;
  }

  .sp-header__quote {
    font-family: var(--f-display);
    font-size: clamp(17px, 1.8vw, 22px);
    font-weight: 300; font-style: italic;
    color: #333; line-height: 1.6;
    margin: 0 0 22px;
    padding-left: 18px;
    border-left: 3px solid var(--c-orange);
  }

  .sp-header__sub {
    font-size: 14.5px; color: var(--c-text-muted); line-height: 1.8; margin: 0;
  }

  /* ── STAT BAR ── */
  .sp-statbar {
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 1px; background: var(--c-border);
    border-bottom: 1px solid var(--c-border);
  }
  .sp-stat {
    background: var(--c-muted); padding: 30px 20px;
    text-align: center; transition: background 0.18s;
  }
  .sp-stat:hover { background: var(--c-surface); }
  .sp-stat__val {
    font-family: var(--f-display);
    font-size: 40px; font-weight: 900; color: var(--c-ink);
    letter-spacing: -0.05em; line-height: 1;
    display: block; margin-bottom: 6px;
  }
  .sp-stat__val span { color: var(--c-orange); }
  .sp-stat__lbl { font-size: 12px; color: var(--c-text-muted); font-weight: 500; white-space: pre-line; line-height: 1.4; }

  /* ══════════════════════════════
     PRODUCTS
  ══════════════════════════════ */
  .sp-products {
    max-width: var(--max-w); margin: 0 auto;
    padding: 96px var(--px) 80px;
  }

  /* Masonry-style: first two big, rest 3-col */
  .sp-products-hero {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: var(--gap-md); margin-bottom: var(--gap-md);
  }
  .sp-products-row {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: var(--gap-md);
  }

  .sp-product-card {
    border-radius: var(--r-lg); overflow: hidden;
    position: relative;
    transition: transform 0.4s cubic-bezier(0.34,1.4,0.64,1);
    display: block; text-decoration: none;
  }
  .sp-product-card:hover { transform: translateY(-6px); }

  /* Hero cards taller, row cards shorter */
  .sp-product-card--hero .sp-product-photo { height: 400px; }
  .sp-product-card--row  .sp-product-photo { height: 300px; }

  .sp-product-photo {
    width: 100%; object-fit: cover; display: block;
    transition: transform 0.7s ease;
  }
  .sp-product-card:hover .sp-product-photo { transform: scale(1.04); }

  .sp-product-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.88) 100%);
    transition: background 0.3s ease;
  }
  .sp-product-card:hover .sp-product-overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0.06) 10%, rgba(0,0,0,0.92) 100%);
  }

  /* Live badge — top left */
  .sp-product-live {
    position: absolute; top: 18px; left: 18px;
    display: flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.12); backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 40px; padding: 6px 14px 6px 9px;
  }
  .sp-product-live__dot {
    width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
    animation: pulse 2.5s ease-in-out infinite;
  }
  .sp-product-live__text { font-size: 10.5px; font-weight: 700; color: #fff; letter-spacing: 0.06em; text-transform: uppercase; }

  /* Own tag — top right */
  .sp-product-own {
    position: absolute; top: 18px; right: 18px;
    font-size: 10.5px; font-weight: 700;
    background: rgba(240,78,26,0.85); color: #fff;
    border-radius: 20px; padding: 4px 12px; letter-spacing: 0.05em;
    backdrop-filter: blur(8px);
  }

  .sp-product-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 24px 26px 26px;
  }
  .sp-product-type { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--c-orange); margin-bottom: 6px; }
  .sp-product-name {
    font-family: var(--f-display);
    color: #fff; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 8px;
  }
  .sp-product-card--hero .sp-product-name { font-size: 26px; font-weight: 900; }
  .sp-product-card--row  .sp-product-name { font-size: 20px; font-weight: 700; }

  .sp-product-desc { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 14px; }
  .sp-product-card--row  .sp-product-desc { display: none; } /* hide on small cards to keep clean */

  .sp-product-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }

  .sp-product-cta {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--c-orange); color: #fff;
    border-radius: 40px; padding: 8px 16px;
    font-size: 12.5px; font-weight: 700; text-decoration: none;
    font-family: var(--f-body);
    box-shadow: 0 4px 14px rgba(240,78,26,0.38);
    opacity: 0; transform: translateY(8px);
    transition: all 0.25s ease;
  }
  .sp-product-card:hover .sp-product-cta { opacity: 1; transform: translateY(0); }

  /* ══════════════════════════════
     CLIENT PROJECTS
  ══════════════════════════════ */
  .sp-clients {
    background: var(--c-muted);
    border-top: 1px solid var(--c-border);
    padding: 88px var(--px);
  }
  .sp-clients-inner { max-width: var(--max-w); margin: 0 auto; }

  .sp-clients-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--c-border);
    border: 1.5px solid var(--c-border);
    border-radius: var(--r-lg); overflow: hidden;
  }

  .sp-client-card {
    background: var(--c-surface); padding: 28px 26px 24px;
    position: relative; transition: background 0.22s ease;
    text-decoration: none; display: block;
  }
  .sp-client-card:hover { background: var(--c-muted); }

  .sp-client-card::after {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    opacity: 0; transition: opacity 0.22s ease;
    background: var(--card-accent, var(--c-orange));
  }
  .sp-client-card:hover::after { opacity: 1; }

  .sp-client-top {
    display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;
  }
  .sp-client-logo {
    width: 46px; height: 46px; border-radius: var(--r-sm);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--f-display); font-size: 16px; font-weight: 900; letter-spacing: -0.02em;
  }
  .sp-client-type { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--c-text-muted); margin: 0 0 5px; }
  .sp-client-name { font-family: var(--f-display); font-size: 18px; font-weight: 700; color: var(--c-ink); letter-spacing: -0.02em; margin: 0 0 10px; line-height: 1.2; }
  .sp-client-desc { font-size: 13px; color: #777; line-height: 1.65; margin: 0 0 16px; }
  .sp-client-divider { height: 1px; background: var(--c-border); margin: 0 0 14px; }
  .sp-client-tags { display: flex; flex-wrap: wrap; gap: 6px; }

  /* ══════════════════════════════
     SERVICES GRID
  ══════════════════════════════ */
  .sp-services {
    max-width: var(--max-w); margin: 0 auto;
    padding: var(--gap-2xl) var(--px) var(--gap-xl);
    border-top: 1px solid var(--c-border);
  }
  .sp-services-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }

  .sp-svc-card {
    background: var(--c-muted); border: 1.5px solid var(--c-border);
    border-radius: var(--r-md); padding: 28px 24px 22px;
    transition: all 0.28s cubic-bezier(0.34,1.2,0.64,1);
    position: relative; overflow: hidden;
  }
  .sp-svc-card::before {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: var(--svc-accent, var(--c-orange)); opacity: 0; transition: opacity 0.25s;
  }
  .sp-svc-card:hover { background: var(--c-surface); border-color: rgba(240,78,26,0.18); box-shadow: 0 12px 36px rgba(0,0,0,0.06); transform: translateY(-4px); }
  .sp-svc-card:hover::before { opacity: 1; }

  .sp-svc-icon-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
  .sp-svc-icon-box { width: 44px; height: 44px; border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .sp-svc-num { font-family: var(--f-display); font-size: 12px; font-weight: 700; color: #ddd; letter-spacing: 0.04em; }
  .sp-svc-title { font-family: var(--f-display); font-size: 17px; font-weight: 700; color: var(--c-ink); letter-spacing: -0.02em; margin: 0 0 9px; line-height: 1.2; }
  .sp-svc-desc { font-size: 13px; color: #888; line-height: 1.65; margin: 0; }

  /* ══════════════════════════════
     PROCESS
  ══════════════════════════════ */
  .sp-process {
    background: var(--c-muted); border-top: 1px solid var(--c-border); padding: 88px var(--px);
  }
  .sp-process-inner { max-width: var(--max-w); margin: 0 auto; }
  .sp-process-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--c-border);
    border: 1.5px solid var(--c-border); border-radius: var(--r-lg); overflow: hidden;
  }
  .sp-step { background: var(--c-surface); padding: 40px 32px; transition: background 0.22s ease; }
  .sp-step:hover { background: var(--c-muted); }
  .sp-step-num {
    font-family: var(--f-display); font-size: 56px; font-weight: 900;
    color: var(--c-orange-08); letter-spacing: -0.05em; line-height: 1;
    margin-bottom: 20px; display: block; transition: color 0.22s;
  }
  .sp-step:hover .sp-step-num { color: var(--c-orange-15); }
  .sp-step-icon { font-size: 28px; margin-bottom: 14px; display: block; }
  .sp-step-title { font-family: var(--f-display); font-size: 21px; font-weight: 700; color: var(--c-ink); letter-spacing: -0.02em; margin: 0 0 10px; }
  .sp-step-desc { font-size: 13.5px; color: #888; line-height: 1.7; margin: 0; }

  /* ══════════════════════════════
     CTA
  ══════════════════════════════ */
  .sp-cta { max-width: var(--max-w); margin: 0 auto; padding: 80px var(--px) 96px; }
  .sp-cta-box {
    background: var(--c-ink); border-radius: var(--r-lg);
    padding: 64px; position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center;
  }
  .sp-cta-box::before {
    content: ''; position: absolute; top: -100px; right: 80px;
    width: 360px; height: 360px; border-radius: 50%;
    background: radial-gradient(circle, rgba(240,78,26,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .sp-cta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.28); margin-bottom: 14px; }
  .sp-cta-title { font-family: var(--f-display); font-size: clamp(30px, 3.5vw, 50px); font-weight: 900; color: #fff; letter-spacing: -0.04em; line-height: 1.1; margin: 0; }
  .sp-cta-title em { color: var(--c-orange); font-style: italic; font-weight: 300; }
  .sp-cta-btns { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .sp-root { --px: 40px; }
    .sp-header { grid-template-columns: 1fr; gap: 40px; }
    .sp-statbar { grid-template-columns: repeat(2,1fr); }
    .sp-products-hero { grid-template-columns: 1fr; }
    .sp-products-row { grid-template-columns: 1fr 1fr; }
    .sp-clients-grid { grid-template-columns: 1fr 1fr; }
    .sp-services-grid { grid-template-columns: repeat(2,1fr); }
    .sp-process-grid { grid-template-columns: 1fr; }
    .sp-cta-box { grid-template-columns: 1fr; }
    .sp-cta-btns { flex-direction: row; }
  }
  @media (max-width: 640px) {
    .sp-root { --px: 20px; }
    .sp-header { padding-top: 96px; }
    .sp-statbar { grid-template-columns: 1fr 1fr; }
    .sp-products-hero, .sp-products-row { grid-template-columns: 1fr; }
    .sp-clients-grid { grid-template-columns: 1fr; }
    .sp-services-grid { grid-template-columns: 1fr 1fr; }
    .sp-cta-btns { flex-direction: column; }
    .sp-cta-box { padding: 36px 24px; }
    .sp-product-card--row .sp-product-desc { display: block; }
  }
`;

/* ─────────────────────────────────────────────
   DATA
   slug values map to /works/:slug routes
───────────────────────────────────────────── */
const heroProducts = [
  {
    slug: "unity-school-portal",
    type: "School Management ERP",
    name: "Unity School Portal",
    desc: "Complete school management platform — admissions, attendance, fees, exams, timetables, staff payroll, and parent WhatsApp notifications. Deployed across multiple institutions.",
    img: "/unitydesktop.png",
    tags: ["Node.js", "React", "MongoDB", "WhatsApp API", "Docker"],
  },
  {
    slug: "habbis-stock-pos",
    type: "Inventory & Billing System",
    name: "Habbis Stock & POS",
    desc: "Real-time garment inventory with EAN-13 barcodes, purchase orders, supplier tracking, GST-ready POS, thermal receipt printing, and Tally-compatible Excel exports.",
    img: "/habib.png",
    tags: ["Node.js", "React", "Mongoose", "Barcodes", "GST"],
  },
];

const rowProducts = [
  {
    slug: "enviro-safety-glass",
    type: "B2B Website",
    name: "Enviro Safety Glass",
    img: "/enviro.png",
    tags: ["React", "SEO", "UI/UX"],
  },
  {
    slug: "mysore-finest-homestays",
    type: "Hospitality Website",
    name: "Mysore's Finest Homestays",
    img: "/association.png",
    tags: ["React", "SEO", "Lead Gen"],
  },
  {
    slug: "insurance-management",
    type: "Insurance Software",
    name: "Insurance Management",
    img: "/insurance.png",
    tags: ["Node.js", "React", "Dashboard"],
  },
];

const clients = [
  {
    initials: "ES",
    bg: "#f0fdf4",
    color: "#16a34a",
    accent: "#16a34a",
    slug: "enviro-safety-glass",
    type: "Business Website",
    name: "Envirosafetyglass",
    desc: "Professional B2B website for a safety glass manufacturer — product catalogue, inquiry system, and SEO-optimised pages driving real leads.",
    tags: ["React", "SEO", "UI/UX", "Lead Gen"],
  },
  {
    initials: "IO",
    bg: "#faf5ff",
    color: "#7c3aed",
    accent: "#7c3aed",
    slug: null,
    type: "AI Automation",
    name: "Invoice OCR Engine",
    desc: "GPT-4o Vision + PaddleOCR system that extracts structured data from 6+ vendor invoice formats — including handwritten entries — automatically.",
    tags: ["GPT-4o", "OCR", "Node.js", "AI"],
  },
  {
    initials: "IS",
    bg: "#eef4ff",
    color: "#2563eb",
    accent: "#2563eb",
    slug: "insurance-management",
    type: "Insurance Software",
    name: "Insurance Management",
    desc: "Policy management, premium tracking, claims processing, and agent dashboards built for an insurance services company.",
    tags: ["Node.js", "React", "Dashboard", "Reports"],
  },
];

const services = [
  {
    icon: "⚙️",
    bg: "rgba(240,78,26,0.08)",
    accent: "#F04E1A",
    title: "Custom Software",
    desc: "Built around your exact workflow. Clean code, full docs, yours to own.",
  },
  {
    icon: "📦",
    bg: "rgba(26,122,74,0.08)",
    accent: "#1a7a4a",
    title: "Inventory Management",
    desc: "Real-time stock, barcodes, purchase orders, and supplier tracking.",
  },
  {
    icon: "🎓",
    bg: "rgba(37,99,235,0.08)",
    accent: "#2563eb",
    title: "School Management ERP",
    desc: "Admissions, fees, exams, payroll, and WhatsApp notifications.",
  },
  {
    icon: "🧾",
    bg: "rgba(240,78,26,0.08)",
    accent: "#F04E1A",
    title: "Billing & POS",
    desc: "GST-ready invoicing, barcode scanning, and Tally-compatible exports.",
  },
  {
    icon: "🛡️",
    bg: "rgba(124,58,237,0.08)",
    accent: "#7c3aed",
    title: "Insurance Software",
    desc: "Policy, claims, and agent management built for brokers and agencies.",
  },
  {
    icon: "🌐",
    bg: "rgba(14,165,233,0.08)",
    accent: "#0ea5e9",
    title: "Website Development",
    desc: "Fast, responsive, SEO-optimised websites that convert.",
  },
  {
    icon: "🎨",
    bg: "rgba(236,72,153,0.08)",
    accent: "#ec4899",
    title: "UI/UX Design",
    desc: "Wireframes, prototypes, and polished interfaces for any platform.",
  },
  {
    icon: "📣",
    bg: "rgba(234,179,8,0.08)",
    accent: "#ca8a04",
    title: "Social Media Marketing",
    desc: "Strategy, content, and paid campaigns across Instagram, LinkedIn, Meta.",
  },
];

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery & Scoping",
    desc: "We understand your business, users, and exact requirements before a single line of code is written. No assumptions.",
  },
  {
    num: "02",
    icon: "🗺️",
    title: "Architecture & Planning",
    desc: "Full system map — database design, API structure, UI flows, and delivery milestones — agreed before we start.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Build, Test & Hand Over",
    desc: "We develop, QA, deploy, and document everything. Then stay available for 6 months post-launch — because that's when it matters.",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
function ProductCard({ product, variant = "hero" }) {
  const cardClass = `sp-product-card sp-product-card--${variant}`;
  return (
    <Link to={`/works/${product.slug}`} className={cardClass}>
      <img src={product.img} alt={product.name} className="sp-product-photo" />
      <div className="sp-product-overlay" />

      <div className="sp-product-live">
        <div className="sp-product-live__dot" />
        <span className="sp-product-live__text">Live</span>
      </div>
      <div className="sp-product-own">Koworks Product</div>

      <div className="sp-product-content">
        <p className="sp-product-type">{product.type}</p>
        <h3 className="sp-product-name">{product.name}</h3>
        {product.desc && <p className="sp-product-desc">{product.desc}</p>}
        <div className="sp-product-tags">
          {product.tags.map((t) => (
            <span className="tag tag--dark-glass" key={t}>
              {t}
            </span>
          ))}
        </div>
        <span className="sp-product-cta">
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

export default function ServicesPage() {
  const seo = PAGE_SEO.services.index;
  return (
    <div className="my-20">
      <SEOHead
        seo={seo}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <div className="sp-root">
        <style>{css}</style>

        {/* ════ PAGE HEADER ════ */}
        <div className="sp-header">
          <div>
            <div className="eyebrow">
              <div className="eyebrow__dot" />
              <span className="eyebrow__text">Koworks · Mysore</span>
            </div>
            <h1 className="sp-header__title">
              Software Development Services in Mysore &amp; Karnataka —<br />
              <em>Web, SaaS, ERP &amp; AI</em>
            </h1>
            <div className="sp-header__meta">
              <span className="sp-header__badge">Est. 2024</span>
              <span className="sp-header__loc">
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z"
                    stroke="#aaa"
                    strokeWidth="1.3"
                    fill="none"
                  />
                  <circle
                    cx="7"
                    cy="5"
                    r="1.5"
                    stroke="#aaa"
                    strokeWidth="1.3"
                  />
                </svg>
                Mysore, Karnataka
              </span>
            </div>
          </div>
          <div>
            <p className="sp-header__quote">
              "Every service we offer comes with the same promise — full source
              code, complete documentation, and six months of support after
              launch."
            </p>
            <p className="sp-header__sub">
              From school ERPs to custom software — Koworks builds products that
              are engineered for how your business actually operates, not
              adapted from something generic.
            </p>
          </div>
        </div>

        {/* ── STAT BAR ── */}
        <div className="sp-statbar">
          {[
            { val: "10", acc: "+", lbl: "Projects\ndelivered" },
            { val: "100", acc: "%", lbl: "Source code\nownership" },
            { val: "6", acc: " mo", lbl: "Free post-launch\nsupport" },
            { val: "4.9", acc: "/5", lbl: "Average client\nrating" },
          ].map((s) => (
            <div className="sp-stat" key={s.lbl}>
              <span className="sp-stat__val">
                {s.val}
                <span>{s.acc}</span>
              </span>
              <p className="sp-stat__lbl">{s.lbl}</p>
            </div>
          ))}
        </div>

        {/* ════ OUR PRODUCTS ════ */}
        <div className="sp-products">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <div className="eyebrow__dot" />
                <span className="eyebrow__text">Our Products</span>
              </div>
              <h2 className="display-title">
                Built &amp;
                <br />
                <em>live today</em>
              </h2>
            </div>
            <p className="section-desc">
              Full-scale products designed, built, and maintained by Koworks —
              used by real businesses every day. Click any card to see the full
              case study.
            </p>
          </div>

          {/* Hero row — 2 large cards */}
          <div className="sp-products-hero">
            {heroProducts.map((p) => (
              <ProductCard key={p.slug} product={p} variant="hero" />
            ))}
          </div>

          {/* Secondary row — 3 compact cards */}
          <div className="sp-products-row">
            {rowProducts.map((p) => (
              <ProductCard key={p.slug} product={p} variant="row" />
            ))}
          </div>
        </div>

        {/* ════ CLIENT PROJECTS ════ */}
        <div className="sp-clients">
          <div className="sp-clients-inner">
            <div className="section-header">
              <div>
                <div className="eyebrow">
                  <div className="eyebrow__dot" />
                  <span className="eyebrow__text">Client Projects</span>
                </div>
                <h2 className="display-title">
                  Delivered for
                  <br />
                  <em>clients</em>
                </h2>
              </div>
              <p className="section-desc">
                Custom projects built to specification — fully handed over with
                source code, documentation, and ongoing support.
              </p>
            </div>

            <div className="sp-clients-grid">
              {clients.map((c) => {
                const inner = (
                  <>
                    <div className="sp-client-top">
                      <div
                        className="sp-client-logo"
                        style={{ background: c.bg, color: c.color }}
                      >
                        {c.initials}
                      </div>
                      <span className="live-badge">
                        <span className="live-badge__dot" />
                        Live
                      </span>
                    </div>
                    <p className="sp-client-type">{c.type}</p>
                    <p className="sp-client-name">{c.name}</p>
                    <p className="sp-client-desc">{c.desc}</p>
                    <div className="sp-client-divider" />
                    <div className="sp-client-tags">
                      {c.tags.map((t) => (
                        <span className="tag tag--light" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                );

                return c.slug ? (
                  <Link
                    key={c.name}
                    to={`/works/${c.slug}`}
                    className="sp-client-card"
                    style={{ "--card-accent": c.accent }}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={c.name}
                    className="sp-client-card"
                    style={{ "--card-accent": c.accent }}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════ WHAT WE DO ════ */}
        <div className="sp-services">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <div className="eyebrow__dot" />
                <span className="eyebrow__text">What We Do</span>
              </div>
              <h2 className="display-title">
                Eight services.
                <br />
                <em>One team.</em>
              </h2>
            </div>
            <p className="section-desc">
              Every service is delivered by the same focused team — clean,
              documented, and built to your exact specification.
            </p>
          </div>

          <div className="sp-services-grid">
            {services.map((s, i) => (
              <div
                className="sp-svc-card"
                key={i}
                style={{ "--svc-accent": s.accent }}
              >
                <div className="sp-svc-icon-row">
                  <div className="sp-svc-icon-box" style={{ background: s.bg }}>
                    {s.icon}
                  </div>
                  <span className="sp-svc-num">0{i + 1}</span>
                </div>
                <p className="sp-svc-title">{s.title}</p>
                <p className="sp-svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ════ PROCESS ════ */}
        <div className="sp-process">
          <div className="sp-process-inner">
            <div className="section-header">
              <div>
                <div className="eyebrow">
                  <div className="eyebrow__dot" />
                  <span className="eyebrow__text">How We Work</span>
                </div>
                <h2 className="display-title">
                  Our <em>process</em>
                </h2>
              </div>
              <p className="section-desc">
                Transparent, structured, and collaborative — from the first call
                to the final handover and beyond.
              </p>
            </div>
            <div className="sp-process-grid">
              {steps.map((s) => (
                <div className="sp-step" key={s.num}>
                  <span className="sp-step-num">{s.num}</span>
                  <span className="sp-step-icon">{s.icon}</span>
                  <p className="sp-step-title">{s.title}</p>
                  <p className="sp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════ CTA ════ */}
        <div className="sp-cta">
          <div className="sp-cta-box">
            <div>
              <p className="sp-cta-label">Start a project</p>
              <h2 className="sp-cta-title">
                Let's build
                <br />
                <em>something real.</em>
              </h2>
            </div>
            <div className="sp-cta-btns">
              <Link to="/contact" className="btn btn--orange">
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
              <Link to="/works" className="btn btn--ghost-dark">
                See all our work ↗
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
