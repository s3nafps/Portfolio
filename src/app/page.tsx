"use client";

import {
  ArrowUp,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Network,
  Server,
  Shield,
  Sparkles,
  Sun,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const PROJECTS = [
  {
    title: "GCP-Fortress-Architecture",
    icon: Shield,
    tags: ["Terraform", "GCP", "CI/CD", "GitHub Actions"],
    description:
      "A highly available, private-only web architecture. Enforces defense-in-depth with IAP-only SSH, zero public IPs on compute instances, and automated tfsec security scanning via GitHub Actions.",
    link: "https://github.com/s3nafps/GCP-Fortress-Architecture",
  },
  {
    title: "GCP-Kube-Vanguard",
    icon: Server,
    tags: ["Terraform", "GCP", "GKE", "Kubernetes"],
    description:
      "A secure Google Kubernetes Engine (GKE) deployment featuring private cluster topology, strict network policies, and automated provisioning.",
    link: "https://github.com/s3nafps/GCP-Kube-Vanguard",
  },
  {
    title: "AirGap-Auditor",
    icon: Terminal,
    tags: ["PowerShell", "Security", "Automation"],
    description:
      "A zero-dependency PowerShell compliance engine designed for highly regulated environments. Automates PKI certificate monitoring, AD audits, and endpoint security validation.",
    link: "https://github.com/s3nafps/AirGap-Auditor",
  },
  {
    title: "State-Ops-Controller",
    icon: Network,
    tags: ["PowerShell", "Networking", "Fortinet"],
    description:
      "A stateful network transition controller automating workstation shifts between production and air-gapped staging VLANs, integrating Fortinet CLI hooks with automatic rollback.",
    link: "https://github.com/s3nafps/State-Ops-Controller",
  },
];

const EXPERIENCE = [
  {
    company: "Autorite Gouvernementale de Certification Electronique (AGCE)",
    role: "IT Support (Infrastructure & Automation Focus)",
    period: "Feb 2025 - Present",
    active: true,
  },
  {
    company: "Agrofilm Packaging",
    role: "Systems Administrator (Contract)",
    period: "Feb 2024 - Aug 2024",
    active: false,
  },
  {
    company: "Samsung",
    role: "Systems Support Specialist",
    period: "Dec 2022 - Dec 2023",
    active: false,
  },
  {
    company: "Brandt",
    role: "IT Operations Specialist",
    period: "Apr 2021 - Apr 2022",
    active: false,
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/s3nafps",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamedsenator",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mohamed.senator@icloud.com",
    icon: Mail,
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Cloud & Infrastructure",
    skills: ["Google Cloud (GCP)", "Terraform", "Docker", "Kubernetes"],
  },
  {
    title: "Automation & Scripting",
    skills: ["PowerShell", "Bash", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Security & Compliance",
    skills: ["Fortinet", "PKI", "IAP", "Network Security"],
  },
  {
    title: "Systems & Monitoring",
    skills: ["Windows Server", "Linux", "Active Directory", "VLANs"],
  },
];

type Theme = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";

    const stored = window.localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_var(--color-accent-glow)]" />
          senator
        </a>
        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 rounded-full border border-glass-border bg-glass px-1 py-1 backdrop-blur-xl sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-glass-hover hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="glass-button h-10 w-10"
            onClick={toggleTheme}
            type="button"
          >
            <ThemeIcon size={17} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroAvatar() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="glass-orb relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center overflow-hidden p-4 sm:max-w-[360px]">
      <div className="absolute inset-5 rounded-[2.25rem] border border-white/35" />
      {failed ? (
        <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-accent/15 text-6xl font-bold text-accent">
          MS
        </div>
      ) : (
        <img
          src="https://github.com/s3nafps.png"
          alt="Mohamed Senator"
          className="h-full w-full rounded-[2rem] object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <div className="glass-pill mb-7 inline-flex items-center gap-2 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Available for opportunities
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Mohamed Senator
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Systems & Infrastructure Engineer{" "}
            <span className="text-foreground/35">/</span>{" "}
            <span className="font-medium text-accent">Google Cloud Certified (ACE)</span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            Transitioning manual IT operations into streamlined, automated
            workflows using <span className="text-foreground">PowerShell</span>,{" "}
            <span className="text-foreground">Docker</span>,{" "}
            <span className="text-foreground">Terraform</span>, and{" "}
            <span className="text-foreground">GCP</span>. Focused on
            infrastructure architecture, security automation, and cloud-native
            solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://github.com/s3nafps"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-5 py-3 font-semibold text-foreground"
            >
              <Github size={17} />
              View GitHub
            </a>
            <a
              href={`${BASE_PATH}/Mohamed_Senator_CV.pdf`}
              download
              className="glass-button px-5 py-3 text-muted hover:text-foreground"
            >
              <Download size={17} />
              Download CV
            </a>
            <a
              href="#contact"
              className="glass-button px-5 py-3 text-muted hover:text-foreground"
            >
              <Mail size={17} />
              Contact
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-3">
            {[
              { value: "4+", label: "Years Exp", icon: Layers },
              { value: "4", label: "Projects", icon: Code2 },
              { value: "GCP", label: "ACE Certified", icon: Sparkles },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-card p-4">
                  <Icon size={16} className="mb-3 text-accent" />
                  <div className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <HeroAvatar />
      </div>
    </section>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof PROJECTS)[number];
  featured: boolean;
}) {
  const Icon = project.icon;

  return (
    <article
      className={`glass-card group flex h-full flex-col p-6 ${
        featured ? "md:col-span-2 lg:p-7" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="glass-icon">
            <Icon size={19} />
          </div>
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            {project.title}
          </h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 text-muted transition hover:bg-glass-hover hover:text-accent"
          aria-label={`View ${project.title} on GitHub`}
        >
          <ExternalLink size={17} />
        </a>
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-muted">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="glass-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-glass-border pt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-accent"
        >
          View Repository
          <ChevronRight
            size={14}
            className="transition group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Projects" title="Infrastructure work with shape." />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Experience" title="Career timeline." />
        <div className="grid gap-4">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="glass-card p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-muted">{exp.period}</p>
                    {exp.active && <span className="glass-tag">Current</span>}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{exp.company}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_var(--color-accent-glow)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Skills" title="Technical stack." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="glass-card p-5">
              <h3 className="text-sm font-semibold text-foreground">
                {cat.title}
              </h3>
              <div className="mt-4 space-y-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    <span className="text-sm text-muted">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Contact" title="Get in touch." />

        <div className="glass-panel max-w-2xl p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            Interested in collaborating or have a question? Reach out through any
            of the channels below.
          </p>

          <div className="mt-7 grid gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-glass-border bg-glass px-4 py-4 transition hover:bg-glass-hover"
                >
                  <div className="glass-icon">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-semibold text-foreground">
                      {link.label}
                    </span>
                    <p className="truncate text-xs text-muted">
                      {link.href.replace("mailto:", "").replace("https://", "")}
                    </p>
                  </div>
                  <ChevronRight
                    size={17}
                    className="text-muted transition group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row">
        <span className="text-xs text-muted">
          (c) {new Date().getFullYear()} Mohamed Senator
        </span>
        <span className="text-xs text-muted">
          Next.js / Adaptive glass / Tailwind CSS
        </span>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass-button fixed bottom-6 right-6 z-50 h-12 w-12"
      aria-label="Scroll to top"
      type="button"
    >
      <ArrowUp size={18} />
    </button>
  );
}

function Separator() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Separator />
        <Projects />
        <Separator />
        <Experience />
        <Separator />
        <Skills />
        <Separator />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
