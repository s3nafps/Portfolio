import {
  BadgeCheck,
  Cloud,
  Database,
  GitPullRequestArrow,
  Globe2,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ProjectVisual =
  | "stacksmith"
  | "airgap"
  | "stateops"
  | "fortress"
  | "kube"
  | "portfolio"
  | "generic";

export type ProjectStatus =
  | "featured"
  | "active"
  | "experimental"
  | "archived"
  | "lab";

export type PortfolioProject = {
  name: string;
  repo: string;
  description: string;
  language: string;
  topics: string[];
  homepage?: string;
  stars: number;
  updatedAt: string;
  archived: boolean;
  fork: boolean;
  status: ProjectStatus;
  visual: ProjectVisual;
  featured: boolean;
  problem: string;
  built: string;
  architecture: string;
  security: string;
  technologies: string[];
};

export type GithubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  homepage: string | null;
  stargazers_count: number;
  updated_at: string;
  archived: boolean;
  fork: boolean;
};

export type ServicePackage = {
  name: string;
  price: string;
  summary: string;
  outcomes: string[];
  audience: string;
  delivery: string;
  docUrl: string;
};

export type PlaybookItem = {
  name: string;
  summary: string;
  outcomes: string[];
  audience: string;
  delivery: string;
  docUrl: string;
};

export const SITE = {
  name: "Mohamed Senator",
  title: "Cloud / DevOps Support Engineer",
  location: "Algiers, Algeria",
  github: "https://github.com/s3nafps",
  linkedin: "https://linkedin.com/in/mohamedsenator",
  email: "mohamed.senator@icloud.com",
  cv: "/Mohamed_Senator_CV_2026.pdf",
  serviceMenu: "/Mohamed_Senator_Service_Menu_2026.pdf",
  playbook: "https://github.com/s3nafps/cloud-devops-support-playbook",
};

