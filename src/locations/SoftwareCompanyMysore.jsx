/**
 * SoftwareCompanyMysore.jsx — Local SEO landing page for Mysore
 * Pattern is the same for all location pages.
 */
import SEOHead from "@/components/seo/SEOHead";
import JsonLd from "@/components/seo/JsonLd";
import CTABanner from "@/components/layout/CTABanner";
import { PAGE_SEO } from "@/seo/seo.config";
import { breadcrumbSchema, faqSchema } from "@/seo/schemas";

const seo = PAGE_SEO.locations.mysore;

const faqs = [
  {
    q: "Is Koworks based in Mysore?",
    a: "Yes. Koworks is headquartered in Mysore, Karnataka. We serve local clients in-person and national clients remotely.",
  },
  {
    q: "What software services does Koworks offer in Mysore?",
    a: "Custom software, web development, ERP, school management software, inventory systems, UI/UX design, branding, SEO, and AI solutions.",
  },
  {
    q: "How do I contact a software developer in Mysore?",
    a: "Reach Koworks at hello@koworks.in or our contact page for a free consultation within 24 hours.",
  },
];

export default function SoftwareCompanyMysore() {
  return (
    <>
      <SEOHead seo={seo} />
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            {
              name: "Software Company Mysore",
              url: "/software-company-mysore",
            },
          ]),
          faqSchema(faqs),
        ]}
      />
      <main>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Mysore, Karnataka, India" />

        <section aria-label="hero">
          <h1>Software Development Company in Mysore, Karnataka</h1>
          <p>
            Koworks is Mysore's leading software and web development company —
            building custom software, ERP systems, SaaS platforms, mobile apps,
            and AI solutions for businesses in Mysore and across India.
          </p>
        </section>

        <section aria-label="services in Mysore">
          <h2>Our Services in Mysore</h2>
          <ul>
            <li>
              <a href="/services/web-development">
                Web Development Company Mysore
              </a>
            </li>
            <li>
              <a href="/services/software-development">
                Custom Software Development Mysore
              </a>
            </li>
            <li>
              <a href="/services/erp-systems">ERP Software Mysore</a>
            </li>
            <li>
              <a href="/services/ui-ux-design">UI/UX Design Mysore</a>
            </li>
            <li>
              <a href="/services/ai-solutions">AI Solutions Mysore</a>
            </li>
            <li>
              <a href="/services/seo">SEO Company Mysore</a>
            </li>
          </ul>
        </section>

        <section aria-label="frequently asked questions">
          <h2>FAQs — Software Company in Mysore</h2>
          {faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>
                <strong>{q}</strong>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </section>

        <CTABanner
          heading="Looking for a Software Company in Mysore?"
          subheading="Koworks delivers world-class software from Mysore, Karnataka. Let's build something great together."
        />
      </main>
    </>
  );
}
