import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import OurWorks from "../components/ourworks";
import BrandsAndProblems from "../components/Brandsandproblems";
import Footer from "../components/footer";
import OurStory from "../components/Ourstory";
import SEOHead from "../components/seo/SEOHead";
import FAQSection from "../components/seo/FAQSection";
import { PAGE_SEO } from "../seo/seo.config";

const font = "'Inter', sans-serif";

/* ══════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════ */
const heroStyles = `
  .hero-root {
    position: relative;
    min-height: 100vh;
    width: 100%;
    padding: 25px 60px;
    color: white;
    font-family: ${font};
    overflow: hidden;
  }

  .hero-text-block {
    position: relative;
    z-index: 10;
    padding-top: 110px;
    max-width: 800px;
  }

  .hero-h1 {
    font-size: 62px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: -2px;
    margin: 0 0 15px;
  }

  .hero-sub {
    font-size: 16px;
    max-width: 440px;
    margin-bottom: 20px;
    opacity: 0.9;
    line-height: 1.5;
  }

  .hero-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0;
    background: #fff;
    border: 1px solid #2a2a2a;
    border-radius: 999px;
    padding: 5px 5px 5px 24px;
    cursor: pointer;
    font-family: ${font};
    box-shadow: 0 2px 16px rgba(0,0,0,0.5);
    margin-bottom: 30px;
  }

  .hero-bottom {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: calc(100vh - 420px);
    min-height: 220px;
  }

  .hero-bottom-left  { width: 45%; }
  .hero-bottom-right { width: 45%; text-align: right; }

  .hero-stat-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 20px;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    width: fit-content;
  }

  .hero-quote-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 20px;
    padding: 24px;
    max-width: 500px;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px;
  }

  .hero-tag {
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.25);
    backdrop-filter: blur(10px);
    padding: 9px 18px;
    border-radius: 50px;
    font-size: 13px;
    color: white;
    white-space: nowrap;
  }

  /* ── MOBILE ── */
  @media (max-width: 768px) {
    .hero-root {
      padding: 20px 20px 40px;
    }

    .hero-text-block {
      padding-top: 80px;
    }

    .hero-h1 {
      font-size: 36px;
      letter-spacing: -1px;
    }

    .hero-sub {
      font-size: 14px;
      max-width: 100%;
    }

    .hero-bottom {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      gap: 24px;
      margin-top: 32px;
    }

    .hero-bottom-left  { width: 100%; }
    .hero-bottom-right { width: 100%; text-align: left; }

    .hero-tags { justify-content: flex-start; }

    .hero-stat-card { width: 100%; }

    .hero-quote-card { max-width: 100%; }
  }

  @media (max-width: 480px) {
    .hero-h1 { font-size: 30px; }
    .hero-tag { font-size: 12px; padding: 7px 14px; }
  }
`;

