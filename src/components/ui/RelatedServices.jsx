import { Link } from "react-router-dom";

const RELATED_MAP = {
  "web-development": ["software-development", "ui-ux-design", "seo"],
  "software-development": ["web-development", "erp-systems", "ai-solutions"],
  "erp-systems": [
    "software-development",
    "inventory-management",
    "web-development",
  ],
  "inventory-management": ["erp-systems", "software-development", "ecommerce"],
  "ui-ux-design": ["web-development", "branding", "mobile-app-development"],
  branding: ["ui-ux-design", "digital-marketing", "web-development"],
  seo: ["digital-marketing", "web-development", "ai-solutions"],
  "digital-marketing": ["seo", "branding", "web-development"],
  "ai-solutions": [
    "software-development",
    "web-development",
    "inventory-management",
  ],
  ecommerce: ["web-development", "digital-marketing", "inventory-management"],
  "insurance-software": ["software-development", "erp-systems", "ai-solutions"],
  "mobile-app-development": [
    "web-development",
    "ui-ux-design",
    "software-development",
  ],
  "saas-development": [
    "software-development",
    "web-development",
    "ai-solutions",
  ],
};

const SERVICE_LABELS = {
  "web-development": "Web Development",
  "software-development": "Custom Software Development",
  "erp-systems": "ERP Systems",
  "inventory-management": "Inventory Management Software",
  "ui-ux-design": "UI/UX Design",
  branding: "Branding & Logo Design",
  seo: "SEO Services",
  "digital-marketing": "Digital Marketing",
  "ai-solutions": "AI & Automation Solutions",
  ecommerce: "E-Commerce Development",
  "insurance-software": "Insurance Management Software",
  "mobile-app-development": "Mobile App Development",
  "saas-development": "SaaS Development",
};

export default function RelatedServices({ current }) {
  const related = (RELATED_MAP[current] || []).slice(0, 3);
  if (!related.length) return null;

  return (
    <section aria-label="Related Koworks services">
      <h2>Related Services</h2>
      <div>
        {related.map((slug) => (
          <Link
            key={slug}
            to={`/services/${slug}`}
            title={`${SERVICE_LABELS[slug]} — Koworks Software Company Mysore`}
          >
            {SERVICE_LABELS[slug]}
          </Link>
        ))}
      </div>
    </section>
  );
}
