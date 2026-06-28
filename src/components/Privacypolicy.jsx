import Footer from "../components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .legal-root { font-family: 'Cabinet Grotesk', sans-serif; background: #fff; color: #0e0e0c; }

  .legal-hero {
    background: #fafaf8; border-bottom: 1px solid #e8e8e4;
    padding: 100px 64px 64px;
  }
  .legal-hero-inner { max-width: 900px; margin: 0 auto; }

  .legal-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(240,78,26,0.07); border: 1px solid rgba(240,78,26,0.2);
    border-radius: 40px; padding: 5px 14px 5px 8px; margin-bottom: 22px;
  }
  .legal-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: #F04E1A; animation: ldot 2s ease-in-out infinite; }
  @keyframes ldot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
  .legal-eyebrow-text { font-size: 11px; font-weight: 700; color: #F04E1A; letter-spacing: .12em; text-transform: uppercase; }

  .legal-title { font-family: 'Fraunces', serif; font-size: clamp(40px,5vw,68px); font-weight: 900; color: #0e0e0c; letter-spacing: -.04em; line-height: 1; margin: 0 0 20px; }
  .legal-title em { color: #F04E1A; font-style: italic; font-weight: 300; }

  .legal-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  .legal-meta-badge { font-size: 12.5px; font-weight: 600; color: #888; background: #fff; border: 1px solid #e8e8e4; border-radius: 20px; padding: 4px 12px; }

  /* BODY */
  .legal-body { max-width: 900px; margin: 0 auto; padding: 72px 64px 96px; }

  .legal-intro { font-size: 15.5px; color: #555; line-height: 1.8; margin-bottom: 56px; padding-bottom: 40px; border-bottom: 1px solid #e8e8e4; }

  .legal-section { margin-bottom: 52px; }
  .legal-section:last-of-type { margin-bottom: 0; }

  .legal-section-num { font-size: 11px; font-weight: 700; color: #F04E1A; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }

  .legal-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 700; color: #0e0e0c; letter-spacing: -.03em; margin: 0 0 16px; }

  .legal-p { font-size: 14.5px; color: #555; line-height: 1.8; margin-bottom: 14px; }
  .legal-p:last-child { margin-bottom: 0; }

  .legal-list { padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
  .legal-list li { font-size: 14.5px; color: #555; line-height: 1.7; padding-left: 20px; position: relative; }
  .legal-list li::before { content: '—'; position: absolute; left: 0; color: #F04E1A; font-weight: 700; }

  .legal-highlight {
    background: rgba(240,78,26,0.05); border: 1px solid rgba(240,78,26,0.15);
    border-left: 3px solid #F04E1A; border-radius: 0 12px 12px 0;
    padding: 16px 20px; margin: 20px 0;
  }
  .legal-highlight p { font-size: 14px; color: #555; line-height: 1.7; margin: 0; }
  .legal-highlight strong { color: #0e0e0c; }

  .legal-contact-box {
    background: #0e0e0c; border-radius: 20px; padding: 32px 36px; margin-top: 56px;
    display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
  }
  .legal-contact-title { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 700; color: #fff; letter-spacing: -.02em; margin: 0 0 6px; }
  .legal-contact-sub { font-size: 13.5px; color: rgba(255,255,255,.5); margin: 0; }
  .legal-contact-btn { display: inline-flex; align-items: center; gap: 8px; background: #F04E1A; color: #fff; border: none; border-radius: 40px; padding: 12px 22px; font-size: 14px; font-weight: 700; cursor: pointer; text-decoration: none; white-space: nowrap; font-family: 'Cabinet Grotesk', sans-serif; box-shadow: 0 4px 16px rgba(240,78,26,.35); transition: all .22s ease; flex-shrink: 0; }
  .legal-contact-btn:hover { background: #cc3a0f; transform: translateY(-2px); }

  @media (max-width: 768px) {
    .legal-hero, .legal-body { padding-left: 24px; padding-right: 24px; }
    .legal-hero { padding-top: 100px; }
    .legal-contact-box { flex-direction: column; align-items: flex-start; }
  }
`;

const sections = [
  {
    num: "01",
    title: "Information We Collect",
    content: (
      <>
        <p className="legal-p">
          When you contact us through our website, request a quote, or engage
          Koworks for a project, we may collect the following information:
        </p>
        <ul className="legal-list">
          <li>Your name, email address, and phone number</li>
          <li>Your company or business name</li>
          <li>
            Project details, requirements, and any documents you share with us
          </li>
          <li>Communication history between you and our team</li>
          <li>
            Basic usage data from our website (pages visited, browser type) via
            analytics
          </li>
        </ul>
        <p className="legal-p">
          We do not collect sensitive personal data such as financial
          credentials, government ID numbers, or health information.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="legal-p">
          Information you provide is used solely for the following purposes:
        </p>
        <ul className="legal-list">
          <li>
            To respond to your inquiry and understand your project requirements
          </li>
          <li>
            To prepare and send proposals, quotes, and project documentation
          </li>
          <li>To communicate project updates, timelines, and deliverables</li>
          <li>To send invoices and manage project billing</li>
          <li>
            To improve our website and services based on general usage patterns
          </li>
        </ul>
        <div className="legal-highlight">
          <p>
            <strong>
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </strong>{" "}
            Your data is used only in the context of our professional engagement
            with you.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "03",
    title: "NDA & Project Confidentiality",
    content: (
      <>
        <p className="legal-p">
          All client engagements at Koworks are governed by a Non-Disclosure
          Agreement (NDA) signed before any project-specific discussion begins.
          This means:
        </p>
        <ul className="legal-list">
          <li>
            All project details, business logic, and technical specifications
            you share remain strictly confidential
          </li>
          <li>
            We do not disclose your project or its contents to any third party
            without your written consent
          </li>
          <li>
            Our team members involved in your project are bound by the same
            confidentiality obligations
          </li>
          <li>Confidentiality obligations survive the end of our engagement</li>
        </ul>
      </>
    ),
  },
  {
    num: "04",
    title: "Data Storage & Security",
    content: (
      <>
        <p className="legal-p">
          Project files, communications, and client data are stored using
          secure, industry-standard tools. We take reasonable technical and
          organisational measures to protect your information from unauthorised
          access, disclosure, or loss.
        </p>
        <p className="legal-p">
          Communication primarily takes place over encrypted channels (email,
          WhatsApp Business). Project files may be stored in cloud platforms
          including Google Drive and GitHub private repositories, accessible
          only to authorised team members.
        </p>
      </>
    ),
  },
  {
    num: "05",
    title: "Data Retention",
    content: (
      <>
        <p className="legal-p">
          We retain client information for as long as necessary to fulfil the
          project and our contractual obligations, and for a reasonable period
          thereafter for legal and business purposes.
        </p>
        <p className="legal-p">
          If you would like your information deleted from our records, you may
          request this by contacting us at <strong>hello@koworks.in</strong>. We
          will honour deletion requests within 30 days, except where retention
          is required by law.
        </p>
      </>
    ),
  },
  {
    num: "06",
    title: "Third-Party Services",
    content: (
      <>
        <p className="legal-p">
          Our website may use the following third-party services, each with
          their own privacy policies:
        </p>
        <ul className="legal-list">
          <li>Google Analytics — for anonymous website usage statistics</li>
          <li>WhatsApp Business — for project communication</li>
          <li>Email service providers — for general correspondence</li>
        </ul>
        <p className="legal-p">
          We do not embed advertising trackers or share personal data with
          advertising networks.
        </p>
      </>
    ),
  },
  {
    num: "07",
    title: "Your Rights",
    content: (
      <>
        <p className="legal-p">You have the right to:</p>
        <ul className="legal-list">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of any inaccurate information</li>
          <li>Request deletion of your data (subject to legal obligations)</li>
          <li>Withdraw consent for any communications at any time</li>
        </ul>
        <p className="legal-p">
          To exercise any of these rights, contact us at{" "}
          <strong>hello@koworks.in</strong>.
        </p>
      </>
    ),
  },
  {
    num: "08",
    title: "Changes to This Policy",
    content: (
      <>
        <p className="legal-p">
          We may update this Privacy Policy from time to time. When we do, we
          will update the effective date at the top of this page. Continued use
          of our website or services after any changes constitutes acceptance of
          the updated policy.
        </p>
        <p className="legal-p">
          If changes are material, we will notify active clients directly.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="legal-root">
      <style>{css}</style>

      <div className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-eyebrow">
            <div className="legal-eyebrow-dot" />
            <span className="legal-eyebrow-text">Legal</span>
          </div>
          <h1 className="legal-title">
            Privacy
            <br />
            <em>Policy</em>
          </h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Effective: January 2024</span>
            <span className="legal-meta-badge">
              Koworks · Mysore, Karnataka
            </span>
          </div>
        </div>
      </div>

      <div className="legal-body">
        <p className="legal-intro">
          Koworks ("we", "us", "our") is committed to protecting the privacy of
          every person who contacts us or engages our services. This policy
          explains what information we collect, how we use it, and the steps we
          take to keep it safe. If you have questions about anything here,
          please reach out at <strong>hello@koworks.in</strong>.
        </p>

        {sections.map((s) => (
          <div className="legal-section" key={s.num}>
            <p className="legal-section-num">Section {s.num}</p>
            <h2 className="legal-section-title">{s.title}</h2>
            {s.content}
          </div>
        ))}

        <div className="legal-contact-box">
          <div>
            <p className="legal-contact-title">Questions about this policy?</p>
            <p className="legal-contact-sub">
              Reach out and we'll respond within 24 hours.
            </p>
          </div>
          <a href="mailto:vishalcode2023@gmail.com" className="legal-contact-btn">
            vishalcode2023@gmail.com →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
