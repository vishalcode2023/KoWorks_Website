// ============================================================
// KOWORKS — MASTER SEO CONFIGURATION (SEO-ENHANCED)
// ============================================================

export const SITE = {
  name: "Koworks",
  legalName: "Koworks Technologies",
  url: "https://koworks.in",
  logo: "https://koworks.in/images/koworks-logo.webp",
  defaultOgImage: "https://koworks.in/images/og-home.jpg",
  twitter: "@koworks_in",
  email: "hello@koworks.in",
  phone: "+91-XXXXXXXXXX",
  address: {
    city: "Mysore",
    state: "Karnataka",
    country: "India",
    postalCode: "570001",
  },
};

// ── All keyword clusters (expanded for high search volume) ──
export const KEYWORDS = {
  brand: [
    "Koworks",
    "Koworks Technologies",
    "software company in Mysore",
    "best software company in Mysore",
    "top IT company in Mysore",
    "website design company Mysore",
    "Koworks software agency",
  ],
  regional: [
    "best web development company in Karnataka",
    "software development company Karnataka",
    "IT company Bangalore",
    "web developers Bangalore",
    "software company Mangalore",
    "software company Coorg",
    "software company Chikmagalur",
    "top web developers in Karnataka",
    "software agency Mysore Karnataka",
    "affordable IT services Mysore",
    "IT solutions provider Bangalore",
    "web design agency Bangalore",
  ],
  webDev: [
    "web development company",
    "React development company",
    "Next.js development services",
    "MERN stack developers",
    "full stack development company",
    "affordable website development company",
    "custom website development",
    "responsive website design",
    "progressive web app development",
    "mobile app development",
    "website development company India",
    "professional web developers India",
    "hire web developers India",
    "website design and development services",
  ],
  software: [
    "custom software development",
    "enterprise software solutions",
    "SaaS product development",
    "startup software solutions",
    "business automation software",
    "ERP development company",
    "custom ERP software company",
    "school ERP software",
    "school management system",
    "inventory management software",
    "billing and POS software",
    "insurance software solutions",
    "software development outsourcing India",
    "MVP development company",
    "software product development India",
    "agile software development company",
    "cloud-based software development",
  ],
  design: [
    "UI/UX design company",
    "best UI/UX agency",
    "UX design company India",
    "branding company India",
    "branding agency Mysore",
    "logo design company",
    "brand identity design",
    "product design company India",
    "Figma design services",
    "user experience design India",
  ],
  ai: [
    "AI and automation solutions",
    "AI software development company",
    "GPT integration India",
    "business automation software",
    "SEO and digital marketing company",
    "digital marketing agency Mysore",
    "AI chatbot development India",
    "machine learning solutions India",
    "AI for startups India",
    "LLM integration services India",
    "generative AI development company",
  ],
  intent: [
    "hire software developers India",
    "hire React developer India",
    "outsource software development India",
    "build SaaS product India",
    "get website developed India",
    "software development quote India",
    "affordable web development",
    "startup tech partner India",
  ],
};

