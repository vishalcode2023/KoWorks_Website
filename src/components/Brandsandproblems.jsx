import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');

  .bp-root {
    background: #fff;
    font-family: 'Cabinet Grotesk', 'DM Sans', sans-serif;
    color: #0e0e0c;
    overflow: hidden;
  }

  /* ══ SHARED ══ */
  .eyebrow-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07);
    border: 1px solid rgba(240,78,26,0.2);
    border-radius: 40px;
    padding: 5px 14px 5px 8px;
    margin-bottom: 22px;
  }

  .eyebrow-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #F04E1A;
    animation: dotpulse 2s ease-in-out infinite;
  }

  @keyframes dotpulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.45; transform:scale(1.5); }
  }

  .eyebrow-text {
    font-size: 11px; font-weight: 700;
    color: #F04E1A; letter-spacing: 0.12em; text-transform: uppercase;
  }

  /* ══════════════════════════════
     BRANDS SECTION
  ══════════════════════════════ */
  .brands-wrap {
    padding: 100px 64px 88px;
    max-width: 1300px;
    margin: 0 auto;
  }

  .brands-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-bottom: 64px;
    align-items: end;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 48px;
  }

  .brands-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(42px, 5vw, 68px);
    font-weight: 900;
    color: #0e0e0c;
    line-height: 1.0;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .brands-title em {
    color: #F04E1A;
    font-style: italic;
    font-weight: 300;
  }

  .brands-header-right {
    padding-left: 48px;
    border-left: 1px solid #ebebeb;
  }

  .brands-header-right p {
    font-size: 15px; color: #777;
    line-height: 1.75; margin: 0 0 28px;
    max-width: 340px;
  }

  .brands-view-all {
    display: inline-flex; align-items: center; gap: 10px;
    background: #0e0e0c; color: #fff;
    border: none; border-radius: 40px;
    padding: 11px 22px 11px 14px;
    font-size: 13.5px; font-weight: 700;
    cursor: pointer; text-decoration: none;
    transition: all 0.22s ease;
    font-family: 'Cabinet Grotesk', sans-serif;
    box-shadow: 0 2px 0 rgba(0,0,0,0.3);
  }

  .brands-view-all:hover { background: #222; transform: translateY(-2px); }

  .brands-view-all-icon {
    width: 26px; height: 26px; border-radius: 50%;
    background: #F04E1A;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* brand grid */
  .brands-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #e8e8e4;
    border: 1px solid #e8e8e4;
    border-radius: 24px;
    overflow: hidden;
  }

  .brand-card {
    background: #fafaf8;
    padding: 30px 28px 26px;
    transition: background 0.22s ease;
    cursor: default;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .brand-card:hover { background: #fff; }

  /* colored left-border reveal on hover */
  .brand-card::before {
    content: '';
    position: absolute;
    left: 0; top: 20%; bottom: 20%;
    width: 3px; border-radius: 0 3px 3px 0;
    opacity: 0;
    transition: opacity 0.22s ease;
  }

  .brand-card:hover::before { opacity: 1; }

  .brand-top-row {
    display: flex; align-items: center;
    justify-content: space-between; margin-bottom: 18px;
  }

  .brand-logo {
    width: 44px; height: 44px; border-radius: 11px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 900; font-size: 16px;
    letter-spacing: -0.03em;
    font-family: 'Fraunces', serif;
  }

  .brand-live-badge {
    font-size: 10.5px; font-weight: 700;
    display: flex; align-items: center; gap: 5px;
    color: #1a7a4a;
    background: rgba(26,122,74,0.08);
    border: 1px solid rgba(26,122,74,0.2);
    border-radius: 20px; padding: 3px 10px;
  }

  .brand-live-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #1a7a4a;
  }

  .brand-open-badge {
    font-size: 10.5px; font-weight: 700;
    color: #F04E1A;
    background: rgba(240,78,26,0.08);
    border: 1px solid rgba(240,78,26,0.2);
    border-radius: 20px; padding: 3px 10px;
  }

  .brand-type {
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.09em;
    color: #bbb; margin: 0 0 6px;
  }

  .brand-name {
    font-family: 'Fraunces', serif;
    font-size: 19px; font-weight: 700;
    color: #0e0e0c; letter-spacing: -0.02em;
    margin: 0 0 10px; line-height: 1.2;
  }

  .brand-desc {
    font-size: 13px; color: #777;
    line-height: 1.65; margin: 0 0 18px;
    flex-grow: 1;
  }

  .brand-divider { height: 1px; background: #e8e8e4; margin: 0 0 14px; }

  .brand-tags { display: flex; flex-wrap: wrap; gap: 6px; }

  .brand-tag {
    font-size: 11px; font-weight: 600;
    background: #f0f0ec; color: #666;
    border: 1px solid #e4e4e0;
    border-radius: 20px; padding: 3px 10px;
    transition: all 0.15s ease;
  }

  .brand-card:hover .brand-tag {
    background: #fff; border-color: #d8d8d4;
  }

  /* ══════════════════════════════
     PROBLEMS SECTION
  ══════════════════════════════ */
  .problems-wrap {
    background: #fafaf8;
    border-top: 1px solid #e8e8e4;
  }

  .problems-inner {
    max-width: 1300px;
    margin: 0 auto;
    padding: 100px 64px 104px;
  }

  .problems-header {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 60px; align-items: end;
    margin-bottom: 60px;
  }

  .problems-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(42px, 5vw, 68px);
    font-weight: 900;
    color: #0e0e0c;
    line-height: 1.0;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .problems-title em {
    color: #F04E1A;
    font-style: italic;
    font-weight: 300;
  }

  .problems-header-right p {
    font-size: 15px; color: #777;
    line-height: 1.75; margin: 0 0 26px;
  }

  .problems-cta {
    display: inline-flex; align-items: center; gap: 10px;
    background: #F04E1A; color: #fff;
    border: none; border-radius: 40px;
    padding: 12px 26px;
    font-size: 14px; font-weight: 700;
    cursor: pointer; text-decoration: none;
    transition: all 0.22s ease;
    font-family: 'Cabinet Grotesk', sans-serif;
    box-shadow: 0 4px 18px rgba(240,78,26,0.28);
  }

  .problems-cta:hover {
    background: #cc3a0f; transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(240,78,26,0.38);
  }

  /* problem grid */
  .problems-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .problem-card {
    background: #fff;
    border: 1.5px solid #e8e8e4;
    border-radius: 20px;
    padding: 28px 26px 24px;
    transition: all 0.22s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .problem-card:hover {
    border-color: rgba(240,78,26,0.22);
    box-shadow: 0 12px 40px rgba(0,0,0,0.08);
    transform: translateY(-4px);
  }

  /* number watermark */
  .problem-watermark {
    position: absolute;
    top: -10px; right: 16px;
    font-family: 'Fraunces', serif;
    font-size: 80px; font-weight: 900;
    color: rgba(0,0,0,0.03);
    line-height: 1;
    pointer-events: none;
    user-select: none;
    transition: color 0.22s ease;
  }

  .problem-card:hover .problem-watermark {
    color: rgba(240,78,26,0.05);
  }

  .problem-icon-row {
    display: flex; align-items: center;
    justify-content: space-between; margin-bottom: 16px;
  }

  .problem-icon-box {
    width: 42px; height: 42px; border-radius: 11px;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; flex-shrink: 0;
  }

  .problem-num-badge {
    font-family: 'Fraunces', serif;
    font-size: 12px; font-weight: 700;
    color: #ccc; letter-spacing: 0.04em;
  }

  .problem-problem-label {
    font-size: 10.5px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: #ccc; margin: 0 0 7px;
  }

  .problem-title {
    font-family: 'Fraunces', serif;
    font-size: 18px; font-weight: 700;
    color: #0e0e0c; letter-spacing: -0.02em;
    line-height: 1.3; margin: 0 0 10px;
  }

  .problem-desc {
    font-size: 13px; color: #888;
    line-height: 1.7; margin: 0 0 18px;
    flex-grow: 1;
  }

  .solution-box {
    padding: 12px 14px;
    background: #fafaf8;
    border: 1px solid #e8e8e4;
    border-left: 3px solid #F04E1A;
    border-radius: 0 10px 10px 0;
    margin-top: auto;
  }

  .solution-label {
    font-size: 10px; font-weight: 700;
    color: #F04E1A; text-transform: uppercase;
    letter-spacing: 0.12em; margin: 0 0 5px;
    display: flex; align-items: center; gap: 5px;
  }

  .solution-text {
    font-size: 13px; color: #555;
    line-height: 1.6; margin: 0;
  }

  /* ── NUMBERS BAR ── */
  .numbers-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1.5px solid #e8e8e4;
    border-radius: 20px;
    overflow: hidden;
    background: #e8e8e4;
    gap: 1px;
    margin-top: 48px;
  }

  .num-cell {
    background: #fff;
    padding: 34px 24px;
    text-align: center;
    transition: background 0.18s ease;
    position: relative;
  }

  .num-cell:hover { background: #fafaf8; }

  .num-cell::after {
    content: '';
    position: absolute;
    top: 50%; right: 0;
    transform: translateY(-50%);
    width: 1px; height: 40px;
    background: #e8e8e4;
  }

  .num-cell:last-child::after { display: none; }

  .num-value {
    font-family: 'Fraunces', serif;
    font-size: 42px; font-weight: 900;
    color: #0e0e0c; letter-spacing: -0.05em;
    line-height: 1; margin: 0 0 8px;
    display: block;
  }

  .num-accent { color: #F04E1A; }

  .num-label {
    font-size: 12px; color: #aaa;
    font-weight: 500; margin: 0;
    line-height: 1.4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .brands-header { grid-template-columns: 1fr; border-bottom: none; padding-bottom: 0; }
    .brands-header-right { padding-left: 0; border-left: none; border-top: 1px solid #ebebeb; padding-top: 28px; }
    .brands-grid { grid-template-columns: repeat(2,1fr); }
    .problems-header { grid-template-columns: 1fr; gap: 28px; }
    .problems-grid { grid-template-columns: repeat(2,1fr); }
  }

  @media (max-width: 640px) {
    .brands-wrap, .problems-inner { padding: 60px 24px 70px; }
    .brands-grid { grid-template-columns: 1fr; }
    .problems-grid { grid-template-columns: 1fr; }
    .numbers-bar { grid-template-columns: repeat(2,1fr); }
  }
`;

const brands = [
  {
    initials: "UP",
    bgColor: "#eef4ff",
    textColor: "#2563eb",
    accentColor: "#2563eb",
    name: "Unity School Portal",
    type: "School ERP",
    desc: "Full-scale school management — admissions, fees, attendance, exams, staff payroll, and parent WhatsApp notifications across multiple institutions.",
    tags: ["Node.js", "React", "MongoDB", "WhatsApp API"],
  },
  {
    initials: "ES",
    bgColor: "#f0fdf4",
    textColor: "#16a34a",
    accentColor: "#16a34a",
    name: "Envirosafetyglass",
    type: "Business Website",
    desc: "Professional B2B website for a safety glass manufacturer — product catalogue, inquiry system, and SEO-optimised pages driving real business leads.",
    tags: ["React", "SEO", "UI/UX", "Lead Gen"],
  },
  {
    initials: "HI",
    bgColor: "#fff7ed",
    textColor: "#F04E1A",
    accentColor: "#F04E1A",
    name: "Habbis — Inventory",
    type: "Inventory Management",
    desc: "Real-time garment and textile stock management with EAN-13 barcodes, bulk import, purchase orders, and Cloudinary product image storage.",
    tags: ["Node.js", "Mongoose", "Barcodes", "Vite"],
  },
  {
    initials: "HB",
    bgColor: "#f0fdf4",
    textColor: "#1a7a4a",
    accentColor: "#1a7a4a",
    name: "Habbis — Billing & POS",
    type: "Billing Software",
    desc: "GST-ready POS with barcode scanning, thermal receipt printing, staff performance analytics, and Tally Prime-compatible Excel exports.",
    tags: ["POS", "GST", "Tally Export", "React"],
  },
  {
    initials: "IO",
    bgColor: "#faf5ff",
    textColor: "#7c3aed",
    accentColor: "#7c3aed",
    name: "Invoice OCR Engine",
    type: "AI Automation",
    desc: "GPT-4o Vision + PaddleOCR system that extracts structured data from 6+ vendor invoice formats — including handwritten entries — automatically.",
    tags: ["GPT-4o", "OCR", "Node.js", "AI"],
  },
  {
    initials: "KW",
    bgColor: "#fff1ee",
    textColor: "#F04E1A",
    accentColor: "#F04E1A",
    name: "Your Project Next?",
    type: "Let's Build Together",
    desc: "We take on new clients who need reliable software built right. SaaS, internal tool, website, or custom system — we're ready to start.",
    tags: ["SaaS", "Websites", "Custom Build", "NDA Protected"],
    isCta: true,
  },
];

const problems = [
  {
    icon: "📦",
    iconBg: "rgba(240,78,26,0.08)",
    title: '"Still managing stock on Excel sheets"',
    desc: "Spreadsheets lead to overselling, stockouts, and hours wasted reconciling data. As you grow, it breaks entirely.",
    solution:
      "Custom inventory systems — barcode scanning, real-time stock levels, purchase orders, and instant reports.",
  },
  {
    icon: "🧾",
    iconBg: "rgba(26,122,74,0.08)",
    title: '"Our billing is slow and error-prone"',
    desc: "Manual invoicing causes GST errors, missed payments, and zero visibility into what customers owe — painful at month-end.",
    solution:
      "GST-ready billing and POS with automated invoicing, payment tracking, Tally export, and receipt printing.",
  },
  {
    icon: "🏫",
    iconBg: "rgba(37,99,235,0.08)",
    title: '"Running our school is unmanageable"',
    desc: "Attendance, fees, exams, and parent communication scattered across notebooks, spreadsheets, and WhatsApp groups.",
    solution:
      "Full school ERP — admissions, attendance, fees, exams, payroll, timetables, and WhatsApp parent notifications.",
  },
  {
    icon: "🌐",
    iconBg: "rgba(124,58,237,0.08)",
    title: '"Our website doesn\'t convert"',
    desc: "An outdated website signals an outdated business. Visitors leave in seconds and leads go to competitors instead.",
    solution:
      "Fast, modern websites and landing pages that represent your brand and are built to generate real inquiries.",
  },
  {
    icon: "⚙️",
    iconBg: "rgba(234,179,8,0.08)",
    title: '"No tool fits our exact workflow"',
    desc: "Generic tools force you to change how you work. Your team ends up doing workarounds every single day.",
    solution:
      "Custom software built around your workflow — not the other way around. Full source code. Yours to own.",
  },
  {
    icon: "📱",
    iconBg: "rgba(236,72,153,0.08)",
    title: '"We have no social media presence"',
    desc: "Competitors are building audiences every day. Without consistency online, you're invisible to the customers you want.",
    solution:
      "Strategy, content creation, and paid campaigns for Instagram, LinkedIn, and Meta — handled end to end.",
  },
];

export default function BrandsAndProblems() {
  return (
    <div className="bp-root">
      <style>{css}</style>

      {/* ══ BRANDS WE'VE ELEVATED ══ */}
      <div className="brands-wrap">
        <div className="brands-header">
          <div>
            <div className="eyebrow-pill">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Portfolio</span>
            </div>
            <h2 className="brands-title">
              Brands we've
              <br />
              <em>elevated</em>
            </h2>
          </div>
          <div className="brands-header-right">
            <p>
              Every client came with a real problem. We stayed until it was
              solved — with software that still runs clean today.
            </p>
            <a href="/works" className="brands-view-all">
              <div className="brands-view-all-icon">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              View all projects
            </a>
          </div>
        </div>

        <div className="brands-grid">
          {brands.map((b, i) => (
            <div className="brand-card" key={i}>
              <style>{`.brand-card:nth-child(${i + 1})::before { background: ${b.accentColor}; }`}</style>

              <div className="brand-top-row">
                <div
                  className="brand-logo"
                  style={{ background: b.bgColor, color: b.textColor }}
                >
                  {b.initials}
                </div>
                {b.isCta ? (
                  <span className="brand-open-badge">Open slot</span>
                ) : (
                  <span className="brand-live-badge">
                    <span className="brand-live-dot" />
                    Live
                  </span>
                )}
              </div>

              <p className="brand-type">{b.type}</p>
              <p className="brand-name">{b.name}</p>
              <p className="brand-desc">{b.desc}</p>
              <div className="brand-divider" />
              <div className="brand-tags">
                {b.tags.map((t) => (
                  <span className="brand-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PROBLEMS WE SOLVE ══ */}
      <div className="problems-wrap">
        <div className="problems-inner">
          <div className="problems-header">
            <div>
              <div className="eyebrow-pill">
                <div className="eyebrow-dot" />
                <span className="eyebrow-text">Why Clients Come to Us</span>
              </div>
              <h2 className="problems-title">
                Real problems.
                <br />
                <em>Real solutions.</em>
              </h2>
            </div>
            <div className="problems-header-right">
              <p>
                Every project starts with a problem someone has been living with
                for too long. We've heard them all — and we know exactly how to
                fix them.
              </p>
              <a href="/contact" className="problems-cta">
                Tell us your problem
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="problems-grid">
            {problems.map((p, i) => (
              <div className="problem-card" key={i}>
                <div className="problem-watermark">0{i + 1}</div>

                <div className="problem-icon-row">
                  <div
                    className="problem-icon-box"
                    style={{ background: p.iconBg }}
                  >
                    {p.icon}
                  </div>
                  <span className="problem-num-badge">0{i + 1} / 06</span>
                </div>

                <p className="problem-problem-label">Problem</p>
                <h3 className="problem-title">{p.title}</h3>
                <p className="problem-desc">{p.desc}</p>

                <div className="solution-box">
                  <p className="solution-label">
                    <span style={{ color: "#F04E1A" }}>✦</span> Our Solution
                  </p>
                  <p className="solution-text">{p.solution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* numbers bar */}
          <div className="numbers-bar">
            {[
              { value: "10", accent: "+", label: "Projects\ndelivered" },
              { value: "100", accent: "%", label: "Source code\nownership" },
              { value: "6", accent: " mo", label: "Free post-launch\nsupport" },
              { value: "4.9", accent: "/5", label: "Average client\nrating" },
            ].map((n) => (
              <div className="num-cell" key={n.label}>
                <span className="num-value">
                  {n.value}
                  <span className="num-accent">{n.accent}</span>
                </span>
                <p className="num-label" style={{ whiteSpace: "pre-line" }}>
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
