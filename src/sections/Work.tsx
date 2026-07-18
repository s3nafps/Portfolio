import { projects } from "../lib/data";

export function Work() {
  return (
    <section className="work shell" id="work">
      <div className="section-head">
        <span className="mono-label">
          <span className="index">02</span>&nbsp;&nbsp;/&nbsp;&nbsp;Selected work
        </span>
        <span className="mono-label" style={{ color: "var(--ink-40)" }}>
          {projects.length} public projects
        </span>
      </div>

      <div className="work-intro">
        <p>
          Tools and infrastructure built around problems I actually run into on
          the job — operational reliability, secure defaults, and automation
          with rollback. Each links to its repository.
        </p>
      </div>

      <div className="project-list">
        {projects.map((p) => (
          <article className="project-row" key={p.name}>
            <a className="abs" href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} />
            <span className="idx mono-label">{p.idx}</span>
            <span className="hex mono-label">{p.hex}</span>
            <h3 className="name">{p.name}</h3>
            <p className="desc">
              {p.desc}
              <span className="stack mono-label">{p.stack}</span>
            </p>
            <span className="yr mono-label">{p.year}</span>
            <span className="go arr">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
