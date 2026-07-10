import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Cloud,
  Github,
  Linkedin,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { CopyEmail } from "@/components/CopyEmail";
import { MobileNav } from "@/components/MobileNav";

const github = "https://github.com/s3nafps";
const linkedin = "https://linkedin.com/in/mohamedsenator";
const email = "mohamed.senator@icloud.com";

const projects = [
  {
    index: "01",
    name: "CloudOps Rescue Kit",
    eyebrow: "Featured / Operations",
    description:
      "A practical support toolkit for VPS and Docker diagnostics, health checks, monitoring, tested backups, incident reports, and clean client handovers.",
    stack: ["Bash", "Docker", "Uptime Kuma", "GitHub Actions"],
    image: "/projects/cloudops-rescue.webp",
    imageAlt: "Illustrated CloudOps system with a server, containers, monitoring, and verified backup vault",
    href: "https://github.com/s3nafps/cloudops-rescue-kit",
    tone: "orange",
  },
  {
    index: "02",
    name: "AirGap Auditor",
    eyebrow: "Security / Windows",
    description:
      "Zero-dependency PowerShell auditing for hardened Windows, Active Directory, and PKI environments where outside services are not an option.",
    stack: ["PowerShell", "Windows", "Active Directory", "PKI"],
    image: "/projects/airgap-auditor.webp",
    imageAlt: "Illustrated air-gapped workstation and server inside a protected compliance scanning chamber",
    href: "https://github.com/s3nafps/AirGap-Auditor",
    tone: "lime",
  },
  {
    index: "03",
    name: "GCP Fortress",
    eyebrow: "Cloud / Infrastructure as Code",
    description:
      "A private Google Cloud architecture with managed instance groups, global load balancing, IAP-only access, auto-healing, and CI security checks.",
    stack: ["Terraform", "Google Cloud", "IAP", "tfsec"],
    image: "/projects/gcp-fortress.webp",
    imageAlt: "Illustrated private multi-zone cloud fortress behind a secure global gateway",
    href: "https://github.com/s3nafps/GCP-Fortress-Architecture",
    tone: "blue",
  },
  {
    index: "04",
    name: "Stacksmith",
    eyebrow: "Product / Developer tools",
    description:
      "A self-hostable platform that generates reviewable Terraform and OpenTofu blueprints without keeping permanent cloud credentials.",
    stack: ["Next.js", "TypeScript", "OpenTofu", "Prisma"],
    image: "/projects/stacksmith.webp",
    imageAlt: "Illustrated infrastructure blueprint forge producing validated modular cloud components",
    href: "https://github.com/s3nafps/Stacksmith",
    tone: "violet",
  },
  {
    index: "05",
    name: "GCP Kube Vanguard",
    eyebrow: "Kubernetes / Security",
    description:
      "A private GKE foundation with Workload Identity, controlled egress, least-privilege IAM, Artifact Registry, and CI/CD automation.",
    stack: ["GKE", "Kubernetes", "Terraform", "Workload Identity"],
    image: "/projects/gcp-kube-vanguard.webp",
    imageAlt: "Illustrated private compute cluster with protected identity, registry, and controlled network paths",
    href: "https://github.com/s3nafps/GCP-Kube-Vanguard",
    tone: "blue",
  },
  {
    index: "06",
    name: "State Ops Controller",
    eyebrow: "Automation / Networking",
    description:
      "An idempotent workstation network-profile controller with preflight validation, locks, retries, rollback, and Windows Event Log auditing.",
    stack: ["PowerShell", "VLANs", "Fortinet", "Event Log"],
    image: "/projects/state-ops-controller.webp",
    imageAlt: "Illustrated network state controller switching safely between two audited network profiles",
    href: "https://github.com/s3nafps/State-Ops-Controller",
    tone: "orange",
  },
] as const;

const experience = [
  {
    years: "2025 — Now",
    company: "AGCE",
    role: "IT Support · Infrastructure & Automation",
    summary: "Windows, network, security infrastructure, diagnostics, patching, and automation in a regulated air-gapped environment.",
  },
  {
    years: "2024",
    company: "Agrofilm Packaging",
    role: "Systems Administrator",
    summary: "Windows Server, identity, DNS/DHCP, Group Policy, permissions, and workstation lifecycle operations.",
  },
  {
    years: "2022 — 2023",
    company: "Samsung Algeria",
    role: "Systems Support Specialist",
    summary: "Enterprise systems and network support for 500+ users, Fortinet operations, VPN access, and endpoint automation.",
  },
  {
    years: "2021 — 2022",
    company: "IRIS & Brandt Algeria",
    role: "Infrastructure Monitoring · IT Operations",
    summary: "24/7 monitoring, incident escalation, asset workflows, Microsoft services, and ITIL-aligned operations.",
  },
] as const;

