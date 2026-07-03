"use client";

import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CERTIFICATIONS,
  EXPERIENCE,
  LAB_ITEMS,
  SITE,
  SKILL_GROUPS,
  type PortfolioProject,
} from "@/lib/portfolio-data";

type PortfolioClientProps = {
  projects: PortfolioProject[];
  projectSource: "github" | "fallback";
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

function basePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const cursor = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    }

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      frame = window.requestAnimationFrame(animateCursor);
    }

    window.addEventListener("mousemove", onMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canvas || reducedMotion) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const canvasEl = canvas;
    const context2d = context;

    let width = 0;
    let height = 0;
    let frame = 0;
    const colors = ["#ff9a5c", "#ff6b6b", "#c96fd8", "#ffd166", "#ff8fa3"];
    const points = Array.from({ length: 80 }, () => ({
      x: 0,
      y: 0,
      radius: Math.random() * 1.5 + 0.35,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.42 + 0.06,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    function resize() {
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
      points.forEach((point) => {
        point.x = Math.random() * width;
        point.y = Math.random() * height;
      });
    }

    function draw() {
      context2d.clearRect(0, 0, width, height);
      points.forEach((point) => {
        context2d.globalAlpha = point.alpha;
        context2d.beginPath();
        context2d.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context2d.fillStyle = point.color;
        context2d.fill();

        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      });
      context2d.globalAlpha = 1;
      frame = window.requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
    </>
  );
}

function Header() {
  return (
    <nav className="top-nav" aria-label="Primary navigation">
      <a className="nav-logo" href="#top">
        senator<span>.dev</span>
      </a>
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function TerminalCard() {
  return (
    <div className="terminal">
      <div className="term-bar">
        <span className="term-dot red" />
        <span className="term-dot yellow" />
        <span className="term-dot green" />
        <span className="term-title">mohamed@portfolio:~</span>
      </div>
      <div className="term-body">
        <span className="term-line">
          <span className="term-prompt">$ </span>
          <span className="term-cmd">cat profile.json</span>
        </span>
        <span className="term-line">&nbsp;</span>
        <span className="term-line">
          <span className="term-brace">{"{"}</span>
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-key">&quot;name&quot;</span>:{" "}
          <span className="term-str">&quot;Mohamed Senator&quot;</span>,
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-key">&quot;location&quot;</span>:{" "}
          <span className="term-str">&quot;Algiers, Algeria&quot;</span>,
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-key">&quot;role&quot;</span>:{" "}
          <span className="term-str">&quot;Cloud / DevOps Support Engineer&quot;</span>,
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-key">&quot;stack&quot;</span>:{" "}
          <span className="term-brace">[</span>
        </span>
        <span className="term-line">
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="term-str">&quot;PowerShell&quot;</span>,{" "}
          <span className="term-str">&quot;Docker&quot;</span>,{" "}
          <span className="term-str">&quot;Linux VPS&quot;</span>
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-brace">]</span>,
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-key">&quot;vibeCoder&quot;</span>:{" "}
          <span className="term-val">true</span>,
        </span>
        <span className="term-line">
          &nbsp;&nbsp;<span className="term-key">&quot;ownsArchitecture&quot;</span>:{" "}
          <span className="term-val">true</span>
        </span>
        <span className="term-line">
          <span className="term-brace">{"}"}</span>
        </span>
        <span className="term-line">&nbsp;</span>
        <span className="term-line">
          <span className="term-prompt">$ </span>
          <span className="term-cursor" />
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="section hero-section">
      <div className="hero-grid">
        <div>
          <div className="hero-status">
            <span className="status-dot" />
            Available for Cloud/DevOps support work
          </div>
          <h1 className="hero-name">
            <span className="line1">Cloud</span>
            <span className="line2">DevOps</span>
            <span className="line3">Support.</span>
          </h1>
          <p className="hero-desc">
            I troubleshoot Linux VPS and Docker deployments, build monitoring
            and backup workflows, document incidents, and turn support work into
            repeatable automation.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#projects">
              See my work <ArrowUpRight size={15} />
            </a>
            <a className="btn-ghost" href={basePath(SITE.cv)} download>
              Download CV <Download size={15} />
            </a>
            <a className="btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <TerminalCard />
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="label">{children}</div>;
}

function SectionTitle({
  label,
  title,
  accent,
  action,
}: {
  label: string;
  title: string;
  accent: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-header">
      <div>
        <Label>{label}</Label>
        <h2 className="section-title">
          {title} <span>{accent}</span>
        </h2>
      </div>
      {action}
    </div>
  );
}

function About() {
  const stats = [
    ["5+", "Years in IT operations"],
    ["500+", "Enterprise users supported"],
    ["99.9%", "Network availability contributed"],
    ["ACE", "Google Cloud certified"],
  ];
  const skills = SKILL_GROUPS.flatMap((group) => group.items).slice(0, 28);

  return (
    <section id="about" className="section bordered-section">
      <div className="about-layout">
        <div>
          <Label>About me</Label>
          <div className="about-stats">
            {stats.map(([value, label]) => (
              <Reveal className="stat-card" key={label}>
                <div className="stat-num">{value}</div>
                <div className="stat-label">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <p className="about-text">
            I work at the intersection of <strong>cloud support</strong>,{" "}
            <strong>DevOps operations</strong>, automation, security, and
            AI-assisted software development.
          </p>
          <p className="about-text">
            I have supported enterprise and regulated environments across
            Windows Server, Active Directory, Fortinet, Google Cloud, Terraform,
            Docker, Linux VPS, monitoring, backups, Kubernetes, and self-hosted
            automation.
          </p>
          <p className="about-text">
            As a vibe coder, I use AI coding agents to accelerate research,
            prototyping, and implementation while staying responsible for the
            architecture, security decisions, testing, infrastructure, and
            deployment.
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects({
  projects,
  projectSource,
}: {
  projects: PortfolioProject[];
  projectSource: "github" | "fallback";
}) {
  return (
    <section id="projects" className="section bordered-section">
      <SectionTitle
        label="Projects"
        title="What I've"
        accent="built."
        action={
          <a className="view-all" href={SITE.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        }
      />
      <p className="source-note">
        Project data: {projectSource === "github" ? "GitHub API" : "local fallback"}
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal className="proj-card" key={project.repo}>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <div className="proj-number">
                {String(index + 1).padStart(2, "0")} / {project.status}
              </div>
              <div className="proj-title">{project.name}</div>
              <div className="proj-desc">{project.description}</div>
              <div className="proj-footer">
                <span className="proj-tag">{project.language}</span>
                <span className="proj-arrow">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section bordered-section">
      <SectionTitle label="Skills" title="Systems I" accent="use." />
      <div className="platform-grid">
        {SKILL_GROUPS.map((group) => {
          const Icon = group.icon;
          return (
            <Reveal className="platform-card" key={group.title}>
              <div className="platform-top">
                <div className="platform-icon">
                  <Icon size={20} />
                </div>
                <span className="platform-badge">Stack</span>
              </div>
              <div className="platform-name">{group.title}</div>
              <div className="platform-desc">{group.items.join(" / ")}</div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section bordered-section">
      <SectionTitle label="Experience" title="Where I've" accent="worked." />
      <div className="posts-stack">
        {EXPERIENCE.map((item, index) => (
          <Reveal className="post-row" key={item.company}>
            <span className="post-num">{String(index + 1).padStart(2, "0")}</span>
            <span className="post-date-col">{item.dates}</span>
            <span className="post-title-col">
              {item.role}
              <small>{item.company}</small>
            </span>
            <span className="post-preview-col">{item.summary}</span>
            <span className="post-arrow">→</span>
          </Reveal>
        ))}
      </div>
      <div className="cert-list">
        {CERTIFICATIONS.map((item) => (
          <p key={item}>
            <Check size={15} /> {item}
          </p>
        ))}
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section id="lab" className="section bordered-section">
      <SectionTitle label="Lab" title="Things I'm" accent="building." />
      <div className="products-grid">
        {LAB_ITEMS.slice(0, 6).map((item) => {
          const Icon = item.icon;
          return (
            <Reveal className="prod-card" key={item.label}>
              <div className="prod-cover">
                <div className="prod-cover-bg" />
                <Icon size={38} />
              </div>
              <div className="prod-body">
                <div className="prod-name">{item.label}</div>
                <div className="prod-price prod-placeholder">{item.detail}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="section bordered-section">
      <div className="contact-layout">
        <Reveal>
          <Label>Contact</Label>
          <h2 className="contact-big">
            Let&apos;s <span>talk.</span>
          </h2>
          <p className="contact-desc">
            Have an infrastructure problem, an automation idea, or a product
            you want to build? Send a message and I&apos;ll get back to you.
          </p>
          <a className="contact-email-link" href={`mailto:${SITE.email}`}>
            {SITE.email} <ArrowUpRight size={15} />
          </a>
          <div className="socials-grid">
            <a className="social-pill" href={SITE.github} target="_blank" rel="noreferrer">
              <Github size={14} /> GitHub
            </a>
            <a className="social-pill" href={SITE.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={14} /> LinkedIn
            </a>
            <button className="social-pill" type="button" onClick={copyEmail}>
              <Copy size={14} /> {copied ? "Copied" : "Copy email"}
            </button>
            <a className="social-pill" href={basePath(SITE.cv)} download>
              <Download size={14} /> CV
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="contact-illustration">
            <div className="ci-comment">{"// Mohamed Senator: get in touch"}</div>
            <br />
            <div>
              <span className="ci-key">const</span> contact ={" "}
              <span className="ci-brace">{"{"}</span>
            </div>
            <div>
              &nbsp;&nbsp;email: <span className="ci-str">&quot;{SITE.email}&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;status: <span className="ci-str">&quot;open to useful work&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;focus: <span className="ci-str">&quot;infra + automation + cloud&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;aiAssisted: <span className="ci-bool">true</span>,
            </div>
            <div>
              &nbsp;&nbsp;securityFirst: <span className="ci-bool">true</span>
            </div>
            <div>
              <span className="ci-brace">{"}"}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location,
    },
    email: SITE.email,
    url: "https://mohamedsenator.vercel.app",
    sameAs: [SITE.github, SITE.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PortfolioClient({
  projects,
  projectSource,
}: PortfolioClientProps) {
  return (
    <>
      <StructuredData />
      <CursorField />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} projectSource={projectSource} />
        <Skills />
        <Experience />
        <Lab />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-left">© 2026 Mohamed Senator - Built in Algeria</div>
        <div className="footer-right">
          <a href={SITE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`}>
            Email
          </a>
        </div>
      </footer>
    </>
  );
}
