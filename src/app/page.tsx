"use client";

import {
  Github,
  Download,
  Mail,
  Linkedin,
  Terminal,
  Shield,
  Network,
  Server,
  ExternalLink,
  ChevronRight,
  ArrowUp,
  Sparkles,
  Layers,
  Code2,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── DATA ─────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

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
    company: "Autorité Gouvernementale de Certification Électronique (AGCE)",
    role: "IT Support (Infrastructure & Automation Focus)",
    period: "Feb 2025 — Present",
    active: true,
  },
  {
    company: "Agrofilm Packaging",
    role: "Systems Administrator (Contract)",
    period: "Feb 2024 — Aug 2024",
    active: false,
  },
  {
    company: "Samsung",
    role: "Systems Support Specialist",
    period: "Dec 2022 — Dec 2023",
    active: false,
  },
  {
    company: "Brandt",
    role: "IT Operations Specialist",
    period: "Apr 2021 — Apr 2022",
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

/* ─── NAVBAR ───────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-bold text-accent tracking-tight flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
          senator_
        </a>
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-muted hover:text-foreground rounded-xl hover:bg-glass-hover transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─────────────────────────────────────────── */

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative">
      <div className="max-w-3xl w-full animate-fade-up">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-glow">
          Mohamed{" "}
          <span className="text-accent">Senator</span>
        </h1>

        {/* Title */}
        <p className="mt-4 text-lg sm:text-xl text-muted leading-relaxed font-[var(--font-sans)]">
          Systems & Infrastructure Engineer{" "}
          <span className="text-foreground/40">·</span>{" "}
          <span className="text-accent/90 font-medium">Google Cloud Certified (ACE)</span>
        </p>

        <p className="mt-6 text-base text-muted max-w-2xl leading-relaxed">
          Transitioning manual IT operations into streamlined, automated
          workflows using{" "}
          <span className="text-foreground font-medium">PowerShell</span>,{" "}
          <span className="text-foreground font-medium">Docker</span>,{" "}
          <span className="text-foreground font-medium">Terraform</span>, and{" "}
          <span className="text-foreground font-medium">GCP</span>.
          Focused on infrastructure architecture, security automation, and
          cloud-native solutions.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://github.com/s3nafps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass font-mono text-sm font-semibold text-foreground accent-glow hover:bg-glass-hover hover:border-accent/30 transition-all duration-300"
          >
            <Github size={16} />
            View GitHub
          </a>
          <a
            href="/Mohamed_Senator_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 glass text-muted hover:text-foreground hover:bg-glass-hover hover:border-glass-border-hover font-mono text-sm font-semibold transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 glass text-muted hover:text-foreground hover:bg-glass-hover hover:border-glass-border-hover font-mono text-sm font-semibold transition-all duration-300"
          >
            <Mail size={16} />
            Contact
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-3 max-w-md">
          {[
            { value: "4+", label: "Years Exp", icon: Layers },
            { value: "4", label: "Projects", icon: Code2 },
            { value: "GCP", label: "ACE Certified", icon: Sparkles },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="glass px-4 py-3 text-center rounded-2xl">
                <Icon size={14} className="text-accent/60 mx-auto mb-1" />
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 text-muted/40">
          <div className="w-px h-10 bg-gradient-to-b from-muted/30 to-transparent" />
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION HEADER ───────────────────────────────── */

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <span className="text-xs font-mono text-accent/70 uppercase tracking-[0.2em]">
        {label}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-glow">
        {title}
      </h2>
      <div className="mt-4 w-16 h-0.5 rounded-full bg-gradient-to-r from-accent/60 to-transparent" />
    </div>
  );
}

/* ─── PROJECT CARD ─────────────────────────────────── */

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const Icon = project.icon;

  return (
    <div className="glass p-6 flex flex-col h-full group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/5 text-accent border border-accent/10">
            <Icon size={18} />
          </div>
          <h3 className="font-mono text-base font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200 shrink-0"
          aria-label={`View ${project.title} on GitHub`}
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2.5 py-1 text-[11px] font-mono bg-accent/5 text-accent/70 border border-accent/10 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-glass-border">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors duration-200 group/link"
        >
          View Repository
          <ChevronRight size={12} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}

/* ─── PROJECTS SECTION ─────────────────────────────── */

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// projects" title="Engineering Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE SECTION ───────────────────────────── */

function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// experience" title="Career Timeline" />
        <div className="space-y-0">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.company} className="relative flex gap-6 group">
              {/* Timeline connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mt-1.5 border-2 transition-all duration-300 ${
                    exp.active
                      ? "bg-accent border-accent shadow-lg shadow-accent/30"
                      : "bg-transparent border-muted/30 group-hover:border-muted/60"
                  }`}
                />
                {index < EXPERIENCE.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-glass-border to-transparent my-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12 flex-1">
                <div className="glass-strong p-5 group-hover:bg-glass transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-muted">
                      {exp.period}
                    </span>
                    {exp.active && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                        current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS SECTION ───────────────────────────────── */

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

function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// skills" title="Technical Stack" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="glass p-5">
              <h3 className="text-sm font-semibold text-accent mb-3 font-mono">
                {cat.title}
              </h3>
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent/40" />
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

/* ─── CONTACT SECTION ──────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// contact" title="Get In Touch" />

        <div className="glass-strong p-8 max-w-xl">
          <p className="text-sm text-muted mb-8 leading-relaxed">
            Interested in collaborating or have a question? Reach out through
            any of the channels below.
          </p>

          <div className="space-y-3">
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
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-glass-hover hover:border-glass-border-hover transition-all duration-200 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/5 text-accent border border-accent/10">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-foreground">
                      {link.label}
                    </span>
                    <p className="text-xs text-muted font-mono mt-0.5">
                      {link.href.replace("mailto:", "").replace("https://", "")}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-muted/0 group-hover:text-muted transition-all duration-200"
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

/* ─── FOOTER ───────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-glass-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-mono text-muted">
          © {new Date().getFullYear()} Mohamed Senator
        </span>
        <span className="text-xs font-mono text-muted/40">
          Engineered with Next.js · Glassmorphism · Tailwind CSS
        </span>
      </div>
    </footer>
  );
}

/* ─── SCROLL TO TOP ────────────────────────────────── */

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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center glass hover:bg-glass-hover hover:border-glass-border-hover text-muted hover:text-accent transition-all duration-200 shadow-lg shadow-black/20"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

/* ─── PAGE ─────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
        </div>
        <Projects />
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
        </div>
        <Experience />
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
        </div>
        <Skills />
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
        </div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
