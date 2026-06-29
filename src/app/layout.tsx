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
  title: "Mohamed Senator - Infrastructure, Automation & Cloud Engineer",
  description:
    "Portfolio of Mohamed Senator, an infrastructure and automation engineer building secure cloud architectures, PowerShell tools, DevOps systems, self-hosted platforms, and AI-assisted software products.",
  keywords: [
    "Mohamed Senator",
    "Infrastructure Engineer",
    "Automation Engineer",
    "PowerShell",
    "DevOps",
    "Google Cloud",
    "Terraform",
    "Kubernetes",
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
    title: "Mohamed Senator - Infrastructure, Automation & Cloud Engineer",
    description:
      "Infrastructure, automation, cloud, self-hosting, and AI-assisted product work by Mohamed Senator.",
    type: "website",
    url: "https://mohamedsenator.vercel.app",
    siteName: "Mohamed Senator Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Senator - Infrastructure, Automation & Cloud Engineer",
    description:
      "Secure infrastructure, automation tools, cloud architecture, and AI-assisted software products.",
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
