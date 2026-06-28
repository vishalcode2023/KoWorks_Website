/**
 * Web Development Service Page
 * Pattern used by ALL service pages — copy and update the seoKey + content
 */
import SEOHead from "@/components/seo/SEOHead";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumb from "@/components/seo/Breadcrumb";
import CTABanner from "@/components/layout/CTABanner";
import RelatedServices from "@/components/ui/RelatedServices";
import { PAGE_SEO } from "@/seo/seo.config";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/seo/schemas";

const seo = PAGE_SEO.services.webDevelopment;

export default function WebDevelopment() {
  return (
    <>
      {/* ── SEO: title, description, OG, Twitter ─────────── */}
      <SEOHead seo={seo} />

      {/* ── JSON-LD: breadcrumb + service + FAQ schemas ───── */}
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Development", url: "/services/web-development" },
          ]),
          serviceSchema({
            name: "Web Development Services",
            description: seo.description,
            url: "/services/web-development",
            serviceType: "Web Development",
          }),
          faqSchema(seo.faqs),
        ]}
      />

      <main>
        {/* ── Breadcrumb ───────────────────────────────────── */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: "Web Development", to: "/services/web-development" },
          ]}
        />

        {/* ── Hero ─────────────────────────────────────────── */}
        {/* H1 MUST contain primary keyword */}
        <section aria-label="hero">
          <h1>Web Development Company in Mysore, Karnataka</h1>
          <p>
            Koworks is a top web development company in Mysore. We build fast,
            scalable, and SEO-optimised websites and web applications using
            React, Next.js, the MERN stack, and TypeScript — trusted by startups
            and businesses across Karnataka and India.
          </p>
          <a href="/contact">Get a Free Quote</a>
        </section>

        {/* ── Why Koworks ──────────────────────────────────── */}
        <section aria-label="why choose Koworks for web development">
          <h2>Why Choose Koworks for Web Development?</h2>
          <p>
            As a React and Next.js development company in Mysore, Koworks
            combines modern full-stack expertise with deep understanding of
            Indian business needs. Whether you need a business website, a SaaS
            web app, or a complex MERN stack platform — we deliver
            production-ready software on time.
          </p>
          <ul>
            <li>React, Next.js, and MERN stack specialists</li>
            <li>Mobile-first, SEO-optimised builds by default</li>
            <li>Transparent fixed-price contracts</li>
            <li>Serving Mysore, Bangalore, Mangalore, and pan-India</li>
            <li>Affordable web development — starting from ₹30,000</li>
          </ul>
        </section>

        {/* ── Services breakdown ───────────────────────────── */}
        <section aria-label="web development services">
          <h2>Our Web Development Services</h2>

          <article>
            <h3>React Development</h3>
            <p>
              Custom React web applications — dashboards, admin panels, SaaS
              UIs, and customer-facing portals built with performance and
              scalability in mind.
            </p>
          </article>

          <article>
            <h3>Next.js Development</h3>
            <p>
              SEO-friendly, server-rendered Next.js websites and applications
              for businesses that need speed, ranking, and great user
              experience.
            </p>
          </article>

          <article>
            <h3>MERN Stack Development</h3>
            <p>
              Full-stack web development using MongoDB, Express, React, and
              Node.js. End-to-end development from database design to
              deployment.
            </p>
          </article>

          <article>
            <h3>Business Websites</h3>
            <p>
              Professional, responsive websites for businesses in Mysore,
              Bangalore, and Karnataka — built with clean semantic HTML and Core
              Web Vitals in mind.
            </p>
          </article>
        </section>

        {/* ── Technologies ─────────────────────────────────── */}
        <section aria-label="technologies we use">
          <h2>Technologies We Use</h2>
          <ul>
            <li>React 18 + TypeScript</li>
            <li>Next.js 14 (App Router)</li>
            <li>Node.js + Express</li>
            <li>MongoDB + Mongoose</li>
            <li>Vite + TailwindCSS</li>
            <li>React Native (mobile)</li>
          </ul>
        </section>

        {/* ── FAQ section — triggers Google rich snippets ───── */}
        <section aria-label="frequently asked questions">
          <h2>Web Development FAQs</h2>
          {seo.faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>
                <strong>{q}</strong>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </section>

        {/* ── Related services — internal linking ──────────── */}
        <RelatedServices current="web-development" />

        {/* ── CTA ──────────────────────────────────────────── */}
        <CTABanner
          heading="Need a Web Development Company in Mysore?"
          subheading="Koworks builds fast, scalable React and Next.js websites for businesses across Karnataka. Get a free quote today."
        />
      </main>
    </>
  );
}
