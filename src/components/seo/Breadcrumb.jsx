import { Link } from "react-router-dom";

/**
 * Breadcrumb — renders visual breadcrumb + injects microdata
 *
 * Usage:
 *   <Breadcrumb items={[
 *     { label: "Home", to: "/" },
 *     { label: "Services", to: "/services" },
 *     { label: "Web Development", to: "/services/web-development" },
 *   ]} />
 */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        style={{
          display: "flex",
          gap: "8px",
          listStyle: "none",
          padding: 0,
          margin: 0,
          flexWrap: "wrap",
        }}
      >
        {items.map(({ label, to }, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={to}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {isLast ? (
                <span itemProp="name" aria-current="page">
                  {label}
                </span>
              ) : (
                <>
                  <Link to={to} itemProp="item">
                    <span itemProp="name">{label}</span>
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
