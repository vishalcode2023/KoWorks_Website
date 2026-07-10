import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumb from "@/components/seo/Breadcrumb";
import FAQSection from "@/components/seo/FAQSection";
import Footer from "@/components/footer";
import { PAGE_SEO } from "@/seo/seo.config";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/seo/schemas";

const seo = PAGE_SEO.services.webDevelopment;

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS — matches site palette
   Primary: #F04E1A (orange)
   Dark:    #0e0e0c
   Font:    Inter (body), Playfair Display (headings)

   Tailwind is used for all layout/spacing/color utilities below.
   Only the font import and one custom keyframe (the eyebrow dot's
   pulse-and-scale animation, which isn't available as a Tailwind
   default) live in this tiny stylesheet.
───────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,800&family=Inter:wght@300;400;500;600;700&display=swap');

  @keyframes wd-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.5; transform: scale(1.5); }
  }
`;

const fontDisplay = "font-['Playfair_Display',serif]";
const fontBody = "font-['Inter',sans-serif]";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  {
    icon: "⚡",
    title: "React & Next.js Specialists",
    desc: "We don't do a bit of everything. We go deep on React, Next.js, and Node.js — the same stack powering the world's fastest-growing products.",
  },
  {
    icon: "📦",
    title: "10+ Production Projects Shipped",
    desc: "Every claim we make is backed by real, deployed software — a school ERP managing 3 campuses, a textile POS handling thousands of daily transactions.",
  },
  {
    icon: "🎯",
    title: "Built for Google & Business Results",
    desc: "Core Web Vitals, semantic HTML, JSON-LD schema, and mobile-first design are non-negotiables on every project — not add-ons you pay extra for.",
  },
  {
    icon: "💰",
    title: "Transparent, Fixed-Price Contracts",
    desc: "You get a detailed scope, a fixed price, and milestone-based payment. No surprise invoices. No scope creep without your approval.",
  },
  {
    icon: "🤝",
    title: "Mysore-Rooted, India-Ready",
    desc: "We understand Karnataka's business landscape, GST requirements, UPI payment flows, and regional languages — because we live and work here.",
  },
  {
    icon: "🔧",
    title: "Post-Launch Support Included",
    desc: "3 months of free bug-fix support on every project. Extended retainers available. We don't disappear after launch.",
  },
];

const SERVICES = [
  {
    badge: "Most Popular",
    title: "React Web Development",
    desc: "Custom React web applications built for performance and scale. Dashboards, admin panels, customer portals, SaaS UIs, and multi-page business websites — all with TypeScript, component libraries, and production-ready architecture.",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Redux",
      "React Query",
    ],
    link: "/services/software-development",
  },
  {
    badge: "SEO-Focused",
    title: "Next.js Website Development",
    desc: "Server-side rendered and statically generated websites that load in under 2 seconds and rank on Google. Ideal for marketing sites, landing pages, and content-heavy platforms that need both speed and search visibility.",
    tags: [
      "Next.js 14",
      "App Router",
      "SSR/SSG",
      "ISR",
      "Vercel",
      "SEO-optimised",
    ],
    link: "/services/web-development",
  },
  {
    badge: "Full-Stack",
    title: "MERN Stack Development",
    desc: "End-to-end web applications from database to UI. MongoDB, Express, React, and Node.js — all handled by one team. API design, authentication, real-time features, and deployment included.",
    tags: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "REST APIs",
      "JWT Auth",
      "Socket.io",
    ],
    link: "/services/software-development",
  },
  {
    badge: "Conversion-Ready",
    title: "Business Website Development",
    desc: "Professional, responsive websites for businesses across Mysore, Karnataka, and India. Lead-capture forms, Google Analytics, Meta Pixel, GST-compliant contact info, and local SEO baked in from day one.",
    tags: [
      "Responsive",
      "Fast-loading",
      "Local SEO",
      "CMS-ready",
      "Mobile-first",
      "WCAG AA",
    ],
    link: "/services/web-development",
  },
  {
    badge: "Revenue-Generating",
    title: "E-Commerce Development",
    desc: "Custom React storefronts and Shopify integrations for Indian businesses. Razorpay and PayU payment gateways, GST-compliant invoicing, inventory management, and order tracking dashboards.",
    tags: [
      "React Commerce",
      "Shopify",
      "Razorpay",
      "GST-compliant",
      "Inventory",
      "Order tracking",
    ],
    link: "/services/ecommerce",
  },
  {
    badge: "Growth-Stage",
    title: "SaaS Web Application Development",
    desc: "Full-product SaaS engineering — multi-tenant architecture, subscription billing via Razorpay/Stripe, role-based access control, analytics dashboards, and cloud deployment on AWS or GCP.",
    tags: [
      "Multi-tenant",
      "Subscription billing",
      "RBAC",
      "AWS/GCP",
      "PostgreSQL",
      "Prisma",
    ],
    link: "/services/saas-development",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Scoping (Day 1–3)",
    desc: "We map your goals, users, and technical requirements in a structured discovery session. Output: a detailed scope document, tech stack recommendation, and fixed-price proposal.",
  },
  {
    num: "02",
    title: "Design & Architecture (Week 1–2)",
    desc: "Wireframes in Figma, approved by you before a single line of code is written. Database schema, API contracts, and component architecture designed for scale from the start.",
  },
  {
    num: "03",
    title: "Sprint-Based Development (Week 2–N)",
    desc: "Two-week sprints with working demos at each checkpoint. You see real progress, give real feedback, and always know exactly where your project stands.",
  },
  {
    num: "04",
    title: "QA & Performance Testing",
    desc: "Automated tests, cross-browser QA, Lighthouse audits for Core Web Vitals, mobile testing on real devices, and security review before any staging deployment.",
  },
  {
    num: "05",
    title: "Launch & Deployment",
    desc: "Deployment to your hosting environment (VPS, Vercel, AWS, or Hostinger) with SSL, CDN setup, caching, compression, and a monitoring stack so you know it's alive.",
  },
  {
    num: "06",
    title: "Post-Launch Support",
    desc: "3 months of included bug-fix support. We monitor, we respond, and we keep your site healthy. Extended retainers and feature addition sprints are available.",
  },
];

const TECH_GROUPS = [
  {
    label: "Frontend",
    items: [
      "React 18 + TypeScript",
      "Next.js 14 (App Router)",
      "Vite + TailwindCSS",
      "Framer Motion",
      "shadcn/ui, MUI",
      "Redux Toolkit, Zustand",
    ],
  },
  {
    label: "Backend & API",
    items: [
      "Node.js + Express",
      "REST & GraphQL APIs",
      "Prisma ORM",
      "Fastify",
      "Socket.io (real-time)",
      "Redis (caching)",
    ],
  },
  {
    label: "Database",
    items: [
      "MongoDB + Mongoose",
      "PostgreSQL",
      "MySQL",
      "Supabase (BaaS)",
      "Firebase Firestore",
      "Elasticsearch",
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "Docker + Docker Compose",
      "GitHub Actions CI/CD",
      "Nginx reverse proxy",
      "AWS EC2 / GCP / Vercel",
      "Cloudflare CDN",
      "Backblaze B2 storage",
    ],
  },
  {
    label: "Integrations",
    items: [
      "Razorpay / PayU / Cashfree",
      "Twilio WhatsApp API",
      "Cloudinary (media)",
      "Google Analytics 4",
      "Meta Pixel",
      "Stripe Billing",
    ],
  },
  {
    label: "SEO & Performance",
    items: [
      "Core Web Vitals optimisation",
      "JSON-LD Schema markup",
      "Sitemap.xml generation",
      "Image optimisation (WebP)",
      "Lazy loading & code splitting",
      "Lighthouse CI",
    ],
  },
];

const CASE_STUDIES = [
  {
    label: "School ERP — Live Production",
    name: "Unity School Portal",
    tagline:
      "From paper registers to a fully digital school — admissions, attendance, fees, exams, and WhatsApp notifications.",
    client: "Multi-campus institution group",
    duration: "6 months",
    stack: ["React", "Node.js", "MongoDB", "WhatsApp API", "Docker"],
    slug: "unity-school-portal",
    metrics: [
      { num: "4h → 20m", label: "Daily admin time" },
      { num: "100%", label: "Parent comms automated" },
      { num: "3", label: "Schools on one portal" },
      { num: "Zero", label: "Fee entry errors" },
    ],
  },
  {
    label: "Textile Inventory SaaS — Live Production",
    name: "Habbis Stock & POS",
    tagline:
      "Real-time garment inventory with EAN-13 barcodes, GST-ready POS, Tally-compatible exports, and staff performance tracking.",
    client: "HABIBS Cloths — Mysore",
    duration: "4 months",
    stack: ["React", "Node.js", "MongoDB", "Barcode", "Thermal POS"],
    slug: "habbis-inventory",
    metrics: [
      { num: "₹0", label: "Billing errors" },
      { num: "3 min", label: "To bill any product" },
      { num: "EAN-13", label: "Barcodes on every item" },
      { num: "Tally", label: "Compatible exports" },
    ],
  },
];

const INDUSTRIES = [
  {
    icon: "🏫",
    name: "Education",
    desc: "School ERPs, LMS platforms, admission portals",
  },
  {
    icon: "🛍️",
    name: "Retail & Textile",
    desc: "Inventory, POS, barcode, vendor mgmt",
  },
  {
    icon: "🏠",
    name: "Real Estate",
    desc: "Listing portals, homestay platforms, booking",
  },
  {
    icon: "🏥",
    name: "Healthcare",
    desc: "Clinic software, patient portals, pharmacy",
  },
  { icon: "⚖️", name: "Insurance", desc: "Policy mgmt, claims, agent portals" },
  {
    icon: "🏋️",
    name: "Fitness & Wellness",
    desc: "Gym mgmt SaaS, booking, memberships",
  },
  {
    icon: "🚛",
    name: "Logistics",
    desc: "Fleet tracking, delivery management software",
  },
  {
    icon: "💼",
    name: "Professional Services",
    desc: "CA firms, law offices, consultancies",
  },
];

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote:
      "Koworks built our entire school management system from scratch. What used to take our staff 4 hours daily now takes 20 minutes. The WhatsApp notification system alone has transformed parent communication across our 3 campuses.",
    name: "School Administrator",
    role: "Unity School Group, Karnataka",
    initial: "S",
  },
  {
    stars: "★★★★★",
    quote:
      "Our textile shop was running on handwritten receipts. Koworks built us a barcode inventory system, GST billing, and a POS that works even without internet. The staff leaderboard feature is a brilliant touch — our team loves it.",
    name: "Proprietor",
    role: "HABIBS Cloths, Mysore",
    initial: "H",
  },
  {
    stars: "★★★★★",
    quote:
      "Working with Koworks felt like having a senior engineering team in-house. They pushed back on bad ideas, suggested better approaches, and delivered a product that actually performs. Our Lighthouse score went from 28 to 94.",
    name: "Website Owner",
    role: "Mysore District Homestay Association",
    initial: "M",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "React / Next.js expertise",
    koworks: true,
    freelancer: "maybe",
    agency: true,
  },
  {
    feature: "Fixed-price contracts",
    koworks: true,
    freelancer: "rare",
    agency: "rare",
  },
  {
    feature: "Core Web Vitals by default",
    koworks: true,
    freelancer: false,
    agency: "sometimes",
  },
  {
    feature: "JSON-LD schema markup",
    koworks: true,
    freelancer: false,
    agency: "paid extra",
  },
  {
    feature: "Post-launch support included",
    koworks: "3 months",
    freelancer: false,
    agency: "paid",
  },
  {
    feature: "GST-compliant invoicing",
    koworks: true,
    freelancer: "varies",
    agency: true,
  },
  {
    feature: "Dedicated communication",
    koworks: true,
    freelancer: true,
    agency: "account mgr",
  },
  {
    feature: "Source code ownership",
    koworks: true,
    freelancer: "usually",
    agency: "contract-dependent",
  },
  {
    feature: "Starting price",
    koworks: "₹15,000",
    freelancer: "₹5,000–30,000",
    agency: "₹50,000+",
  },
  {
    feature: "Delivery timeline (business site)",
    koworks: "2–4 weeks",
    freelancer: "3–8 weeks",
    agency: "4–12 weeks",
  },
];

const PRICING = [
  {
    tier: "Starter",
    name: "Business Website",
    price: "₹15,000",
    note: "onwards — fixed price",
    features: [
      "5–8 responsive pages",
      "Mobile-first design",
      "Contact form + Google Maps",
      "Google Analytics 4",
      "Basic SEO (meta, sitemap)",
      "3 months bug-fix support",
      "SSL + deployment included",
    ],
    cta: "Get a Quote",
    ctaStyle: "ghost",
    featured: false,
  },
  {
    tier: "Growth",
    name: "Web Application",
    price: "₹60,000",
    note: "onwards — milestone payments",
    features: [
      "React / Next.js frontend",
      "Node.js API backend",
      "MongoDB / PostgreSQL DB",
      "Authentication (JWT/OAuth)",
      "Admin dashboard",
      "Full JSON-LD schema + SEO",
      "Docker deployment",
      "3 months bug-fix support",
    ],
    cta: "Start Your Project",
    ctaStyle: "primary",
    featured: true,
  },
  {
    tier: "Scale",
    name: "SaaS Platform",
    price: "₹80,000",
    note: "onwards — custom scoped",
    features: [
      "Multi-tenant architecture",
      "Subscription billing (Razorpay)",
      "Role-based access control",
      "Analytics & dashboards",
      "AWS / GCP deployment",
      "CI/CD pipeline",
      "API documentation",
      "6 months support",
    ],
    cta: "Discuss Requirements",
    ctaStyle: "ghost",
    featured: false,
  },
];

/* ─────────────────────────────────────────────────────────────
   SMALL REUSABLE BITS
───────────────────────────────────────────────────────────── */
const SectionLabel = ({ text, light = false }) => (
  <div
    className={`inline-flex items-center gap-[7px] rounded-full border py-1 pl-2 pr-3 mb-4 ${
      light
        ? "bg-[rgba(240,78,26,0.15)] border-[rgba(240,78,26,0.3)]"
        : "bg-[rgba(240,78,26,0.07)] border-[rgba(240,78,26,0.18)]"
    }`}
  >
    <div className="w-1.5 h-1.5 rounded-full bg-[#F04E1A]" />
    <span className="text-[11px] font-semibold text-[#F04E1A] tracking-[0.07em] uppercase">
      {text}
    </span>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────── */}
      <SEOHead
        seo={seo}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Web Development", url: "/services/web-development" },
        ]}
      />

      {/* ── JSON-LD SCHEMAS ───────────────────────────────── */}
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Development", url: "/services/web-development" },
          ]),
          serviceSchema({
            name: "Web Development Services — React, Next.js & MERN Stack",
            description: seo.description,
            url: "/services/web-development",
            serviceType: "Web Development",
          }),
          faqSchema(seo.faqs),
          localBusinessSchema(),
        ]}
      />

      <div className={`${fontBody} text-[#0e0e0c] bg-white leading-[1.65]`}>
        <style>{css}</style>

        {/* ── BREADCRUMB ────────────────────────────────────── */}
        <div
          className="max-w-[1200px] mx-auto px-10 md:px-6 pt-5 text-[13px] text-[#888] [&_a]:text-[#888] [&_a]:no-underline [&_a:hover]:text-[#F04E1A]"
          aria-label="Breadcrumb navigation"
        >
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "Web Development", to: "/services/web-development" },
            ]}
          />
        </div>

        {/* ════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Web development company in Mysore — hero"
          className="relative overflow-hidden bg-gradient-to-br from-[#0e0e0c] via-[#1a1a18] to-[#2a1a0e] text-white px-10 md:px-6 pt-24 pb-20 md:pt-20 md:pb-16"
        >
          {/* decorative glow (was ::before) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[120px] -right-20 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(240,78,26,0.18)_0%,transparent_70%)]"
          />

          <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(240,78,26,0.3)] bg-[rgba(240,78,26,0.12)] py-[5px] pl-2 pr-3.5 mb-5">
                <div className="w-[7px] h-[7px] rounded-full bg-[#F04E1A] animate-[wd-pulse_2s_ease-in-out_infinite]" />
                <span className="text-[11px] font-semibold text-[#F04E1A] tracking-[0.1em] uppercase">
                  Web Development Company — Mysore, India
                </span>
              </div>

              {/* H1 — primary keyword + value proposition */}
              <h1
                className={`${fontDisplay} text-[clamp(36px,4.5vw,58px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5 text-white`}
              >
                The{" "}
                <span className="text-[#F04E1A] italic">
                  Web Development
                </span>{" "}
                Company Mysore Businesses Trust
              </h1>

              <p className="text-[17px] leading-[1.7] text-white/75 mb-9 max-w-[560px]">
                Koworks builds fast, scalable, and SEO-optimised websites and
                web applications using React, Next.js, and the MERN stack.
                Trusted by 10+ businesses across Karnataka and India — from a
                school managing 3 campuses to a textile shop processing
                thousands of daily transactions.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#F04E1A] text-white px-7 py-3.5 text-[15px] font-semibold no-underline shadow-[0_4px_20px_rgba(240,78,26,0.35)] transition-all duration-200 hover:bg-[#d43d0f] hover:-translate-y-0.5"
                  aria-label="Get a free web development quote from Koworks"
                >
                  Get a Free Quote →
                </Link>
                <Link
                  to="/works"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] border border-white/20 text-white px-7 py-3.5 text-[15px] font-medium no-underline transition-all duration-200 hover:bg-white/[0.15]"
                  aria-label="View Koworks web development portfolio"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Stats card — proof at first glance */}
            <div
              className="hidden md:grid grid-cols-2 gap-6 rounded-[20px] border border-white/[0.12] bg-white/[0.06] p-8 backdrop-blur-md"
              aria-label="Koworks key statistics"
            >
              <div className="text-center">
                <div className={`${fontDisplay} text-4xl font-extrabold text-[#F04E1A] leading-none mb-1.5`}>
                  10+
                </div>
                <div className="text-xs text-white/55 uppercase tracking-[0.06em] font-medium">
                  Live Projects Shipped
                </div>
              </div>
              <div className="text-center">
                <div className={`${fontDisplay} text-4xl font-extrabold text-[#F04E1A] leading-none mb-1.5`}>
                  4.9★
                </div>
                <div className="text-xs text-white/55 uppercase tracking-[0.06em] font-medium">
                  Client Rating
                </div>
              </div>
              <div className="text-center">
                <div className={`${fontDisplay} text-4xl font-extrabold text-[#F04E1A] leading-none mb-1.5`}>
                  94
                </div>
                <div className="text-xs text-white/55 uppercase tracking-[0.06em] font-medium">
                  Avg Lighthouse Score
                </div>
              </div>
              <div className="text-center">
                <div className={`${fontDisplay} text-4xl font-extrabold text-[#F04E1A] leading-none mb-1.5`}>
                  &lt;2s
                </div>
                <div className="text-xs text-white/55 uppercase tracking-[0.06em] font-medium">
                  Target Load Time
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────── */}
        <div
          className="bg-[#fafaf8] border-b border-[#ebebeb] px-10 md:px-6 py-5 md:py-4"
          aria-label="Technologies Koworks specialises in"
        >
          <div className="max-w-[1200px] mx-auto flex items-center gap-10 flex-wrap">
            <span className="text-xs font-semibold text-[#aaa] tracking-[0.08em] uppercase whitespace-nowrap">
              Our stack:
            </span>
            <div className="flex gap-3 flex-wrap">
              {[
                "React 18",
                "Next.js 14",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "TailwindCSS",
                "Docker",
                "AWS",
                "Vercel",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-[13px] font-medium text-[#555]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04E1A]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            SECTION 2 — WHY KOWORKS (EEAT: Experience + Trust)
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Why choose Koworks web development company"
          className="max-w-[1200px] mx-auto px-10 md:px-6 py-20 md:py-16"
        >
          <SectionLabel text="Why Koworks" />
          <h2
            className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
          >
            Not just code. <span className="text-[#F04E1A] italic">Craft.</span>
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
            Mysore has no shortage of web developers. What it lacks is a
            company that combines deep technical expertise with real shipping
            discipline — projects that are built correctly the first time,
            optimised for search engines, and supported after launch. That's
            Koworks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {WHY_POINTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#ebebeb] rounded-2xl p-7 transition-colors duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_20px_rgba(240,78,26,0.08)]"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-[rgba(240,78,26,0.08)] flex items-center justify-center mb-4 text-xl"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <div className="text-base font-bold text-[#0e0e0c] mb-2 tracking-[-0.01em]">
                  {title}
                </div>
                <p className="text-sm text-[#666] leading-[1.65] m-0">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[rgba(240,78,26,0.05)] border border-[rgba(240,78,26,0.2)] border-l-4 border-l-[#F04E1A] rounded-xl px-6 py-5 mt-8 text-[15px] text-[#333] leading-[1.65]">
            <strong className="text-[#F04E1A]">Our founding principle:</strong>{" "}
            Every website Koworks builds ships with Core Web Vitals, semantic
            HTML, structured data, and mobile-first design as standard — not
            optional extras. Because a slow, inaccessible website doesn't
            serve your business, regardless of how good it looks.
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 3 — SERVICES (H2 + H3 hierarchy)
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Web development services offered by Koworks"
          className="bg-[#fafaf8] border-y border-[#ebebeb] px-10 md:px-6 py-20 md:py-16"
        >
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel text="Services" />
            <h2
              className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
            >
              Web Development Services We Offer
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
              We don't offer everything to everyone. We've chosen to go very
              deep on a specific set of modern web technologies — the ones
              that consistently produce the fastest, most maintainable, and
              most SEO-friendly results for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map(({ badge, title, desc, tags, link }) => (
                <article
                  key={title}
                  className="relative overflow-hidden bg-white border border-[#ebebeb] rounded-[20px] p-8 transition-all duration-250 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-[#F04E1A] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200"
                >
                  <span className="inline-block bg-[rgba(240,78,26,0.08)] text-[#F04E1A] text-[11px] font-semibold tracking-[0.07em] uppercase px-2.5 py-1 rounded-full mb-4">
                    {badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#0e0e0c] tracking-[-0.02em] mb-3">
                    {title}
                  </h3>
                  <p className="text-[14.5px] text-[#555] leading-[1.7] mb-4">
                    {desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#f5f5f3] text-[#444] text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link
                      to={link}
                      className="text-[13px] font-semibold text-[#F04E1A] no-underline"
                      aria-label={`Learn more about ${title} at Koworks`}
                    >
                      Learn more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 4 — DEVELOPMENT PROCESS
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Koworks web development process"
          className="max-w-[1200px] mx-auto px-10 md:px-6 py-20 md:py-16"
        >
          <SectionLabel text="Our Process" />
          <h2
            className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
          >
            How We Build Your <span className="text-[#F04E1A] italic">Website</span>
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
            Every project follows the same rigorous process — from the first
            conversation to post-launch monitoring. There are no surprises, no
            missed deadlines without communication, and no vanishing acts
            after we receive payment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#ebebeb] rounded-[20px] overflow-hidden">
            {PROCESS_STEPS.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`bg-white p-8 border-b border-[#ebebeb] transition-colors duration-200 hover:bg-[#fafaf8] md:border-r md:border-[#ebebeb] ${
                  i % 2 === 1 ? "md:border-r-0" : ""
                } ${i >= PROCESS_STEPS.length - 2 ? "md:border-b-0" : ""} ${
                  i === PROCESS_STEPS.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div
                  className={`${fontDisplay} text-[44px] font-extrabold text-[rgba(240,78,26,0.12)] leading-none mb-3`}
                  aria-hidden="true"
                >
                  {num}
                </div>
                <h3 className="text-[17px] font-bold text-[#0e0e0c] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[#666] leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 5 — TECHNOLOGIES WE USE
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Technologies and tools Koworks uses for web development"
          className="bg-[#fafaf8] border-y border-[#ebebeb] px-10 md:px-6 py-20 md:py-16"
        >
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel text="Tech Stack" />
            <h2
              className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
            >
              Technologies We Use
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
              We pick tools based on what produces the best outcomes — not
              what's trending on Twitter. Our stack is opinionated,
              battle-tested across real production projects, and chosen to
              minimise technical debt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {TECH_GROUPS.map(({ label, items }) => (
                <div
                  key={label}
                  className="bg-white border border-[#ebebeb] rounded-2xl p-6"
                >
                  <div className="text-xs font-bold text-[#F04E1A] uppercase tracking-[0.08em] mb-3.5">
                    {label}
                  </div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#333] font-medium before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#F04E1A] before:flex-shrink-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 6 — CASE STUDIES (EEAT: Experience)
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Koworks web development case studies"
          className="max-w-[1200px] mx-auto px-10 md:px-6 py-20 md:py-16"
        >
          <SectionLabel text="Case Studies" />
          <h2
            className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
          >
            Real Projects. <span className="text-[#F04E1A] italic">Real Results.</span>
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
            We don't do mockups or hypotheticals. Every claim below is from a
            live, production system running in Karnataka today.
          </p>
          {CASE_STUDIES.map(
            ({ label, name, tagline, client, duration, stack, slug, metrics }) => (
              <article
                key={name}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white border border-[#ebebeb] rounded-3xl p-10 mb-6"
                aria-label={`Case study: ${name}`}
              >
                <div>
                  <div className="text-[11px] font-semibold text-[#F04E1A] uppercase tracking-[0.08em] mb-2.5">
                    {label}
                  </div>
                  <h3
                    className={`${fontDisplay} text-[26px] font-extrabold text-[#0e0e0c] mb-2 tracking-[-0.02em]`}
                  >
                    {name}
                  </h3>
                  <p className="text-[15px] text-[#666] leading-[1.6] mb-5">
                    {tagline}
                  </p>
                  <div className="flex gap-5 flex-wrap mb-5">
                    <span className="text-[13px] text-[#888]">
                      <strong className="text-[#333] font-semibold">Client:</strong>{" "}
                      {client}
                    </span>
                    <span className="text-[13px] text-[#888]">
                      <strong className="text-[#333] font-semibold">Duration:</strong>{" "}
                      {duration}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {stack.map((t) => (
                      <span
                        key={t}
                        className="bg-[#f5f5f3] text-[#444] text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link
                      to={`/works/${slug}`}
                      className="text-sm font-semibold text-[#F04E1A] no-underline"
                      aria-label={`Read full case study: ${name}`}
                    >
                      Read full case study →
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F04E1A] uppercase tracking-[0.07em] mb-2">
                    Results Delivered
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map(({ num, label: ml }) => (
                      <div
                        key={ml}
                        className="bg-[#fafaf8] border border-[#ebebeb] rounded-2xl p-5"
                      >
                        <div
                          className={`${fontDisplay} text-[30px] font-extrabold text-[#F04E1A] leading-none mb-1`}
                        >
                          {num}
                        </div>
                        <div className="text-xs text-[#888] uppercase tracking-[0.06em] font-medium">
                          {ml}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ),
          )}
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 7 — INDUSTRIES WE SERVE (dark bg)
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Industries Koworks serves with web development"
          className="bg-[#0e0e0c] text-white px-10 md:px-6 py-20 md:py-16"
        >
          <div className="max-w-[1200px] mx-auto text-white">
            <SectionLabel text="Industries" light />
            <h2
              className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white mb-4`}
            >
              Industries We <span className="text-[#F04E1A] italic">Serve</span>
            </h2>
            <p className="text-[17px] text-white/65 leading-[1.75] max-w-[680px] mb-12">
              Domain expertise matters. A gym management system needs
              different logic than a school ERP. We've shipped production
              software across these verticals — which means your project
              benefits from real industry patterns, not generic solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {INDUSTRIES.map(({ icon, name, desc }) => (
                <div
                  key={name}
                  className="bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-6 text-center transition-all duration-200 hover:bg-[rgba(240,78,26,0.08)] hover:border-[rgba(240,78,26,0.25)] hover:-translate-y-0.5"
                >
                  <div className="text-[28px] mb-2.5" aria-hidden="true">
                    {icon}
                  </div>
                  <div className="text-sm font-semibold text-white">{name}</div>
                  <div className="text-xs text-white/50 mt-1 leading-[1.5]">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 8 — COMPARISON TABLE
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Compare Koworks with freelancers and large agencies"
          className="bg-[#fafaf8] border-y border-[#ebebeb] px-10 md:px-6 py-20 md:py-16"
        >
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel text="How We Compare" />
            <h2
              className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
            >
              Koworks vs Freelancer vs{" "}
              <span className="text-[#F04E1A] italic">Large Agency</span>
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
              Choosing a web development partner is a significant decision.
              Here's an honest comparison to help you decide whether Koworks
              is the right fit for your project.
            </p>
            <div className="overflow-x-auto border border-[#ebebeb] rounded-2xl">
              <table className="w-full border-collapse text-sm">
                <caption className="caption-bottom text-xs text-[#888] py-3 text-left">
                  Comparison based on Koworks' standard contracts and typical
                  market rates in India as of 2025.
                </caption>
                <thead>
                  <tr>
                    <th className="bg-[#0e0e0c] text-white px-5 py-4 text-left font-semibold text-[13px] tracking-[0.02em] rounded-tl-[14px]">
                      Feature / Criteria
                    </th>
                    <th className="bg-[#F04E1A] text-white px-5 py-4 text-left font-semibold text-[13px] tracking-[0.02em]">
                      Koworks ✓
                    </th>
                    <th className="bg-[#0e0e0c] text-white px-5 py-4 text-left font-semibold text-[13px] tracking-[0.02em]">
                      Freelancer
                    </th>
                    <th className="bg-[#0e0e0c] text-white px-5 py-4 text-left font-semibold text-[13px] tracking-[0.02em] rounded-tr-[14px]">
                      Large Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(
                    ({ feature, koworks, freelancer, agency }) => (
                      <tr key={feature} className="hover:[&>td]:bg-[#fafaf8]">
                        <td className="px-5 py-3.5 border-t border-[#ebebeb] align-top leading-[1.5] font-medium text-[#333]">
                          {feature}
                        </td>
                        <td className="px-5 py-3.5 border-t border-[#ebebeb] align-top leading-[1.5] bg-[rgba(240,78,26,0.04)]">
                          {koworks === true ? (
                            <span className="text-green-500 font-bold">✓ Yes</span>
                          ) : koworks === false ? (
                            <span className="text-red-500">✗ No</span>
                          ) : (
                            koworks
                          )}
                        </td>
                        <td className="px-5 py-3.5 border-t border-[#ebebeb] align-top leading-[1.5] text-[#444]">
                          {freelancer === true ? (
                            <span className="text-green-500 font-bold">✓ Yes</span>
                          ) : freelancer === false ? (
                            <span className="text-red-500">✗ No</span>
                          ) : (
                            <span className="text-[#aaa]">{freelancer}</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 border-t border-[#ebebeb] align-top leading-[1.5] text-[#444]">
                          {agency === true ? (
                            <span className="text-green-500 font-bold">✓ Yes</span>
                          ) : agency === false ? (
                            <span className="text-red-500">✗ No</span>
                          ) : (
                            <span className="text-[#aaa]">{agency}</span>
                          )}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 9 — TESTIMONIALS (EEAT: Trustworthiness)
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Client testimonials for Koworks web development"
          className="max-w-[1200px] mx-auto px-10 md:px-6 py-20 md:py-16"
        >
          <SectionLabel text="Testimonials" />
          <h2
            className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
          >
            What Our Clients <span className="text-[#F04E1A] italic">Say</span>
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
            We let results do the talking. But occasionally our clients are
            kind enough to do it for us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ stars, quote, name, role, initial }) => (
              <figure
                key={name}
                className="bg-white border border-[#ebebeb] rounded-[20px] p-7 relative"
              >
                <div className="text-[#F04E1A] text-base mb-3.5" aria-label="5 star rating">
                  {stars}
                </div>
                <blockquote className="text-[14.5px] text-[#333] leading-[1.7] mb-5 italic">
                  "{quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F04E1A] to-[#cc3a0f] flex items-center justify-center text-base font-bold text-white flex-shrink-0"
                    aria-hidden="true"
                  >
                    {initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0e0e0c]">
                      {name}
                    </div>
                    <div className="text-xs text-[#888]">{role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 10 — PRICING
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Web development pricing at Koworks"
          className="bg-[#fafaf8] border-y border-[#ebebeb] px-10 md:px-6 py-20 md:py-16"
        >
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel text="Pricing" />
            <h2
              className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
            >
              Transparent <span className="text-[#F04E1A] italic">Pricing</span>
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
              No hidden fees. No surprise invoices. Every project starts with
              a written proposal and a fixed price that doesn't change unless
              you change the scope — and even then, we discuss it before
              proceeding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICING.map(
                ({ tier, name, price, note, features, cta, ctaStyle, featured }) => (
                  <div
                    key={name}
                    className={`relative rounded-[20px] p-8 border transition-all duration-200 ${
                      featured
                        ? "bg-[#0e0e0c] border-[#F04E1A] shadow-[0_8px_40px_rgba(240,78,26,0.2)]"
                        : "bg-white border-[#ebebeb] hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                    }`}
                  >
                    {featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F04E1A] text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-[0.06em] uppercase whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <div className="text-xs font-semibold text-[#F04E1A] uppercase tracking-[0.07em] mb-2">
                      {tier}
                    </div>
                    <div
                      className={`text-[22px] font-extrabold mb-1.5 ${
                        featured ? "text-white" : "text-[#0e0e0c]"
                      }`}
                    >
                      {name}
                    </div>
                    <div
                      className={`${fontDisplay} text-[38px] font-extrabold text-[#F04E1A] leading-none mt-4 mb-1`}
                    >
                      {price}
                    </div>
                    <div
                      className={`text-[13px] mb-5 ${
                        featured ? "text-white/40" : "text-[#888]"
                      }`}
                    >
                      {note}
                    </div>
                    <ul
                      className="list-none p-0 m-0 mb-6 flex flex-col gap-2.5"
                      aria-label={`Features included in ${name} package`}
                    >
                      {features.map((f) => (
                        <li
                          key={f}
                          className={`flex items-start gap-2 text-sm leading-[1.5] ${
                            featured ? "text-white/75" : "text-[#444]"
                          }`}
                        >
                          <span
                            className="text-green-500 font-bold flex-shrink-0 mt-px"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block text-center rounded-full px-6 py-3 text-sm font-semibold no-underline transition-all duration-200 ${
                        ctaStyle === "ghost"
                          ? "bg-transparent border border-[#ebebeb] text-[#333] hover:border-[#F04E1A] hover:text-[#F04E1A]"
                          : "bg-[#F04E1A] text-white hover:bg-[#d43d0f]"
                      }`}
                      aria-label={`${cta} for ${name} web development`}
                    >
                      {cta}
                    </Link>
                  </div>
                ),
              )}
            </div>
            <div className="bg-[rgba(240,78,26,0.05)] border border-[rgba(240,78,26,0.2)] border-l-4 border-l-[#F04E1A] rounded-xl px-6 py-5 mt-10 text-[15px] text-[#333] leading-[1.65]">
              <strong className="text-[#F04E1A]">Not sure which package fits?</strong>{" "}
              Most projects are somewhere between Starter and Growth. Send us
              a brief description of what you need and we'll scope it
              accurately within 24 hours — no obligation, no sales pressure.
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 11 — FAQ (People Also Ask targeting)
        ════════════════════════════════════════════════════ */}
        <section aria-label="Frequently asked questions about web development in Mysore and India">
          <FAQSection
            faqs={seo.faqs}
            title="Web Development FAQs — Everything You Need to Know"
          />
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 12 — INTERNAL LINKS / RELATED SERVICES
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Related Koworks services"
          className="max-w-[1200px] mx-auto px-10 md:px-6 py-20 md:py-16"
        >
          <SectionLabel text="Also Explore" />
          <h2
            className={`${fontDisplay} text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0e0e0c] mb-4`}
          >
            Related Services
          </h2>
          <p className="text-[17px] text-[#555] leading-[1.75] max-w-[680px] mb-12">
            Web development is often just the start. Many of our clients
            combine multiple services for a complete digital presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/services/software-development"
              className="block border border-[#ebebeb] rounded-2xl p-5 no-underline transition-all duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_16px_rgba(240,78,26,0.07)]"
              aria-label="Custom software development — Koworks"
            >
              <span className="block text-lg text-[#F04E1A] mb-2.5" aria-hidden="true">
                ⚙️
              </span>
              <div className="text-[15px] font-bold text-[#0e0e0c] mb-1.5">
                Custom Software Development
              </div>
              <p className="text-[13px] text-[#888] leading-[1.5] m-0">
                ERP systems, SaaS platforms, and business tools built from
                scratch for your specific workflow.
              </p>
            </Link>
            <Link
              to="/services/ui-ux-design"
              className="block border border-[#ebebeb] rounded-2xl p-5 no-underline transition-all duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_16px_rgba(240,78,26,0.07)]"
              aria-label="UI/UX Design — Koworks"
            >
              <span className="block text-lg text-[#F04E1A] mb-2.5" aria-hidden="true">
                🎨
              </span>
              <div className="text-[15px] font-bold text-[#0e0e0c] mb-1.5">
                UI/UX Design
              </div>
              <p className="text-[13px] text-[#888] leading-[1.5] m-0">
                Figma wireframes, prototypes, and design systems that make
                your web app intuitive and conversion-ready.
              </p>
            </Link>
            <Link
              to="/services/seo"
              className="block border border-[#ebebeb] rounded-2xl p-5 no-underline transition-all duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_16px_rgba(240,78,26,0.07)]"
              aria-label="SEO Services — Koworks"
            >
              <span className="block text-lg text-[#F04E1A] mb-2.5" aria-hidden="true">
                📈
              </span>
              <div className="text-[15px] font-bold text-[#0e0e0c] mb-1.5">
                SEO Services
              </div>
              <p className="text-[13px] text-[#888] leading-[1.5] m-0">
                Technical SEO, local SEO, and content strategy to get your new
                website ranking on Google in Mysore and beyond.
              </p>
            </Link>
            <Link
              to="/services/saas-development"
              className="block border border-[#ebebeb] rounded-2xl p-5 no-underline transition-all duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_16px_rgba(240,78,26,0.07)]"
              aria-label="SaaS Development — Koworks"
            >
              <span className="block text-lg text-[#F04E1A] mb-2.5" aria-hidden="true">
                ☁️
              </span>
              <div className="text-[15px] font-bold text-[#0e0e0c] mb-1.5">
                SaaS Product Development
              </div>
              <p className="text-[13px] text-[#888] leading-[1.5] m-0">
                End-to-end SaaS engineering with multi-tenant architecture,
                subscription billing, and cloud deployment.
              </p>
            </Link>
            <Link
              to="/services/ecommerce"
              className="block border border-[#ebebeb] rounded-2xl p-5 no-underline transition-all duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_16px_rgba(240,78,26,0.07)]"
              aria-label="E-Commerce Development — Koworks"
            >
              <span className="block text-lg text-[#F04E1A] mb-2.5" aria-hidden="true">
                🛒
              </span>
              <div className="text-[15px] font-bold text-[#0e0e0c] mb-1.5">
                E-Commerce Development
              </div>
              <p className="text-[13px] text-[#888] leading-[1.5] m-0">
                GST-compliant online stores with Razorpay integration,
                inventory management, and conversion-optimised checkout.
              </p>
            </Link>
            <Link
              to="/services/ai-solutions"
              className="block border border-[#ebebeb] rounded-2xl p-5 no-underline transition-all duration-200 hover:border-[rgba(240,78,26,0.3)] hover:shadow-[0_4px_16px_rgba(240,78,26,0.07)]"
              aria-label="AI Solutions — Koworks"
            >
              <span className="block text-lg text-[#F04E1A] mb-2.5" aria-hidden="true">
                🤖
              </span>
              <div className="text-[15px] font-bold text-[#0e0e0c] mb-1.5">
                AI & Automation
              </div>
              <p className="text-[13px] text-[#888] leading-[1.5] m-0">
                GPT-powered chatbots, document processing, and workflow
                automation integrated directly into your web platform.
              </p>
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 13 — FINAL CTA (conversion-focused)
        ════════════════════════════════════════════════════ */}
        <section
          aria-label="Contact Koworks — web development company in Mysore"
          className="relative overflow-hidden bg-gradient-to-br from-[#0e0e0c] to-[#2a1a0e] px-10 md:px-6 py-24 md:py-[72px] text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(240,78,26,0.15)_0%,transparent_70%)]"
          />
          <div className="relative max-w-[700px] mx-auto">
            <div className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(240,78,26,0.3)] bg-[rgba(240,78,26,0.15)] py-1 pl-2 pr-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F04E1A]" />
              <span className="text-[11px] font-semibold text-[#F04E1A] tracking-[0.07em] uppercase">
                Free Consultation
              </span>
            </div>
            <h2
              className={`${fontDisplay} text-[clamp(32px,4vw,52px)] font-extrabold text-white tracking-[-0.03em] mb-4 leading-[1.1]`}
            >
              Ready to Build Something{" "}
              <span className="text-[#F04E1A] italic">That Actually Works?</span>
            </h2>
            <p className="text-[17px] text-white/65 leading-[1.7] mb-10">
              Tell us what you're building. We'll assess your requirements,
              recommend the right approach, and send you a detailed proposal
              with a fixed price — within 24 hours. No obligation. No sales
              pressure. Just a straight conversation.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#F04E1A] text-white px-7 py-3.5 text-[15px] font-semibold no-underline shadow-[0_4px_20px_rgba(240,78,26,0.35)] transition-all duration-200 hover:bg-[#d43d0f] hover:-translate-y-0.5"
                aria-label="Request a free web development consultation from Koworks Mysore"
              >
                Request Free Consultation →
              </Link>
              <Link
                to="/works"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] border border-white/20 text-white px-7 py-3.5 text-[15px] font-medium no-underline transition-all duration-200 hover:bg-white/[0.15]"
                aria-label="View Koworks portfolio of completed web projects"
              >
                View Our Portfolio
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-white/40">
              Based in Mysore, Karnataka · Serving clients across India ·
              Reply within 24 hours
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}