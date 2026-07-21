import { Theme } from '@astryxdesign/core/theme'
import { Text } from '@astryxdesign/core/Text'
import { Link } from '@astryxdesign/core/Link'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'

const EMAIL = 'mohamed.senator@icloud.com'

const projects = [
  {
    idx: '01',
    hex: '0x5T',
    name: 'Stacksmith',
    desc: 'Self-hostable blueprint generator that turns requirements into reviewable Terraform / OpenTofu code, handed off as a GitHub pull request — no standing cloud credentials.',
    stack: 'TypeScript · Next.js · OpenTofu · Prisma',
    year: '2026',
    url: 'https://github.com/s3nafps/Stacksmith',
  },
  {
    idx: '02',
    hex: '0xRK',
    name: 'CloudOps Rescue Kit',
    desc: 'The support toolkit I run engagements with: VPS and Docker diagnostics, monitoring, tested backup and restore, incident reports, and clean client handover notes.',
    stack: 'Bash · Docker · Uptime Kuma · Linux',
    year: '2026',
    url: 'https://github.com/s3nafps/cloudops-rescue-kit',
  },
  {
    idx: '03',
    hex: '0xAA',
    name: 'AirGap Auditor',
    desc: 'Zero-dependency PowerShell compliance engine for networks with no outside access: PKI certificate monitoring, Active Directory auditing, endpoint validation.',
    stack: 'PowerShell · Active Directory · PKI',
    year: '2026',
    url: 'https://github.com/s3nafps/AirGap-Auditor',
  },
  {
    idx: '04',
    hex: '0xKV',
    name: 'GCP Kube Vanguard',
    desc: 'Private GKE foundation in Terraform — zero public nodes, Workload Identity, least-privilege IAM, and GitOps CI/CD from commit to cluster.',
    stack: 'Terraform · GKE · Workload Identity',
    year: '2026',
    url: 'https://github.com/s3nafps/GCP-Kube-Vanguard',
  },
  {
    idx: '05',
    hex: '0xGF',
    name: 'GCP Fortress Architecture',
    desc: 'Private-only Google Cloud web architecture: IAP-only SSH, no public IPs, auto-healing instance groups, and tfsec security scanning in CI.',
    stack: 'Terraform · GCP · IAP · tfsec',
    year: '2026',
    url: 'https://github.com/s3nafps/GCP-Fortress-Architecture',
  },
  {
    idx: '06',
    hex: '0xSC',
    name: 'State Ops Controller',
    desc: 'Idempotent PowerShell controller that moves workstations between production and air-gapped VLANs — preflight checks, locking, retries, rollback, and Event Log audit.',
    stack: 'PowerShell · Fortinet · VLANs',
    year: '2026',
    url: 'https://github.com/s3nafps/State-Ops-Controller',
  },
]

const capabilities = [
  {
    idx: '01',
    title: 'Support operations',
    text: 'L2 escalation, incident management, and root-cause notes. Documented so the next engineer starts from understanding.',
    items: [
      'Incident & escalation / ITIL workflows',
      'GLPI / Handover documentation',
      'Root-cause analysis',
    ],
  },
  {
    idx: '02',
    title: 'Systems & network',
    text: 'Enterprise environments kept available and patched — including regulated, air-gapped networks.',
    items: [
      'Windows Server · AD · GPO',
      'DNS · DHCP · PKI',
      'FortiGate · FortiWeb · FortiMail',
      'VPN & remote access',
    ],
  },
  {
    idx: '03',
    title: 'Cloud & DevOps',
    text: 'Google Cloud certified. Private-by-default infrastructure as code and containerized deployments with CI that checks itself.',
    items: [
      'GCP — Associate Cloud Engineer',
      'Terraform · OpenTofu',
      'Docker · Kubernetes (GKE)',
      'GitHub Actions · Linux VPS',
    ],
  },
  {
    idx: '04',
    title: 'Automation',
    text: 'Repetitive operations become scripts with visible state, safe defaults, and rollback.',
    items: [
      'PowerShell (advanced)',
      'Bash · Python',
      'Diagnostics tooling',
      'Runbooks & scheduled jobs',
    ],
  },
]

const experience = [
  {
    years: '2025 — Now',
    company: 'AGCE',
    role: 'IT Support — Infrastructure & Automation',
    text: 'National digital certification authority. Infrastructure support in a regulated, air-gapped environment: a containerized PowerShell diagnostics dashboard, FortiWeb administration automation, security audits, and critical patch deployment.',
  },
  {
    years: '2024',
    company: 'Agrofilm Packaging',
    role: 'Systems Administrator (contract)',
    text: 'Ran Windows Server and Active Directory, enforced security policy through GPO, and standardized provisioning — cutting new-hire onboarding time while acting as the L2 escalation point.',
  },
  {
    years: '2022 — 2023',
    company: 'Samsung',
    role: 'Systems Support Specialist',
    text: 'Kept 99.9% network availability for 500+ users. Operated Fortinet security appliances and VPN access, automated maintenance via GPO-deployed scripts, and built a training program that cut recurring tickets by 25%.',
  },
  {
    years: '2021 — 2022',
    company: 'IRIS Electronics · Brandt',
    role: 'Infrastructure Monitoring · IT Operations',
    text: '24/7 monitoring of manufacturing infrastructure at IRIS; ITIL-structured asset and incident workflows plus Exchange and Teams administration at Brandt.',
  },
]

