import { Helmet } from "react-helmet-async";

/**
 * JsonLd — inject one or more JSON-LD schemas via react-helmet-async
 *
 * Usage:
 *   import JsonLd from "@/components/seo/JsonLd";
 *   import { faqSchema, breadcrumbSchema, serviceSchema } from "@/seo/schemas";
 *
 *   <JsonLd schemas={[
 *     breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Web Development", url: "/services/web-development" }]),
 *     serviceSchema({ name: "Web Development", ... }),
 *     faqSchema(seo.faqs),
 *   ]} />
 */
export default function JsonLd({ schemas }) {
  const list = Array.isArray(schemas) ? schemas : [schemas];
  return (
    <Helmet>
      {list.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
