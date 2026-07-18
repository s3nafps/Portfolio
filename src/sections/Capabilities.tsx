import { capabilities } from "../lib/data";

export function Capabilities() {
  return (
    <section className="caps shell" aria-label="Capabilities">
      <div className="section-head">
        <span className="mono-label">
          <span className="index">03</span>&nbsp;&nbsp;/&nbsp;&nbsp;Working set
        </span>
        <span className="mono-label" style={{ color: "var(--ink-40)" }}>
          What I can own on day one
        </span>
      </div>

      <div className="caps-grid">
        {capabilities.map((c) => (
          <div className="cap-col" key={c.num}>
            <span className="num mono-label">{c.num}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <ul>
              {c.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
