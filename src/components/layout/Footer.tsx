
const currentYear = new Date().getFullYear();

const CONTACT = {
  email: "shreyanshdube2@gmail.com",
  phone: "+919580568398",
  phoneDisplay: "+91 95805 68398",
  github: "https://github.com/rtjshreyd",
  linkedin: "https://www.linkedin.com/in/shreyansh-dubey-b09b21136/",
};

function CoffeeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M4 7h14v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7Z" />
      <path d="M18 9h1a3 3 0 1 1 0 6h-1" />
      <path d="M2 22h18" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 1 1 .001-4.121 2.06 2.06 0 0 1-.001 4.121ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-intro">
            <span className="section-eyebrow">
              <span className="eyebrow-line" />
              CONTACT
            </span>

            <h2>
              Have an interesting
              <br />
              <span className="gradient-text">problem to solve?</span>
            </h2>

            <p>
              Whether it&apos;s an ambitious idea, an engineering challenge,
              or an opportunity to build something meaningful,
              let&apos;s connect.
            </p>

            <a
              className="footer-email-cta"
              href={`mailto:${CONTACT.email}`}
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="footer-contact">
            <span className="footer-column-label">GET IN TOUCH</span>

            <a href={`mailto:${CONTACT.email}`}>
              <span className="footer-contact-icon" aria-hidden="true">
                ✉
              </span>
              {CONTACT.email}
            </a>

            <a href={`tel:${CONTACT.phone}`}>
              <span className="footer-contact-icon" aria-hidden="true">
                ☎
              </span>
              {CONTACT.phoneDisplay}
            </a>

            <span className="footer-column-label footer-social-label">
              FIND ME ONLINE
            </span>

            <div className="footer-socials">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <a href="#top" className="footer-brand" aria-label="Back to top">
            SD<span>.</span>
          </a>

          <p className="footer-copyright">
            © {currentYear} Shreyansh Dubey. All rights reserved.
          </p>

          <p className="footer-made">
            Designed &amp; built with <CoffeeIcon /> and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
