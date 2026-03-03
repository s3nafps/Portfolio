import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Senator — Systems & Infrastructure Engineer",
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
    title: "Mohamed Senator — Systems & Infrastructure Engineer",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
