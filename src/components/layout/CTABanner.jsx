import { Link } from "react-router-dom";

export default function CTABanner({
  heading = "Ready to Build Something Great?",
  subheading = "Talk to Koworks — Mysore's leading software development company.",
  primary = { label: "Start Your Project", to: "/contact" },
  secondary = { label: "View Our Portfolio", to: "/portfolio" },
}) {
  return (
    <section aria-label="Call to action — contact Koworks">
      <h2>{heading}</h2>
      <p>{subheading}</p>
      <Link
        to={primary.to}
        aria-label={`${primary.label} — Koworks Software Development Company Mysore`}
      >
        {primary.label}
      </Link>
      <Link
        to={secondary.to}
        aria-label={`${secondary.label} — Koworks project portfolio`}
      >
        {secondary.label}
      </Link>
    </section>
  );
}
