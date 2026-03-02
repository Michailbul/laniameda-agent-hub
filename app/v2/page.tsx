"use client";
import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Setup } from "@/components/sections/Setup";
import { Compat } from "@/components/sections/Compat";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { HERO, FEATURES } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const MARQUEE_ITEMS = [
  "MULTI-PANE EDITOR",
  "SKILL BROWSER",
  "AUTO-DISCOVERY",
  "DRAG & DROP",
  "FOCUS TIMER",
  "SELF-HOSTED",
  "MIT LICENSE",
  "ZERO CONFIG",
];

function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y-2 border-[#201710] bg-[#fff4ea] py-3 my-12">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-sm font-medium text-[#201710] flex items-center gap-4">
            {item}
            <span className="text-[#ff7a64] mx-2">·</span>
          </span>
        ))}
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
      className="inline-flex items-center gap-3 font-mono text-sm bg-[#201710] text-[#fffaf5] border-2 border-[#201710] shadow-[4px_4px_0_#201710] hover:shadow-[6px_6px_0_#ff7a64] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all px-5 py-3 cursor-pointer"
    >
      <span className="text-[#50fa7b]">$</span>
      <span>{text}</span>
      <span className="ml-2 text-[#ff7a64]">{copied ? "✓" : "⎘"}</span>
    </button>
  );
}

export default function V2() {
  return (
    <div className="bg-[#fffaf5] min-h-screen">
      <Header />

      {/* Hero — full width centered, editorial */}
      <section className="py-24 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs text-[#ff7a64] mb-6 tracking-widest uppercase">
            {HERO.eyebrow}
          </p>
          <h1
            className="font-black leading-[0.95] tracking-[-0.05em] mb-8 text-[#201710]"
            style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
          >
            Your agents are only as good as their{" "}
            <span className="text-[#ff7a64]">context.</span>
          </h1>
          <p className="text-xl text-[#4c3a2d] max-w-[560px] mx-auto leading-relaxed mb-10">
            {HERO.sub}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CopyPill />
            <Button href={HERO.ctas.secondaryUrl} variant="ghost">
              {HERO.ctas.secondary}
            </Button>
          </div>
        </div>
        <Marquee />
      </section>

      <Problem variant="v2" />

      {/* Solution: alternating rows */}
      <section className="py-20 px-4 sm:px-6 bg-[#fffaf5]">
        <div className="max-w-6xl mx-auto space-y-20">
          {[
            {
              title: "All your agents in one view.",
              body: "Agent Hub auto-discovers all your agent workspaces. SOUL.md, MEMORY.md, skills — everything visible at a glance. No more digging through directories.",
              icon: "🔍",
            },
            {
              title: "Edit context, not code.",
              body: "Multi-pane editor purpose-built for agent files. Compare SOUL.md across agents. Drag skills. Right-click to copy or move. Context editing as a first-class workflow.",
              icon: "✏️",
              flip: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${item.flip ? "md:flex-row-reverse" : ""}`}
              style={{ direction: item.flip ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-4xl font-black tracking-[-0.04em] mb-4">{item.title}</h3>
                <p className="text-[#4c3a2d] text-lg leading-relaxed">{item.body}</p>
              </div>
              <div style={{ direction: "ltr" }} className="bg-[#201710] p-8 border-2 border-[#201710] shadow-[6px_6px_0_#ff7a64] font-mono text-sm text-[#50fa7b]">
                <pre>{`→ Scanning workspaces...
✓ ~/.openclaw/workspace-persey
  SOUL.md        2.1kb
  MEMORY.md      4.8kb
  MISSION.md     1.2kb
  skills/        42 files
✓ ~/.openclaw/workspace-meda
  SOUL.md        1.8kb
  MEMORY.md      3.2kb
  skills/        28 files`}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Features variant="v2" />
      <Setup />
      <Compat />
      <FAQ />
      <Footer />
    </div>
  );
}
