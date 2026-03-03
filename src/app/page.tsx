"use client";

import {
  Github,
  Download,
  Mail,
  Linkedin,
  Terminal,
  Shield,
  Network,
  ExternalLink,
  ChevronRight,
  ArrowUp,
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
    link: "https://github.com/s3nafps",
  },
  {
    title: "AirGap-Auditor",
    icon: Terminal,
    tags: ["PowerShell", "Security", "Automation"],
    description:
      "A zero-dependency PowerShell compliance engine designed for highly regulated environments. Automates PKI certificate monitoring, AD audits, and endpoint security validation.",
    link: "https://github.com/s3nafps",
  },
  {
    title: "State-Ops-Controller",
    icon: Network,
    tags: ["PowerShell", "Networking", "Fortinet"],
    description:
      "A stateful network transition controller automating workstation shifts between production and air-gapped staging VLANs, integrating Fortinet CLI hooks with automatic rollback.",
    link: "https://github.com/s3nafps",
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-semibold text-accent tracking-tight"
        >
          senator_
        </a>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-150"
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
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Mohamed{" "}
          <span className="text-accent">Senator</span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl font-mono text-muted leading-relaxed">
          Systems and Infrastructure Engineer{" "}
          <span className="text-foreground/60">|</span>{" "}
          <span className="text-accent/80">Google Cloud Certified (ACE)</span>
        </p>

        <p className="mt-6 text-base text-muted max-w-2xl leading-relaxed">
          Transitioning manual IT operations into streamlined, automated
          workflows using{" "}
          <span className="text-foreground font-medium">PowerShell</span>,{" "}
          <span className="text-foreground font-medium">Docker</span>, and{" "}
          <span className="text-foreground font-medium">Terraform</span>.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://github.com/s3nafps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-mono text-sm font-semibold rounded hover:bg-accent/90 transition-colors duration-150"
          >
            <Github size={16} />
            View GitHub
          </a>
          <a
            href="/Mohamed_Senator_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-mono text-sm font-semibold rounded hover:bg-surface-hover hover:border-muted transition-colors duration-150"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-muted font-mono text-sm font-semibold rounded hover:bg-surface-hover hover:text-foreground hover:border-muted transition-colors duration-150"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-2 text-muted/50">
          <div className="w-px h-8 bg-border"></div>
          <span className="text-xs font-mono">scroll</span>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION HEADER ───────────────────────────────── */

function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <span className="text-xs font-mono text-accent uppercase tracking-widest">
        {label}
      </span>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 w-12 h-px bg-accent/40"></div>
    </div>
  );
}

/* ─── PROJECT CARD ─────────────────────────────────── */

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  const Icon = project.icon;

  return (
    <div className="group relative border border-border rounded-lg p-6 bg-surface hover:bg-surface-hover hover:border-muted/50 transition-colors duration-150">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded bg-accent/10 text-accent">
            <Icon size={18} />
          </div>
          <h3 className="font-mono text-lg font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-150"
          aria-label={`View ${project.title} on GitHub`}
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2 py-0.5 text-xs font-mono bg-accent/5 text-accent/80 border border-accent/10 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed">
        {project.description}
      </p>

      {/* Footer link */}
      <div className="mt-5 pt-4 border-t border-border">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors duration-150"
        >
          View Repository
          <ChevronRight size={12} />
        </a>
      </div>
    </div>
  );
}

/* ─── PROJECTS SECTION ─────────────────────────────── */

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// projects" title="Engineering Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// experience" title="Career Timeline" />
        <div className="space-y-0">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.company}
              className="relative flex gap-6 group"
            >
              {/* Timeline connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1.5 border-2 ${exp.active
                    ? "bg-accent border-accent"
                    : "bg-transparent border-muted/50"
                    }`}
                ></div>
                {index < EXPERIENCE.length - 1 && (
                  <div className="w-px flex-1 bg-border my-1"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-muted">
                    {exp.period}
                  </span>
                  {exp.active && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded">
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT SECTION ──────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// contact" title="Get In Touch" />

        <div className="border border-border rounded-lg bg-surface p-8 max-w-xl">
          <p className="text-sm text-muted mb-8 leading-relaxed">
            Interested in collaborating or have a question? Reach out through
            any of the channels below.
          </p>

          <div className="space-y-4">
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
                  className="flex items-center gap-4 p-3 -mx-3 rounded hover:bg-surface-hover transition-colors duration-150 group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded bg-accent/10 text-accent">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {link.label}
                    </span>
                    <p className="text-xs text-muted font-mono">
                      {link.href.replace("mailto:", "").replace("https://", "")}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className="ml-auto text-muted/0 group-hover:text-muted transition-colors duration-150"
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
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-mono text-muted">
          © {new Date().getFullYear()} Mohamed Senator
        </span>
        <span className="text-xs font-mono text-muted/50">
          Built with Next.js & Tailwind CSS
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
      className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded border border-border bg-surface hover:bg-surface-hover hover:border-muted text-muted hover:text-foreground transition-colors duration-150"
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}

/* ─── PAGE ─────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="w-full max-w-5xl mx-auto h-px bg-border"></div>
        <Projects />
        <div className="w-full max-w-5xl mx-auto h-px bg-border"></div>
        <Experience />
        <div className="w-full max-w-5xl mx-auto h-px bg-border"></div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
