import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedsenator.vercel.app"),
  title: "Mohamed Senator — Infrastructure, Cloud & Automation",
  description:
    "Portfolio of Mohamed Senator, an IT infrastructure and Cloud/DevOps support engineer building secure automation, operational tools, and AI-assisted products.",
  keywords: [
    "Mohamed Senator",
    "Cloud DevOps Support Engineer",
    "IT Infrastructure",
    "PowerShell",
    "Docker",
    "Terraform",
    "Cybersecurity",
    "Algeria",
  ],
  authors: [{ name: "Mohamed Senator" }],
  creator: "Mohamed Senator",
  openGraph: {
    title: "Mohamed Senator — Infrastructure, Cloud & Automation",
    description: "Secure systems. Useful automation. Operational proof.",
    type: "website",
    url: "https://mohamedsenator.vercel.app",
    siteName: "Mohamed Senator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Senator — Infrastructure, Cloud & Automation",
    description: "Secure systems. Useful automation. Operational proof.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