function HeroSection() {
  return (
    <div className="hero-root">
      <style>{heroStyles}</style>

      {/* BG video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

      {/* Hero headline — SEO-optimised H1 */}
      <div className="hero-text-block">
        <h1 className="hero-h1">
          Custom Software &amp; Web Development Company
        </h1>
        <p className="hero-sub">
          Koworks builds custom software, SaaS platforms, React web apps, mobile
          apps, and AI solutions for startups and enterprises across India —
          from Mysore to Bangalore and beyond.
        </p>
        <button className="hero-cta-btn">
          <Link
            to="/contact"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#111",
              marginRight: 16,
            }}
          >
            Start With Us
          </Link>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#ff6b2b,#cc3a0f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            ↗
          </div>
        </button>
      </div>

      {/* Bottom row */}
      <main className="hero-bottom">
        {/* ── LEFT ── */}
        <div className="hero-bottom-left">
          {/* Founder quote */}
          <div className="hero-quote-card md:translate-y-[-40px]">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Great software isn't just written — it's crafted with purpose. At
              Koworks, we don't just ship code; we build systems that grow with
              your business and stand the test of time.
            </p>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-bottom-right">
          <span
            style={{
              fontWeight: 600,
              fontSize: 16,
              marginBottom: 16,
              display: "block",
            }}
          >
            End-to-End Software Development
          </span>
          <div className="hero-tags">
            {[
              "Web Development Mysore",
              "SaaS Development India",
              "Mobile Apps",
              "ERP Software",
              "AI & Automation",
              "UI/UX Design",
              "React & Next.js",
              "Startups · SMEs · Enterprises",
            ].map((tag) => (
              <div key={tag} className="hero-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* ══════════════════════════════════════════
   SECTION 2 — SERVICES INTRO (marquee)
══════════════════════════════════════════ */

const styles = `
  .services-section {
    position: relative;
    overflow: hidden;
    padding: 50px 24px 0;
    background-image: url('/homebg1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .services-inner {
    position: relative;
    max-width: 840px;
    margin: 0 auto;
    text-align: center;
  }

  .services-headline {
    font-size: clamp(30px, 6.5vw, 70px);
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #0e0e0c;
    margin: 0 0 12px;
  }

  .services-headline-line2 {
    display: block;
    position: relative;
    width: fit-content;
    margin: 0 auto;
  }

  .services-underline-svg {
    display: block;
    margin: 4px auto 0;
    width: 100%;
    overflow: visible;
  }

  .services-underline-path {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: drawLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
  }

  @keyframes drawLine {
    to { stroke-dashoffset: 0; }
  }

  .services-sub {
    font-size: clamp(15px, 1.6vw, 18px);
    color: #555552;
    line-height: 1.65;
    max-width: 560px;
    margin: 24px auto 36px;
    font-weight: 400;
  }

  .services-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #111110;
    color: #f0f0ec;
    border: none;
    border-radius: 100px;
    padding: 14px 32px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;
    box-shadow: 0 2px 0 #000, inset 0 1px 0 rgba(255,255,255,0.08);
    text-decoration: none;
  }

  .services-cta:hover {
    transform: translateY(-2px);
    background: #1e1e1c;
  }

  .services-cta:active {
    transform: translateY(0);
  }

  .cta-sparkle {
    font-size: 18px;
    animation: sparkle 2s ease-in-out infinite;
  }

  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
    50% { opacity: 0.7; transform: scale(1.2) rotate(15deg); }
  }

  .services-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin: 52px auto 0;
    max-width: 580px;
    border-top: 1px solid #ddddd8;
    border-bottom: 1px solid #ddddd8;
    padding: 28px 0;
  }

  .stat-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 0 20px;
    position: relative;
  }

  .stat-item + .stat-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 36px;
    width: 1px;
    background: #ddddd8;
  }

  .stat-number {
    font-family: 'Inter', sans-serif;
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #0e0e0c;
  }

  .stat-number.green {
    color: #1a7a4a;
  }

  .stat-label {
    font-size: 13px;
    color: #888886;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
  }

  .marquee-section {
    position: relative;
    margin: 30px auto 0;
    padding: 20px 0 30px;
    overflow: hidden;
    border-top: 1px solid #e4e4df;
    width: 65%;
  }

  .marquee-fade-left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 120px;
    background: linear-gradient(to right, #f8f8f6, transparent);
    z-index: 2;
    pointer-events: none;
  }

  .marquee-fade-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 120px;
    background: linear-gradient(to left, #f8f8f6, transparent);
    z-index: 2;
    pointer-events: none;
  }

  .marquee-track {
    display: flex;
    gap: 40px;
    width: max-content;
    animation: marqueeScroll 28s linear infinite;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  @keyframes marqueeScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .tech-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #F04E1A;
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    transition: color 0.2s;
    cursor: default;
    user-select: none;
  }

  .tech-logo:hover {
    color: #888;
  }

  .tech-logo svg {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    opacity: 1;
    color: #000;
  }

  @media (max-width: 600px) {
    .services-stats { gap: 0; padding: 20px 0; }
    .stat-number { font-size: 28px; }
    .stat-item { padding: 0 12px; }
  }
`;

const techLogos = [
  {
    name: "React",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.4" fill="currentColor" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 2v20M2 7.5l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 10h8M12 10v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 16V8l8 10V8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C12 3 7 7.5 7 13a5 5 0 0010 0C17 7.5 12 3 12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 16v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16.5C2.5 15.8 2 14.5 2 13c0-2 1.5-3.5 3.5-3.5.2 0 .4 0 .6.1C6.4 7.4 8.5 5.5 11 5.5c2 0 3.7 1.1 4.6 2.7.3-.1.6-.2.9-.2 2 0 3.5 1.5 3.5 3.5 0 .5-.1 1-.3 1.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 18l2 2 2-4 2 4 2-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="11"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="6.5"
          y="11"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="11"
          y="11"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="6.5"
          y="6.5"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="11"
          y="6.5"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M22 12.5C21 11 18.5 10.5 17 11c-.5-2-2-3-4-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 14.5C2 14.5 3 17 8 17h7c3 0 5-2 5-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <ellipse
          cx="12"
          cy="7"
          rx="8"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 7v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 12v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C8.5 3 7 4.5 7 7v3h5v1H5.5C3.5 11 2 12.5 2 15.5S3.5 20 5.5 20H8v-3c0-2 1-3 4-3s4 1 4 3v3h2.5c2 0 3.5-1.5 3.5-4.5S20.5 11 18.5 11H14v-1h5V7c0-2.5-1.5-4-7-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="14.5" cy="17.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <ellipse
          cx="12"
          cy="8"
          rx="9"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 8v4c0 2.21 4.03 4 9 4s9-1.79 9-4V8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 12v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const duplicated = [...techLogos, ...techLogos];

function ServicesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    el.prepend(styleEl);
    return () => styleEl.remove();
  }, []);

  return (
    <section className="services-section" ref={ref}>
      <div className="services-inner">
        <h2 className="services-headline">
          Trusted software &amp; web development partner for businesses
          <span className="services-headline-line2 text">
            across India
            <span className="text-[#F04E1A]"> — built in Mysore</span>
            <svg
              className="services-underline-svg"
              viewBox="0 0 400 18"
              height="18"
              preserveAspectRatio="none"
            >
              <path
                className="services-underline-path"
                d="M4 10 C 80 4, 160 16, 240 8 S 360 4, 396 10"
                stroke="#1a7a4a"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="services-sub">
          From MVPs to enterprise platforms — Koworks delivers custom software
          development, SaaS products, ERP systems, inventory software, mobile
          apps, and AI solutions for startups and businesses across Mysore,
          Bangalore, and India.
        </p>

        <a href="/contact" className="services-cta">
          <span className="cta-sparkle">✦</span>
          Get a free project estimate
        </a>

        <div className="services-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">
              Projects
              <br />
              delivered
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">
              Uptime
              <br />
              guarantee
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number green">4.9</span>
            <span className="stat-label">
              Client
              <br />
              rating
            </span>
          </div>
        </div>
      </div>

      <div className="marquee-section">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="marquee-track">
          {duplicated.map((tech, i) => (
            <span className="tech-logo" key={i}>
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 3 — OUR SERVICES CARDS
══════════════════════════════════════════ */

const koworksServices = [
  {
    title: "Custom Software Development",
    desc: "Tailor-made web and desktop applications built from scratch — designed around your exact workflow, not the other way around.",
    badge: "Most Popular",
    badgeColor: "#F04E1A",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="#F04E1A"
          strokeWidth="1.5"
        />
        <path
          d="M8 9l3 3-3 3M13 15h3"
          stroke="#F04E1A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Inventory Management Systems",
    desc: "Real-time stock tracking, barcode/QR support, purchase orders, and supplier management — built for textile, retail, and manufacturing businesses.",
    badge: null,
    badgeColor: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke="#0e0e0c"
          strokeWidth="1.5"
        />
        <path
          d="M7 7V5a5 5 0 0110 0v2"
          stroke="#0e0e0c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 12h6M9 15h4"
          stroke="#0e0e0c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Billing & POS Software",
    desc: "Fast, reliable point-of-sale and invoicing systems with GST support, receipt printing, payment tracking, and Tally-compatible exports.",
    badge: "GST Ready",
    badgeColor: "#1a7a4a",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="2"
          width="16"
          height="20"
          rx="2"
          stroke="#1a7a4a"
          strokeWidth="1.5"
        />
        <path
          d="M8 7h8M8 11h8M8 15h5"
          stroke="#1a7a4a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Website Development",
    desc: "Conversion-optimised websites, landing pages, and e-commerce stores — responsive, fast-loading, and built to represent your brand.",
    badge: null,
    badgeColor: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          stroke="#0e0e0c"
          strokeWidth="1.5"
        />
        <path d="M2 8h20" stroke="#0e0e0c" strokeWidth="1.5" />
        <circle cx="5.5" cy="6" r="1" fill="#0e0e0c" />
        <circle cx="8.5" cy="6" r="1" fill="#0e0e0c" />
        <path
          d="M7 13h10M7 16h6"
          stroke="#0e0e0c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "School Management Tool",
    desc: "Complete ERP for schools — admissions, attendance, fees, exams, timetables, staff payroll, and parent communication in one platform.",
    badge: "Enterprise",
    badgeColor: "#2563eb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L2 8l10 5 10-5-10-5z"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 8v8l10 5 10-5V8"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M22 8v4"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces designed with real users in mind — wireframes, prototypes, and pixel-perfect Figma designs for any product.",
    badge: null,
    badgeColor: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#0e0e0c" strokeWidth="1.5" />
        <path
          d="M12 8v4l3 2"
          stroke="#0e0e0c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2" fill="#F04E1A" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic content, paid campaigns, and brand identity for Instagram, LinkedIn, and Meta — helping your business build real online presence.",
    badge: null,
    badgeColor: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="12" r="2.5" stroke="#0e0e0c" strokeWidth="1.5" />
        <circle cx="19" cy="5" r="2.5" stroke="#0e0e0c" strokeWidth="1.5" />
        <circle cx="19" cy="19" r="2.5" stroke="#0e0e0c" strokeWidth="1.5" />
        <path
          d="M7.5 10.5l9-4M7.5 13.5l9 4"
          stroke="#0e0e0c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function ArrowButton({ size = "sm" }) {
  const s = size === "sm" ? 30 : 38;
  return (
    <div
      style={{
        width: s,
        height: s,
        borderRadius: "50%",
        background: "#f4f4f2",
        border: "1px solid rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.15s, transform 0.15s",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7h8M8 4l3 3-3 3"
          stroke="#111"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ServiceCard({ title, desc, icon, badge, badgeColor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#fafaf8",
        borderRadius: 18,
        padding: "24px 22px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 11,
        border: hovered
          ? "1.5px solid rgba(240,78,26,0.18)"
          : "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: hovered
          ? "0 10px 36px rgba(240,78,26,0.10), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transition: "all 0.22s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top accent line on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #F04E1A, #ff8c5a)",
          borderRadius: "18px 18px 0 0",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.22s ease",
        }}
      />

      {/* Icon bubble */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: hovered ? "rgba(240,78,26,0.07)" : "rgba(0,0,0,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.22s",
        }}
      >
        {icon}
      </div>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 650,
          fontSize: 15.5,
          color: "rgba(0,0,0,0.92)",
          letterSpacing: "-0.02em",
          lineHeight: "1.3",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 13,
          color: "rgba(0,0,0,0.58)",
          lineHeight: "1.6",
          letterSpacing: "-0.01em",
          flexGrow: 1,
        }}
      >
        {desc}
      </p>

      <div
        style={{ height: 1, background: "rgba(0,0,0,0.07)", margin: "4px 0" }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {badge ? (
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 11.5,
              color: badgeColor || "#111",
              background: badgeColor ? `${badgeColor}15` : "rgba(0,0,0,0.06)",
              borderRadius: 20,
              padding: "3px 10px",
              border: `1px solid ${badgeColor ? badgeColor + "30" : "rgba(0,0,0,0.08)"}`,
            }}
          >
            {badge}
          </span>
        ) : (
          <span
            style={{
              fontSize: 12,
              color: "rgba(0,0,0,0.35)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Learn more
          </span>
        )}
      </div>
    </div>
  );
}

function OurServicesSection() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        .koworks-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 960px) {
          .koworks-services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .koworks-services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        style={{ padding: "72px 48px 88px", maxWidth: 1296, margin: "0 auto" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 44,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(240,78,26,0.08)",
                border: "1px solid rgba(240,78,26,0.18)",
                borderRadius: 20,
                padding: "4px 12px 4px 8px",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#F04E1A",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#F04E1A",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "rgba(0,0,0,0.92)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              Software development services
              <br />
              <span style={{ color: "#F04E1A" }}>
                built to scale your business.
              </span>
            </h2>
            <p
              style={{
                marginTop: 12,
                fontSize: 15,
                color: "rgba(0,0,0,0.5)",
                maxWidth: 440,
                lineHeight: 1.65,
              }}
            >
              From a simple business website to a full-scale SaaS platform or
              ERP system — Koworks has shipped it all. Every project is built
              clean, fully documented, and delivered on time.
            </p>
          </div>

          <Link
            to="/services"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#0e0e0c",
              border: "none",
              borderRadius: 40,
              padding: "11px 22px 11px 12px",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#fff",
              fontWeight: 500,
              boxShadow: "0 2px 0 rgba(0,0,0,0.4)",
              transition: "transform 0.15s",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#F04E1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            View all services
          </Link>
        </div>

        {/* Grid */}
        <div className="koworks-services-grid">
          {koworksServices.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        {/* Bottom trust bar */}
        <div
          style={{
            marginTop: 52,
            padding: "24px 32px",
            background: "#0e0e0c",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {[
              { icon: "🔒", text: "100% NDA Protected" },
              { icon: "📦", text: "Full Source Code Handover" },
              { icon: "🚀", text: "On-Time Delivery" },
              { icon: "🛠️", text: "6-Month Free Support" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.82)",
                  fontSize: 13.5,
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#F04E1A",
              color: "#fff",
              border: "none",
              borderRadius: 40,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Start a project →
          </a>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}

/* ══════════════════════════════════════════
   HOME PAGE — assembles all sections
══════════════════════════════════════════ */
export default function HomePage() {
  const seo = PAGE_SEO.home;
  return (
    <div style={{ fontFamily: font }}>
      <SEOHead seo={seo} />
      <HeroSection />
      <ServicesSection />
      <main id="main-content">
        <OurServicesSection />
        <OurWorks />
        <BrandsAndProblems />
        {/* <OurStory /> */}
        <FAQSection
          faqs={seo.faqs}
          title="Frequently Asked Questions about Koworks"
        />
      </main>
      <Footer />
    </div>
  );
}
