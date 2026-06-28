// ============================================================
// KOWORKS — JSON-LD Schema Factories
// ============================================================

const SITE_URL = "https://koworks.in";

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
    "https://instagram.com/koworks.in",
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
