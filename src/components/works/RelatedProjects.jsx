import { Link } from "react-router-dom";

export default function RelatedProjects({ related }) {
  if (!related || related.length === 0) return null;

  return (
    <section style={{
      maxWidth: 1200,
      margin: "0 auto 80px",
      padding: "0 40px",
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 8 }}>
        More work
      </div>
      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: "clamp(24px, 2.8vw, 38px)",
        fontWeight: 900,
        letterSpacing: "-0.04em",
        margin: "0 0 32px",
        color: "#0e0e0c",
      }}>
        Other projects
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 20,
      }}>
        {related.map((p) => (
          <Link
            key={p.slug}
            to={`/works/${p.slug}`}
            style={{
              display: "block",
              textDecoration: "none",
              borderRadius: 20,
              overflow: "hidden",
              border: "1.5px solid #e8e8e4",
              background: "#fafaf8",
              transition: "all 0.28s ease",
              position: "relative",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.09)";
              e.currentTarget.style.borderColor = "rgba(240,78,26,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e8e8e4";
            }}
          >
            {/* Image */}
            <div style={{ height: 200, overflow: "hidden" }}>
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", display: "block" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>

            {/* Body */}
            <div style={{ padding: "20px 22px 22px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "#F04E1A", marginBottom: 6 }}>
                {p.type}
              </div>
              <div style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#0e0e0c",
                marginBottom: 8,
                lineHeight: 1.2,
              }}>
                {p.name}
              </div>
              <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6, marginBottom: 14 }}>
                {p.desc}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} style={{
                      fontSize: 11, fontWeight: 600,
                      background: "#f0f0ec", color: "#555",
                      border: "1px solid #e4e4e0",
                      borderRadius: 20, padding: "2px 9px",
                    }}>{t}</span>
                  ))}
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#F04E1A" }}>
                  View →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
