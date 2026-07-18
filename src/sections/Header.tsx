import { useState } from "react";
import { links } from "../lib/data";

const nav = [
  { n: "01", label: "Profile", href: "#profile" },
  { n: "02", label: "Work", href: "#work" },
  { n: "03", label: "Security", href: "#security" },
  { n: "04", label: "Experience", href: "#experience" },
  { n: "05", label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell bar">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="name">Mohamed Senator</span>
          <span className="tag mono-label">infra&nbsp;/&nbsp;ops</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.n} href={item.href} className="mono-label">
              <span className="n">{item.n}</span>
              {item.label}
            </a>
          ))}
          <span className="nav-avail mono-label">
            <span className="dot dot-pulse" />
            Open to roles
          </span>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        {nav.map((item) => (
          <a key={item.n} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <span className="mono-label">{item.n}</span>
          </a>
        ))}
        <a href={links.cv} onClick={() => setOpen(false)}>
          Download CV
          <span className="mono-label">pdf</span>
        </a>
      </nav>
    </header>
  );
}
