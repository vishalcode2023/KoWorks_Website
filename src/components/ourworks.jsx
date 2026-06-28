import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const isAutoPlayRef = useRef(true);

  const products = [
    {
      id: 1,
      name: "UNITY SCHOOL PORTAL",
      category: "School Management",
      description:
        "Full-scale school ERP — admissions, fees, attendance, exams & WhatsApp notifications",
      image:
        "/unitymob.png",
      color: "#2563eb",
    },
    {
      id: 2,
      name: "ENVIROSAFETYGLASS",
      category: "Business Website",
      description:
        "Professional B2B website with product catalogue and lead generation for a safety glass manufacturer",
      image:
        "/envirosafety.png",
      color: "#0ea5e9",
    },
    {
      id: 3,
      name: "HABBIS INVENTORY",
      category: "Inventory Management",
      description:
        "Real-time garment stock tracking with barcode generation, bulk import & supplier management",
      image:
        "/habib.png",
      color: "#F04E1A",
    },

    {
      id: 5,
      name: "Mysore's Finest Homestays",
      category: "Travel Website",
      description:
        "A visually stunning website showcasing Mysore's top homestays with immersive imagery and seamless booking experience",
      image:
        "/MHA.png",
      color: "#7c3aed",
    },
  ];

  useEffect(() => {
    if (!isAutoPlayRef.current) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(autoPlayRef.current);
  }, [products.length]);

  const handleNext = () => {
    isAutoPlayRef.current = false;
    clearInterval(autoPlayRef.current);
    setActiveIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => {
      isAutoPlayRef.current = true;
    }, 1000);
  };

  const handlePrev = () => {
    isAutoPlayRef.current = false;
    clearInterval(autoPlayRef.current);
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => {
      isAutoPlayRef.current = true;
    }, 1000);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + products.length) % products.length;
      cards.push({
        ...products[index],
        position: i,
        opacity: i === 0 ? 1 : 0.4,
        scale: i === 0 ? 1 : 0.8,
        zIndex: 10 - Math.abs(i),
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <section style={{ padding: "60px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Carousel Container */}
          <div
            style={{
              position: "relative",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "80px",
              perspective: "1200px",
            }}
          >
            {/* Dark Card Background */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#0e0e0c",
                borderRadius: "24px",
                zIndex: 0,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "radial-gradient(ellipse at center, rgba(240,78,26,0.1) 0%, rgba(0,0,0,0) 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Carousel Cards */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "60px",
                }}
              >
                {visibleCards.map((card) => (
                  <div
                    key={card.id}
                    style={{
                      position: "absolute",
                      transform: `translateX(${card.position * 240}px) scale(${card.scale})`,
                      opacity: card.opacity,
                      zIndex: card.zIndex,
                      transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      width: "280px",
                      height: "380px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 30px 60px ${card.color}55`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.3)";
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

                      {/* Overlay Gradient */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "140px",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: "20px",
                          color: "#FFFFFF",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#F04E1A",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "1.5px",
                            marginBottom: "6px",
                          }}
                        >
                          {card.category}
                        </span>
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: "700",
                            margin: "0",
                            letterSpacing: "-0.3px",
                          }}
                        >
                          {card.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Text Inside Dark Card */}
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                  zIndex: 5,
                  maxWidth: "300px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#888",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                    margin: "0 0 14px",
                  }}
                >
                  <br />
                  Built from scratch with care.
                </p>
                <h2
                  style={{
                    fontSize: "56px",
                    fontWeight: "800",
                    color: "#FFFFFF",
                    margin: 0,
                    letterSpacing: "-1px",
                    lineHeight: "1.1",
                  }}
                >
                  OUR
                  <br />
                  <span style={{ color: "#F04E1A" }}>WORKS</span>
                </h2>
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {[
                    "10+ Projects Delivered",
                    "NDA Protected",
                    "6-Month Support",
                  ].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "rgba(255,255,255,0.5)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span style={{ color: "#F04E1A" }}>✦</span> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #000000",
                background: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                transition: "all 0.3s ease",
                fontSize: "0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F04E1A";
                e.currentTarget.style.borderColor = "#F04E1A";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#000000";
                e.currentTarget.style.color = "#000000";
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div style={{ display: "flex", gap: "12px" }}>
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    isAutoPlayRef.current = false;
                    clearInterval(autoPlayRef.current);
                    setTimeout(() => {
                      isAutoPlayRef.current = true;
                    }, 1000);
                  }}
                  style={{
                    width: index === activeIndex ? "40px" : "12px",
                    height: "12px",
                    borderRadius: "6px",
                    border: "none",
                    background: index === activeIndex ? "#F04E1A" : "#DDDDDD",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (index !== activeIndex)
                      e.target.style.background = "#BBB";
                  }}
                  onMouseLeave={(e) => {
                    if (index !== activeIndex)
                      e.target.style.background = "#DDD";
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #000000",
                background: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                transition: "all 0.3s ease",
                fontSize: "0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F04E1A";
                e.currentTarget.style.borderColor = "#F04E1A";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#000000";
                e.currentTarget.style.color = "#000000";
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorks;