export const FEATURED_PROJECTS: Record<string, Omit<PortfolioProject, "updatedAt" | "stars" | "archived" | "fork">> = {
  "cloudops-rescue-kit": {
    name: "CloudOps Rescue Kit",
    repo: "https://github.com/s3nafps/cloudops-rescue-kit",
    homepage:
      "https://github.com/s3nafps/cloudops-rescue-kit/blob/main/docs/case-studies/sample-client-deliverables.md",
    description:
      "Practical VPS and Docker support toolkit for diagnostics, endpoint checks, monitoring, backup/restore proof, incident reports, and client handover notes.",
    language: "Shell",
    topics: ["docker", "vps", "linux", "monitoring", "backup", "cloud-support"],
    status: "featured",
    visual: "generic",
    featured: true,
    problem:
      "Small teams often run Docker apps on a VPS with no clear diagnostics, monitoring, tested backup, or handover notes when something breaks.",
    built:
      "A GitHub-ready support toolkit with Bash diagnostics, health checks, Docker Compose volume backups, restore testing, Uptime Kuma setup, runbooks, and a reproducible demo lab for screenshots.",
    architecture:
      "Portable Bash scripts, Docker Compose monitoring/demo files, Markdown runbooks, GitHub Actions shell syntax checks, and a case-study workflow designed for low-cost VPS operations.",
    security:
      "Diagnostics avoid environment variables and Docker inspect output by default, logs are opt-in, restore commands require explicit confirmation, and docs enforce no secret sharing.",
    technologies: ["Bash", "Docker", "Docker Compose", "Linux", "Uptime Kuma", "GitHub Actions"],
  },
  Stacksmith: {
    name: "Stacksmith",
    repo: "https://github.com/s3nafps/Stacksmith",
    homepage: undefined,
    description:
      "Open-source, self-hostable platform for generating curated Terraform or OpenTofu infrastructure blueprints and creating reviewable GitHub pull requests without permanent cloud credentials.",
    language: "TypeScript",
    topics: ["infrastructure", "terraform", "opentofu", "github", "self-hosted"],
    status: "experimental",
    visual: "stacksmith",
    featured: true,
    problem:
      "Teams need infrastructure templates that are repeatable, reviewable, and safer than giving a web app long-lived cloud credentials.",
    built:
      "A self-hostable product that produces deterministic IaC files, redacts sensitive values, validates generated work, and opens GitHub pull requests for human review.",
    architecture:
      "Next.js interface, Prisma-backed workspace model, deterministic Terraform/OpenTofu generation, local validation, Docker deployment, and GitHub PR workflow.",
    security:
      "Designed around reviewable pull requests, no permanent cloud credentials in the app, redacted secrets, and explicit validation before handoff.",
    technologies: ["Next.js", "TypeScript", "Terraform", "OpenTofu", "Prisma", "Docker", "GitHub"],
  },
  "AirGap-Auditor": {
    name: "AirGap-Auditor",
    repo: "https://github.com/s3nafps/AirGap-Auditor",
    homepage: undefined,
    description:
      "Zero-dependency PowerShell compliance and workstation security auditing framework for hardened Windows, Active Directory, and PKI environments.",
    language: "PowerShell",
    topics: ["powershell", "windows", "security", "active-directory", "pki"],
    status: "featured",
    visual: "airgap",
    featured: true,
    problem:
      "Air-gapped and hardened Windows environments still need repeatable checks without relying on internet services or external agents.",
    built:
      "A local auditing framework with workstation checks, JSON aggregation, offline dashboards, CSV export, report integrity, and historical change detection.",
    architecture:
      "PowerShell modules run checks locally, aggregate results into structured files, and render offline HTML reports that can be reviewed without network dependencies.",
    security:
      "No external dependencies, SHA-256 report integrity, offline-first design, and checks for certificates, BitLocker, firewall, updates, GPOs, and endpoint security.",
    technologies: ["PowerShell", "Windows", "Active Directory", "PKI", "HTML", "JavaScript"],
  },
  "State-Ops-Controller": {
    name: "State-Ops-Controller",
    repo: "https://github.com/s3nafps/State-Ops-Controller",
    homepage: undefined,
    description:
      "Idempotent PowerShell controller for safely switching workstations between production and air-gapped VLAN profiles with validation, rollback, locking, retries, and Windows Event Log auditing.",
    language: "PowerShell",
    topics: ["powershell", "networking", "vlan", "fortinet", "windows"],
    status: "featured",
    visual: "stateops",
    featured: true,
    problem:
      "Network profile transitions can break access when adapter state, validation, rollback, and concurrent runs are handled manually.",
    built:
      "A controller that validates preconditions, backs up adapter state, applies profile changes, retries safely, and rolls back if transition checks fail.",
    architecture:
      "PowerShell orchestration around Windows networking state, lock files, preflight checks, Fortinet-aware workflows, and structured event logging.",
    security:
      "Auditable transitions, rollback path, concurrency protection, and explicit separation between production and air-gapped profiles.",
    technologies: ["PowerShell", "Windows Networking", "VLANs", "Fortinet", "Event Log"],
  },
  "GCP-Fortress-Architecture": {
    name: "GCP-Fortress-Architecture",
    repo: "https://github.com/s3nafps/GCP-Fortress-Architecture",
    homepage: undefined,
    description:
      "Secure private Google Cloud architecture using Terraform, private instances, a global load balancer, managed instance groups, IAP-only SSH, auto-healing, and CI security validation.",
    language: "HCL",
    topics: ["gcp", "terraform", "security", "load-balancing", "iac"],
    status: "featured",
    visual: "fortress",
    featured: true,
    problem:
      "Public VM exposure and manual cloud setup increase risk for simple web architectures that still need resilience and repeatability.",
    built:
      "A private multi-zone GCP web architecture with managed instance groups, global load balancing, auto-healing, and CI security scanning.",
    architecture:
      "Terraform modules provision VPC, private instances, regional MIG, load balancer, health checks, Cloud NAT-style egress patterns, and IAP-only access.",
    security:
      "No public VM IPs, IAP-only SSH, infrastructure validation in CI, least exposure, and automated tfsec scanning.",
    technologies: ["Terraform", "Google Cloud", "IAP", "Managed Instance Groups", "GitHub Actions", "tfsec"],
  },
  "GCP-Kube-Vanguard": {
    name: "GCP-Kube-Vanguard",
    repo: "https://github.com/s3nafps/GCP-Kube-Vanguard",
    homepage: undefined,
    description:
      "Private GKE and Kubernetes architecture using Terraform, Workload Identity, private nodes, Cloud NAT, Artifact Registry, least-privilege IAM, and CI/CD.",
    language: "HCL",
    topics: ["gke", "kubernetes", "terraform", "gcp", "cicd"],
    status: "featured",
    visual: "kube",
    featured: true,
    problem:
      "Kubernetes labs often skip the private networking, identity, registry, and CI details that make clusters production-relevant.",
    built:
      "A private GKE foundation with Workload Identity, Artifact Registry, least-privilege IAM, CI/CD automation, and private nodes.",
    architecture:
      "Terraform provisions network, private cluster, node pools, Cloud NAT, IAM bindings, registry, and deployment pipeline primitives.",
    security:
      "Private nodes, Workload Identity, least-privilege service accounts, controlled egress, and CI-backed infrastructure review.",
    technologies: ["Terraform", "GKE", "Kubernetes", "Workload Identity", "Artifact Registry", "GitHub Actions"],
  },
  Portfolio: {
    name: "Portfolio",
    repo: "https://github.com/s3nafps/Portfolio",
    homepage: "https://portfolio-s3nafps-projects.vercel.app",
    description:
      "Evolving open-source personal website and design experiment for presenting infrastructure, automation, cloud, and AI-assisted product work.",
    language: "TypeScript",
    topics: ["nextjs", "portfolio", "tailwind", "design"],
    status: "active",
    visual: "portfolio",
    featured: true,
    problem:
      "A portfolio needs to be credible for infrastructure teams while still showing personality, product instincts, and modern AI-assisted development.",
    built:
      "A playful personal operating system with server-loaded GitHub projects, CV-backed content, motion, theme support, and accessible interaction patterns.",
    architecture:
      "Next.js App Router, server GitHub loader, reusable client components for interaction, Tailwind CSS theme tokens, and static-friendly content sections.",
    security:
      "No private API keys exposed, optional server-only GitHub token, accessible links, and no sensitive lab infrastructure details.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
};

export const FALLBACK_PROJECTS: PortfolioProject[] = Object.values(FEATURED_PROJECTS).map(
  (project) => ({
    ...project,
    updatedAt: "2026-06-22T00:00:00Z",
    stars: 0,
    archived: false,
    fork: false,
    homepage: undefined,
  }),
);

export const EXPERIENCE = [
  {
    company: "Autorite Gouvernementale de Certification Electronique - AGCE",
    role: "IT Support - Infrastructure & Automation",
    dates: "February 2025 - Present",
    summary:
      "Supporting Windows, network, and security infrastructure in a regulated air-gapped environment.",
    highlights: [
      "Built a containerized PowerShell network and system diagnostics dashboard.",
      "Developed reusable PowerShell modules for FortiWeb administration.",
      "Troubleshoot escalated connectivity, authentication, endpoint, and security appliance incidents.",
      "Support audits, vulnerability remediation, and critical patch deployment.",
    ],
  },
  {
    company: "Agrofilm Packaging",
    role: "Systems Administrator, contract",
    dates: "February 2024 - August 2024",
    summary:
      "Administered Windows Server, identity, DNS/DHCP, permissions, and workstation lifecycle operations.",
    highlights: [
      "Deployed security policies using Group Policy.",
      "Standardized workstation provisioning and documentation.",
      "Handled L2 infrastructure and identity incidents.",
    ],
  },
  {
    company: "Samsung Algeria",
    role: "Systems Support Specialist",
    dates: "December 2022 - December 2023",
    summary:
      "Supported enterprise systems and network operations for more than 500 users.",
    highlights: [
      "Contributed to 99.9% measured network availability.",
      "Supported Fortinet appliances and VPN access.",
      "Automated endpoint maintenance using PowerShell and Group Policy.",
      "Delivered user training that reduced recurring incidents by 25%.",
    ],
  },
  {
    company: "IRIS Electronics",
    role: "24/7 Infrastructure Monitoring",
    dates: "May 2022 - November 2022",
    summary:
      "Monitored manufacturing infrastructure and triaged network and system alerts.",
    highlights: ["Coordinated escalation and recovery activities with technical and operational teams."],
  },
  {
    company: "Brandt Algeria",
    role: "IT Operations Specialist",
    dates: "April 2021 - April 2022",
    summary:
      "Structured GLPI asset and incident workflows using ITIL practices.",
    highlights: [
      "Administered Microsoft Teams and Exchange services.",
      "Handled endpoint, user, and service requests.",
    ],
  },
];

export const SKILL_GROUPS: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Systems and identity",
    icon: Server,
    items: ["Windows Server", "Active Directory", "Group Policy", "DNS", "DHCP", "Microsoft 365", "Exchange", "Teams"],
  },
  {
    title: "Automation and DevOps",
    icon: Workflow,
    items: ["PowerShell", "Bash", "Go", "Docker", "Docker Compose", "Terraform", "OpenTofu", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Cloud and support",
    icon: Cloud,
    items: ["Google Cloud Platform", "Compute Engine", "VPC", "IAP", "Load Balancing", "Linux VPS", "Cloudflare", "Support runbooks"],
  },
  {
    title: "Network and security",
    icon: ShieldCheck,
    items: ["FortiGate", "FortiWeb", "FortiMail", "VPN", "VLANs", "PKI", "Endpoint security", "Vulnerability remediation"],
  },
  {
    title: "Operations and self-hosting",
    icon: Database,
    items: ["Linux", "Caddy", "n8n", "PostgreSQL", "Uptime Kuma", "Backups", "GLPI", "ServiceDesk Plus", "Incident management"],
  },
];