const security = [
  {
    title: 'Access control',
    text: 'IDOR / BOLA, broken authorization, tenant isolation.',
  },
  {
    title: 'Attack surface',
    text: 'Subdomain enumeration, exposed panels, misconfiguration.',
  },
  {
    title: 'Method',
    text: 'Recon → hypothesis → minimal proof → actionable report.',
  },
  {
    title: 'Ethics',
    text: 'Authorized scope only, coordinated disclosure.',
  },
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>
}

export default function App() {
  return (
    <Theme theme={neutralTheme} mode="light">
      <header className="nav">
        <div className="container nav-inner">
          <a className="nav-name" href="#top">
            Mohamed Senator
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#experience">Experience</a>
            <a href="#security">Security</a>
            <a href="#contact">Contact</a>
            <a className="nav-cv" href="/Mohamed_Senator_CV_2026.pdf">
              CV
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        {/* Hero */}
        <section className="hero">
          <p className="hero-kicker rise rise-1">Cloud &amp; DevOps Support Engineer</p>
          <h1 className="hero-name rise rise-2">Mohamed Senator</h1>
          <p className="hero-role rise rise-2">Algiers, Algeria · UTC+1 · remote-ready</p>
          <div className="rise rise-3">
            <Text type="body" className="hero-statement" as="p">
              Systems and infrastructure engineer — I keep enterprise environments
              available, and turn manual operations into automated, documented
              workflows. Google Cloud Associate Cloud Engineer.
            </Text>
          </div>
          <dl className="hero-meta rise rise-4">
            <div className="hero-meta-row">
              <dt className="hero-meta-key">Role</dt>
              <dd>Cloud &amp; DevOps Support Engineer</dd>
            </div>
            <div className="hero-meta-row">
              <dt className="hero-meta-key">Location</dt>
              <dd>Algiers, Algeria · UTC+1 · remote-ready</dd>
            </div>
            <div className="hero-meta-row">
              <dt className="hero-meta-key">Stack</dt>
              <dd>Linux · Docker · GCP · Terraform · PowerShell</dd>
            </div>
            <div className="hero-meta-row">
              <dt className="hero-meta-key">Contact</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Work */}
        <section className="section" id="work">
          <h2 className="section-label">
            <span className="idx">01</span> Work
          </h2>
          <ol className="projects">
            {projects.map((p) => (
              <li className="project-row" key={p.idx}>
                <span className="project-index">
                  {p.idx} <span className="hex">{p.hex}</span>
                </span>
                <div className="project-body">
                  <h3 className="project-name">{p.name}</h3>
                  <Text type="body" color="secondary" className="project-desc" as="p">
                    {p.desc}
                  </Text>
                </div>
                <span className="project-stack">{p.stack}</span>
                <span className="project-year">{p.year}</span>
                <a className="project-link" href={p.url} target="_blank" rel="noreferrer">
                  Repository <Arrow />
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Capabilities */}
        <section className="section" id="capabilities">
          <h2 className="section-label">
            <span className="idx">02</span> Capabilities
          </h2>
          <div className="caps">
            {capabilities.map((c) => (
              <div className="cap" key={c.idx}>
                <div className="cap-head">
                  <span className="cap-idx">{c.idx}</span>
                  <h3 className="cap-title">{c.title}</h3>
                </div>
                <Text type="body" color="secondary" className="cap-text" as="p">
                  {c.text}
                </Text>
                <ul className="cap-list">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <h2 className="section-label">
            <span className="idx">03</span> Experience
          </h2>
          <ol className="xp">
            {experience.map((x) => (
              <li className="xp-row" key={x.years + x.company}>
                <span className="xp-years">{x.years}</span>
                <div>
                  <h3 className="xp-role">{x.role}</h3>
                  <p className="xp-company">{x.company}</p>
                  <Text type="body" color="secondary" className="xp-text" as="p">
                    {x.text}
                  </Text>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Security research */}
        <section className="section" id="security">
          <h2 className="section-label">
            <span className="idx">04</span> Security research
          </h2>
          <div className="sec-grid">
            {security.map((s) => (
              <div className="sec-item" key={s.title}>
                <h3 className="sec-title">{s.title}</h3>
                <Text type="body" color="secondary" className="sec-text" as="p">
                  {s.text}
                </Text>
              </div>
            ))}
          </div>
          <p className="sec-platforms">
            Platforms:{' '}
            <a href="https://hackerone.com/s3nafps" target="_blank" rel="noreferrer">
              HackerOne @s3nafps
            </a>
            {' · '}Intigriti{' · '}Bugcrowd
          </p>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <h2 className="section-label">
            <span className="idx">05</span> Contact
          </h2>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="contact-links">
            <Link href="https://github.com/s3nafps" isExternalLink>
              GitHub <Arrow />
            </Link>
            <Link href="https://linkedin.com/in/mohamedsenator" isExternalLink>
              LinkedIn <Arrow />
            </Link>
            <Link href="https://hackerone.com/s3nafps" isExternalLink>
              HackerOne <Arrow />
            </Link>
            <Link href="/Mohamed_Senator_CV_2026.pdf">
              Download CV <Arrow />
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-wordmark" aria-hidden="true">
            MOHAMED SENATOR
          </p>
          <div className="footer-meta">
            <span>© 2026 Mohamed Senator</span>
            <span>Algiers · UTC+1</span>
          </div>
        </div>
      </footer>
    </Theme>
  )
}
