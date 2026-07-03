import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedsenator.vercel.app"),
  title: "Mohamed Senator - Cloud / DevOps Support Engineer",
  description:
    "Portfolio of Mohamed Senator, a Cloud and DevOps Support Engineer focused on Linux VPS operations, Docker deployments, monitoring, backups, troubleshooting, and automation.",
  keywords: [
    "Mohamed Senator",
    "Cloud Support Engineer",
    "DevOps Support Engineer",
    "Linux Support Engineer",
    "Automation Engineer",
    "PowerShell",
    "DevOps",
    "Docker",
    "Docker Compose",
    "Linux VPS",
    "Monitoring",
    "Backups",
    "Google Cloud",
    "Terraform",
    "Windows Server",
    "AI-assisted development",
    "Vibe coding",
    "Algeria",
  ],
  authors: [{ name: "Mohamed Senator" }],
  creator: "Mohamed Senator",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mohamed Senator - Cloud / DevOps Support Engineer",
    description:
      "Cloud/DevOps support, Linux VPS, Docker deployment, monitoring, backup, and automation work by Mohamed Senator.",
    type: "website",
    url: "https://mohamedsenator.vercel.app",
    siteName: "Mohamed Senator Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Senator - Cloud / DevOps Support Engineer",
    description:
      "Linux VPS, Docker deployment, monitoring, backup, troubleshooting, and automation portfolio work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
