import Footer from "../components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700;1,9..144,900&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #F04E1A;
    --dark:   #0e0e0c;
    --mid:    #555;
    --muted:  #888;
    --faint:  #aaa;
    --border: #e8e8e4;
    --bg-off: #fafaf8;
    --blue:   #2563eb;
    --green:  #1a7a4a;
  }

  .story-root {
    background: #fff;
    font-family: 'Cabinet Grotesk', sans-serif;
    color: var(--dark);
    overflow-x: hidden;
  }

  /* ── EYEBROW ── */
  .eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07);
    border: 1px solid rgba(240,78,26,0.2);
    border-radius: 40px; padding: 5px 14px 5px 8px;
    margin-bottom: 24px;
  }
  .eyebrow-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--orange);
    animation: edot 2s ease-in-out infinite;
  }
  @keyframes edot {
    0%,100%{opacity:1;transform:scale(1);}
    50%{opacity:.4;transform:scale(1.6);}
  }
  .eyebrow-text {
    font-size: 11px; font-weight: 700;
    color: var(--orange); letter-spacing: 0.12em; text-transform: uppercase;
  }

  /* ══════════════════════════
     HERO
  ══════════════════════════ */
  .story-hero {
    max-width: 1300px;
    margin: 0 auto;
    padding: 96px 64px 80px;
    position: relative;
  }

  /* floating decorative "K" */
  .hero-deco-k {
    position: absolute; top: 40px; right: 40px;
    font-family: 'Fraunces', serif;
    font-size: 340px; font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(240,78,26,0.07);
    line-height: 1; pointer-events: none;
    user-select: none; letter-spacing: -0.06em;
    z-index: 0;
  }

  .hero-top {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 72px; align-items: center;
    padding-bottom: 64px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 64px;
    position: relative; z-index: 1;
  }

  .hero-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(52px, 7vw, 96px);
    font-weight: 900; color: var(--dark);
    line-height: 0.93; letter-spacing: -0.04em;
    margin: 0 0 28px;
  }
  .hero-title em { color: var(--orange); font-style: italic; font-weight: 300; }

  .hero-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

  .hero-badge {
    font-family: 'Fraunces', serif;
    font-size: 12.5px; font-weight: 700;
    color: var(--dark); background: #f4f4f0;
    border: 1px solid #e4e4e0;
    border-radius: 20px; padding: 5px 14px;
  }

  .hero-badge-orange {
    font-family: 'Fraunces', serif;
    font-size: 12.5px; font-weight: 700;
    color: var(--orange); background: rgba(240,78,26,0.07);
    border: 1px solid rgba(240,78,26,0.2);
    border-radius: 20px; padding: 5px 14px;
    display: inline-flex; align-items: center; gap: 6px;
  }

  .hero-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--orange);
    animation: edot 2.5s ease-in-out infinite;
  }

  .hero-loc {
    font-size: 13px; color: var(--faint); font-weight: 500;
    display: flex; align-items: center; gap: 6px;
  }

  .hero-pull-quote {
    font-family: 'Fraunces', serif;
    font-size: clamp(18px, 2vw, 23px);
    font-weight: 300; font-style: italic;
    color: #1a1a18; line-height: 1.6;
    letter-spacing: -0.02em;
    margin: 0 0 24px;
    padding: 20px 20px 20px 24px;
    border-left: 3px solid var(--orange);
    background: rgba(240,78,26,0.03);
    border-radius: 0 12px 12px 0;
  }

  .hero-sub {
    font-size: 14.5px; color: var(--muted); line-height: 1.78;
  }

  /* ── STAT BAR ── */
  .stat-bar {
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 0; background: var(--border);
    border: 1.5px solid var(--border);
    border-radius: 22px; overflow: hidden;
    position: relative; z-index: 1;
  }

  .stat-cell {
    background: var(--bg-off); padding: 32px 20px;
    text-align: center;
    transition: background 0.2s ease;
    position: relative;
  }

  .stat-cell + .stat-cell { border-left: 1px solid var(--border); }
  .stat-cell:hover { background: #fff; }

  .stat-cell:hover .stat-val { color: var(--orange); }

  .stat-val {
    font-family: 'Fraunces', serif;
    font-size: 44px; font-weight: 900;
    color: var(--dark); letter-spacing: -0.05em;
    line-height: 1; display: block; margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  .stat-val span { color: var(--orange); }
  .stat-lbl {
    font-size: 12px; color: var(--faint);
    font-weight: 500; line-height: 1.45;
    white-space: pre-line;
  }

  /* ══════════════════════════
     MARQUEE TICKER
  ══════════════════════════ */
  .marquee-band {
    overflow: hidden;
    border-top: 1.5px solid var(--border);
    border-bottom: 1.5px solid var(--border);
    background: var(--bg-off);
    padding: 14px 0;
  }

  .marquee-track {
    display: flex; gap: 0;
    animation: marquee 28s linear infinite;
    width: max-content;
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .marquee-item {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 0 36px;
    font-size: 12px; font-weight: 700;
    color: var(--faint); letter-spacing: 0.1em; text-transform: uppercase;
    white-space: nowrap;
  }

  .marquee-sep {
    width: 4px; height: 4px; border-radius: 50%;
    background: var(--orange); opacity: 0.5;
    flex-shrink: 0;
  }

  /* ══════════════════════════
     FOUNDERS
  ══════════════════════════ */
  .founders-section {
    background: var(--bg-off);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    position: relative; overflow: hidden;
  }

  .founders-inner {
    max-width: 1300px;
    margin: 0 auto;
    padding: 88px 64px;
    position: relative; z-index: 1;
  }

  .founders-section-head {
    margin-bottom: 60px;
    display: flex; align-items: flex-end;
    justify-content: space-between; flex-wrap: wrap; gap: 24px;
  }

  .eyebrow-dark {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07);
    border: 1px solid rgba(240,78,26,0.2);
    border-radius: 40px; padding: 5px 14px 5px 8px;
    margin-bottom: 20px;
  }

  .founders-section-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(36px, 4.5vw, 58px);
    font-weight: 900; color: var(--dark);
    letter-spacing: -0.04em; line-height: 1; margin: 0;
  }
  .founders-section-title em {
    color: var(--orange); font-style: italic; font-weight: 300;
  }

  .founders-section-sub {
    font-size: 14.5px; color: var(--muted);
    line-height: 1.7; max-width: 300px; text-align: right;
  }

  /* ── HORIZONTAL FOUNDER CARDS ── */
  .founders-grid {
    display: flex; flex-direction: column; gap: 20px;
  }

  .fp-card {
    background: #fff;
    border: 1.5px solid var(--border);
    border-radius: 26px; overflow: hidden;
    display: grid;
    grid-template-columns: 320px 1fr;
    transition: background 0.3s ease, border-color 0.3s ease,
                box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    position: relative;
  }

  .fp-card:hover {
    border-color: rgba(240,78,26,0.18);
    box-shadow: 0 20px 56px rgba(0,0,0,0.08);
    transform: translateY(-4px);
  }

  /* accent left stripe */
  .fp-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px; border-radius: 3px 0 0 3px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .fp-card-orange::before { background: var(--orange); }
  .fp-card-blue::before   { background: var(--blue); }
  .fp-card:hover::before  { opacity: 1; }

  /* ── PHOTO COLUMN ── */
  .fp-photo {
    position: relative; overflow: hidden;
    height: 380px;
  }

  .fp-photo::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to right, transparent 65%, rgba(255,255,255,0.15) 100%),
                linear-gradient(to top, rgba(14,14,12,0.35) 0%, transparent 50%);
    pointer-events: none; z-index: 1;
  }

  .fp-photo img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: center 15%;
    transition: transform 0.7s ease;
    display: block;
  }

  .fp-card:hover .fp-photo img { transform: scale(1.06); }

  .fp-role-pill {
    position: absolute; bottom: 18px; left: 18px; z-index: 3;
    display: flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 40px; padding: 6px 14px 6px 9px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }

  .fp-role-dot { width: 7px; height: 7px; border-radius: 50%; }
  .fp-role-dot-pulse { animation: edot 2.2s ease-in-out infinite; }

  .fp-role-text {
    font-size: 11px; font-weight: 700;
    color: var(--dark); letter-spacing: 0.07em; text-transform: uppercase;
  }

  .fp-serial {
    position: absolute; top: 16px; right: 16px; z-index: 3;
    font-family: 'Fraunces', serif;
    font-size: 11px; font-weight: 700;
    color: rgba(255,255,255,0.7); letter-spacing: 0.08em;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 20px; padding: 3px 10px;
  }

  /* ── CONTENT COLUMN ── */
  .fp-body {
    padding: 36px 40px;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; overflow: hidden;
  }

  /* ghost serial watermark */
  .fp-body::before {
    content: attr(data-serial);
    position: absolute; right: -10px; top: 50%;
    transform: translateY(-50%);
    font-family: 'Fraunces', serif;
    font-size: 200px; font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px rgba(14,14,12,0.04);
    line-height: 1; pointer-events: none; user-select: none;
  }

  .fp-name {
    font-family: 'Fraunces', serif;
    font-size: 52px; font-weight: 900;
    color: var(--dark); letter-spacing: -0.05em;
    line-height: 0.95; margin: 0 0 10px;
  }

  .fp-title {
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em;
    margin: 0 0 18px;
    display: flex; align-items: center; gap: 8px;
  }

  .fp-title::after {
    content: '';
    flex: 1; height: 1px;
    background: var(--border);
    display: block;
  }

  .fp-story {
    font-size: 14.5px; color: var(--mid);
    line-height: 1.8; margin: 0 0 22px;
    max-width: 480px;
    position: relative; z-index: 1;
  }

  .fp-chips {
    display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 26px;
    position: relative; z-index: 1;
  }

  .fp-chip {
    font-size: 11.5px; font-weight: 600;
    border-radius: 20px; padding: 5px 13px;
  }

  .fp-divider { height: 1px; background: var(--border); margin: 0 0 20px; }

  .fp-socials { display: flex; gap: 8px; position: relative; z-index: 1; }

  .fp-social {
    width: 34px; height: 34px; border-radius: 50%;
    border: 1px solid #e0e0dc; background: var(--bg-off);
    display: flex; align-items: center; justify-content: center;
    color: #777; text-decoration: none;
    font-size: 11px; font-weight: 700;
    transition: all 0.2s ease;
  }

  .fp-social:hover {
    background: var(--orange); border-color: var(--orange);
    color: #fff; transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(240,78,26,0.28);
  }

  /* ══════════════════════════
     TIMELINE
  ══════════════════════════ */
  .timeline-section {
    max-width: 1300px;
    margin: 0 auto;
    padding: 88px 64px;
    border-bottom: 1px solid var(--border);
  }

  .timeline-head { margin-bottom: 56px; }

  .timeline-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(34px, 4vw, 52px);
    font-weight: 900; color: var(--dark);
    letter-spacing: -0.04em; line-height: 1.05; margin: 0;
  }
  .timeline-title em { color: var(--orange); font-style: italic; font-weight: 300; }

  .timeline-track {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
  }

  /* horizontal line */
  .timeline-track::before {
    content: '';
    position: absolute;
    top: 20px; left: 10%; right: 10%;
    height: 1.5px; background: var(--border);
    z-index: 0;
  }

  .timeline-node {
    display: flex; flex-direction: column;
    align-items: center; text-align: center;
    padding: 0 16px;
    position: relative; z-index: 1;
  }

  .timeline-dot-wrap {
    width: 42px; height: 42px; border-radius: 50%;
    background: #fff; border: 2px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
    transition: all 0.25s ease;
    box-shadow: 0 0 0 6px #fff;
  }

  .timeline-node:hover .timeline-dot-wrap {
    background: var(--orange); border-color: var(--orange);
    transform: scale(1.15);
    box-shadow: 0 0 0 6px rgba(240,78,26,0.1);
  }

  .timeline-dot-inner {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--border);
    transition: background 0.25s ease;
  }

  .timeline-node:hover .timeline-dot-inner { background: #fff; }

  .timeline-year {
    font-family: 'Fraunces', serif;
    font-size: 13px; font-weight: 700;
    color: var(--orange); letter-spacing: 0.04em;
    margin-bottom: 6px;
  }

  .timeline-event {
    font-family: 'Fraunces', serif;
    font-size: 16px; font-weight: 700;
    color: var(--dark); letter-spacing: -0.02em;
    margin-bottom: 8px; line-height: 1.2;
  }

  .timeline-desc {
    font-size: 12.5px; color: var(--muted); line-height: 1.6;
  }

  /* ══════════════════════════
     SHARED STORY + VALUES
  ══════════════════════════ */
  .shared-story {
    max-width: 1300px;
    margin: 0 auto;
    padding: 88px 64px;
  }

  .shared-story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: start;
  }

  .shared-story-heading {
    font-family: 'Fraunces', serif;
    font-size: clamp(34px, 4vw, 50px);
    font-weight: 900; color: var(--dark);
    letter-spacing: -0.04em; line-height: 1.05;
    margin: 0 0 28px;
  }
  .shared-story-heading em { color: var(--orange); font-style: italic; font-weight: 300; }

  .shared-story-para {
    font-size: 15px; color: var(--mid);
    line-height: 1.8; margin-bottom: 20px;
  }

  /* highlighted quote inside story */
  .story-highlight {
    margin: 28px 0;
    padding: 22px 24px;
    background: var(--bg-off);
    border: 1.5px solid var(--border);
    border-left: 3px solid var(--orange);
    border-radius: 0 14px 14px 0;
    font-family: 'Fraunces', serif;
    font-size: 17px; font-weight: 700;
    color: var(--dark); letter-spacing: -0.02em; line-height: 1.5;
  }

  /* values */
  .values-list {
    display: flex; flex-direction: column; gap: 0;
    border: 1.5px solid var(--border); border-radius: 22px; overflow: hidden;
  }

  .value-row {
    display: flex; align-items: flex-start; gap: 18px;
    padding: 22px 24px;
    border-bottom: 1px solid var(--border);
    background: var(--bg-off);
    transition: background 0.18s ease, padding-left 0.22s ease;
    cursor: default;
  }
  .value-row:last-child { border-bottom: none; }
  .value-row:hover { background: #fff; padding-left: 30px; }

  .value-icon-box {
    width: 42px; height: 42px; border-radius: 11px;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; flex-shrink: 0; margin-top: 1px;
    transition: transform 0.2s ease;
  }
  .value-row:hover .value-icon-box { transform: scale(1.12); }

  .value-title {
    font-family: 'Fraunces', serif;
    font-size: 16px; font-weight: 700;
    color: var(--dark); letter-spacing: -0.02em;
    margin: 0 0 4px;
  }

  .value-desc {
    font-size: 13px; color: var(--muted); line-height: 1.65; margin: 0;
  }

  /* ══════════════════════════
     CLOSING CTA
  ══════════════════════════ */
  .cta-wrap {
    max-width: 1300px;
    margin: 0 auto; padding: 0 64px 96px;
  }

  .cta-box {
    background: var(--dark); border-radius: 28px;
    padding: 72px 64px; position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr auto;
    gap: 48px; align-items: center;
  }

  /* orange glow blob */
  .cta-box::before {
    content: '';
    position: absolute; top: -100px; right: 80px;
    width: 420px; height: 420px;
    background: radial-gradient(circle, rgba(240,78,26,0.13) 0%, transparent 70%);
    pointer-events: none;
  }

  /* second glow */
  .cta-box::after {
    content: '';
    position: absolute; bottom: -80px; left: 120px;
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .cta-left { position: relative; z-index: 1; }

  .cta-eyebrow-text {
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em;
    color: rgba(255,255,255,0.28); margin-bottom: 16px;
    display: block;
  }

  .cta-heading {
    font-family: 'Fraunces', serif;
    font-size: clamp(34px, 4vw, 54px);
    font-weight: 900; color: #fff;
    letter-spacing: -0.03em; line-height: 1.08;
    margin-bottom: 16px;
  }
  .cta-heading em { color: var(--orange); font-style: italic; font-weight: 300; }

  .cta-sub {
    font-size: 15px; color: rgba(255,255,255,0.4);
    line-height: 1.7;
  }

  .cta-btns {
    display: flex; flex-direction: column; gap: 12px;
    flex-shrink: 0; position: relative; z-index: 1;
  }

  .btn-orange {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--orange); color: #fff;
    border: none; border-radius: 40px; padding: 15px 30px;
    font-size: 14px; font-weight: 700; cursor: pointer;
    text-decoration: none; white-space: nowrap;
    font-family: 'Cabinet Grotesk', sans-serif;
    box-shadow: 0 4px 20px rgba(240,78,26,0.38);
    transition: all 0.22s ease;
  }
  .btn-orange:hover {
    background: #cc3a0f; transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(240,78,26,0.45);
  }

  .btn-ghost {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: transparent; color: rgba(255,255,255,0.45);
    border: 1px solid rgba(255,255,255,0.12); border-radius: 40px;
    padding: 15px 30px; font-size: 14px; font-weight: 600;
    cursor: pointer; text-decoration: none; white-space: nowrap;
    font-family: 'Cabinet Grotesk', sans-serif;
    transition: all 0.2s ease;
  }
  .btn-ghost:hover {
    border-color: rgba(255,255,255,0.3); color: #fff;
    transform: translateY(-2px);
  }

  /* ══════════════════════════
     RESPONSIVE
  ══════════════════════════ */
  @media (max-width: 1024px) {
    .hero-top                { grid-template-columns: 1fr; gap: 40px; }
    .stat-bar                { grid-template-columns: repeat(2,1fr); }
    .fp-card                 { grid-template-columns: 260px 1fr; }
    .founders-section-sub    { text-align: left; }
    .shared-story-grid       { grid-template-columns: 1fr; gap: 48px; }
    .timeline-track          { grid-template-columns: 1fr 1fr; gap: 40px; }
    .timeline-track::before  { display: none; }
    .cta-box                 { grid-template-columns: 1fr; }
    .cta-btns                { flex-direction: row; }
    .hero-deco-k             { display: none; }
  }

  @media (max-width: 640px) {
    .story-hero, .founders-inner,
    .shared-story, .cta-wrap,
    .timeline-section        { padding-left: 24px; padding-right: 24px; }
    .story-hero              { padding-top: 80px; }
    .stat-bar                { grid-template-columns: 1fr 1fr; }
    .timeline-track          { grid-template-columns: 1fr; }
    .cta-box                 { padding: 40px 28px; }
    .cta-btns                { flex-direction: column; }
    .fp-card                 { grid-template-columns: 1fr; }
    .fp-photo                { height: 300px; }
    .fp-body                 { padding: 24px; }
  }
`;

const founders = [
  {
    serial: "01",
    name: "Vishal",
    accentClass: "orange",
    role: "CEO & Founder",
    roleColor: "#F04E1A",
    titleLine: "Founder · CEO · Software Architect",
    titleColor: "#F04E1A",
    photo: "/vishalimg.jpeg",
    story:
      "Vishal is the technical foundation of Koworks — the person who architects, builds, and ships every product. Full-stack engineer with a sharp eye for systems that scale and code that lasts.",
    chips: [
      {
        label: "Full-Stack Architecture",
        bg: "rgba(240,78,26,0.08)",
        color: "#F04E1A",
        border: "rgba(240,78,26,0.2)",
      },
      {
        label: "Node.js · React",
        bg: "#f4f4f0",
        color: "#444",
        border: "#e0e0dc",
      },
      {
        label: "System Design",
        bg: "#f4f4f0",
        color: "#444",
        border: "#e0e0dc",
      },
      {
        label: "AI Integration",
        bg: "rgba(124,58,237,0.08)",
        color: "#7c3aed",
        border: "rgba(124,58,237,0.2)",
      },
      {
        label: "SaaS Builder",
        bg: "rgba(26,122,74,0.08)",
        color: "#1a7a4a",
        border: "rgba(26,122,74,0.2)",
      },
    ],
    socials: [
      { label: "in", href: "#" },
      { label: "𝕏", href: "#" },
      { label: "@", href: "#" },
    ],
  },
  {
    serial: "02",
    name: "Darshan",
    accentClass: "blue",
    role: "Co-Founder",
    roleColor: "#2563eb",
    titleLine: "Co-Founder · Product & Growth",
    titleColor: "#2563eb",
    photo: "/darshan.jpeg",
    story:
      "Darshan owns the client side of Koworks — from the first conversation to final delivery. He makes sure every project is scoped right, communicated clearly, and lands exactly where it should.",
    chips: [
      {
        label: "Product Strategy",
        bg: "rgba(37,99,235,0.08)",
        color: "#2563eb",
        border: "rgba(37,99,235,0.2)",
      },
      {
        label: "Growth & Sales",
        bg: "#f4f4f0",
        color: "#444",
        border: "#e0e0dc",
      },
      {
        label: "Client Success",
        bg: "#f4f4f0",
        color: "#444",
        border: "#e0e0dc",
      },
      {
        label: "UI/UX Vision",
        bg: "rgba(124,58,237,0.08)",
        color: "#7c3aed",
        border: "rgba(124,58,237,0.2)",
      },
    ],
    socials: [
      { label: "in", href: "#" },
      { label: "𝕏", href: "#" },
      { label: "@", href: "#" },
    ],
  },
];

const values = [
  {
    icon: "🔨",
    iconBg: "rgba(240,78,26,0.08)",
    title: "Build to last",
    desc: "We write clean, documented code that works years later — not just for the demo.",
  },
  {
    icon: "🔒",
    iconBg: "rgba(26,122,74,0.08)",
    title: "Total honesty",
    desc: "NDA on every project. We never overpromise and always tell you what's real.",
  },
  {
    icon: "⚡",
    iconBg: "rgba(234,179,8,0.08)",
    title: "Ship on time",
    desc: "Deadlines are commitments. We plan carefully and communicate if anything shifts.",
  },
  {
    icon: "📦",
    iconBg: "rgba(37,99,235,0.08)",
    title: "Your code, always",
    desc: "Full source code handover on every project. You own what we build — completely.",
  },
];

const timeline = [
  {
    year: "2023",
    event: "Koworks founded",
    desc: "Two engineers, one shared frustration with how software was being sold to small businesses.",
  },
  {
    year: "2023",
    event: "First client",
    desc: "Unity Portal — a full school management ERP — deployed and running in production.",
  },
  {
    year: "2024",
    event: "Referral growth",
    desc: "Every new project came through word-of-mouth. Zero paid ads, 100% client trust.",
  },
  {
    year: "2025",
    event: "SaaS launched",
    desc: "First multi-tenant SaaS product shipped. Serving clients across Karnataka.",
  },
];

const marqueeItems = [
  "Node.js",
  "React",
  "MongoDB",
  "Express",
  "Tailwind CSS",
  "Docker",
  "PostgreSQL",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "AWS",
  "GPT-4o",
  "Backblaze B2",
  "Tally Integration",
  "WhatsApp API",
  "Razorpay",
];

export default function OurStory() {
  return (
    <div className="story-root">
      <style>{css}</style>

      {/* ════ HERO ════ */}
      <div className="story-hero">
        <span className="hero-deco-k" aria-hidden="true">
          K
        </span>

        <div className="eyebrow">
          <div className="eyebrow-dot" />
          <span className="eyebrow-text">Our Story</span>
        </div>

        <div className="hero-top">
          <div>
            <h1 className="hero-title">
              Two builders.
              <br />
              One <em>mission.</em>
            </h1>
            <div className="hero-meta">
              <span className="hero-badge">Est. 2023</span>
              <span className="hero-badge-orange">
                <span className="hero-badge-dot" />
                Mysore, Karnataka
              </span>
              <span className="hero-loc">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
                India
              </span>
            </div>
          </div>

          <div>
            <p className="hero-pull-quote">
              "The businesses that need good software the most are rarely the
              ones being served well. That's the gap Koworks exists to close."
            </p>
            <p className="hero-sub">
              Based in Mysore, Koworks is a focused software company that builds
              custom web applications, management systems, and digital products
              for businesses that need software engineered precisely for how
              they operate — not adapted from something generic.
            </p>
          </div>
        </div>
      </div>

      {/* ════ FOUNDERS ════ */}
      <div className="founders-section">
        <div className="founders-inner">
          <div className="founders-section-head">
            <div>
              <div className="eyebrow-dark">
                <div className="eyebrow-dot" />
                <span className="eyebrow-text">The People Behind Koworks</span>
              </div>
              <h2 className="founders-section-title">
                Meet the
                <br />
                <em>founders</em>
              </h2>
            </div>
            <p className="founders-section-sub">
              One writes the architecture. One drives the vision. Together they
              make sure every project ships right.
            </p>
          </div>

          <div className="founders-grid">
            {founders.map((f) => (
              <div className={`fp-card fp-card-${f.accentClass}`} key={f.name}>
                {/* ── PHOTO ── */}
                <div className="fp-photo">
                  <img src={f.photo} alt={f.name} />
                  <div className="fp-role-pill">
                    <div
                      className="fp-role-dot fp-role-dot-pulse"
                      style={{ background: f.roleColor }}
                    />
                    <span className="fp-role-text">{f.role}</span>
                  </div>
                  <span className="fp-serial">{f.serial}</span>
                </div>

                {/* ── CONTENT ── */}
                <div className="fp-body" data-serial={f.serial}>
                  <h3 className="fp-name">{f.name}</h3>
                  <p className="fp-title" style={{ color: f.titleColor }}>
                    {f.titleLine}
                  </p>
                  <p className="fp-story">{f.story}</p>

                  <div className="fp-chips">
                    {f.chips.map((c) => (
                      <span
                        key={c.label}
                        className="fp-chip"
                        style={{
                          background: c.bg,
                          color: c.color,
                          border: `1px solid ${c.border}`,
                        }}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>

                  <div className="fp-divider" />

                  <div className="fp-socials">
                    {f.socials.map((s) => (
                      <a key={s.label} href={s.href} className="fp-social">
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ════ SHARED STORY + VALUES ════ */}
      <div className="shared-story">
        <div className="shared-story-grid">
          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">About Koworks</span>
            </div>
            <h2 className="shared-story-heading">
              A different kind
              <br />
              of <em>company.</em>
            </h2>
            <p className="shared-story-para">
              Koworks was founded on a straightforward observation: most
              software built for growing Indian businesses either costs too
              much, fits too loosely, or disappears the moment the invoice is
              paid. We set out to change that standard.
            </p>

            <div className="story-highlight">
              We don't just build software. We build systems that outlast the
              project.
            </div>

            <p className="shared-story-para">
              We specialize in purpose-driven software — school management
              platforms, inventory and billing systems, business websites, and
              custom internal tools — each one engineered to fit the client's
              exact operations, not the other way around.
            </p>
            <p className="shared-story-para">
              Based in Mysore and serving clients across India, Koworks operates
              as a focused, accountable company. We take on projects
              selectively, communicate transparently, and measure success by one
              thing: whether the software still performs reliably years after
              delivery.
            </p>
          </div>

          <div>
            <div className="eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">What We Stand For</span>
            </div>
            <div className="values-list">
              {values.map((v) => (
                <div className="value-row" key={v.title}>
                  <div
                    className="value-icon-box"
                    style={{ background: v.iconBg }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <p className="value-title">{v.title}</p>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
