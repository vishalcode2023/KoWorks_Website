// ============================================================
// KOWORKS — JSON-LD Schema Factories
// ============================================================

const SITE_URL = "https://koworks.tech";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Koworks",
  legalName: "Koworks Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/images/koworks-logo.webp`,
  foundingDate: "2023",
  description:
    "Software and web development company in Mysore, Karnataka, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mysore",
    addressRegion: "Karnataka",
    postalCode: "570001",
    addressCountry: "IN",
  },
  areaServed: [
    "Mysore",
    "Bangalore",
    "Mangalore",
    "Coorg",
    "Chikmagalur",
    "Karnataka",
    "India",
  ],
  sameAs: [
    "https://linkedin.com/company/koworks",
    "https://instagram.com/koworks.tech",
    "https://github.com/koworks",
  ],
});

export const serviceSchema = ({ name, description, url, serviceType }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${SITE_URL}${url}`,
  serviceType,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Mysore" },
    { "@type": "AdministrativeArea", name: "Bangalore" },
    { "@type": "AdministrativeArea", name: "Karnataka" },
    { "@type": "AdministrativeArea", name: "India" },
  ],
});

export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, url }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${url}`,
  })),
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Koworks",
  image: `${SITE_URL}/images/koworks-logo.webp`,
  url: SITE_URL,
  telephone: "+91-8884804648",
  email: "hello@koworks.tech",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI, Razorpay",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mysore",
    addressLocality: "Mysore",
    addressRegion: "Karnataka",
    postalCode: "570001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.2958,
    longitude: 76.6394,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mysore" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Mangalore" },
    { "@type": "AdministrativeArea", name: "Karnataka" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "React Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Next.js Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MERN Stack Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://linkedin.com/company/koworks",
    "https://instagram.com/koworks.tech",
    "https://github.com/koworks",
  ],
});

export const articleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}${url}`,
  image: `${SITE_URL}${image}`,
  datePublished,
  dateModified: dateModified || datePublished,
  author: { "@type": "Organization", name: "Koworks", url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#organization` },
});