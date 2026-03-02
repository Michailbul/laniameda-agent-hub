import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agent Hub — Editor for AI Agent Workspaces",
  description:
    "Self-hosted web editor for agent instruction files. Works with OpenClaw, Claude Code, Codex, any markdown-based agent setup.",
  openGraph: {
    title: "Agent Hub — Editor for AI Agent Workspaces",
    description:
      "Self-hosted web editor for agent instruction files. Edit SOUL.md, MEMORY.md, skills — without opening an IDE.",
    url: "https://agent-hub.srv1439489.hstgr.cloud",
    siteName: "Agent Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Hub — Editor for AI Agent Workspaces",
    description: "Self-hosted editor for the files that make your AI agents smart.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
