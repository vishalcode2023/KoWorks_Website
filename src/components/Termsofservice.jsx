import Footer from "../components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700;1,900&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .legal-root { font-family: 'Cabinet Grotesk', sans-serif; background: #fff; color: #0e0e0c; }

  .legal-hero { background: #fafaf8; border-bottom: 1px solid #e8e8e4; padding: 100px 64px 64px; }
  .legal-hero-inner { max-width: 900px; margin: 0 auto; }

  .legal-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(240,78,26,0.07); border: 1px solid rgba(240,78,26,0.2); border-radius: 40px; padding: 5px 14px 5px 8px; margin-bottom: 22px; }
  .legal-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: #F04E1A; animation: ldot 2s ease-in-out infinite; }
  @keyframes ldot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.6);} }
  .legal-eyebrow-text { font-size: 11px; font-weight: 700; color: #F04E1A; letter-spacing: .12em; text-transform: uppercase; }

  .legal-title { font-family: 'Fraunces', serif; font-size: clamp(40px,5vw,68px); font-weight: 900; color: #0e0e0c; letter-spacing: -.04em; line-height: 1; margin: 0 0 20px; }
  .legal-title em { color: #F04E1A; font-style: italic; font-weight: 300; }

  .legal-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  .legal-meta-badge { font-size: 12.5px; font-weight: 600; color: #888; background: #fff; border: 1px solid #e8e8e4; border-radius: 20px; padding: 4px 12px; }

  .legal-body { max-width: 900px; margin: 0 auto; padding: 72px 64px 96px; }

  .legal-intro { font-size: 15.5px; color: #555; line-height: 1.8; margin-bottom: 56px; padding-bottom: 40px; border-bottom: 1px solid #e8e8e4; }

  .legal-section { margin-bottom: 52px; }
  .legal-section-num { font-size: 11px; font-weight: 700; color: #F04E1A; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
  .legal-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 700; color: #0e0e0c; letter-spacing: -.03em; margin: 0 0 16px; }

  .legal-p { font-size: 14.5px; color: #555; line-height: 1.8; margin-bottom: 14px; }
  .legal-p:last-child { margin-bottom: 0; }

  .legal-list { padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
  .legal-list li { font-size: 14.5px; color: #555; line-height: 1.7; padding-left: 20px; position: relative; }
  .legal-list li::before { content: '—'; position: absolute; left: 0; color: #F04E1A; font-weight: 700; }

  .legal-highlight { background: rgba(240,78,26,0.05); border: 1px solid rgba(240,78,26,0.15); border-left: 3px solid #F04E1A; border-radius: 0 12px 12px 0; padding: 16px 20px; margin: 20px 0; }
  .legal-highlight p { font-size: 14px; color: #555; line-height: 1.7; margin: 0; }
  .legal-highlight strong { color: #0e0e0c; }

  .legal-contact-box { background: #0e0e0c; border-radius: 20px; padding: 32px 36px; margin-top: 56px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
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
    title: "Agreement to Terms",
    content: (
      <>
        <p className="legal-p">
          By engaging Koworks for any service — whether through our website,
          email, WhatsApp, or any other means — you agree to these Terms of
          Service. If you do not agree, please do not engage our services.
        </p>
        <p className="legal-p">
          These terms govern all engagements between Koworks ("we", "us", "our")
          and clients ("you", "your") for the delivery of software development,
          design, and related services.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Scope of Services",
    content: (
      <>
        <p className="legal-p">
          The specific scope, timeline, and deliverables for each engagement are
          defined in a written project proposal or statement of work agreed upon
          by both parties before work begins. Services may include:
        </p>
        <ul className="legal-list">
          <li>Custom software and web application development</li>
          <li>Inventory management and billing system development</li>
          <li>School management ERP development</li>
          <li>Website design and development</li>
          <li>UI/UX design services</li>
          <li>Social media marketing and strategy</li>
        </ul>
        <div className="legal-highlight">
          <p>
            <strong>
              Work outside the agreed scope will be discussed and quoted
              separately.
            </strong>{" "}
            We will always communicate before beginning any work that falls
            outside the original agreement.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "03",
    title: "Payment Terms",
    content: (
      <>
        <p className="legal-p">
          Payment schedules are outlined in each individual project proposal.
          Standard terms are:
        </p>
        <ul className="legal-list">
          <li>A deposit (typically 30–50%) is required before work begins</li>
          <li>Milestone-based payments may apply for larger projects</li>
          <li>
            Final payment is due before final delivery and source code handover
          </li>
          <li>GST invoicing is available on request</li>
        </ul>
        <p className="legal-p">
          Payments are non-refundable once the corresponding work phase has been
          delivered, except as outlined in our refund terms below.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Intellectual Property & Ownership",
    content: (
      <>
        <p className="legal-p">
          Upon receipt of full payment, all intellectual property rights to the
          deliverables — including source code, design assets, and documentation
          — are transferred to the client. Koworks retains no ongoing ownership
          rights over work that has been paid for in full.
        </p>
        <ul className="legal-list">
          <li>Full source code is handed over at project completion</li>
          <li>
            Clients receive complete ownership of all custom code written for
            their project
          </li>
          <li>
            Open-source libraries used in the project remain under their
            respective licences
          </li>
          <li>
            Koworks may showcase the project publicly (e.g., in our portfolio)
            unless the client requests otherwise in writing
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "Client Responsibilities",
    content: (
      <>
        <p className="legal-p">
          A successful project requires active participation from both parties.
          As a client, you agree to:
        </p>
        <ul className="legal-list">
          <li>Provide clear, timely feedback at agreed project milestones</li>
          <li>
            Supply all required content, assets, credentials, and access in a
            reasonable timeframe
          </li>
          <li>Designate a single point of contact for project communication</li>
          <li>Make payments as agreed in the project proposal</li>
          <li>Notify us promptly of any changes to requirements</li>
        </ul>
        <p className="legal-p">
          Delays caused by late feedback or missing materials from the client
          may result in timeline adjustments, which we will communicate
          transparently.
        </p>
      </>
    ),
  },
  {
    num: "06",
    title: "Post-Launch Support",
    content: (
      <>
        <p className="legal-p">
          All Koworks projects include{" "}
          <strong>6 months of free post-launch support</strong>, which covers:
        </p>
        <ul className="legal-list">
          <li>Bug fixes for issues arising from our code</li>
          <li>Minor adjustments within the original scope</li>
          <li>Guidance on using the delivered system</li>
        </ul>
        <p className="legal-p">
          Post-launch support does not cover new features, changes to
          requirements, third-party service failures, or issues caused by
          client-side modifications to the codebase. After the support period,
          ongoing maintenance is available under a separate agreement.
        </p>
      </>
    ),
  },
  {
    num: "07",
    title: "Confidentiality",
    content: (
      <>
        <p className="legal-p">
          All project-related information shared by clients is treated as
          confidential. A Non-Disclosure Agreement (NDA) is signed before any
          project discussion begins. Our confidentiality obligations are
          detailed in the NDA and remain in effect indefinitely.
        </p>
        <p className="legal-p">
          Similarly, any internal tools, processes, or pricing shared by Koworks
          with clients should be treated as confidential and not disclosed to
          third parties.
        </p>
      </>
    ),
  },
  {
    num: "08",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="legal-p">
          Koworks is not liable for any indirect, incidental, or consequential
          damages arising from the use of our deliverables, including but not
          limited to loss of revenue, data loss, or business interruption.
        </p>
        <p className="legal-p">
          Our total liability in any circumstance is limited to the amount paid
          by the client for the specific project in question.
        </p>
        <div className="legal-highlight">
          <p>
            We take our work seriously and stand behind what we deliver. If
            there is a problem with our work, we will fix it — but liability for
            downstream business impacts falls outside our scope.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "09",
    title: "Termination",
    content: (
      <>
        <p className="legal-p">
          Either party may terminate an engagement with written notice. In the
          event of termination:
        </p>
        <ul className="legal-list">
          <li>
            The client is responsible for payment of all work completed up to
            the termination date
          </li>
          <li>
            Koworks will deliver all completed work and assets to the client
          </li>
          <li>Deposits are non-refundable if work has already begun</li>
          <li>Confidentiality obligations continue after termination</li>
        </ul>
      </>
    ),
  },
  {
    num: "10",
    title: "Governing Law",
    content: (
      <>
        <p className="legal-p">
          These Terms of Service are governed by the laws of India. Any disputes
          arising from these terms or from our engagements shall be subject to
          the jurisdiction of courts in Mysore, Karnataka, India.
        </p>
        <p className="legal-p">
          We prefer to resolve any disagreements directly and in good faith
          before involving legal processes.
        </p>
      </>
    ),
  },
];

export default function TermsOfService() {
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
            Terms of
            <br />
            <em>Service</em>
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
          These Terms of Service govern the relationship between Koworks and its
          clients. We've written these in plain language so they're easy to
          understand. If anything is unclear or you have questions before
          engaging us, please contact <strong>hello@koworks.in</strong> — we're
          happy to discuss.
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
            <p className="legal-contact-title">Questions about these terms?</p>
            <p className="legal-contact-sub">
              We'll give you a straight answer within 24 hours.
            </p>
          </div>
          <a href="mailto:info@koworks.tech" className="legal-contact-btn">
            info@koworks.tech →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
