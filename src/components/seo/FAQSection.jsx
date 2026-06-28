import { useState } from "react";

/**
 * FAQSection — Renders an accessible, SEO-rich FAQ accordion.
 * Pairs with faqSchema in schemas.js for structured data.
 *
 * Usage:
 *   <FAQSection faqs={PAGE_SEO.home.faqs} title="Frequently Asked Questions" />
 */
export default function FAQSection({ faqs = [], title = "Frequently Asked Questions" }) {
  const [open, setOpen] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      aria-label="Frequently Asked Questions"
      style={{
        padding: "72px 48px",
        maxWidth: 880,
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        .faq-item {
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          padding: 20px 0;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0,0,0,0.88);
          text-align: left;
          gap: 16px;
          line-height: 1.4;
          letter-spacing: -0.02em;
        }
        .faq-question:hover { color: #F04E1A; }
        .faq-answer {
          overflow: hidden;
          font-size: 15px;
          color: rgba(0,0,0,0.58);
          line-height: 1.7;
          padding-bottom: 20px;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(240,78,26,0.08);
          border: 1px solid rgba(240,78,26,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        @media (max-width: 600px) {
          .faq-section-wrap { padding: 48px 20px; }
          .faq-question { font-size: 14px; }
        }
      `}</style>

      <div className="faq-section-wrap">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "rgba(240,78,26,0.08)",
            border: "1px solid rgba(240,78,26,0.18)",
            borderRadius: 20,
            padding: "4px 12px 4px 8px",
            marginBottom: 14,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#F04E1A",
            }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#F04E1A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              FAQ
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "rgba(0,0,0,0.92)",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}>
            {title}
          </h2>
        </div>

        <div role="list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i} role="listitem">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{faq.q}</span>
                <div className="faq-icon" style={{ transform: open === i ? "rotate(45deg)" : "none" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="#F04E1A" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
              {open === i && (
                <div
                  className="faq-answer"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
