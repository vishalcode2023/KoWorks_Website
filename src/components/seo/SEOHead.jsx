import { Helmet } from "react-helmet-async";
import { SITE } from "@/seo/seo.config";
import JsonLd from "./JsonLd";
import { faqSchema, breadcrumbSchema } from "@/seo/schemas";

/**
 * SEOHead — drop into every page
 * Handles: primary meta, canonical, OG, Twitter Card, breadcrumbs, FAQs
 *
 * Usage:
 *   import SEOHead from "@/components/seo/SEOHead";
 *   import { PAGE_SEO } from "@/seo/seo.config";
 *
 *   const seo = PAGE_SEO.services.webDevelopment;
 *   <SEOHead seo={seo} breadcrumbs={[{ name:"Home", url:"/" }, { name:"Web Dev", url:"/services/web-development" }]} />
 */
export default function SEOHead({ seo, breadcrumbs = null }) {
  const {
    title,
    description,
    canonical,
    keywords = [],
    ogImage = SITE.defaultOgImage,
    ogType = "website",
    faqs = [],
  } = seo;

  return (
    <>
      <Helmet>
        {/* ── Primary ──────────────────────────────────────── */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content={SITE.legalName} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="format-detection" content="telephone=no" />

        {/* ── Canonical ─────────────────────────────────────── */}
        <link rel="canonical" href={canonical} />

        {/* ── Open Graph ───────────────────────────────────── */}
        <meta property="og:type" content={ogType} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />

        {/* ── Twitter Card ─────────────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* ── Geo / Local SEO ──────────────────────────────── */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Mysore, Karnataka, India" />
        <meta name="geo.position" content="12.2958;76.6394" />
        <meta name="ICBM" content="12.2958, 76.6394" />

        {/* ── Performance hints ─────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </Helmet>

      {/* ── Structured Data: FAQPage ─────────────────────── */}
      {faqs && faqs.length > 0 && (
        <JsonLd data={faqSchema(faqs)} />
      )}

      {/* ── Structured Data: BreadcrumbList ──────────────── */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      )}
    </>
  );
}
