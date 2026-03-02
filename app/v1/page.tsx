"use client";
import { useEffect, useState } from "react";
import { Header } from "@/components/sections/Header";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Setup } from "@/components/sections/Setup";
import { Compat } from "@/components/sections/Compat";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { HERO } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const TERMINAL_LINES = [
  { text: "$ npx @laniameda/agent-hub", color: "text-[#8be9fd]" },
  { text: "⚙️  Agent Hub v0.2.0", color: "text-[#ff7a64]" },
  { text: "→ Auto-discovering agents...", color: "text-[#e8e8e8]" },
  { text: "✓ Found: Persey ⚙️  (CTO)", color: "text-[#50fa7b]" },
  { text: "✓ Found: Meda 🎨  (Marketing)", color: "text-[#50fa7b]" },
  { text: "✓ Found: Desi ✨  (Design)", color: "text-[#50fa7b]" },
  { text: "✓ Found: Main 🤖  (General)", color: "text-[#50fa7b]" },
  { text: "→ 42 skills loaded", color: "text-[#e8e8e8]" },
  { text: "→ Starting server on :4001", color: "text-[#e8e8e8]" },
  { text: "✓ Ready at http://localhost:4001", color: "text-[#50fa7b]" },
];

function TypewriterTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 250);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="bg-[#0f0f0f] border-2 border-[#201710] shadow-[4px_4px_0_#ff7a64]">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-[#1a1a1a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[#4a4a4a] text-xs">terminal</span>
      </div>
      <div className="p-4 font-mono text-sm min-h-[280px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${line.color} leading-7`}>{line.text}</div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#ff7a64] cursor-blink" />
        )}
        {visibleLines >= TERMINAL_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#50fa7b] cursor-blink" />
        )}
      </div>
    </div>
  );
}

function CopyPill() {
  const [copied, setCopied] = useState(false);
  const text = "npx @laniameda/agent-hub";
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-3 font-mono text-sm bg-[#201710] text-[#fffaf5] border-2 border-[#201710] shadow-[4px_4px_0_#201710] hover:shadow-[6px_6px_0_#ff7a64] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all px-4 py-2.5 cursor-pointer"
    >
      <span className="text-[#50fa7b]">$</span>
      <span>{text}</span>
      <span className="ml-2 text-[#ff7a64]">{copied ? "✓" : "⎘"}</span>
    </button>
  );
}

export default function V1() {
  return (
    <div className="bg-[#fffaf5] min-h-screen">
      <Header />

      {/* Hero */}
      <section
        className="min-h-[90vh] flex items-center px-4 sm:px-6 py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(32,23,16,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(32,23,16,.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="font-mono text-xs text-[#ff7a64] mb-4">{HERO.eyebrow}</p>
            <h1
              className="text-[56px] md:text-[64px] font-black leading-[1.05] tracking-[-0.04em] text-[#201710] mb-6"
            >
              {HERO.tagline}
            </h1>
            <p className="text-[#4c3a2d] text-base leading-relaxed mb-8 max-w-md">
              {HERO.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <CopyPill />
              <Button href={HERO.ctas.secondaryUrl} variant="ghost">
                {HERO.ctas.secondary}
              </Button>
            </div>
          </div>

          {/* Right: Terminal */}
          <div>
            <TypewriterTerminal />
          </div>
        </div>
      </section>

      <Problem variant="v1" />
      <Features variant="v1" />
      <Setup />
      <Compat />
      <FAQ />
      <Footer />
    </div>
  );
}
