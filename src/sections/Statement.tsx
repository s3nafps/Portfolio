export function Statement() {
  return (
    <section className="statement shell" id="profile">
      <div className="section-head">
        <span className="mono-label">
          <span className="index">01</span>&nbsp;&nbsp;/&nbsp;&nbsp;Profile
        </span>
        <span className="mono-label" style={{ color: "var(--ink-40)" }}>
          Algiers, DZ
        </span>
      </div>

      <div className="statement-grid" style={{ marginTop: "clamp(36px, 5vw, 64px)" }}>
        <span className="mono-label" style={{ color: "var(--ink-40)" }}>
          The short version
        </span>
        <div>
          <p className="statement-text">
            Five years keeping enterprise infrastructure alive — from a national
            certification authority's <em>air-gapped network</em> to a 500-user
            Samsung campus. I like systems that are boring, because they were
            built properly.
          </p>
          <p className="statement-sub">
            My background is hands-on operations: tracing ugly incidents,
            managing identity and network services, and turning the fixes into
            scripts and runbooks so they stay fixed. These days that same
            instinct goes into cloud infrastructure as code — and into
            authorized security research after hours.
          </p>

          <div className="fact-rows">
            <div className="fact-row">
              <span className="k mono-label">Certification</span>
              <span className="v">Google Cloud Associate Cloud Engineer (ACE)</span>
              <span className="d">Issued Feb 2026</span>
            </div>
            <div className="fact-row">
              <span className="k mono-label">Education</span>
              <span className="v">BTS — Database Management, INSFP Baiche Abdelkader</span>
              <span className="d">Sétif, Algeria</span>
            </div>
            <div className="fact-row">
              <span className="k mono-label">Focus</span>
              <span className="v">Cloud support · DevOps support · Linux / application support</span>
              <span className="d">Full-time or contract</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
