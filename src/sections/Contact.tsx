import { links } from "../lib/data";

const bigLinks = [
  { label: "mohamed.senator@icloud.com", meta: "Email — fastest", href: `mailto:${links.email}` },
  { label: "LinkedIn", meta: "in/mohamedsenator", href: links.linkedin },
  { label: "GitHub", meta: "@s3nafps", href: links.github },
  { label: "HackerOne", meta: "@s3nafps", href: links.hackerone },
];

export function Contact() {
  return (
    <div className="dark-zone" id="contact">
      <section className="contact shell">
        <div className="section-head">
          <span className="mono-label">
            <span className="index">06</span>&nbsp;&nbsp;/&nbsp;&nbsp;Contact
          </span>
          <span className="mono-label" style={{ color: "var(--ash-40)" }}>
            replies within a day
          </span>
        </div>

        <h2 className="contact-lede">
          Have a system that needs to <em>stay up?</em> A queue of incidents
          that needs to <em>shrink?</em> Let's talk.
        </h2>

        <div className="big-links">
          {bigLinks.map((l) => (
            <a
              className="big-link"
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <span className="label">{l.label}</span>
              <span className="meta">{l.meta}</span>
              <span className="arr">↗</span>
            </a>
          ))}
        </div>

        <div className="footer-word" aria-hidden="true">
          <div className="word">
            mohamed senator<span className="reg">©26</span>
          </div>
        </div>

        <div className="footer-meta mono-label">
          <span>© 2026 Mohamed Senator — Algiers, Algeria</span>
          <span>
            <a href={links.cv}>CV (PDF)</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a href={links.github} target="_blank" rel="noreferrer">Source on GitHub</a>
          </span>
          <span>Designed & built by M. Senator</span>
        </div>
      </section>
    </div>
  );
}
