import Footer from "../components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ab-root { font-family: 'Cabinet Grotesk', sans-serif; background: #fff; color: #0e0e0c; overflow-x: hidden; }

  .ab-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07); border: 1px solid rgba(240,78,26,0.2);
    border-radius: 40px; padding: 5px 14px 5px 8px; margin-bottom: 22px;
  }
  .ab-eyebrow-dot {
    width: 7px; height: 7px; border-radius: 50%; background: #F04E1A;
    animation: abdot 2s ease-in-out infinite;
  }
  @keyframes abdot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
  .ab-eyebrow-text { font-size: 11px; font-weight: 700; color: #F04E1A; letter-spacing: .12em; text-transform: uppercase; }

  /* HERO */
  .ab-hero {
    max-width: 1300px; margin: 0 auto; padding: 100px 64px 88px;
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center;
    border-bottom: 1px solid #e8e8e4;
  }
  .ab-hero-title {
    font-family: 'Fraunces', serif; font-size: clamp(52px,6.5vw,88px);
    font-weight: 900; color: #0e0e0c; line-height: .95; letter-spacing: -.04em; margin: 0 0 28px;
  }
  .ab-hero-title em { color: #F04E1A; font-style: italic; font-weight: 300; }
  .ab-hero-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .ab-hero-badge {
    font-family: 'Fraunces', serif; font-size: 12px; font-weight: 700;
    background: #f4f4f0; border: 1px solid #e4e4e0; color: #0e0e0c; border-radius: 20px; padding: 5px 14px;
  }
  .ab-hero-loc { font-size: 13px; color: #aaa; font-weight: 500; display: flex; align-items: center; gap: 5px; }
  .ab-hero-right {}
  .ab-hero-quote {
    font-family: 'Fraunces', serif; font-size: clamp(18px,2vw,23px); font-weight: 300;
    font-style: italic; color: #333; line-height: 1.6; margin: 0 0 22px;
    padding-left: 18px; border-left: 3px solid #F04E1A;
  }
  .ab-hero-sub { font-size: 14.5px; color: #888; line-height: 1.75; margin: 0; }

  /* STAT BAR */
  .ab-statbar {
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 1px; background: #e8e8e4; border-top: 1px solid #e8e8e4; border-bottom: 1px solid #e8e8e4;
  }
  .ab-stat { background: #fafaf8; padding: 28px 20px; text-align: center; transition: background .18s; }
  .ab-stat:hover { background: #fff; }
  .ab-stat-val { font-family: 'Fraunces', serif; font-size: 38px; font-weight: 900; color: #0e0e0c; letter-spacing: -.05em; line-height: 1; display: block; margin-bottom: 6px; }
  .ab-stat-val span { color: #F04E1A; }
  .ab-stat-lbl { font-size: 12px; color: #aaa; font-weight: 500; white-space: pre-line; line-height: 1.4; }

  /* MISSION */
  .ab-mission {
    max-width: 1300px; margin: 0 auto; padding: 88px 64px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
    border-bottom: 1px solid #e8e8e4;
  }
  .ab-mission-title {
    font-family: 'Fraunces', serif; font-size: clamp(36px,4vw,54px);
    font-weight: 900; color: #0e0e0c; letter-spacing: -.04em; line-height: 1; margin: 0 0 28px;
  }
  .ab-mission-title em { color: #F04E1A; font-style: italic; font-weight: 300; }
  .ab-mission-para { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 18px; }
  .ab-mission-para:last-of-type { margin-bottom: 0; }
  .ab-mission-right { display: flex; flex-direction: column; gap: 16px; }
  .ab-mission-card {
    background: #fafaf8; border: 1.5px solid #e8e8e4; border-radius: 18px; padding: 22px 24px;
    transition: all .22s ease; position: relative; overflow: hidden;
  }
  .ab-mission-card::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px; opacity: 0; transition: opacity .22s ease;
  }
  .ab-mission-card:hover { background: #fff; border-color: rgba(240,78,26,.18); box-shadow: 0 6px 24px rgba(0,0,0,.06); }
  .ab-mission-card:hover::before { opacity: 1; }
  .ab-mission-card-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .ab-mission-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 17px; flex-shrink: 0; }
  .ab-mission-card-title { font-family: 'Fraunces', serif; font-size: 16px; font-weight: 700; color: #0e0e0c; letter-spacing: -.02em; margin: 0; }
  .ab-mission-card-body { font-size: 13.5px; color: #777; line-height: 1.65; margin: 0; }

  /* FOUNDERS */
  .ab-founders-wrap { background: #fafaf8; border-top: 1px solid #e8e8e4; border-bottom: 1px solid #e8e8e4; }
  .ab-founders {
    max-width: 1300px; margin: 0 auto; padding: 88px 64px;
  }
  .ab-founders-header {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 52px; flex-wrap: wrap; gap: 20px;
  }
  .ab-founders-title { font-family: 'Fraunces', serif; font-size: clamp(36px,4vw,52px); font-weight: 900; color: #0e0e0c; letter-spacing: -.04em; line-height: 1; margin: 0; }
  .ab-founders-title em { color: #F04E1A; font-style: italic; font-weight: 300; }
  .ab-founders-sub { font-size: 14.5px; color: #888; line-height: 1.7; max-width: 300px; text-align: right; }
  .ab-founders-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .ab-fp {
    background: #fff; border: 1.5px solid #e8e8e4; border-radius: 24px;
    overflow: hidden; transition: box-shadow .3s ease, transform .35s cubic-bezier(.34,1.56,.64,1);
  }
  .ab-fp:hover { box-shadow: 0 20px 56px rgba(0,0,0,.09); transform: translateY(-5px); }
  .ab-fp-photo { position: relative; height: 300px; overflow: hidden; }
  .ab-fp-photo img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform .7s ease; }
  .ab-fp:hover .ab-fp-photo img { transform: scale(1.04); }
  .ab-fp-photo-fade { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 45%, rgba(255,255,255,.97) 100%); }
  .ab-fp-role-pill {
    position: absolute; top: 18px; left: 18px;
    display: flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,.92); backdrop-filter: blur(10px);
    border: 1px solid rgba(0,0,0,.08); border-radius: 40px; padding: 6px 14px 6px 9px;
    box-shadow: 0 2px 12px rgba(0,0,0,.08);
  }
  .ab-fp-role-dot { width: 7px; height: 7px; border-radius: 50%; animation: abdot 2.2s ease-in-out infinite; }
  .ab-fp-role-text { font-size: 11px; font-weight: 700; color: #0e0e0c; letter-spacing: .06em; text-transform: uppercase; }
  .ab-fp-num { position: absolute; top: 18px; right: 18px; font-family: 'Fraunces', serif; font-size: 12px; font-weight: 700; color: rgba(0,0,0,.18); }
  .ab-fp-body { padding: 6px 28px 28px; }
  .ab-fp-name { font-family: 'Fraunces', serif; font-size: 34px; font-weight: 900; color: #0e0e0c; letter-spacing: -.04em; line-height: 1; margin: 0 0 5px; }
  .ab-fp-title-tag { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .09em; margin: 0 0 14px; }
  .ab-fp-bio { font-size: 14px; color: #555; line-height: 1.78; margin: 0 0 18px; }
  .ab-fp-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 20px; }
  .ab-fp-chip { font-size: 11.5px; font-weight: 600; border-radius: 20px; padding: 4px 12px; }
  .ab-fp-divider { height: 1px; background: #e8e8e4; margin: 0 0 18px; }
  .ab-fp-socials { display: flex; gap: 8px; }
  .ab-fp-social {
    width: 34px; height: 34px; border-radius: 50%; border: 1px solid #e0e0dc; background: #fafaf8;
    display: flex; align-items: center; justify-content: center;
    color: #777; text-decoration: none; font-size: 12px; font-weight: 700; transition: all .2s ease;
  }
  .ab-fp-social:hover { background: #F04E1A; border-color: #F04E1A; color: #fff; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(240,78,26,.25); }

  /* VALUES */
  .ab-values { max-width: 1300px; margin: 0 auto; padding: 88px 64px; }
  .ab-values-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 52px; flex-wrap: wrap; gap: 20px; }
  .ab-values-title { font-family: 'Fraunces', serif; font-size: clamp(36px,4vw,52px); font-weight: 900; color: #0e0e0c; letter-spacing: -.04em; line-height: 1; margin: 0; }
  .ab-values-title em { color: #F04E1A; font-style: italic; font-weight: 300; }
  .ab-values-sub { font-size: 14.5px; color: #888; line-height: 1.7; max-width: 300px; text-align: right; }
  .ab-values-grid {
    display: grid; grid-template-columns: repeat(2,1fr);
    gap: 1px; background: #e8e8e4; border: 1.5px solid #e8e8e4; border-radius: 24px; overflow: hidden;
  }
  .ab-value { background: #fff; padding: 32px; transition: background .18s ease; display: flex; gap: 20px; align-items: flex-start; }
  .ab-value:hover { background: #fafaf8; }
  .ab-value-icon { width: 46px; height: 46px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; margin-top: 2px; }
  .ab-value-title { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 700; color: #0e0e0c; letter-spacing: -.02em; margin: 0 0 8px; }
  .ab-value-desc { font-size: 13.5px; color: #777; line-height: 1.65; margin: 0; }

  /* CTA */
  .ab-cta-wrap { max-width: 1300px; margin: 0 auto; padding: 0 64px 96px; }
  .ab-cta-box {
    background: #0e0e0c; border-radius: 28px; padding: 64px;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center;
    position: relative; overflow: hidden;
  }
  .ab-cta-box::before {
    content: ''; position: absolute; top: -100px; right: 60px;
    width: 360px; height: 360px; border-radius: 50%;
    background: radial-gradient(circle, rgba(240,78,26,.1) 0%, transparent 70%); pointer-events: none;
  }
  .ab-cta-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.28); margin-bottom: 14px; }
  .ab-cta-title { font-family: 'Fraunces', serif; font-size: clamp(28px,3.5vw,46px); font-weight: 900; color: #fff; letter-spacing: -.04em; line-height: 1.1; margin: 0; }
  .ab-cta-title em { color: #F04E1A; font-style: italic; font-weight: 300; }
  .ab-cta-btns { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
  .btn-orange { display: inline-flex; align-items: center; gap: 10px; background: #F04E1A; color: #fff; border: none; border-radius: 40px; padding: 14px 28px; font-size: 14px; font-weight: 700; cursor: pointer; text-decoration: none; white-space: nowrap; font-family: 'Cabinet Grotesk', sans-serif; box-shadow: 0 4px 18px rgba(240,78,26,.38); transition: all .22s ease; }
  .btn-orange:hover { background: #cc3a0f; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(240,78,26,.45); }
  .btn-ghost { display: inline-flex; align-items: center; justify-content: center; background: transparent; color: rgba(255,255,255,.5); border: 1px solid rgba(255,255,255,.12); border-radius: 40px; padding: 14px 28px; font-size: 14px; font-weight: 600; cursor: pointer; text-decoration: none; white-space: nowrap; font-family: 'Cabinet Grotesk', sans-serif; transition: all .2s ease; }
  .btn-ghost:hover { border-color: rgba(255,255,255,.3); color: #fff; transform: translateY(-2px); }

  @media (max-width: 1024px) {
    .ab-hero, .ab-mission { grid-template-columns: 1fr; gap: 48px; }
    .ab-statbar { grid-template-columns: repeat(2,1fr); }
    .ab-founders-grid { grid-template-columns: 1fr; }
    .ab-founders-sub { text-align: left; }
    .ab-values-sub { text-align: left; }
    .ab-values-grid { grid-template-columns: 1fr; }
    .ab-cta-box { grid-template-columns: 1fr; }
    .ab-cta-btns { flex-direction: row; }
  }
  @media (max-width: 640px) {
    .ab-hero, .ab-mission, .ab-founders, .ab-values, .ab-cta-wrap { padding-left: 24px; padding-right: 24px; }
    .ab-hero { padding-top: 100px; }
    .ab-statbar { grid-template-columns: 1fr 1fr; }
    .ab-cta-box { padding: 36px 24px; }
    .ab-cta-btns { flex-direction: column; }
  }
`;

const missionCards = [
  {
    icon: "🔨",
    bg: "rgba(240,78,26,0.08)",
    accent: "#F04E1A",
    title: "Build to last",
    body: "Every system we deliver is clean, documented, and engineered to run reliably for years — not just for the handover demo.",
  },
  {
    icon: "🔒",
    bg: "rgba(26,122,74,0.08)",
    accent: "#1a7a4a",
    title: "Total transparency",
    body: "NDA on every project. We never overpromise, we never disappear, and we always tell you the truth about timelines and complexity.",
  },
  {
    icon: "📦",
    bg: "rgba(37,99,235,0.08)",
    accent: "#2563eb",
    title: "You own everything",
    body: "Full source code, complete documentation, and deployment setup — handed over at the end of every engagement, no strings attached.",
  },
  {
    icon: "⚡",
    bg: "rgba(234,179,8,0.08)",
    accent: "#ca8a04",
    title: "Deliver on time",
    body: "We scope carefully, plan in detail, and communicate proactively. Deadlines are commitments — not suggestions.",
  },
];


const values = [
  {
    icon: "🎯",
    bg: "rgba(240,78,26,0.08)",
    title: "Purpose over volume",
    desc: "We take on fewer projects so we can give each one the attention it deserves. Quality over quantity, every time.",
  },
  {
    icon: "🤝",
    bg: "rgba(26,122,74,0.08)",
    title: "Long-term thinking",
    desc: "We build software meant to serve your business for years. Every decision is made with the long game in mind.",
  },
  {
    icon: "💬",
    bg: "rgba(37,99,235,0.08)",
    title: "Honest communication",
    desc: "We tell clients exactly what's possible, what's complex, and what it will cost — before we start, not after.",
  },
  {
    icon: "🏗️",
    bg: "rgba(234,179,8,0.08)",
    title: "Engineering discipline",
    desc: "Clean code, proper architecture, documented handover. We treat every project like a product that has to survive without us.",
  },
];

export default function AboutPage() {
  return (
    <div className="ab-root">
      <style>{css}</style>

      {/* HERO */}
      <div className="ab-hero">
        <div>
          <div className="ab-eyebrow">
            <div className="ab-eyebrow-dot" />
            <span className="ab-eyebrow-text">About Koworks</span>
          </div>
          <h1 className="ab-hero-title">
            We build
            <br />
            software that
            <br />
            <em>lasts.</em>
          </h1>
          <div className="ab-hero-meta">
            <span className="ab-hero-badge">Est. 2023</span>
            <span className="ab-hero-loc">
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z"
                  stroke="#aaa"
                  strokeWidth="1.3"
                  fill="none"
                />
                <circle cx="7" cy="5" r="1.5" stroke="#aaa" strokeWidth="1.3" />
              </svg>
              Mysore, Karnataka
            </span>
          </div>
        </div>
        <div className="ab-hero-right">
          <p className="ab-hero-quote">
            "The businesses that need good software the most are rarely the ones
            being served well. That's the gap Koworks exists to close."
          </p>
          <p className="ab-hero-sub">
            Koworks is a focused software company based in Mysore, India. We
            build custom web applications, management systems, and digital
            products for businesses that need software engineered precisely for
            how they operate — not adapted from something generic.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="ab-statbar">
        {[
          { val: "10", acc: "+", lbl: "Projects\ndelivered" },
          { val: "100", acc: "%", lbl: "Source code\nownership" },
          { val: "6", acc: " mo", lbl: "Free post-launch\nsupport" },
          { val: "4.9", acc: "/5", lbl: "Average client\nrating" },
        ].map((s) => (
          <div className="ab-stat" key={s.lbl}>
            <span className="ab-stat-val">
              {s.val}
              <span>{s.acc}</span>
            </span>
            <p className="ab-stat-lbl">{s.lbl}</p>
          </div>
        ))}
      </div>

      {/* MISSION */}
      <div className="ab-mission">
        <div>
          <div className="ab-eyebrow">
            <div className="ab-eyebrow-dot" />
            <span className="ab-eyebrow-text">Our Mission</span>
          </div>
          <h2 className="ab-mission-title">
            A different kind
            <br />
            of <em>company.</em>
          </h2>
          <p className="ab-mission-para">
            Koworks was founded on a straightforward observation: most software
            built for growing Indian businesses either costs too much, fits too
            loosely, or disappears the moment the invoice is paid. We set out to
            change that standard.
          </p>
          <p className="ab-mission-para">
            We specialize in building purpose-driven software — school
            management platforms, inventory and billing systems, business
            websites, and custom internal tools — each one engineered to fit the
            client's exact operations, not the other way around.
          </p>
          <p className="ab-mission-para">
            Based in Mysore and serving clients across India, we operate as a
            focused, accountable company. We take on projects selectively,
            communicate transparently, and measure success by one thing —
            whether the software still performs reliably years after delivery.
          </p>
        </div>
        <div className="ab-mission-right">
          {missionCards.map((c, i) => (
            <div className="ab-mission-card" key={i}>
              <style>{`.ab-mission-card:nth-child(${i + 1})::before { background: ${c.accent}; }`}</style>
              <div className="ab-mission-card-head">
                <div className="ab-mission-icon" style={{ background: c.bg }}>
                  {c.icon}
                </div>
                <h4 className="ab-mission-card-title">{c.title}</h4>
              </div>
              <p className="ab-mission-card-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>

     

      {/* VALUES */}
      <div className="ab-values">
        <div className="ab-values-header">
          <div>
            <div className="ab-eyebrow">
              <div className="ab-eyebrow-dot" />
              <span className="ab-eyebrow-text">What We Stand For</span>
            </div>
            <h2 className="ab-values-title">
              How we
              <br />
              <em>operate</em>
            </h2>
          </div>
          <p className="ab-values-sub">
            The principles that guide every decision we make — from project
            scoping to final handover.
          </p>
        </div>
        <div className="ab-values-grid">
          {values.map((v, i) => (
            <div className="ab-value" key={i}>
              <div className="ab-value-icon" style={{ background: v.bg }}>
                {v.icon}
              </div>
              <div>
                <p className="ab-value-title">{v.title}</p>
                <p className="ab-value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      <Footer />
    </div>
  );
}
