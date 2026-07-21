import { useEffect, useState } from 'react'
import { Theme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'
import { TopNav, TopNavItem } from '@astryxdesign/core/TopNav'
import { Switch } from '@astryxdesign/core/Switch'
import { Button } from '@astryxdesign/core/Button'
import { Badge } from '@astryxdesign/core/Badge'
import { Card } from '@astryxdesign/core/Card'
import { ClickableCard } from '@astryxdesign/core/ClickableCard'
import { TabList, Tab } from '@astryxdesign/core/TabList'
import { Grid } from '@astryxdesign/core/Grid'
import { Stack } from '@astryxdesign/core/Stack'
import { HStack } from '@astryxdesign/core/HStack'
import { Heading } from '@astryxdesign/core/Heading'
import { Text } from '@astryxdesign/core/Text'
import { Link } from '@astryxdesign/core/Link'
import { List, ListItem } from '@astryxdesign/core/List'

type Mode = 'light' | 'dark'
type BadgeVariant =
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow'

const STORAGE_KEY = 'portfolio-theme'

function initialMode(): Mode {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/* ---------------------------------- data ---------------------------------- */

const CATEGORIES = ['All', 'Infrastructure as Code', 'PowerShell & Automation', 'Cloud'] as const
type Category = (typeof CATEGORIES)[number]

interface Project {
  name: string
  status: string
  statusVariant: BadgeVariant
  category: Exclude<Category, 'All'>
  year: string
  description: string
  stack: string[]
  repo: string
}

const PROJECTS: Project[] = [
  {
    name: 'Stacksmith',
    status: 'Open source · Beta',
    statusVariant: 'info',
    category: 'Infrastructure as Code',
    year: '2026',
    description:
      'Blueprint generator that turns written infrastructure requirements into reviewable Terraform / OpenTofu code, delivered as a GitHub pull request. Designed for teams that want infrastructure changes reviewed like application code — no standing cloud credentials required.',
    stack: ['Terraform', 'OpenTofu', 'GitHub Actions'],
    repo: 'https://github.com/s3nafps/Stacksmith',
  },
  {
    name: 'CloudOps Rescue Kit',
    status: 'Used in client engagements',
    statusVariant: 'success',
    category: 'PowerShell & Automation',
    year: '2026',
    description:
      'Field toolkit for support engagements: VPS and Docker diagnostics, monitoring with Uptime Kuma, tested backup/restore procedures, incident report templates, and handover notes clients can actually maintain.',
    stack: ['PowerShell', 'Docker', 'Uptime Kuma', 'Bash'],
    repo: 'https://github.com/s3nafps/cloudops-rescue-kit',
  },
  {
    name: 'AirGap Auditor',
    status: 'In use at AGCE',
    statusVariant: 'success',
    category: 'PowerShell & Automation',
    year: '2026',
    description:
      'Zero-dependency PowerShell compliance engine for networks with no outside access: PKI certificate expiry monitoring, Active Directory auditing, and endpoint validation. Built for a regulated certification authority where installing external tooling is not an option.',
    stack: ['PowerShell', 'Active Directory', 'PKI'],
    repo: 'https://github.com/s3nafps/AirGap-Auditor',
  },
  {
    name: 'GCP Kube Vanguard',
    status: 'Reference architecture',
    statusVariant: 'neutral',
    category: 'Infrastructure as Code',
    year: '2026',
    description:
      'Private GKE foundation in Terraform: zero public nodes, Workload Identity, least-privilege IAM, and GitOps CI/CD from commit to cluster.',
    stack: ['Terraform', 'GKE', 'GitOps'],
    repo: 'https://github.com/s3nafps/GCP-Kube-Vanguard',
  },
  {
    name: 'GCP Fortress Architecture',
    status: 'Reference architecture',
    statusVariant: 'neutral',
    category: 'Cloud',
    year: '2026',
    description:
      'Private-only Google Cloud web architecture: IAP-only SSH, no public IPs, auto-healing instance groups, and tfsec security scanning wired into CI.',
    stack: ['GCP', 'Terraform', 'tfsec'],
    repo: 'https://github.com/s3nafps/GCP-Fortress-Architecture',
  },
  {
    name: 'State Ops Controller',
    status: 'In use at AGCE',
    statusVariant: 'success',
    category: 'PowerShell & Automation',
    year: '2026',
    description:
      'Idempotent PowerShell controller that moves workstations between production and air-gapped VLANs — preflight checks, locking, retries, rollback, and Event Log audit trail.',
    stack: ['PowerShell', 'Windows', 'Event Log'],
    repo: 'https://github.com/s3nafps/State-Ops-Controller',
  },
]

interface Capability {
  title: string
  sentence: string
  items: string[]
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Support operations',
    sentence: 'Structured support work that stays traceable from first ticket to root cause.',
    items: ['Incident & escalation', 'ITIL workflows / GLPI', 'Handover documentation', 'Root-cause analysis'],
  },
  {
    title: 'Systems & network',
    sentence: 'Day-to-day administration of the Windows and network stack enterprises run on.',
    items: ['Windows Server · AD · GPO', 'DNS · DHCP · PKI', 'FortiGate · FortiWeb · FortiMail', 'VPN & remote access'],
  },
  {
    title: 'Cloud & DevOps',
    sentence: 'Certified Google Cloud operations with infrastructure managed as code.',
    items: ['GCP — Associate Cloud Engineer', 'Terraform · OpenTofu', 'Docker · Kubernetes (GKE)', 'GitHub Actions · Linux VPS'],
  },
  {
    title: 'Automation',
    sentence: 'Replacing manual operations with scripted, documented, reversible automation.',
    items: ['PowerShell advanced', 'Bash · Python', 'Diagnostics tooling', 'Runbooks & scheduled jobs'],
  },
]

interface ExperienceItem {
  period: string
  org: string
  role: string
  description: string
}

const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2025 — Now',
    org: 'AGCE',
    role: 'IT Support — Infrastructure & Automation',
    description:
      'National digital certification authority. Infrastructure support in a regulated, air-gapped environment: containerized PowerShell diagnostics dashboard, FortiWeb administration automation, security audits, critical patch deployment.',
  },
  {
    period: '2024',
    org: 'Agrofilm Packaging',
    role: 'Systems Administrator (contract)',
    description:
      'Windows Server and Active Directory administration, GPO-enforced security policy, standardized provisioning that cut onboarding time; L2 escalation point.',
  },
  {
    period: '2022 — 2023',
    org: 'Samsung',
    role: 'Systems Support Specialist',
    description:
      '99.9% network availability for 500+ users; Fortinet appliances and VPN operations; GPO-deployed maintenance automation; training program that cut recurring tickets 25%.',
  },
  {
    period: '2021 — 2022',
    org: 'IRIS Electronics · Brandt',
    role: 'Infrastructure Monitoring · IT Operations',
    description:
      '24/7 manufacturing infrastructure monitoring at IRIS; ITIL-structured asset/incident workflows and Exchange/Teams administration at Brandt.',
  },
]

