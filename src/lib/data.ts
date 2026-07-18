export const links = {
  email: "mohamed.senator@icloud.com",
  github: "https://github.com/s3nafps",
  linkedin: "https://linkedin.com/in/mohamedsenator",
  hackerone: "https://hackerone.com/s3nafps",
  intigriti: "https://intigriti.com",
  bugcrowd: "https://bugcrowd.com",
  cv: "/Mohamed_Senator_CV_2026.pdf",
};

export const projects = [
  {
    idx: "01",
    hex: "0x5T",
    name: "Stacksmith",
    desc: "Self-hostable blueprint generator that turns requirements into reviewable Terraform / OpenTofu code, handed off as a GitHub pull request — no standing cloud credentials.",
    stack: "TypeScript · Next.js · OpenTofu · Prisma",
    year: "2026",
    href: "https://github.com/s3nafps/Stacksmith",
  },
  {
    idx: "02",
    hex: "0xRK",
    name: "CloudOps Rescue Kit",
    desc: "The support toolkit I run engagements with: VPS and Docker diagnostics, monitoring, tested backup and restore, incident reports, and clean client handover notes.",
    stack: "Bash · Docker · Uptime Kuma · Linux",
    year: "2026",
    href: "https://github.com/s3nafps/cloudops-rescue-kit",
  },
  {
    idx: "03",
    hex: "0xAA",
    name: "AirGap Auditor",
    desc: "Zero-dependency PowerShell compliance engine for networks with no outside access: PKI certificate monitoring, Active Directory auditing, endpoint validation.",
    stack: "PowerShell · Active Directory · PKI",
    year: "2026",
    href: "https://github.com/s3nafps/AirGap-Auditor",
  },
  {
    idx: "04",
    hex: "0xKV",
    name: "GCP Kube Vanguard",
    desc: "Private GKE foundation in Terraform — zero public nodes, Workload Identity, least-privilege IAM, and GitOps CI/CD from commit to cluster.",
    stack: "Terraform · GKE · Workload Identity",
    year: "2026",
    href: "https://github.com/s3nafps/GCP-Kube-Vanguard",
  },
  {
    idx: "05",
    hex: "0xGF",
    name: "GCP Fortress Architecture",
    desc: "Private-only Google Cloud web architecture: IAP-only SSH, no public IPs, auto-healing instance groups, and tfsec security scanning in CI.",
    stack: "Terraform · GCP · IAP · tfsec",
    year: "2026",
    href: "https://github.com/s3nafps/GCP-Fortress-Architecture",
  },
  {
    idx: "06",
    hex: "0xSC",
    name: "State Ops Controller",
    desc: "Idempotent PowerShell controller that moves workstations between production and air-gapped VLANs — preflight checks, locking, retries, rollback, and Event Log audit.",
    stack: "PowerShell · Fortinet · VLANs",
    year: "2026",
    href: "https://github.com/s3nafps/State-Ops-Controller",
  },
];

export const capabilities = [
  {
    num: "01",
    title: "Support operations",
    text: "L2 escalation, incident management, and root-cause notes. I document systems so the next engineer starts from understanding, not from scratch.",
    items: ["Incident & escalation", "ITIL workflows / GLPI", "Handover documentation", "Root-cause analysis"],
  },
  {
    num: "02",
    title: "Systems & network",
    text: "Enterprise environments kept available and patched — including regulated, air-gapped networks where outside tooling is not an option.",
    items: ["Windows Server · AD · GPO", "DNS / DHCP · PKI", "FortiGate · FortiWeb · FortiMail", "VPN & remote access"],
  },
  {
    num: "03",
    title: "Cloud & DevOps",
    text: "Google Cloud certified. I build private-by-default infrastructure as code and containerized deployments with CI that checks itself.",
    items: ["GCP — Associate Cloud Engineer", "Terraform / OpenTofu", "Docker · Kubernetes (GKE)", "GitHub Actions · Linux VPS"],
  },
  {
    num: "04",
    title: "Automation",
    text: "Repetitive operations become scripts with visible state, safe defaults, and rollback — the difference between helping once and helping permanently.",
    items: ["PowerShell (advanced)", "Bash · Python", "Diagnostics tooling", "Runbooks & scheduled jobs"],
  },
];

export const experience = [
  {
    years: "2025 — Now",
    company: "AGCE",
    role: "IT Support — Infrastructure & Automation",
    what: "National digital certification authority. Infrastructure support in a regulated, air-gapped environment: a containerized PowerShell diagnostics dashboard, FortiWeb administration automation, security audits, and critical patch deployment.",
  },
  {
    years: "2024",
    company: "Agrofilm Packaging",
    role: "Systems Administrator (contract)",
    what: "Ran Windows Server and Active Directory, enforced security policy through GPO, and standardized provisioning — cutting new-hire onboarding time while acting as the L2 escalation point.",
  },
  {
    years: "2022 — 2023",
    company: "Samsung",
    role: "Systems Support Specialist",
    what: "Kept 99.9% network availability for 500+ users. Operated Fortinet security appliances and VPN access, automated maintenance via GPO-deployed scripts, and built a training program that cut recurring tickets by 25%.",
  },
  {
    years: "2021 — 2022",
    company: "IRIS Electronics · Brandt",
    role: "Infrastructure Monitoring · IT Operations",
    what: "24/7 monitoring of manufacturing infrastructure at IRIS; ITIL-structured asset and incident workflows plus Exchange and Teams administration at Brandt.",
  },
];

export const focusAreas = [
  {
    n: "a",
    title: "Access control",
    sub: "IDOR / BOLA, broken authorization, tenant isolation mistakes",
  },
  {
    n: "b",
    title: "Attack surface",
    sub: "Subdomain enumeration, exposed panels, forgotten assets, misconfiguration",
  },
  {
    n: "c",
    title: "Method",
    sub: "Recon → hypothesis → minimal proof → a report an engineer can act on",
  },
  {
    n: "d",
    title: "Ethics",
    sub: "Authorized scope only. Coordinated disclosure, every time",
  },
];

export const platforms = [
  { label: "HackerOne", handle: "@s3nafps", href: "https://hackerone.com/s3nafps" },
  { label: "Intigriti", handle: "researcher", href: "https://intigriti.com" },
  { label: "Bugcrowd", handle: "researcher", href: "https://bugcrowd.com" },
];

export const heroMeta = [
  { k: "Role", v: "Cloud & DevOps Support Engineer" },
  { k: "Location", v: "Algiers, Algeria · UTC+1 · remote-ready" },
  { k: "Stack", v: "Linux · Docker · GCP · Terraform · PowerShell" },
  { k: "Contact", v: "mohamed.senator@icloud.com", href: "mailto:mohamed.senator@icloud.com" },
];
