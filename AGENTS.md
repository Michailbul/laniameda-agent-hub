# AGENTS.md — Agent Hub Landing Page

This is the **marketing website** for Agent Hub. It is owned and maintained by Laniameda. Not the open source app — that lives at [Michailbul/agent-hub](https://github.com/Michailbul/agent-hub).

---

## Repo identity

- **Purpose:** Convert technical AI builders into Agent Hub installs and GitHub stars
- **Audience:** AI engineers, vibe coders, AI PMs — people who run Claude Code, OpenClaw, Codex
- **Owner:** Laniameda (internal, not open to public contributions)
- **Tone:** Sharp, technical, minimal. Written for people who live in the terminal.

---

## Working on this repo

### Before making changes
```bash
cd ~/work/agent-hub-web && git pull
npm install
npm run dev  # http://localhost:3000
```

### After changes
```bash
git add -A && git commit -m "feat/fix/copy: description" && git push
```

### Build check before pushing
```bash
npm run build  # must pass with zero TS errors
```

---

## Project structure

```
agent-hub-web/
  app/
    layout.tsx          ← metadata, fonts, global styles
    page.tsx            ← variant selector (internal review)
    globals.css         ← CSS custom properties + base styles
    v1/page.tsx         ← Minimal Terminal variant
    v2/page.tsx         ← Editorial Bold variant
    v3/page.tsx         ← Dashboard Preview variant
  components/
    sections/           ← Hero, Problem, Features, Setup, FAQ, Footer, Header
    ui/                 ← Button, BrutalistCard, TerminalBlock, Badge, SectionLabel
  lib/
    content.ts          ← ALL copy as typed constants — edit here first
  PRD.md                ← Full product brief + design system spec
```

---

## Agent rules for this repo

### Copy changes
- All copy lives in `lib/content.ts` — never hardcode strings in components
- Voice: technical, direct, no fluff. "These people get it" is the test.
- No Lorem Ipsum. No "game-changing". No "unlock potential".
- Write for someone reading at 11pm after a long coding session.

### Design changes
- Follow the design system in `PRD.md` section 6 exactly
- Brutalist shadows: `4px 4px 0 #201710` — never add blur
- Hover lift: `translate(-2px, -2px)` + shadow grows to `6px 6px 0`
- JetBrains Mono for: ALL labels, eyebrows, badges, nav items, terminal blocks, code
- Inter 800/900 for ALL display headings
- Coral (`#ff7a64`) used sparingly — key CTAs, accent moments only

### Component changes
- Add new UI primitives to `components/ui/`
- Add new page sections to `components/sections/`
- Never build one-off styled elements inline in page files

### Variants
- `/v1`, `/v2`, `/v3` are design variants for internal review
- Once Michael picks a direction: winning variant becomes `/` root, others archived
- Until then: all 3 must build and render correctly

---

## Adjacent repo: the app itself

**`Michailbul/agent-hub`** — `/root/work/agent-hub/`

This is the actual open source product. Key differences:

| | This repo (landing) | agent-hub (app) |
|---|---|---|
| Stack | Next.js / React | Node.js + Express + vanilla JS |
| Deploy | Vercel | Self-hosted / Docker |
| License | All rights reserved | MIT |
| Contributions | Internal | Open source, PRs welcome |
| Agent focus | Marketing, copy, design | Engineering, features, DX |

When writing copy about features, **verify against the actual app** before shipping:
```bash
# Check what's actually in the app
cat /root/work/agent-hub/server.js | grep "app\."
cat /root/work/agent-hub/src/setup-agent.ts
```

Features to keep accurate:
- Max 4 panes (not unlimited)
- Right-click: copy/move/delete skills
- Filter: Studio / Community / System
- Setup runs user's own `claude` or `codex` CLI — not our own AI
- MIT license, free forever
- Self-hosted only — no SaaS

---

## URLs (always use these, never invent)

- App GitHub: `https://github.com/Michailbul/agent-hub`
- Live demo: `https://agent-hub.srv1439489.hstgr.cloud`
- Install command: `npx @laniameda/agent-hub`
- This repo: `https://github.com/Michailbul/laniameda-agent-hub`