const capabilities = [
  { icon: Network, number: "01", title: "Infrastructure", text: "Windows Server, Active Directory, DNS, DHCP, Fortinet, VPN, VLANs, PKI, and enterprise support." },
  { icon: Terminal, number: "02", title: "Automation", text: "PowerShell, Bash, repeatable diagnostics, state-safe operations, runbooks, and incident-ready reporting." },
  { icon: Cloud, number: "03", title: "Cloud & DevOps", text: "Google Cloud, Terraform, OpenTofu, Docker, Linux VPS, Kubernetes, GitHub Actions, and CI/CD." },
  { icon: Sparkles, number: "04", title: "AI-assisted building", text: "Agents accelerate research and implementation while architecture, security, validation, and deployment remain deliberate." },
] as const;

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mohamed Senator, home">
          <span>MS</span>
          <small>Infrastructure &amp; automation</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
        <MobileNav />
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="availability"><span /> Available for Cloud / DevOps opportunities</div>
            <p className="hero-kicker">Mohamed Senator · Algiers, Algeria</p>
            <h1>
              Infrastructure that stays
              <em> calm under pressure.</em>
            </h1>
            <p className="hero-intro">
              I support complex systems, automate repetitive operations, and build secure tools that turn infrastructure work into clear, repeatable outcomes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDown size={17} /></a>
              <a className="button button-secondary" href={github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional snapshot">
            <div className="panel-topline"><span>System snapshot</span><span className="panel-live">Live</span></div>
            <div className="portrait-wrap">
              <Image
                src="/projects/cloudops-rescue.webp"
                alt="CloudOps infrastructure with monitored servers, containers, and verified backups"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 36vw"
              />
              <div className="portrait-grid" aria-hidden="true" />
              <div className="portrait-label"><MapPin size={14} /> Algiers · DZ</div>
            </div>
            <div className="panel-metrics">
              <div><strong>5+</strong><span>Years in IT operations</span></div>
              <div><strong>500+</strong><span>Enterprise users supported</span></div>
              <div><strong>GCP</strong><span>Associate Cloud Engineer</span></div>
              <div><strong>24/7</strong><span>Operations mindset</span></div>
            </div>
          </aside>
        </section>

        <div className="signal-strip" aria-label="Key technologies">
          <div>
            <span>PowerShell</span><i>✦</i><span>Google Cloud</span><i>✦</i><span>Docker</span><i>✦</i><span>Terraform</span><i>✦</i><span>Security</span><i>✦</i><span>Automation</span>
          </div>
        </div>

        <section className="work shell section" id="work">
          <div className="section-heading">
            <div><span className="section-index">01 / SELECTED WORK</span><h2>Proof over promises.</h2></div>
            <p>Public projects built around problems I actually understand: operational reliability, secure infrastructure, and automation.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.tone}`} key={project.name}>
                <div className="project-top"><span>{project.index}</span><span>{project.eyebrow}</span></div>
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 980px) 100vw, 50vw"
                  />
                  <span className="project-image-index">{project.index}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>
                  View repository <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="shell about-grid">
            <div className="section-heading about-heading"><div><span className="section-index">02 / ABOUT</span><h2>Operator first.<br />Builder always.</h2></div></div>
            <div className="about-copy">
              <p className="about-lead">I work where infrastructure, security, automation, and support meet.</p>
              <p>My foundation is hands-on IT operations: supporting users, tracing difficult incidents, managing identity and network services, and keeping systems useful under real constraints—including regulated and air-gapped environments.</p>
              <p>That operational experience shapes what I build. I prefer tools with safe defaults, visible state, rollback paths, useful documentation, and outputs another engineer can trust.</p>
              <div className="cert-card">
                <BadgeCheck aria-hidden="true" size={28} />
                <div><span>Certified</span><strong>Google Cloud Associate Cloud Engineer</strong><small>Issued February 2026</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities shell section" aria-labelledby="capabilities-title">
          <div className="section-heading compact"><div><span className="section-index">03 / CAPABILITIES</span><h2 id="capabilities-title">The working set.</h2></div></div>
          <div className="capability-list">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return <article key={item.title}><span className="cap-number">{item.number}</span><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="shell">
            <div className="section-heading"><div><span className="section-index">04 / EXPERIENCE</span><h2>Built in production.</h2></div><p>Five years across enterprise support, systems administration, monitoring, and regulated infrastructure.</p></div>
            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.company}-${item.years}`}>
                  <time>{item.years}</time><div><span>{item.company}</span><h3>{item.role}</h3><p>{item.summary}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact shell section" id="contact">
          <div className="contact-card">
            <div className="contact-icon" aria-hidden="true"><Boxes /></div>
            <span className="section-index">05 / CONTACT</span>
            <h2>Have a hard problem?<br /><em>Let&apos;s make it tractable.</em></h2>
            <p>Open to Cloud/DevOps support roles, infrastructure automation work, and practical product collaborations.</p>
            <div className="contact-actions">
              <a className="contact-link contact-main" href={`mailto:${email}`}>{email} <ArrowUpRight size={18} /></a>
              <CopyEmail />
              <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a className="contact-link" href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <div><ShieldCheck size={16} /> Secure systems · Useful automation · Operational proof</div>
        <span>© 2026 Mohamed Senator</span>
      </footer>
    </>
  );
}
