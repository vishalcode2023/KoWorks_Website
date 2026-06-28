// ============================================================
// KOWORKS — PROJECT DATA (with before/after + SEO)
// ============================================================

export const projects = [
  {
    slug: "unity-school-portal",
    featured: true,
    own: true,
    status: "live",
    type: "School Management ERP",
    category: "Software",
    name: "Unity School Portal",
    tagline: "From paper chaos to a living, breathing digital school",
    desc: "Full-scale school ERP deployed across multiple institutions — admissions, attendance, fees, exams, timetables, staff payroll, and parent WhatsApp notifications.",
    img: "/unitydesktop.png",
    imgMobile: "/unitymob.png",
    tags: ["Node.js", "React", "MongoDB", "WhatsApp API"],
    accent: "#2563eb",
    year: "2023",
    duration: "6 months",
    client: "Multi-school institution group",

    before: {
      headline: "A school drowning in registers and manual work",
      points: [
        "Attendance tracked in physical registers — prone to errors and impossible to audit",
        "Fee collection done by hand; receipts printed on generic forms with no digital record",
        "Exam marks entered in Excel sheets, emailed between teachers with zero version control",
        "Parents received updates only via physical notices or word-of-mouth",
        "Staff payroll calculated on spreadsheets, error-prone and time-consuming",
        "No visibility across branches — each school operated in isolation",
      ],
      pain: "The admin team spent 4+ hours every single day just on paperwork that could have taken minutes.",
    },

    after: {
      headline: "One portal runs the entire school — from admissions to results",
      points: [
        "Attendance marked digitally in seconds; instant absentee WhatsApp alerts sent to parents",
        "Fee tracking with automatic reminders, receipts, and defaulter reports at a click",
        "Exam marks entered once, result cards auto-generated for every student",
        "Parents get real-time updates via WhatsApp — fees, marks, notices, and events",
        "Payroll processed in minutes with salary slips emailed automatically",
        "Admin dashboard consolidates all branches into one live view",
      ],
      impact: [
        { metric: "4 hrs → 20 min", label: "Daily admin time saved" },
        { metric: "100%", label: "Parent communication automated" },
        { metric: "Zero", label: "Data entry errors in fees" },
        { metric: "3 schools", label: "Running on same portal" },
      ],
    },

    seo: {
      title: "Unity School Portal — School ERP Case Study | Koworks",
      description:
        "How Koworks built a full-scale school management ERP with attendance, fees, exams, payroll, and WhatsApp notifications — replacing manual registers across multiple institutions.",
      keywords: [
        "school ERP software India",
        "school management system case study",
        "WhatsApp school notification system",
        "attendance management software",
        "fee management software school",
        "Koworks school portal",
      ],
      canonical: "https://koworks.in/works/unity-school-portal",
    },
  },

  {
    slug: "habbis-inventory",
    featured: true,
    own: true,
    status: "live",
    type: "Inventory & POS System",
    category: "Software",
    name: "Habbis Stock & POS",
    tagline: "From guesswork stock to real-time, barcode-powered inventory",
    desc: "Real-time garment inventory with EAN-13 barcodes, purchase orders, GST-ready POS, thermal receipt printing, and Tally-compatible exports.",
    img: "/habib.png",
    tags: ["Node.js", "React", "GST", "Barcodes"],
    accent: "#F04E1A",
    year: "2023",
    duration: "4 months",
    client: "Garment & textile retailer",

    before: {
      headline: "A garment store managing ₹50L+ stock with notebooks and memory",
      points: [
        "Stock levels tracked in physical ledgers — staff didn't know what was in the back room",
        "Purchase orders placed verbally to suppliers with no written trail",
        "Billing done on a calculator with hand-written receipts",
        "No barcode system — products identified by memory and description alone",
        "GST returns required a painful manual reconciliation every quarter",
        "Returns and exchanges caused constant inventory discrepancies",
      ],
      pain: "Shrinkage and miscounts were eating into margins. Nobody knew the real stock value at any given moment.",
    },

    after: {
      headline: "Every garment tagged, scanned, billed, and accounted for",
      points: [
        "EAN-13 barcodes generated and printed for every SKU at the time of purchase",
        "POS billing via barcode scan — full bill generated in under 30 seconds",
        "GST-compliant invoices with automatic HSN code mapping",
        "Live stock dashboard — current inventory value visible at any time",
        "Purchase orders raised digitally, auto-updating stock on delivery",
        "Tally-compatible CSV exports for accountant handoff",
      ],
      impact: [
        { metric: "30 sec", label: "Average billing time" },
        { metric: "₹0", label: "Shrinkage due to miscounting" },
        { metric: "100%", label: "GST compliance, automated" },
        { metric: "Real-time", label: "Stock value visibility" },
      ],
    },

    seo: {
      title: "Habbis Inventory & POS — Garment Stock Management Case Study | Koworks",
      description:
        "How Koworks built a barcode-powered inventory and GST billing system for a garment retailer — replacing notebooks with real-time stock visibility and thermal POS billing.",
      keywords: [
        "garment inventory software case study",
        "barcode inventory system India",
        "GST billing software textile",
        "POS system garment store",
        "inventory management software India",
        "Koworks inventory case study",
      ],
      canonical: "https://koworks.in/works/habbis-inventory",
    },
  },

  {
    slug: "envirosafetyglass",
    featured: false,
    own: false,
    status: "live",
    type: "B2B Business Website",
    category: "Website",
    name: "Envirosafetyglass",
    tagline: "From a brochure PDF to a lead-generating digital presence",
    desc: "B2B website with product catalogue, inquiry system, and SEO-optimised pages for a safety glass manufacturer.",
    img: "/envirosafety.png",
    imgAlt: "/enviro.png",
    tags: ["React", "SEO", "UI/UX"],
    accent: "#16a34a",
    year: "2024",
    duration: "3 weeks",
    client: "Safety glass manufacturer",

    before: {
      headline: "A manufacturer with no digital presence — invisible to buyers searching online",
      points: [
        "No website — the only digital presence was a PDF product brochure shared over WhatsApp",
        "Buyers couldn't verify the company existed, leading to lost trust in B2B deals",
        "Product range not organised — clients had to call to ask what was available",
        "No inquiry form — all leads had to come through phone calls or referrals",
        "Zero search engine visibility — not ranking for any relevant keywords",
        "Competitor websites looked professional while this client had nothing to show",
      ],
      pain: "The sales team was spending hours answering basic product questions that a website should answer automatically.",
    },

    after: {
      headline: "A professional B2B site that works as the hardest-working salesperson",
      points: [
        "Clean, professional website with full product catalogue — browse without calling",
        "Inquiry forms on every product page — leads captured 24/7",
        "SEO-optimised pages ranking for safety glass product keywords",
        "Trust signals: certifications, client logos, and use-case photography",
        "Mobile-first design — buyers researching on phones get a great experience",
        "WhatsApp click-to-chat integration for instant buyer contact",
      ],
      impact: [
        { metric: "3×", label: "Increase in inbound inquiries" },
        { metric: "Top 5", label: "Google ranking for key terms" },
        { metric: "24/7", label: "Lead capture without staff" },
        { metric: "3 weeks", label: "From brief to live" },
      ],
    },

    seo: {
      title: "Envirosafetyglass — B2B Website Case Study | Koworks",
      description:
        "How Koworks built a lead-generating B2B website for a safety glass manufacturer — product catalogue, inquiry system, and SEO to rank and convert buyers.",
      keywords: [
        "B2B website development case study",
        "manufacturer website design India",
        "SEO website for industrial company",
        "product catalogue website India",
        "Koworks website case study",
        "lead generation website India",
      ],
      canonical: "https://koworks.in/works/envirosafetyglass",
    },
  },

  {
    slug: "insurance-management",
    featured: false,
    own: false,
    status: "live",
    type: "Insurance Management Software",
    category: "Software",
    name: "Insurance Management System",
    tagline: "From scattered spreadsheets to a unified policy and claims platform",
    desc: "Policy management, premium tracking, claims processing, and agent dashboards for an insurance services company.",
    img: "/insurance.png",
    tags: ["Node.js", "React", "Dashboard"],
    accent: "#7c3aed",
    year: "2024",
    duration: "5 months",
    client: "Insurance services firm",

    before: {
      headline: "Policies scattered across Excel, WhatsApp chats, and printed files",
      points: [
        "Policy details stored in Excel — different agents had different, conflicting versions",
        "Premium due dates tracked manually, renewals frequently missed",
        "Claims submitted via email and managed through WhatsApp threads",
        "No agent performance visibility — management had no way to track activity",
        "Customer history was locked inside individual agent phones and notebooks",
        "Month-end reporting required hours of manual data aggregation",
      ],
      pain: "Missed renewal reminders were costing real business — policies lapsed and clients went to competitors.",
    },

    after: {
      headline: "Every policy, premium, and claim in one auditable system",
      points: [
        "Centralised policy database — all agents see the same real-time information",
        "Automated premium due alerts sent to clients and agents 30/15/7 days before renewal",
        "Structured claims workflow with status tracking, documents, and audit trail",
        "Agent dashboards showing personal performance, portfolio, and commissions",
        "Customer profiles with full policy history, payments, and communication log",
        "Management reports auto-generated for monthly and quarterly review",
      ],
      impact: [
        { metric: "0%", label: "Renewal lapses since launch" },
        { metric: "5 min", label: "vs 3 hrs for monthly reports" },
        { metric: "Full audit", label: "Trail on every claim" },
        { metric: "All agents", label: "On one system, live" },
      ],
    },

    seo: {
      title: "Insurance Management System — Case Study | Koworks",
      description:
        "How Koworks built a policy management, renewals, and claims platform for an insurance firm — replacing Excel chaos with a centralised, automated system.",
      keywords: [
        "insurance management software case study",
        "policy management system India",
        "custom insurance software development",
        "claims management software India",
        "insurance CRM case study",
        "Koworks insurance project",
      ],
      canonical: "https://koworks.in/works/insurance-management",
    },
  },

  {
    slug: "mysore-finest-homestays",
    featured: false,
    own: false,
    status: "live",
    type: "Travel & Hospitality Website",
    category: "Website",
    name: "Mysore's Finest Homestays",
    tagline: "From zero web presence to a destination travellers actually trust and book",
    desc: "A visually rich website showcasing curated homestays with immersive photography, experience guides, and direct booking flow.",
    img: "/MHA.png",
    tags: ["React", "UI/UX", "SEO"],
    accent: "#d97706",
    year: "2024",
    duration: "4 weeks",
    client: "Homestay aggregator",

    before: {
      headline: "Beautiful properties with no way for travellers to find or trust them",
      points: [
        "Homestays only listed on OTA platforms — subject to high commission and algorithm changes",
        "No direct booking option — all revenue routed through middlemen",
        "No brand story or personality online — just a property listing with a few photos",
        "Travellers couldn't understand the unique experience — just saw a price and a room count",
        "No SEO — invisible to people searching for places to stay in the area",
        "No way to showcase the local experience, food, or culture that made each stay special",
      ],
      pain: "OTA commissions were cutting margins significantly. Direct bookings were nearly zero.",
    },

    after: {
      headline: "A destination website that sells the experience before the room",
      points: [
        "Rich, immersive homepage with full-bleed photography and storytelling",
        "Individual property pages with detailed descriptions, photo galleries, and availability",
        "Direct inquiry and booking flow — no middleman, no commission",
        "Experience guides: local food, heritage walks, nearby attractions",
        "SEO-targeted for travel queries — ranking for relevant search terms",
        "WhatsApp and call integration for instant guest contact",
      ],
      impact: [
        { metric: "40%", label: "Direct bookings within 60 days" },
        { metric: "Top 10", label: "Google ranking for target terms" },
        { metric: "2×", label: "Average session duration vs OTA" },
        { metric: "₹0", label: "OTA commission on direct bookings" },
      ],
    },

    seo: {
      title: "Mysore's Finest Homestays — Travel Website Case Study | Koworks",
      description:
        "How Koworks built an immersive travel website for a homestay aggregator — driving direct bookings, reducing OTA dependency, and ranking on Google.",
      keywords: [
        "travel website design case study",
        "homestay website development India",
        "direct booking website for hospitality",
        "tourism website design India",
        "Koworks travel website case study",
        "hotel booking website development",
      ],
      canonical: "https://koworks.in/works/mysore-finest-homestays",
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
