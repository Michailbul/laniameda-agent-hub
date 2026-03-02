# PRD — Agent Hub Landing Page
**Version:** 1.0 | **Author:** Persey (CTO) | **Status:** Ready for build

## 1. Problem
AI agents live and die by their context. SOUL.md, MISSION.md, MEMORY.md, skills — these are the most important engineering artifacts in any AI-native project. Yet there is no purpose-built editor for them. Developers edit agent personalities in VS Code. Skills are scattered. Nobody knows which agent has which capabilities.

## 2. Solution
Agent Hub — self-hosted web editor purpose-built for agent instruction files. Works with OpenClaw, Claude Code, Codex, any markdown-based agent setup.

## 3. Target Personas
- **AI Engineer** — runs OpenClaw/Claude Code, has 3-8 agent workspaces, edits SOUL.md in VS Code (wrong tool)
- **Vibe Coder** — ships fast, uses Claude Code + Cursor, skills scattered across dirs
- **AI PM/Builder** — manages agent fleets, needs overview of who has what skills/context

## 4. Key Features
1. Multi-pane editor — VSCode-style, up to 4 panes, compare agent files side by side
2. Skill browser — all skills for all agents, one sidebar, filter by Studio/Community/System
3. Drag & drop — drag to open, drag to header = new split pane, right-click copy/move/delete
4. Auto-discovery — points at ~/.openclaw/, finds agents via IDENTITY.md, zero config
5. Setup agent — runs Claude Code/Codex CLI scan, writes config in 30 seconds
6. Focus timer — Pomodoro built-in (25/45/60/90m)
7. Self-hosted — local/VPS/Docker, no cloud, no telemetry
8. Free forever — MIT license, open source

## 5. Stack
- Next.js 14 App Router
- Tailwind CSS v3 + CSS custom properties
- Framer Motion (scroll animations, micro-interactions)
- Radix UI (accordion, tabs — unstyled primitives)
- Lucide React (icons)
- next/font/google (Inter + JetBrains Mono)

## 6. Design System — Code Brutalism on Laniameda Palette

### Colors
```css
--p: #fffaf5;    --ink: #201710;   --coral: #ff7a64;
--s1: #fff4ea;   --t2: #4c3a2d;    --cdim: rgba(255,122,100,.10);
--s2: #f7ede2;   --t3: #7d6755;    --cglow: rgba(255,122,100,.18);
--s3: #efe2d4;   --tg: #ab9381;    --inv: #18181b;   --invt: #fafafa;
```

### Brutalism rules
- Cards: `border: 2px solid var(--ink); box-shadow: 4px 4px 0 var(--ink);`
- Hover: `transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--ink);`
- Coral variant: `box-shadow: 4px 4px 0 var(--coral);`
- NO border-radius on brutalist elements
- Inter 800/900 headlines, -0.04em letter-spacing, 64-96px hero
- JetBrains Mono: ALL labels, badges, eyebrows, nav items, terminal blocks
- Terminal bg: #0f0f0f, coral syntax, green comments, blue strings

## 7. Three Variants to Build

### V1 — "Minimal Terminal" (app/v1/page.tsx)
Dense, monochrome-dominant, coral pops only for key moments. Hero is mostly terminal output. Information-dense. Feels like a developer readme that got designed. Grid background on hero section.

### V2 — "Editorial Bold" (app/v2/page.tsx)
Big editorial typography takes center stage. 96px headline. Section breaks use full-bleed ink backgrounds with inverted text. Magazine + developer tool hybrid. More white space, slower pace.

### V3 — "Dashboard Preview" (app/v3/page.tsx)
Hero features an actual CSS-rendered mock of the Agent Hub editor UI (sidebar + split panes + file tree). The product IS the hero. Features section uses the same mock with callout annotations. Feels like a SaaS product page.

## 8. Project Structure
```
agent-hub-web/
  app/
    layout.tsx
    page.tsx          ← variant selector (shows 3 preview cards)
    globals.css
    v1/page.tsx       ← Minimal Terminal
    v2/page.tsx       ← Editorial Bold
    v3/page.tsx       ← Dashboard Preview
  components/
    sections/         ← Hero, Problem, Solution, Features, Setup, Compat, FAQ, Footer
    ui/               ← Button, TerminalBlock, FeatureCard, BrutalistCard, Badge
  lib/
    content.ts        ← all copy as typed constants (shared across variants)
```

## 9. Copy

**Tagline:** Your agents are only as good as their context.
**Sub:** Self-hosted editor for the files that make your AI agents smart. Instructions, skills, memory — without opening an IDE.
**Eyebrow:** // v0.2.0 · Open Source · MIT
**Primary CTA:** npx @laniameda/agent-hub (copy to clipboard)
**Secondary:** View on GitHub →

## 10. URLs
- GitHub: https://github.com/Michailbul/agent-hub
- Demo: https://agent-hub.srv1439489.hstgr.cloud
- Install: npx @laniameda/agent-hub

## 11. Success Criteria
- All 3 variants complete and navigable
- Mobile responsive (640/768/1024/1280 breakpoints)
- Scroll animations via Framer Motion
- Lighthouse performance ≥ 90
- Developer reads hero and thinks "these people get it" in <10 seconds
