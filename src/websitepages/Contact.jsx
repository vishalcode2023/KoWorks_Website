import { useState } from "react";
import SEOHead from "../components/seo/SEOHead";
import { PAGE_SEO } from "../seo/seo.config";
import Footer from "../components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .cp-root {
    font-family: 'Cabinet Grotesk', sans-serif;
    background: #fff;
    color: #0e0e0c;
    overflow-x: hidden;
  }

  /* ── SHARED ── */
  .cp-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07);
    border: 1px solid rgba(240,78,26,0.2);
    border-radius: 40px; padding: 5px 14px 5px 8px;
    margin-bottom: 22px;
  }

  .cp-eyebrow-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #F04E1A;
    animation: cpdot 2s ease-in-out infinite;
  }

  @keyframes cpdot {
    0%,100%{opacity:1;transform:scale(1);}
    50%{opacity:.4;transform:scale(1.6);}
  }

  .cp-eyebrow-text {
    font-size: 11px; font-weight: 700;
    color: #F04E1A; letter-spacing: 0.12em; text-transform: uppercase;
  }

  /* ════════════════════════
     HERO
  ════════════════════════ */
  .cp-hero {
    max-width: 1300px; margin: 0 auto;
    padding: 96px 64px 80px;
    margin-top: 60px;
    border-bottom: 1px solid #e8e8e4;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }

  .cp-hero-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(56px, 7.5vw, 100px);
    font-weight: 900; color: #0e0e0c;
    line-height: 0.92; letter-spacing: -0.05em;
    margin: 0 0 28px;
  }

  .cp-hero-title em { color: #F04E1A; font-style: italic; font-weight: 300; }

  .cp-hero-sub { font-size: 15px; color: #888; line-height: 1.75; margin: 0; }

  /* availability chip */
  .cp-avail {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(26,122,74,0.07);
    border: 1px solid rgba(26,122,74,0.2);
    border-radius: 40px; padding: 6px 16px 6px 10px;
    margin-bottom: 28px;
  }

  .cp-avail-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #1a7a4a;
    animation: cpdot 2.5s ease-in-out infinite;
  }

  .cp-avail-text {
    font-size: 12px; font-weight: 700;
    color: #1a7a4a; letter-spacing: 0.06em; text-transform: uppercase;
  }

  /* right side quick-reach cards */
  .cp-reach-grid {
    display: flex; flex-direction: column; gap: 12px;
  }

  .cp-reach-card {
    background: #fafaf8; border: 1.5px solid #e8e8e4;
    border-radius: 18px; padding: 18px 20px;
    display: flex; align-items: center; gap: 16px;
    text-decoration: none; color: inherit;
    transition: all 0.22s ease; position: relative; overflow: hidden;
  }

  .cp-reach-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px; opacity: 0;
    transition: opacity 0.22s ease;
  }

  .cp-reach-card:hover {
    background: #fff;
    border-color: rgba(240,78,26,0.2);
    box-shadow: 0 8px 28px rgba(0,0,0,0.07);
    transform: translateX(4px);
  }

  .cp-reach-card:hover::before { opacity: 1; }

  .cp-reach-icon {
    width: 44px; height: 44px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; flex-shrink: 0;
    transition: transform 0.22s ease;
  }

  .cp-reach-card:hover .cp-reach-icon { transform: scale(1.1); }

  .cp-reach-label {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: #bbb; display: block; margin-bottom: 3px;
  }

  .cp-reach-value {
    font-size: 14.5px; font-weight: 700;
    color: #0e0e0c; display: block;
  }

  .cp-reach-sub {
    font-size: 12px; color: #aaa; display: block; margin-top: 1px;
  }

  .cp-reach-arrow {
    margin-left: auto; flex-shrink: 0;
    width: 30px; height: 30px; border-radius: 50%;
    background: #f4f4f0; border: 1px solid #e4e4e0;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s ease;
  }

  .cp-reach-card:hover .cp-reach-arrow {
    background: #F04E1A; border-color: #F04E1A;
  }

  /* ════════════════════════
     MAIN CONTENT
  ════════════════════════ */
  .cp-main {
    max-width: 1300px; margin: 0 auto;
    padding: 88px 64px;
    display: grid; grid-template-columns: 1.1fr 0.9fr;
    gap: 72px; align-items: start;
  }

  /* ── FORM ── */
  .cp-form-wrap {}

  .cp-form-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 900; color: #0e0e0c;
    letter-spacing: -0.04em; line-height: 1.1;
    margin: 0 0 8px;
  }

  .cp-form-title em { color: #F04E1A; font-style: italic; font-weight: 300; }

  .cp-form-sub {
    font-size: 14px; color: #888; line-height: 1.7;
    margin: 0 0 36px;
  }

  .cp-form { display: flex; flex-direction: column; gap: 16px; }

  /* row of 2 */
  .cp-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .cp-field { display: flex; flex-direction: column; gap: 6px; }

  .cp-label {
    font-size: 11.5px; font-weight: 700;
    color: #0e0e0c; letter-spacing: 0.04em; text-transform: uppercase;
  }

  .cp-input, .cp-textarea, .cp-select {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: 14.5px; font-weight: 500;
    color: #0e0e0c; background: #fafaf8;
    border: 1.5px solid #e8e8e4;
    border-radius: 12px; padding: 13px 16px;
    outline: none; width: 100%;
    transition: border-color 0.2s ease, background 0.2s ease,
                box-shadow 0.2s ease;
    appearance: none;
  }

  .cp-input::placeholder, .cp-textarea::placeholder {
    color: #ccc; font-weight: 400;
  }

  .cp-input:focus, .cp-textarea:focus, .cp-select:focus {
    border-color: #F04E1A;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(240,78,26,0.1);
  }

  .cp-textarea { resize: vertical; min-height: 130px; line-height: 1.6; }

  .cp-select { cursor: pointer; color: #666; }
  .cp-select option { color: #0e0e0c; }

  /* service checkboxes */
  .cp-services-label {
    font-size: 11.5px; font-weight: 700;
    color: #0e0e0c; letter-spacing: 0.04em;
    text-transform: uppercase; margin-bottom: 10px;
  }

  .cp-services-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  }

  .cp-service-chip {
    display: flex; align-items: center; gap: 9px;
    padding: 10px 14px;
    background: #fafaf8; border: 1.5px solid #e8e8e4;
    border-radius: 12px; cursor: pointer;
    transition: all 0.18s ease; user-select: none;
  }

  .cp-service-chip.selected {
    background: rgba(240,78,26,0.06);
    border-color: rgba(240,78,26,0.3);
  }

  .cp-service-chip-box {
    width: 16px; height: 16px; border-radius: 5px;
    border: 1.5px solid #ddd; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.18s ease;
    background: #fff;
  }

  .cp-service-chip.selected .cp-service-chip-box {
    background: #F04E1A; border-color: #F04E1A;
  }

  .cp-service-chip-text {
    font-size: 13px; font-weight: 600; color: #555;
    transition: color 0.18s ease;
  }

  .cp-service-chip.selected .cp-service-chip-text { color: #F04E1A; }

  /* submit */
  .cp-submit {
    display: flex; align-items: center; justify-content: space-between;
    gap: 20px; margin-top: 8px; flex-wrap: wrap;
  }

  .cp-submit-note {
    font-size: 12.5px; color: #aaa; line-height: 1.5;
    display: flex; align-items: center; gap: 6px;
  }

  .cp-submit-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: #0e0e0c; color: #fff;
    border: none; border-radius: 40px; padding: 14px 28px;
    font-size: 14px; font-weight: 700; cursor: pointer;
    font-family: 'Cabinet Grotesk', sans-serif;
    box-shadow: 0 2px 0 rgba(0,0,0,0.3);
    transition: all 0.22s ease; white-space: nowrap;
  }

  .cp-submit-btn:hover { background: #1e1e1c; transform: translateY(-2px); }

  .cp-submit-btn .cp-btn-icon {
    width: 28px; height: 28px; border-radius: 50%;
    background: #F04E1A;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* success state */
  .cp-success {
    background: rgba(26,122,74,0.06);
    border: 1.5px solid rgba(26,122,74,0.2);
    border-radius: 16px; padding: 32px;
    text-align: center;
  }

  .cp-success-icon { font-size: 40px; margin-bottom: 12px; }

  .cp-success-title {
    font-family: 'Fraunces', serif;
    font-size: 24px; font-weight: 700;
    color: #0e0e0c; letter-spacing: -0.02em; margin-bottom: 8px;
  }

  .cp-success-sub { font-size: 14px; color: #888; line-height: 1.6; }

  /* ── RIGHT SIDE ── */
  .cp-right {}

  /* info cards stacked */
  .cp-info-stack { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }

  .cp-info-card {
    background: #fafaf8; border: 1.5px solid #e8e8e4;
    border-radius: 18px; padding: 22px 24px;
    transition: all 0.22s ease;
  }

  .cp-info-card:hover {
    background: #fff; border-color: rgba(240,78,26,0.18);
    box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  }

  .cp-info-card-head {
    display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
  }

  .cp-info-icon {
    width: 38px; height: 38px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 17px; flex-shrink: 0;
  }

  .cp-info-card-title {
    font-family: 'Fraunces', serif;
    font-size: 16px; font-weight: 700;
    color: #0e0e0c; letter-spacing: -0.02em; margin: 0;
  }

  .cp-info-card-body {
    font-size: 13.5px; color: #666; line-height: 1.7; margin: 0;
  }

  .cp-info-card-body strong { color: #0e0e0c; font-weight: 700; }

  /* trust row */
  .cp-trust {
    padding: 20px 24px;
    background: #0e0e0c; border-radius: 18px;
    display: flex; flex-direction: column; gap: 12px;
  }

  .cp-trust-title {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; color: rgba(255,255,255,0.3);
  }

  .cp-trust-items { display: flex; flex-direction: column; gap: 9px; }

  .cp-trust-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 13px; color: rgba(255,255,255,0.65); font-weight: 500;
  }

  .cp-trust-check {
    width: 20px; height: 20px; border-radius: 50%;
    background: rgba(26,122,74,0.2);
    border: 1px solid rgba(26,122,74,0.35);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 10px;
  }

  /* founders mini */
  .cp-founders {
    margin-top: 16px;
    background: #fafaf8; border: 1.5px solid #e8e8e4;
    border-radius: 18px; padding: 20px 22px;
  }

  .cp-founders-label {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.09em; color: #bbb; margin-bottom: 14px;
  }

  .cp-founders-row { display: flex; gap: 14px; }

  .cp-founder-mini {
    flex: 1; display: flex; align-items: center; gap: 10px;
    padding: 10px 12px; background: #fff;
    border: 1px solid #e8e8e4; border-radius: 12px;
  }

  .cp-founder-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    object-fit: cover; object-position: top; flex-shrink: 0;
    border: 2px solid #e8e8e4;
  }

  .cp-founder-name {
    font-family: 'Fraunces', serif;
    font-size: 14px; font-weight: 700;
    color: #0e0e0c; letter-spacing: -0.02em; margin: 0 0 2px;
  }

  .cp-founder-role {
    font-size: 10.5px; font-weight: 600;
    color: #aaa; text-transform: uppercase; letter-spacing: 0.05em;
  }

  /* ════════════════════════
     RESPONSIVE
  ════════════════════════ */
  @media (max-width: 1024px) {
    .cp-hero  { grid-template-columns: 1fr; gap: 48px; }
    .cp-main  { grid-template-columns: 1fr; gap: 48px; }
  }

  @media (max-width: 640px) {
    .cp-hero, .cp-main { padding-left: 24px; padding-right: 24px; }
    .cp-hero { padding-top: 110px; }
    .cp-form-row { grid-template-columns: 1fr; }
    .cp-services-grid { grid-template-columns: 1fr; }
    .cp-submit { flex-direction: column; align-items: stretch; }
    .cp-submit-btn { justify-content: center; }
    .cp-founders-row { flex-direction: column; }
  }
`;

const serviceOptions = [
  "Custom Software",
  "Inventory Management",
  "School Management ERP",
  "Billing & POS",
  "Insurance Software",
  "Website Development",
  "UI/UX Design",
  "Social Media Marketing",
];

const reachCards = [
  {
    icon: "✉️",
    iconBg: "rgba(240,78,26,0.08)",
    accent: "#F04E1A",
    label: "Email",
    value: "koworks2026@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:koworks2026@gmail.com",
  },
  {
    icon: "📱",
    iconBg: "rgba(26,122,74,0.08)",
    accent: "#1a7a4a",
    label: "WhatsApp",
    value: "+91 88848 04648",
    sub: "Quick replies, Mon–Sat",
    href: "https://wa.me/9188848 04648",
  },
  {
    icon: "📍",
    iconBg: "rgba(37,99,235,0.08)",
    accent: "#2563eb",
    label: "Location",
    value: "Mysore, Karnataka",
    sub: "Available for in-person meetings",
    href: "#",
  },
];

const infoCards = [
  {
    icon: "⏱️",
    iconBg: "rgba(240,78,26,0.08)",
    title: "How fast do you reply?",
    body: "We respond to every inquiry within <strong>24 hours</strong>, usually the same day. For urgent projects, WhatsApp is the fastest way to reach us.",
  },
  {
    icon: "💰",
    iconBg: "rgba(26,122,74,0.08)",
    title: "What does a project cost?",
    body: "Every project is scoped individually. A simple website starts around <strong>₹25,000</strong>. Custom software varies based on complexity — we send a detailed quote after understanding your needs.",
  },
  {
    icon: "📦",
    iconBg: "rgba(37,99,235,0.08)",
    title: "What do you hand over?",
    body: "<strong>Full source code, documentation, and deployment setup</strong> — every time. You own everything we build. Plus 6 months of free post-launch support.",
  },
];

const trustItems = [
  "NDA signed before every project",
  "Free consultation, no commitment",
  "Full source code handover",
  "6-month post-launch support",
  "GST invoicing available",
];

export default function ContactPage() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const toggleService = (s) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mbdbynpg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...form, services: selected }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cp-root">
      <SEOHead seo={PAGE_SEO.contact} breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <style>{css}</style>

      {/* ════ HERO ════ */}
      <div className="cp-hero">
        <div>
          <div className="cp-avail">
            <div className="cp-avail-dot" />
            <span className="cp-avail-text">Currently accepting projects</span>
          </div>
          <h1 className="cp-hero-title">
            Let's
            <br />
            <em>talk.</em>
          </h1>
          <p className="cp-hero-sub">
            Tell us what you're building. We'll listen, ask the right questions,
            and give you an honest assessment — no sales pitch, no obligation.
          </p>
        </div>

        <div className="cp-reach-grid">
          {reachCards.map((c) => (
            <a key={c.label} href={c.href} className="cp-reach-card">
              <style>{`.cp-reach-card:nth-child(${reachCards.indexOf(c) + 1})::before { background: ${c.accent}; }`}</style>
              <div className="cp-reach-icon" style={{ background: c.iconBg }}>
                {c.icon}
              </div>
              <div>
                <span className="cp-reach-label">{c.label}</span>
                <span className="cp-reach-value">{c.value}</span>
                <span className="cp-reach-sub">{c.sub}</span>
              </div>
              <div className="cp-reach-arrow">
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ════ MAIN ════ */}
      <div className="cp-main">
        {/* ── FORM ── */}
        <div className="cp-form-wrap">
          <div className="cp-eyebrow">
            <div className="cp-eyebrow-dot" />
            <span className="cp-eyebrow-text">Send us a message</span>
          </div>
          <h2 className="cp-form-title">
            Start a<br />
            <em>project</em>
          </h2>
          <p className="cp-form-sub">
            Fill in the details below and we'll get back to you within 24 hours
            with a clear, honest response.
          </p>

          {submitted ? (
            <div className="cp-success">
              <div className="cp-success-icon">✅</div>
              <p className="cp-success-title">Message received!</p>
              <p className="cp-success-sub">
                We'll review your project details and reply to{" "}
                <strong>{form.email}</strong> within 24 hours. If it's urgent,
                WhatsApp us directly.
              </p>
            </div>
          ) : (
            <form className="cp-form" onSubmit={handleSubmit}>
              <div className="cp-form-row">
                <div className="cp-field">
                  <label className="cp-label">Full Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="cp-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="cp-field">
                  <label className="cp-label">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="cp-input"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="cp-form-row">
                <div className="cp-field">
                  <label className="cp-label">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="cp-input"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="cp-field">
                  <label className="cp-label">Company / Business</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="cp-input"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* services */}
              <div className="cp-field">
                <p className="cp-services-label">Services Interested In</p>
                <div className="cp-services-grid">
                  {serviceOptions.map((s) => (
                    <div
                      key={s}
                      className={`cp-service-chip${selected.includes(s) ? " selected" : ""}`}
                      onClick={() => toggleService(s)}
                    >
                      <div className="cp-service-chip-box">
                        {selected.includes(s) && (
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 10 8"
                            fill="none"
                          >
                            <path
                              d="M1 4l3 3 5-6"
                              stroke="#fff"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="cp-service-chip-text">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* budget */}
              <div className="cp-field">
                <label className="cp-label">Approximate Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="cp-select"
                >
                  <option value="">Select a range</option>
                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹75,000</option>
                  <option>₹75,000 – ₹2,00,000</option>
                  <option>₹2,00,000 – ₹5,00,000</option>
                  <option>Above ₹5,00,000</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* message */}
              <div className="cp-field">
                <label className="cp-label">Tell Us About Your Project *</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="cp-textarea"
                  placeholder="Describe what you need — the more detail, the better. What problem are you solving? What does success look like?"
                />
              </div>

              <div className="cp-submit">
                <p className="cp-submit-note">
                  <span>🔒</span>
                  NDA signed before any project discussion.
                </p>
                <button
                  type="submit"
                  className="cp-submit-btn"
                  disabled={loading}
                >
                  <div className="cp-btn-icon">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7h8M8 4l3 3-3 3"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {loading ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── RIGHT ── */}
        <div className="cp-right">
          <div className="cp-eyebrow">
            <div className="cp-eyebrow-dot" />
            <span className="cp-eyebrow-text">Good to know</span>
          </div>

          <div className="cp-info-stack">
            {infoCards.map((c) => (
              <div className="cp-info-card" key={c.title}>
                <div className="cp-info-card-head">
                  <div
                    className="cp-info-icon"
                    style={{ background: c.iconBg }}
                  >
                    {c.icon}
                  </div>
                  <h4 className="cp-info-card-title">{c.title}</h4>
                </div>
                <p
                  className="cp-info-card-body"
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
              </div>
            ))}
          </div>

          {/* trust */}
          <div className="cp-trust">
            <p className="cp-trust-title">What you can expect</p>
            <div className="cp-trust-items">
              {trustItems.map((t) => (
                <div className="cp-trust-item" key={t}>
                  <div className="cp-trust-check">✓</div>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
