import { heroMeta, links } from "../lib/data";

export function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-top mono-label">
        <span>Portfolio — 2026</span>
        <span className="avail">
          <span className="dot dot-pulse" />
          Available for Cloud / DevOps support roles
        </span>
      </div>

      <div className="hero-mid">
        <h1 className="hero-name">
          Mohamed
          <span className="second">
            Senator<span className="dot-end">.</span>
          </span>
        </h1>

        <p className="hero-intro">
          I keep production systems running and automate the work around them —{" "}
          <em>Linux servers, Docker deployments, monitoring, backups,</em> and
          the documentation that makes the next incident shorter than the last.
        </p>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#work">
            Selected work <span className="arr">↓</span>
          </a>
          <a className="btn btn-ghost" href={links.cv} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="link-plain" href={links.github} target="_blank" rel="noreferrer">
            github.com/s3nafps <span className="arr">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-meta">
        {heroMeta.map((cell) => (
          <div className="cell" key={cell.k}>
            <span className="k mono-label">{cell.k}</span>
            <span className="v">
              {cell.href ? <a href={cell.href}>{cell.v}</a> : cell.v}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