const SECURITY_ITEMS = [
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

/* --------------------------------- sections -------------------------------- */

function Hero() {
  return (
    <section id="top" className="hero-pad">
      <Stack direction="vertical" gap={4}>
        <Stack direction="vertical" gap={2}>
          <Heading level={1} type="display-2">
            Mohamed Senator
          </Heading>
          <Heading level={2} color="accent">
            Cloud &amp; DevOps Support Engineer
          </Heading>
          <Text type="supporting">Algiers, Algeria · UTC+1 · remote-ready</Text>
        </Stack>
        <Text as="p" type="large" maxLines={0}>
          Systems and infrastructure engineer. I keep enterprise and regulated environments available, and replace
          manual operations with scripted, documented, reversible automation. Google Cloud Associate Cloud Engineer.
        </Text>
        <HStack gap={2} wrap="wrap" vAlign="center">
          {['Linux', 'Docker', 'GCP', 'Terraform', 'PowerShell'].map((s) => (
            <Badge key={s} label={s} variant="neutral" />
          ))}
        </HStack>
        <HStack gap={3} wrap="wrap">
          <Button
            label="Get in touch"
            variant="primary"
            size="lg"
            onClick={() => {
              window.location.href = 'mailto:mohamed.senator@icloud.com'
            }}
          />
          <Button
            label="Download CV"
            variant="secondary"
            size="lg"
            onClick={() => {
              window.open('/Mohamed_Senator_CV_2026.pdf', '_blank')
            }}
          />
        </HStack>
      </Stack>
    </section>
  )
}

function Work() {
  const [category, setCategory] = useState<Category>('All')
  const visible = PROJECTS.filter((p) => category === 'All' || p.category === category)

  return (
    <section id="work">
      <Stack direction="vertical" gap={4}>
        <Heading level={2}>Work</Heading>
        <TabList value={category} onChange={(v) => setCategory(v as Category)} hasDivider>
          {CATEGORIES.map((c) => (
            <Tab key={c} value={c} label={c} />
          ))}
        </TabList>
        <Grid columns={{ minWidth: 300, max: 2, repeat: 'fit' }} gap={4}>
          {visible.map((p) => (
            <ClickableCard key={p.name} label={`${p.name} repository`} href={p.repo} target="_blank" padding={4}>
              <Stack direction="vertical" gap={3}>
                <HStack hAlign="between" vAlign="center" wrap="wrap" gap={2}>
                  <Heading level={3}>{p.name}</Heading>
                  <Badge label={p.status} variant={p.statusVariant} />
                </HStack>
                <Text as="p">{p.description}</Text>
                <HStack hAlign="between" vAlign="center" wrap="wrap" gap={2}>
                  <Text type="code" size="sm" color="secondary">
                    {p.stack.join(' · ')}
                  </Text>
                  <Text type="supporting" size="sm">
                    {p.year}
                  </Text>
                </HStack>
              </Stack>
            </ClickableCard>
          ))}
        </Grid>
      </Stack>
    </section>
  )
}

function Capabilities() {
  return (
    <section id="capabilities">
      <Stack direction="vertical" gap={4}>
        <Heading level={2}>Capabilities</Heading>
        <Grid columns={{ minWidth: 300, max: 2, repeat: 'fill' }} gap={4}>
          {CAPABILITIES.map((c) => (
            <Card key={c.title} padding={4}>
              <Stack direction="vertical" gap={3}>
                <Heading level={3}>{c.title}</Heading>
                <Text as="p" color="secondary">
                  {c.sentence}
                </Text>
                <Stack direction="vertical" gap={1}>
                  {c.items.map((item) => (
                    <Text key={item} type="code" size="sm">
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <Stack direction="vertical" gap={4}>
        <Heading level={2}>Experience</Heading>
        <List hasDividers density="spacious">
          {EXPERIENCE.map((e) => (
            <ListItem
              key={e.org}
              label={`${e.org} — ${e.role}`}
              description={
                <Stack direction="vertical" gap={1}>
                  <Text type="supporting" size="sm" className="mono">
                    {e.period}
                  </Text>
                  <Text as="p" color="secondary">
                    {e.description}
                  </Text>
                </Stack>
              }
            />
          ))}
        </List>
      </Stack>
    </section>
  )
}

function SecurityResearch() {
  return (
    <section id="security">
      <Stack direction="vertical" gap={4}>
        <Heading level={2}>Security research</Heading>
        <Grid columns={{ minWidth: 240, max: 2, repeat: 'fill' }} gap={4}>
          {SECURITY_ITEMS.map((s) => (
            <Stack key={s.title} direction="vertical" gap={1}>
              <Text weight="semibold">{s.title}</Text>
              <Text color="secondary">{s.text}</Text>
            </Stack>
          ))}
        </Grid>
        <Text color="secondary">
          Platforms:{' '}
          <Link href="https://hackerone.com/s3nafps" target="_blank" rel="noopener noreferrer">
            HackerOne @s3nafps
          </Link>
          {' · '}Intigriti{' · '}Bugcrowd
        </Text>
      </Stack>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <Stack direction="vertical" gap={4}>
        <Heading level={2}>Contact</Heading>
        <Link href="mailto:mohamed.senator@icloud.com" size="2xl" weight="medium" hasUnderline>
          mohamed.senator@icloud.com
        </Link>
        <HStack gap={4} wrap="wrap">
          <Link href="https://github.com/s3nafps" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/mohamedsenator" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link href="https://hackerone.com/s3nafps" target="_blank" rel="noopener noreferrer">
            HackerOne
          </Link>
          <Link href="/Mohamed_Senator_CV_2026.pdf" target="_blank" rel="noopener noreferrer">
            CV (PDF)
          </Link>
        </HStack>
      </Stack>
    </section>
  )
}

/* ----------------------------------- app ---------------------------------- */

export default function App() {
  const [mode, setMode] = useState<Mode>(initialMode)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  return (
    <Theme theme={neutralTheme} mode={mode}>
      <div className="nav-sticky">
        <div className="page-shell">
          <TopNav
            label="Primary navigation"
            heading={
              <Text weight="semibold" size="lg">
                Mohamed Senator
              </Text>
            }
            startContent={
              <>
                <TopNavItem label="Work" href="#work" />
                <TopNavItem label="Capabilities" href="#capabilities" />
                <TopNavItem label="Experience" href="#experience" />
                <TopNavItem label="Security" href="#security" />
                <TopNavItem label="Contact" href="#contact" />
              </>
            }
            endContent={
              <Switch
                label="Dark mode"
                value={mode === 'dark'}
                onChange={(checked) => setMode(checked ? 'dark' : 'light')}
              />
            }
          />
        </div>
      </div>
      <main className="page-shell">
        <Hero />
        <Work />
        <Capabilities />
        <Experience />
        <SecurityResearch />
        <Contact />
      </main>
      <div className="page-shell">
        <footer className="footer-bar">
          <Text type="code" size="sm" color="secondary">
            © 2026 Mohamed Senator · Algiers, Algeria
          </Text>
        </footer>
      </div>
    </Theme>
  )
}
