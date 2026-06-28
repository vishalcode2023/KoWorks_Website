import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Our Works", href: "/works" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Dimmer overlay */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 400,
            transition: "0.5s",
          }}
        />
      )}

      {/* Nav container */}
      <div
        style={{
          position: "fixed",
          top: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 500,
          width: menuOpen ? "min(90%, 800px)" : 280,
          height: menuOpen ? 480 : 54,
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 20,
          padding: "0 24px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          transition:
            "width 0.6s cubic-bezier(0.16,1,0.3,1), height 0.6s cubic-bezier(0.16,1,0.3,1)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Header row */}
        <div
          onClick={toggleMenu}
          style={{
            height: 54,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Logo box */}
            <img
              src="/logo1.jpg"
              alt="Koworks Logo"
              style={{
                width: 150,
                height: 150,
                marginLeft: -10,
                objectFit: "contain",
              }}
            />
          </div>

          {/* Hamburger */}
          <div style={{ width: 20, height: 12, position: "relative" }}>
            <span
              style={{
                position: "absolute",
                width: "100%",
                height: 2,
                background: "black",
                top: 0,
                transition: "0.4s",
                transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "100%",
                height: 2,
                background: "black",
                bottom: 0,
                transition: "0.4s",
                transform: menuOpen
                  ? "translateY(-5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </div>
        </div>

        {/* Menu body */}
        <div
          style={{
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? "visible" : "hidden",
            transition: menuOpen ? "opacity 0.3s 0.3s" : "opacity 0.3s",
            paddingTop: 20,
            height: "calc(100% - 54px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ── NEW: top bar inside expanded menu ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            {/* Empty right spacer so brand stays centered */}
            <div style={{ width: 28 }} />
          </div>

          {/* Main grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 40,
              flex: 1,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 28,
                    fontWeight: 500,
                    color: "#111",
                    textDecoration: "none",
                    marginBottom: 12,
                  }}
                >
                  <span
                    className="nav-arrow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "#FF4500",
                      flexShrink: 0,
                      transition: "background 0.2s",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className="nav-link-text"
                    style={{ transition: "color 0.2s" }}
                  >
                    {link.name}
                  </span>
                </a>
              ))}
              <style>{`
                .nav-link .nav-link-text { color: #111; }
                .nav-link:hover .nav-link-text { color: #999; }
                .nav-link:hover .nav-arrow { background: #000 !important; }
                .nav-link:active .nav-arrow { background: #000; }
                .nav-link:active .nav-link-text { color: #999; }
              `}</style>
            </div>
            <div
              style={{
                height: 220,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              >
                <source src="/navvideo.mp4" type="video/mp4" />
              </video>

              {/* optional overlay button like reference */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 20,
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Our Story
              </div>
            </div>
          </div>

          {/* ── NEW: bottom text row ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 20,
              paddingTop: 16,
              borderTop: "1px solid #f0f0f0",
            }}
          >
            {["The creative studio", "Est. 2022", "Get in touch"].map(
              (text) => (
                <span
                  key={text}
                  style={{
                    fontSize: 13,
                    color: "#999",
                    letterSpacing: "0.02em",
                  }}
                >
                  {text}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}