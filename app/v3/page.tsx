"use client";
import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Setup } from "@/components/sections/Setup";
import { Compat } from "@/components/sections/Compat";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { HERO } from "@/lib/content";
import { Button } from "@/components/ui/Button";

function AgentHubMockUI() {
  return (
    <div className="border-2 border-[#201710] shadow-[6px_6px_0_#201710] bg-[#0f0f0f] font-mono text-xs text-[#e8e8e8] overflow-hidden w-full">
      {/* Topbar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <span className="text-[#ff7a64] font-bold">⚙️ Agent Hub</span>
        <span className="text-[#4a4a4a] text-xs">bc: ~/workspace-persey/SOUL.md</span>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      {/* Main layout: sidebar + 2 panes */}
      <div className="flex" style={{ height: "360px" }}>
        {/* Sidebar */}
        <div className="w-32 border-r border-[#2a2a2a] flex-shrink-0 overflow-y-auto">
          <div className="px-2 py-1.5 text-[#4a4a4a] text-[10px] uppercase tracking-wider border-b border-[#1f1f1f]">Agents</div>
          {[
            { name: "Persey", icon: "⚙️", active: true },
            { name: "Meda", icon: "🎨", active: false },
            { name: "Desi", icon: "✨", active: false },
            { name: "Main", icon: "🤖", active: false },
          ].map((a) => (
            <div
              key={a.name}
              className={`px-2 py-1.5 text-[11px] flex items-center gap-1.5 cursor-pointer ${
                a.active
                  ? "bg-[#ff7a64]/10 text-[#ff7a64] border-l-2 border-[#ff7a64]"
                  : "text-[#6a6a6a] hover:text-[#e8e8e8]"
              }`}
            >
              <span>{a.icon}</span>
              <span>{a.name}</span>
            </div>
          ))}
          <div className="px-2 py-1.5 text-[#4a4a4a] text-[10px] uppercase tracking-wider border-y border-[#1f1f1f] mt-2">Skills</div>
          {["🧩 agent-learn", "🔧 system-cfg", "📝 notion", "🌐 web-fetch"].map((s) => (
            <div key={s} className="px-2 py-1.5 text-[11px] text-[#6a6a6a] hover:text-[#e8e8e8] cursor-pointer truncate">{s}</div>
          ))}
        </div>

        {/* Pane 1 */}
        <div className="flex-1 border-r border-[#2a2a2a] flex flex-col">
          <div className="px-3 py-1.5 bg-[#1a1a1a] border-b border-[#2a2a2a] flex items-center justify-between">
            <span className="text-[#ff7a64] text-[10px]">SOUL.md</span>
            <div className="flex gap-2 text-[#4a4a4a] text-[10px]">
              <span className="hover:text-[#e8e8e8] cursor-pointer">Save</span>
              <span className="hover:text-[#ff5f56] cursor-pointer">✕</span>
            </div>
          </div>
          <div className="p-3 overflow-y-auto flex-1 text-[11px] leading-relaxed">
            <div className="text-[#8be9fd]"># Who I Am</div>
            <div className="text-[#6a6a6a] mt-1 text-[10px] italic">Product CTO. Not a chatbot...</div>
            <div className="mt-2 text-[#8be9fd]">## Core Truths</div>
            <div className="text-[#6a6a6a] mt-1 text-[10px]">**I have strong opinions...**</div>
            <div className="text-[#6a6a6a] text-[10px]">**Specifics always beat...**</div>
            <div className="text-[#6a6a6a] text-[10px]">**Ship First means...**</div>
            <div className="mt-2 text-[#8be9fd]">## Boundaries</div>
            <div className="text-[#6a6a6a] text-[10px]">- Michael approves...</div>
          </div>
          <div className="px-3 py-1.5 bg-[#1a1a1a] border-t border-[#2a2a2a] flex gap-4 text-[#4a4a4a] text-[10px]">
            <span>Lines: 45</span>
            <span>Words: 312</span>
          </div>
        </div>

        {/* Pane 2 */}
        <div className="flex-1 flex flex-col">
          <div className="px-3 py-1.5 bg-[#1a1a1a] border-b border-[#2a2a2a] flex items-center justify-between">
            <span className="text-[#50fa7b] text-[10px]">MEMORY.md</span>
            <div className="flex gap-2 text-[#4a4a4a] text-[10px]">
              <span className="hover:text-[#e8e8e8] cursor-pointer">Save</span>
              <span className="hover:text-[#ff5f56] cursor-pointer">✕</span>
            </div>
          </div>
          <div className="p-3 overflow-y-auto flex-1 text-[11px] leading-relaxed">
            <div className="text-[#8be9fd]"># Long-term Memory</div>
            <div className="mt-2 text-[#8be9fd]">## Studio Context</div>
            <div className="text-[#6a6a6a] mt-1 text-[10px]">Laniameda is an AI-native...</div>
            <div className="mt-2 text-[#8be9fd]">## Key Decisions</div>
            <div className="text-[#6a6a6a] text-[10px]">- Tailwind v4 for agent-hub-web</div>
            <div className="text-[#6a6a6a] text-[10px]">- Convex for laniameda.gallery</div>
            <div className="mt-2 text-[#8be9fd]">## Working Style</div>
            <div className="text-[#6a6a6a] text-[10px]">Michael approves arch decisions...</div>
          </div>
          <div className="px-3 py-1.5 bg-[#1a1a1a] border-t border-[#2a2a2a] flex gap-4 text-[#4a4a4a] text-[10px]">
            <span>Lines: 89</span>
            <span>Words: 645</span>
          </div>
        </div>
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

export default function V3() {
  return (
    <div className="bg-[#fffaf5] min-h-screen">
      <Header />

      {/* Hero: left copy + right mock UI */}
      <section className="min-h-[90vh] flex items-center px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Left */}
          <div>
            <p className="font-mono text-xs text-[#ff7a64] mb-4">{HERO.eyebrow}</p>
            <h1
              className="font-black leading-[1.0] tracking-[-0.04em] text-[#201710] mb-6"
              style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
            >
              {HERO.tagline}
            </h1>
            <p className="text-[#4c3a2d] text-base leading-relaxed mb-8 max-w-sm">
              {HERO.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <CopyPill />
              <Button href={HERO.ctas.secondaryUrl} variant="ghost">
                {HERO.ctas.secondary}
              </Button>
            </div>
          </div>

          {/* Right: CSS mock UI */}
          <div>
            <AgentHubMockUI />
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
