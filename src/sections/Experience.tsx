import { experience } from "../lib/data";

export function Experience() {
  return (
    <section className="experience shell" id="experience">
      <div className="section-head">
        <span className="mono-label">
          <span className="index">05</span>&nbsp;&nbsp;/&nbsp;&nbsp;Experience
        </span>
        <span className="mono-label" style={{ color: "var(--ink-40)" }}>
          2021 — present
        </span>
      </div>

      <div className="xp-list">
        {experience.map((x) => (
          <div className="xp-row" key={x.company}>
            <span className="yrs mono-label">{x.years}</span>
            <h3 className="co">
              {x.company}
              <span className="role">{x.role}</span>
            </h3>
            <p className="what">{x.what}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
