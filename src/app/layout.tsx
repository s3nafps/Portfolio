import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Senator - Systems & Infrastructure Engineer",
  description:
    "Portfolio of Mohamed Senator. Systems and Infrastructure Engineer, Google Cloud Certified (ACE). Specializing in PowerShell automation, Docker, Terraform, and GCP.",
  keywords: [
    "Mohamed Senator",
    "Systems Engineer",
    "Infrastructure Engineer",
    "Google Cloud",
    "Terraform",
    "PowerShell",
    "Docker",
    "DevOps",
  ],
  authors: [{ name: "Mohamed Senator" }],
  openGraph: {
    title: "Mohamed Senator - Systems & Infrastructure Engineer",
    description:
      "Transitioning manual IT operations into streamlined, automated workflows using PowerShell, Docker, and Terraform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