// ── Per-page SEO config ─────────────────────────────────────
export const PAGE_SEO = {
  home: {
    title: "Koworks — #1 Software & Web Development Company in Mysore, Karnataka | Custom Software, SaaS & AI Solutions",
    description:
      "Koworks is Mysore's leading software and web development company. We build custom software, ERP, SaaS platforms, React web apps, mobile apps, and AI automation solutions for startups and enterprises across India. 10+ projects delivered. 4.9★ client rating.",
    canonical: "https://koworks.in/",
    keywords: [...KEYWORDS.brand, ...KEYWORDS.regional, ...KEYWORDS.webDev, ...KEYWORDS.intent],
    ogImage: "https://koworks.in/images/og-home.jpg",
    faqs: [
      {
        q: "What services does Koworks offer?",
        a: "Koworks offers end-to-end digital services including custom software development, web development (React, Next.js, MERN), SaaS product development, ERP systems, mobile app development, UI/UX design, branding, AI & automation solutions, inventory management systems, and digital marketing.",
      },
      {
        q: "Where is Koworks located?",
        a: "Koworks is headquartered in Mysore, Karnataka, India. We serve clients across Bangalore, Mangalore, Coorg, Chikmagalur, and pan-India remotely.",
      },
      {
        q: "How much does it cost to build a website or software with Koworks?",
        a: "Business websites start from ₹15,000. Custom software and SaaS MVPs start from ₹50,000. We offer transparent fixed-price and milestone-based contracts with no hidden costs.",
      },
      {
        q: "How long does software development take at Koworks?",
        a: "A business website takes 1–3 weeks. Custom web apps or SaaS products typically take 6–16 weeks depending on complexity. MVPs can be shipped in as little as 4 weeks.",
      },
    ],
  },

  about: {
    title: "About Koworks — Top-Rated Software Development Agency in Mysore, Karnataka | Our Story & Team",
    description:
      "Meet the Koworks team — passionate engineers and designers building world-class software from Mysore, Karnataka. Learn about our mission, values, and what makes us the best software company in Karnataka. Trusted by 10+ clients across India.",
    canonical: "https://koworks.in/about",
    keywords: [
      ...KEYWORDS.brand,
      "software agency Karnataka",
      "MERN stack developers",
      "about Koworks Technologies",
      "best software team Mysore",
      "tech startup Mysore",
    ],
    ogImage: "https://koworks.in/images/og-about.jpg",
  },

  contact: {
    title: "Contact Koworks — Hire Software Developers in Mysore | Free Project Estimate",
    description:
      "Get in touch with Koworks for custom software, web design, ERP, SaaS, or AI solutions. Based in Mysore, Karnataka. Free project estimates. Serving clients across India. Reply within 24 hours.",
    canonical: "https://koworks.in/contact",
    keywords: [
      "hire software developers Mysore",
      "contact software company Karnataka",
      "web development quote India",
      "free software estimate",
      "hire React developer Mysore",
      "software development consultation",
    ],
    ogImage: "https://koworks.in/images/og-contact.jpg",
  },

  portfolio: {
    title: "Portfolio — Software, SaaS & Web Projects by Koworks Mysore | Case Studies",
    description:
      "Explore Koworks' portfolio of custom software, ERP systems, SaaS platforms, mobile apps, and web development projects for clients across Karnataka and India. Real projects. Real results.",
    canonical: "https://koworks.in/portfolio",
    keywords: [
      "software development portfolio India",
      "web development projects Karnataka",
      "SaaS case studies",
      "Koworks portfolio",
      "software company projects Mysore",
    ],
    ogImage: "https://koworks.in/images/og-portfolio.jpg",
  },

  services: {
    index: {
      title: "Services — Custom Software, Web Dev, ERP, AI & Design | Koworks Mysore Karnataka",
      description:
        "Koworks offers end-to-end digital services: web development, custom software, ERP, SaaS, mobile apps, UI/UX design, branding, SEO, digital marketing, and AI solutions for startups and enterprises across India.",
      canonical: "https://koworks.in/services",
      keywords: [...KEYWORDS.webDev, ...KEYWORDS.software, ...KEYWORDS.design, ...KEYWORDS.ai],
      ogImage: "https://koworks.in/images/og-services.jpg",
    },

    webDevelopment: {
      title: "Web Development Company in Mysore & Bangalore | React, Next.js & MERN Stack — Koworks",
      description:
        "Koworks is a top web development company in Mysore & Karnataka. We build fast, scalable websites and web apps using React, Next.js, MERN stack, and TypeScript. Trusted by 10+ startups across India. Get a free quote today.",
      canonical: "https://koworks.in/services/web-development",
      keywords: [
        "web development company Mysore",
        "React development company Karnataka",
        "Next.js development services India",
        "MERN stack developers",
        "full stack development company",
        "best web development company in Karnataka",
        "affordable website development company",
        "React and Next.js developers India",
        "hire web developer Mysore",
        "website development services Bangalore",
        "custom web application development",
        "professional website development India",
      ],
      ogImage: "https://koworks.in/images/og-service-web.jpg",
      faqs: [
        {
          q: "What web technologies does Koworks specialise in?",
          a: "Koworks specialises in React, Next.js, Node.js, TypeScript, and the full MERN stack. We build fast, SEO-optimised, and scalable web applications tailored to your business needs.",
        },
        {
          q: "How long does it take to build a website?",
          a: "A standard business website takes 2–4 weeks. Complex web apps or SaaS platforms typically take 6–16 weeks depending on feature scope.",
        },
        {
          q: "Does Koworks serve clients in Bangalore?",
          a: "Yes. While headquartered in Mysore, Koworks serves clients across Karnataka including Bangalore, Mangalore, Coorg, and pan-India remotely.",
        },
        {
          q: "How much does web development cost at Koworks?",
          a: "Business websites start from ₹15,000. E-commerce stores from ₹30,000. Custom web applications from ₹60,000. We provide transparent fixed-price quotes with no hidden fees.",
        },
      ],
    },

    softwareDevelopment: {
      title: "Custom Software Development Company in Mysore, Karnataka — Koworks | Startups & Enterprises",
      description:
        "Koworks delivers custom software for startups, SMEs, and enterprises across India. From SaaS platforms to enterprise tools — robust, scalable, and affordable software solutions. 10+ projects. 4.9★ rating.",
      canonical: "https://koworks.in/services/software-development",
      keywords: [
        "custom software development company",
        "software development company in Mysore",
        "enterprise software solutions India",
        "SaaS product development",
        "startup software solutions",
        "startup app development company",
        "business automation software",
        "full stack development company",
        "software outsourcing company India",
        "MVP software development",
        "agile software development Mysore",
        "software development services Karnataka",
      ],
      ogImage: "https://koworks.in/images/og-service-software.jpg",
      faqs: [
        {
          q: "What industries does Koworks build custom software for?",
          a: "Education, retail, insurance, textile, healthcare, logistics, and finance. We have hands-on production experience in all these domains.",
        },
        {
          q: "How much does custom software cost?",
          a: "Custom software at Koworks starts from ₹50,000 for MVPs and scales based on complexity. We offer transparent fixed-price contracts.",
        },
        {
          q: "Can Koworks build a SaaS product for my startup?",
          a: "Absolutely. We handle the full product lifecycle — architecture, backend APIs, frontend, auth, subscriptions, and deployment.",
        },
        {
          q: "Does Koworks offer post-launch software support?",
          a: "Yes. All projects include 6 months of free bug fixes and post-launch support. Extended maintenance contracts are also available.",
        },
      ],
    },

    erpSystems: {
      title: "ERP Development Company in Mysore | Custom ERP Software for Schools, Retail & Manufacturing — Koworks",
      description:
        "Koworks is a trusted ERP development company in Karnataka. Custom ERP for schools, retail, manufacturing, and enterprises — affordable, scalable, and India-ready. GST-compliant. Tally-compatible.",
      canonical: "https://koworks.in/services/erp-systems",
      keywords: [
        "ERP development company",
        "custom ERP software company",
        "ERP software Mysore",
        "school ERP software Karnataka",
        "school management system India",
        "business ERP software India",
        "manufacturing ERP software India",
        "retail ERP software",
        "GST-compliant ERP software",
        "cloud ERP India",
        "affordable ERP software",
      ],
      ogImage: "https://koworks.in/images/og-service-erp.jpg",
      faqs: [
        {
          q: "What is included in Koworks' ERP solutions?",
          a: "Inventory, billing, HR, payroll, attendance, student management, purchase orders, vendor management, reports, and dashboards — fully customised to your workflow.",
        },
        {
          q: "Do you offer school ERP software?",
          a: "Yes. Koworks' Unity Portal is a production-deployed school management ERP handling student records, attendance, fees, marks, WhatsApp notifications, and more.",
        },
        {
          q: "How much does a custom ERP cost in India?",
          a: "Custom ERP systems at Koworks start from ₹80,000 for SMEs and scale based on modules, users, and integrations. We offer milestone-based payment plans.",
        },
      ],
    },

    inventoryManagement: {
      title: "Inventory Management Software for Textile, Retail & Warehouses | Barcode & GST — Koworks India",
      description:
        "Koworks builds inventory management software for textile shops, retail stores, and warehouses across India. Barcode scanning, real-time stock tracking, GST billing, POS, and Tally-compatible exports.",
      canonical: "https://koworks.in/services/inventory-management",
      keywords: [
        "inventory management software",
        "inventory software provider India",
        "textile inventory software",
        "retail inventory management India",
        "barcode inventory system",
        "billing and POS software",
        "stock management software India",
        "GST inventory software",
        "warehouse management software India",
        "Tally-compatible inventory software",
      ],
      ogImage: "https://koworks.in/images/og-service-inventory.jpg",
      faqs: [
        {
          q: "Does Koworks build textile-specific inventory software?",
          a: "Yes. We have built production inventory and billing systems for textile and garment businesses with GST invoicing, barcode generation, stock tracking, vendor management, and Tally-compatible exports.",
        },
        {
          q: "Is the inventory software GST-compliant?",
          a: "Yes. All our billing and inventory software is GST-compliant with auto-calculation, invoice generation, HSN code support, and return filing-ready exports.",
        },
      ],
    },

    uiUxDesign: {
      title: "UI/UX Design Company in Mysore, Karnataka | Figma Design & Prototyping — Koworks",
      description:
        "Koworks is a UI/UX design company in Mysore crafting intuitive, beautiful digital experiences. Figma prototypes, design systems, and pixel-perfect implementation for SaaS, mobile apps, and web platforms.",
      canonical: "https://koworks.in/services/ui-ux-design",
      keywords: [
        "UI/UX design company",
        "best UI/UX agency India",
        "UX design company Karnataka",
        "Figma design services",
        "product design company India",
        "SaaS UI design",
        "user interface design Mysore",
        "mobile app UI design",
        "design system development",
        "hire UX designer India",
      ],
      ogImage: "https://koworks.in/images/og-service-uiux.jpg",
      faqs: [
        {
          q: "What UI/UX services does Koworks offer?",
          a: "User research, wireframing, Figma prototyping, visual design, design systems, and front-end implementation for web apps, mobile apps, dashboards, and SaaS.",
        },
        {
          q: "How long does a UI/UX design project take?",
          a: "A standard design project (wireframes + Figma prototype) takes 2–4 weeks. Full design-to-code implementation typically takes 4–8 weeks.",
        },
      ],
    },

    aiSolutions: {
      title: "AI & Automation Development Company in India | GPT, LLM & ML Solutions — Koworks",
      description:
        "Koworks builds AI-powered software — GPT integrations, OCR systems, AI chatbots, and workflow automation. Helping Indian startups and enterprises cut costs and accelerate growth with AI and machine learning.",
      canonical: "https://koworks.in/services/ai-solutions",
      keywords: [
        "AI software development company India",
        "AI and automation solutions",
        "GPT API integration India",
        "AI chatbot development",
        "business automation software",
        "AI for startups India",
        "machine learning solutions India",
        "LLM development company",
        "generative AI company India",
        "OpenAI integration services",
        "Claude API integration India",
        "AI workflow automation India",
      ],
      ogImage: "https://koworks.in/images/og-service-ai.jpg",
      faqs: [
        {
          q: "What AI integrations can Koworks build?",
          a: "GPT-4/Claude-powered chatbots, invoice OCR systems, AI search, recommendation engines, and document processing pipelines using OpenAI, Anthropic, and open-source LLMs.",
        },
        {
          q: "Can Koworks automate my business workflows with AI?",
          a: "Yes. We have automated invoice extraction, attendance processing, stock reconciliation, and reporting — saving businesses hours of manual work daily.",
        },
        {
          q: "How much does AI integration cost for a business?",
          a: "Simple AI chatbot integrations start from ₹30,000. Full AI workflow automation projects are scoped based on data complexity, integrations, and scale.",
        },
      ],
    },

    saasDevelopment: {
      title: "SaaS Product Development Company in India | End-to-End SaaS Engineering — Koworks",
      description:
        "End-to-end SaaS product development for Indian startups. Architecture, backend APIs, frontend, auth, subscriptions, and deployment — all handled by Koworks. SaaS MVPs from ₹80,000.",
      canonical: "https://koworks.in/services/saas-development",
      keywords: [
        "SaaS product development",
        "SaaS development company India",
        "startup SaaS development",
        "SaaS MVP development India",
        "custom SaaS platform",
        "SaaS engineering company",
        "build SaaS product India",
        "SaaS startup India",
        "multi-tenant SaaS development",
        "SaaS architecture India",
      ],
      ogImage: "https://koworks.in/images/og-service-saas.jpg",
      faqs: [
        {
          q: "How much does SaaS development cost at Koworks?",
          a: "SaaS MVPs start from ₹80,000. Full-featured platforms are scoped and priced based on modules, integrations, and user scale. We offer milestone-based payment plans.",
        },
        {
          q: "What does Koworks include in SaaS development?",
          a: "Architecture design, REST API development, frontend (React/Next.js), authentication, subscription billing, admin dashboards, deployment (AWS/GCP), and post-launch support.",
        },
      ],
    },

    mobileApp: {
      title: "Mobile App Development Company in Mysore, Karnataka | React Native iOS & Android — Koworks",
      description:
        "Koworks builds cross-platform mobile apps using React Native for iOS and Android. From MVPs to full-featured apps for startups and enterprises across India. Fast, affordable, and scalable.",
      canonical: "https://koworks.in/services/mobile-app-development",
      keywords: [
        "mobile app development company Mysore",
        "React Native development India",
        "iOS Android app development Karnataka",
        "startup app development company",
        "cross-platform app development India",
        "hire mobile app developer India",
        "affordable app development India",
        "Flutter development India",
        "mobile app development Bangalore",
      ],
      ogImage: "https://koworks.in/images/og-service-mobile.jpg",
      faqs: [
        {
          q: "What platforms does Koworks build apps for?",
          a: "We build cross-platform apps for iOS and Android using React Native, enabling a single codebase that runs natively on both platforms.",
        },
        {
          q: "How much does mobile app development cost at Koworks?",
          a: "Simple mobile apps start from ₹60,000. Feature-rich apps with backend APIs typically range from ₹1,20,000 to ₹5,00,000 depending on complexity.",
        },
      ],
    },

    ecommerce: {
      title: "E-Commerce Development Company in India | React, Shopify & WooCommerce — Koworks",
      description:
        "Custom e-commerce stores for Indian businesses. Shopify development, React storefronts, WooCommerce, and headless commerce solutions. Fast-loading, GST-ready, and conversion-optimised.",
      canonical: "https://koworks.in/services/ecommerce",
      keywords: [
        "e-commerce development company India",
        "Shopify development company",
        "WooCommerce development",
        "custom e-commerce website India",
        "React e-commerce development",
        "headless commerce India",
        "online store development Mysore",
        "GST e-commerce India",
        "ecommerce website developers India",
      ],
      ogImage: "https://koworks.in/images/og-service-ecommerce.jpg",
      faqs: [
        {
          q: "Does Koworks build Shopify stores?",
          a: "Yes. We build custom Shopify themes, Shopify Plus solutions, and React headless frontends connected to Shopify backends for Indian businesses.",
        },
        {
          q: "Is GST billing included in Koworks e-commerce solutions?",
          a: "Yes. All our e-commerce solutions are GST-compliant with automatic tax calculation, GST invoices, and India payment gateway integrations (Razorpay, PayU, Cashfree).",
        },
      ],
    },

    seoServices: {
      title: "SEO Company in Mysore, Karnataka | Technical SEO & Local Search Ranking — Koworks",
      description:
        "Enterprise SEO for businesses in Mysore, Karnataka, and India. Technical SEO, on-page optimisation, local SEO, Core Web Vitals, and content strategy to rank #1 on Google. Proven results.",
      canonical: "https://koworks.in/services/seo",
      keywords: [
        "SEO and digital marketing company",
        "SEO company Mysore",
        "search engine optimisation Karnataka",
        "technical SEO services India",
        "local SEO Mysore",
        "Google ranking services",
        "SEO agency Bangalore",
        "Core Web Vitals optimisation",
        "on-page SEO services India",
        "Google My Business optimisation",
      ],
      ogImage: "https://koworks.in/images/og-service-seo.jpg",
      faqs: [
        {
          q: "How long does SEO take to show results?",
          a: "Local SEO improvements typically appear within 4–8 weeks. Competitive keyword rankings usually take 3–6 months of consistent work.",
        },
        {
          q: "Does Koworks offer local SEO for Mysore businesses?",
          a: "Yes. We specialise in Google My Business optimisation, local citation building, and geo-targeted content to help Mysore and Karnataka businesses rank for local searches.",
        },
      ],
    },

    digitalMarketing: {
      title: "Digital Marketing Agency in Mysore, Karnataka | Google Ads, Meta & SEO — Koworks",
      description:
        "Full-funnel digital marketing — SEO, Google Ads, Meta Ads, social media, and content marketing for businesses across Karnataka and India. Data-driven campaigns that deliver measurable ROI.",
      canonical: "https://koworks.in/services/digital-marketing",
      keywords: [
        "digital marketing agency Mysore",
        "social media marketing Karnataka",
        "Google Ads management India",
        "performance marketing India",
        "Meta Ads agency India",
        "content marketing company India",
        "digital marketing services Bangalore",
        "ROI-driven digital marketing",
      ],
      ogImage: "https://koworks.in/images/og-service-digital.jpg",
      faqs: [],
    },

    branding: {
      title: "Branding & Logo Design Company in Mysore | Brand Identity for Startups — Koworks",
      description:
        "Build a memorable brand with Koworks. Logos, brand identities, style guides, and visual systems for startups and businesses across India. Professional. Affordable. Memorable.",
      canonical: "https://koworks.in/services/branding",
      keywords: [
        "branding company India",
        "branding agency Mysore",
        "logo design company Karnataka",
        "brand identity design India",
        "startup branding services",
        "brand strategy India",
        "visual identity design",
        "logo design Mysore",
      ],
      ogImage: "https://koworks.in/images/og-service-branding.jpg",
      faqs: [],
    },

    insuranceSoftware: {
      title: "Insurance Management Software Development India | Policy, Claims & Agent Portal — Koworks",
      description:
        "Custom insurance management systems — policy tracking, claims, renewals, agent portals, and analytics dashboards for insurance businesses in India. Compliance-ready. Cloud-hosted.",
      canonical: "https://koworks.in/services/insurance-software",
      keywords: [
        "insurance software solutions",
        "insurance management software India",
        "custom insurance software development",
        "policy management software",
        "claims management software",
        "insurance CRM India",
        "agent portal software",
        "insurance tech company India",
      ],
      ogImage: "https://koworks.in/images/og-service-insurance.jpg",
      faqs: [
        {
          q: "Does Koworks build insurance management software?",
          a: "Yes. We build insurance platforms covering policy issuance, renewals, agent management, customer portals, and analytics for Indian insurance businesses.",
        },
        {
          q: "Is the insurance software IRDAI-compliant?",
          a: "We build with Indian insurance regulations in mind, including audit trails, data security, and reporting structures that align with IRDAI guidelines.",
        },
      ],
    },
  },

  locations: {
    mysore: {
      title: "Software Development Company in Mysore | Best IT Company Mysore — Koworks",
      description:
        "Koworks is Mysore's leading software and web development company. Custom software, ERP, SaaS, mobile apps, and AI solutions for businesses in Mysore, Karnataka. Trusted local IT partner.",
      canonical: "https://koworks.in/software-company-mysore",
      keywords: [
        "software development company in Mysore",
        "web development company Mysore",
        "best software company in Mysore",
        "IT company Mysore",
        "website design company Mysore",
        "app development Mysore",
        "mobile app developers Mysore",
        "software agency Mysore",
        "tech company Mysore Karnataka",
      ],
      ogImage: "https://koworks.in/images/og-mysore.jpg",
    },
    bangalore: {
      title: "Software Development Company Serving Bangalore | React & SaaS Experts — Koworks",
      description:
        "Koworks builds custom software, SaaS products, and React web apps for startups and businesses in Bangalore, Karnataka. Based in Mysore with full remote delivery. Affordable Bangalore rates.",
      canonical: "https://koworks.in/software-company-bangalore",
      keywords: [
        "software development company Bangalore",
        "React developers Bangalore",
        "startup software company Bangalore",
        "MERN stack developers Bangalore",
        "affordable web development Bangalore",
        "IT company serving Bangalore",
        "SaaS development Bangalore",
        "web developers near Bangalore",
      ],
      ogImage: "https://koworks.in/images/og-bangalore.jpg",
    },
    karnataka: {
      title: "Best Software Development Company in Karnataka | Web, SaaS & AI — Koworks",
      description:
        "Koworks is among the best software development companies in Karnataka. Custom software, web apps, ERP, SaaS, and mobile apps for businesses across Mysore, Bangalore, Mangalore, and beyond.",
      canonical: "https://koworks.in/software-development-karnataka",
      keywords: [
        "best web development company in Karnataka",
        "software development company Karnataka",
        "IT company Karnataka",
        "React developers Karnataka",
        "software agency Karnataka",
        "top software company Karnataka",
        "IT services Karnataka",
      ],
      ogImage: "https://koworks.in/images/og-karnataka.jpg",
    },
  },
};