export const LAB_ITEMS = [
  { label: "Contabo VPS", detail: "Hardened Linux base", icon: Globe2 },
  { label: "SSH posture", detail: "Key-only, root and password login disabled", icon: KeyRound },
  { label: "Firewall layer", detail: "UFW and Fail2ban", icon: ShieldCheck },
  { label: "Reverse proxy", detail: "Caddy with authenticated subdomains", icon: Network },
  { label: "Automation", detail: "n8n, PostgreSQL, Docker Compose", icon: Workflow },
  { label: "Monitoring", detail: "Uptime Kuma and backups", icon: BadgeCheck },
  { label: "CloudOps Kit", detail: "Diagnostics, backups, restore tests", icon: TerminalSquare },
  { label: "AI workflow", detail: "Coding agents for research, prototypes, and implementation", icon: Sparkles },
  { label: "Products", detail: "Open-source experiments and SaaS ideas", icon: GitPullRequestArrow },
  { label: "Terminal time", detail: "Vibe coding without skipping architecture or testing", icon: TerminalSquare },
];

export const CERTIFICATIONS = [
  "Google Cloud Associate Cloud Engineer - issued February 2026",
  "Selected Google Cloud Skills Boost: Terraform, IAM and service accounts, secure networking, internal load balancing, cloud security fundamentals",
  "Technicien Superieur, BTS in Database Management - INSFP Baiche Abdelkader, Setif",
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: "VPS Docker Health Check",
    price: "$60 fixed",
    summary:
      "Fast diagnosis for a Linux VPS or Docker host with a concise remediation report.",
    outcomes: [
      "Host and Docker diagnostics",
      "Ports, disk, memory, and restart review",
      "Incident summary with next actions",
    ],
    audience: "Founders and small teams with one VPS or one Docker host",
    delivery: "Same-day or next-day report",
    docUrl:
      "https://github.com/s3nafps/cloudops-rescue-kit/blob/main/docs/10-service-packages.md",
  },
  {
    name: "Monitoring and Alerts Setup",
    price: "$120 fixed",
    summary:
      "Baseline monitoring with Uptime Kuma, alert routing, and a simple runbook for recurring checks.",
    outcomes: [
      "Uptime Kuma deployment",
      "Public endpoint and container checks",
      "Alert routing and operator notes",
    ],
    audience: "Teams that need visibility before outages become support tickets",
    delivery: "Deployment notes plus screenshot-ready evidence",
    docUrl:
      "https://github.com/s3nafps/cloudops-rescue-kit/blob/main/docs/11-market-validation.md",
  },
  {
    name: "Backup and Restore Proof",
    price: "$150 fixed",
    summary:
      "Backup workflow setup with an actual restore test so the client has evidence, not assumptions.",
    outcomes: [
      "Volume or database backup routine",
      "Restore walkthrough in a test path",
      "Handover checklist and retention notes",
    ],
    audience: "Operators who cannot afford silent backup failures",
    delivery: "Scripted steps, restore proof, and handover notes",
    docUrl:
      "https://github.com/s3nafps/cloudops-rescue-kit/blob/main/docs/10-service-packages.md",
  },
];

