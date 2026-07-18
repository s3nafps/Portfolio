import { focusAreas, platforms } from "../lib/data";

export function Security() {
  return (
    <div className="dark-zone" id="security">
      <section className="security shell">
        <div className="section-head">
          <span className="mono-label">
            <span className="index">04</span>&nbsp;&nbsp;/&nbsp;&nbsp;Security research
          </span>
          <span className="mono-label kicker-note">authorized programs only</span>
        </div>

        <div className="sec-grid">
          <div>
            <p className="sec-lede">
              Off the clock, I hunt web vulnerabilities on bug bounty
              programs — <em>the same instinct as operations:</em> understand
              the system, find where it breaks, write it up so it gets fixed.
            </p>
            <p className="sec-body">
              Recon is just inventory. Exploitation is just a failing health
              check with consequences. The report is the part that matters —
              clear reproduction steps, honest impact, no noise.
            </p>

            <div className="focus-list">
              {focusAreas.map((f) => (
                <div className="focus-item" key={f.n}>
                  <span className="n mono-label">{f.n}.</span>
                  <span className="t">
                    {f.title}
                    <span className="s">{f.sub}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="platforms">
              <span className="k mono-label">Active on</span>
              {platforms.map((p) => (
                <a className="platform-row" key={p.label} href={p.href} target="_blank" rel="noreferrer">
                  <span>{p.label}</span>
                  <span className="handle">{p.handle} ↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="term" aria-label="Illustrative research workflow">
            <div className="term-bar">
              <span className="lights"><i /><i /><i /></span>
              <span>s3nafps@research — zsh</span>
            </div>
            <div className="term-body">
              <div><span className="p">$ </span><span className="c">cat scope.txt | dnsx -silent | httpx -silent &gt; live.txt</span></div>
              <div><span className="o"># map what the program actually exposes</span></div>
              <div><span className="p">$ </span><span className="c">katana -list live.txt -jc -kf all -d 3 &gt; urls.txt</span></div>
              <div><span className="o"># crawl, then read the interesting endpoints by hand</span></div>
              <div><span className="p">$ </span><span className="c">nuclei -l live.txt -t misconfiguration/ -t exposures/</span></div>
              <div><span className="o"># automation for breadth, eyes for depth</span></div>
              <div><span className="p">$ </span><span className="c">ffuf -u https://target.tld/FUZZ -w params.txt -mc 200,302</span></div>
              <div><span className="o"># authorization checks: same request, different identity</span></div>
              <div><span className="p">$ </span><span className="c">./report --title "IDOR on /api/v1/orders" --cwe 639</span></div>
              <div><span className="o"># minimal PoC, exact steps, honest severity</span></div>
              <div><span className="hl">→ submitted — waiting on triage</span></div>
              <div><span className="p">$ </span><span className="caret" /></div>
            </div>
          </div>
        </div>

        <div className="sec-meta">
          <div className="cell">
            <span className="k mono-label">Scope discipline</span>
            <span className="v">Authorized programs only — every test inside the published scope, no exceptions.</span>
          </div>
          <div className="cell">
            <span className="k mono-label">Tooling</span>
            <span className="v">Burp Suite, nuclei, ffuf, httpx, katana, subfinder — plus custom scripts when the target deserves it.</span>
          </div>
          <div className="cell">
            <span className="k mono-label">Overlap with ops</span>
            <span className="v">Attackers and on-call engineers read the same logs. Knowing one side sharpens the other.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
