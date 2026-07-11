const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,800&family=DM+Sans:wght@300;400;500;600&display=swap');

  .footer-root {
    background: #fafaf8;
    font-family: 'DM Sans', sans-serif;
    color: #0e0e0c;
    border-top: 1px solid #ebebeb;
  }

  /* ── CTA BAND ── */
  .footer-cta-band {
    background: #fff;
    border-bottom: 1px solid #ebebeb;
  }

  .footer-cta-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }

  .footer-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07);
    border: 1px solid rgba(240,78,26,0.18);
    border-radius: 40px;
    padding: 5px 14px 5px 8px;
    margin-bottom: 18px;
  }

  .footer-eyebrow-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #F04E1A;
    animation: fpulse 2s ease-in-out infinite;
  }

  @keyframes fpulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(1.5); }
  }

  .footer-eyebrow-text {
    font-size: 11px; font-weight: 600;
    color: #F04E1A; letter-spacing: 0.1em; text-transform: uppercase;
  }

  .footer-cta-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(34px, 4vw, 56px);
    font-weight: 800;
    color: #0e0e0c;
    line-height: 1.06;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .footer-cta-heading em { color: #F04E1A; font-style: italic; }

  .footer-cta-right {
    display: flex; flex-direction: column;
    align-items: flex-end; gap: 16px;
  }

  .footer-cta-sub {
    font-size: 14.5px; color: #888;
    line-height: 1.7; margin: 0;
    text-align: right; max-width: 260px;
  }

  .footer-cta-btns { display: flex; gap: 12px; }

  .footer-btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    background: #0e0e0c; color: #fff;
    border: none; border-radius: 40px;
    padding: 13px 26px;
    font-size: 14px; font-weight: 600;
    cursor: pointer; text-decoration: none;
    transition: all 0.25s ease;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 2px 0 rgba(0,0,0,0.35);
    white-space: nowrap;
  }

  .footer-btn-primary:hover {
    background: #1e1e1c; transform: translateY(-2px);
  }

  .footer-btn-orange {
    display: inline-flex; align-items: center; gap: 10px;
    background: #F04E1A; color: #fff;
    border: none; border-radius: 40px;
    padding: 13px 26px;
    font-size: 14px; font-weight: 600;
    cursor: pointer; text-decoration: none;
    transition: all 0.25s ease;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 4px 18px rgba(240,78,26,0.3);
    white-space: nowrap;
  }

  .footer-btn-orange:hover {
    background: #cc3a0f; transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(240,78,26,0.4);
  }

  /* ── MAIN GRID ── */
  .footer-main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 64px 60px 56px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    border-bottom: 1px solid #ebebeb;
  }

  .footer-brand-logo {
    font-family: 'Playfair Display', serif;
    font-size: 26px; font-weight: 800;
    color: #0e0e0c; letter-spacing: -0.03em;
    margin: 0 0 12px;
  }

  .footer-brand-logo span { color: #F04E1A; }

  .footer-brand-desc {
    font-size: 14px; color: #888;
    line-height: 1.75; margin: 0 0 28px;
    max-width: 270px;
  }

  /* contact pills */
  .footer-contact-pills {
    display: flex; flex-direction: column; gap: 8px; margin-bottom: 26px;
  }

  .footer-contact-pill {
    display: inline-flex; align-items: center; gap: 10px;
    background: #fff;
    border: 1px solid #e8e8e4;
    border-radius: 12px;
    padding: 9px 14px;
    text-decoration: none;
    transition: all 0.2s ease;
    width: fit-content;
  }

  .footer-contact-pill:hover {
    border-color: rgba(240,78,26,0.3);
    background: rgba(240,78,26,0.04);
    transform: translateX(4px);
  }

  .footer-contact-pill-icon {
    width: 26px; height: 26px; border-radius: 8px;
    background: rgba(240,78,26,0.08);
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; flex-shrink: 0;
  }

  .footer-contact-label {
    font-size: 10px; font-weight: 600;
    color: #bbb; text-transform: uppercase; letter-spacing: 0.08em;
    display: block;
  }

  .footer-contact-value {
    font-size: 13px; font-weight: 500; color: #444;
    display: block;
  }

  /* socials */
  .footer-socials { display: flex; gap: 8px; }

  .footer-social {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid #e0e0dc;
    background: #fff;
    display: flex; align-items: center; justify-content: center;
    color: #666; text-decoration: none;
    font-size: 13px; font-weight: 600;
    transition: all 0.2s ease;
  }

  .footer-social:hover {
    background: #F04E1A; border-color: #F04E1A; color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(240,78,26,0.28);
  }

  /* nav cols */
  .footer-nav-col-title {
    font-size: 11px; font-weight: 700;
    color: #0e0e0c; text-transform: uppercase;
    letter-spacing: 0.1em; margin: 0 0 20px;
  }

  .footer-nav-list {
    list-style: none; margin: 0; padding: 0;
    display: flex; flex-direction: column; gap: 12px;
  }

  .footer-nav-list a {
    font-size: 14px; color: #777;
    text-decoration: none;
    transition: all 0.2s ease;
    display: flex; align-items: center; gap: 5px;
  }

  .footer-nav-list a:hover {
    color: #F04E1A; transform: translateX(4px);
  }

  .footer-nav-list a:hover .fnav-arr { opacity: 1; }

  .fnav-arr {
    font-size: 11px; opacity: 0;
    transition: opacity 0.2s ease; color: #F04E1A;
  }

  .footer-nav-badge {
    font-size: 10px; font-weight: 700;
    background: rgba(26,122,74,0.08);
    color: #1a7a4a;
    border: 1px solid rgba(26,122,74,0.2);
    border-radius: 20px; padding: 2px 7px; margin-left: 4px;
  }

  /* NDA box */
  .footer-nda-box {
    margin-top: 28px;
    padding: 14px 16px;
    background: #fff;
    border: 1px solid #e8e8e4;
    border-left: 3px solid #1a7a4a;
    border-radius: 0 12px 12px 0;
  }

  .footer-nda-title {
    font-size: 11px; font-weight: 700;
    color: #1a7a4a; text-transform: uppercase;
    letter-spacing: 0.08em; margin: 0 0 5px;
  }

  .footer-nda-desc {
    font-size: 12.5px; color: #888; line-height: 1.6; margin: 0;
  }

  /* ── BOTTOM BAR ── */
  .footer-bottom {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 14px;
  }

  .footer-copyright {
    font-size: 13px; color: #aaa; margin: 0;
  }

  .footer-copyright strong { color: #555; font-weight: 600; }

  .footer-bottom-links { display: flex; gap: 20px; }

  .footer-bottom-links a {
    font-size: 12.5px; color: #aaa;
    text-decoration: none; transition: color 0.2s;
  }

  .footer-bottom-links a:hover { color: #F04E1A; }

  .footer-bottom-right { display: flex; align-items: center; gap: 12px; }

  .footer-made {
    font-size: 12.5px; color: #bbb; margin: 0;
  }

  .footer-made span { color: #F04E1A; }

  .footer-status-pill {
    display: flex; align-items: center; gap: 6px;
    background: rgba(26,122,74,0.07);
    border: 1px solid rgba(26,122,74,0.18);
    border-radius: 20px; padding: 4px 12px;
  }

  .footer-status-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #1a7a4a;
    animation: fpulse 2.5s ease-in-out infinite;
  }

  .footer-status-text {
    font-size: 11px; font-weight: 600;
    color: #1a7a4a; letter-spacing: 0.04em;
  }

  @media (max-width: 1024px) {
    .footer-main { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 768px) {
    .footer-cta-inner { flex-direction: column; align-items: flex-start; padding: 52px 24px; }
    .footer-cta-right { align-items: flex-start; }
    .footer-cta-sub { text-align: left; }
    .footer-cta-btns { flex-wrap: wrap; }
    .footer-main { grid-template-columns: 1fr; padding: 44px 24px; gap: 32px; }
    .footer-bottom { padding: 18px 24px; flex-direction: column; align-items: flex-start; }
  }
`;

const services = [
  { label: "Custom Software Development", badge: null },
  { label: "Inventory Management", badge: null },
  { label: "Billing & POS Software", badge: "GST" },
  { label: "Website Development", badge: null },
  { label: "School Management ERP", badge: null },
  { label: "UI/UX Design", badge: null },
  { label: "Social Media Marketing", badge: null },
];

const company = [
  { label: "Our Works", href: "/works" },
  { label: "Services" , href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const support = [
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Free Quote", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="footer-root">
      <style>{css}</style>

      {/* ── CTA BAND ── */}
      <div className="footer-cta-band">
        <div className="footer-cta-inner">
          <div>
            <div className="footer-eyebrow">
              <div className="footer-eyebrow-dot" />
              <span className="footer-eyebrow-text">Open for Projects</span>
            </div>
            <h2 className="footer-cta-heading">
              Have an idea?
              <br />
              Let's <em>build it.</em>
            </h2>
          </div>
          <div className="footer-cta-right">
            <p className="footer-cta-sub">
              We take on new clients who need software built right — no fluff,
              clean code, delivered on time.
            </p>
            {/* Logo lockup + buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                alignItems: "flex-end",
              }}
            >
              {/* Logo mark */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  border: "1px solid #ebebeb",
                  borderRadius: 16,
                  padding: "10px 18px 10px 12px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon monogram */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #F04E1A, #cc3a0f)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 3px 10px rgba(240,78,26,0.3)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    K
                  </span>
                </div>

                {/* Wordmark */}
                <div>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#0e0e0c",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Ko<span style={{ color: "#F04E1A" }}>works</span>
                  </span>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#bbb",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    Software Studio
                  </p>
                </div>

                {/* Verified dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#1a7a4a",
                    marginLeft: 4,
                    boxShadow: "0 0 0 3px rgba(26,122,74,0.15)",
                    animation: "fpulse 2.5s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Buttons */}
              <div className="footer-cta-btns">
                <a href="/contact" className="footer-btn-orange">
                  Start a project
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
                <a
                  href="https://wa.me/918884804648"
                  className="footer-btn-primary"
                >
                  WhatsApp us ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="footer-main">
        {/* Brand col */}
        <div>
          <h3 className="footer-brand-logo">
            Ko<span>works</span>
          </h3>
          <p className="footer-brand-desc">
            A Bangalore-based software company building custom web apps,
            inventory systems, billing software, and digital products for
            businesses that mean it.
          </p>

          <div className="footer-contact-pills">
            {[
              {
                icon: "✉",
                label: "Email",
                value: "koworks2026@gmail.com",
                href: "mailto:koworks2026@gmail.com",
              },
              {
                icon: "📱",
                label: "WhatsApp",
                value: "+91 8884804648",
                href: "https://wa.me/918884804648",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Mysore, Karnataka",
                href: "#",
              },
            ].map((c) => (
              <a href={c.href} className="footer-contact-pill" key={c.label}>
                <div className="footer-contact-pill-icon">{c.icon}</div>
                <div>
                  <span className="footer-contact-label">{c.label}</span>
                  <span className="footer-contact-value">{c.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="footer-socials">
            {["in", "𝕏"].map((s) => (
              <a key={s} href="#" className="footer-social">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Services col */}
        <div>
          <p className="footer-nav-col-title">Services</p>
          <ul className="footer-nav-list">
            {services.map((s) => (
              <li key={s.label}>
                <a href="/services">
                  {s.label}
                  {s.badge && (
                    <span className="footer-nav-badge">{s.badge}</span>
                  )}
                  <span className="fnav-arr">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company col */}
        <div>
          <p className="footer-nav-col-title">Company</p>
          <ul className="footer-nav-list">
            {company.map((c) => (
              <li key={c.label}>
                <a href={c.href}>
                  {c.label}
                  <span className="fnav-arr">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support col */}
        <div>
          <p className="footer-nav-col-title">Support</p>
          <ul className="footer-nav-list">
            {support.map((s) => (
              <li key={s.label}>
                <a href={s.href}>
                  {s.label}
                  <span className="fnav-arr">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-nda-box">
            <p className="footer-nda-title">🔒 NDA Protected</p>
            <p className="footer-nda-desc">
              Every project is covered by a strict non-disclosure agreement
              before we start.
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      {/* <div className="footer-bottom">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <p className="footer-copyright">
            © 2024 <strong>Koworks</strong>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#nda">NDA</a>
          </div>
        </div>
        <div className="footer-bottom-right">
          <p className="footer-made">
            Made with <span>♥</span> in Mysore
          </p>
          <div className="footer-status-pill">
            <div className="footer-status-dot" />
            <span className="footer-status-text">Accepting clients</span>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