export const PLAYBOOK_ITEMS: PlaybookItem[] = [
  {
    name: "CV and LinkedIn Positioning",
    summary:
      "Cloud/DevOps Support positioning pack with a CV rewrite, LinkedIn headline options, About section, and featured project copy.",
    outcomes: [
      "Support-focused CV framing",
      "LinkedIn headline and About text",
      "Featured project wording tied to public proof",
    ],
    audience: "Recruiters, hiring managers, and support-oriented application workflows",
    delivery: "Public Markdown assets ready to adapt",
    docUrl:
      "https://github.com/s3nafps/cloud-devops-support-playbook/blob/main/career-assets/CV-cloud-devops-support.md",
  },
  {
    name: "Job Search System",
    summary:
      "Target role filters, Boolean searches, and application tracking built for remote and EMEA Cloud/DevOps Support roles.",
    outcomes: [
      "Role and location filters",
      "Daily application tracker",
      "Tailoring rules by keyword and support focus",
    ],
    audience: "Cloud support and junior DevOps job search over a 30-day sprint",
    delivery: "Tracker plus repeatable application workflow",
    docUrl:
      "https://github.com/s3nafps/cloud-devops-support-playbook/blob/main/career-assets/job-search-filters.md",
  },
  {
    name: "Outreach and Validation",
    summary:
      "Fixed-scope package docs, outreach scripts, and demand-validation rules for VPS and Docker support work before building anything larger.",
    outcomes: [
      "Freelance package scope and pricing",
      "Upwork, Fiverr, founder, and agency scripts",
      "Validation thresholds before any SaaS work",
    ],
    audience: "Early freelance delivery and side-income testing with limited budget",
    delivery: "Public repo plus lead-validation tracker",
    docUrl:
      "https://github.com/s3nafps/cloud-devops-support-playbook/blob/main/career-assets/outreach-scripts.md",
  },
  {
    name: "Lead Discovery System",
    summary:
      "Public discovery script and intake tracker for qualifying VPS and Docker leads without asking for passwords or private keys.",
    outcomes: [
      "Secret-safe intake questions",
      "Package-fit qualification flow",
      "Call notes tracker for repeated-demand evidence",
    ],
    audience: "Freelance lead qualification before quoting or building anything larger",
    delivery: "Markdown intake script plus reusable CSV notes template",
    docUrl:
      "https://github.com/s3nafps/cloud-devops-support-playbook/blob/main/career-assets/client-discovery-and-intake.md",
  },
  {
    name: "Pipeline Trackers",
    summary:
      "CSV-based application, outreach, lead-validation, and weekly review system that keeps the 90-day plan tied to replies, interviews, proof, and revenue.",
    outcomes: [
      "Daily application tracking",
      "Lead-validation and intake logging",
      "Weekly scoreboard for signal and blockers",
    ],
    audience: "Job search and side-income execution when budget is limited and every action needs a result",
    delivery: "Public CSV templates plus tracker usage guide",
    docUrl:
      "https://github.com/s3nafps/cloud-devops-support-playbook/blob/main/trackers/README.md",
  },
];
