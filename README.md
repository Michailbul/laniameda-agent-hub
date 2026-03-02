# Agent Hub — Landing Page

> Marketing site for [Agent Hub](https://github.com/Michailbul/agent-hub) — the self-hosted editor for AI agent workspaces.

**This repo:** `Michailbul/laniameda-agent-hub` — the landing page (owned by Laniameda)  
**The app:** `Michailbul/agent-hub` — the open source product itself

---

## Two repos, two purposes

| | This repo | App repo |
|---|---|---|
| **What** | Marketing website | The product |
| **Repo** | `laniameda-agent-hub` | `agent-hub` |
| **Owner** | Laniameda (brand) | Open source / community |
| **License** | All rights reserved | MIT |
| **Contributions** | Internal only | Open to PRs |
| **Deploy** | Vercel (vercel.json) | Self-hosted / Docker |
| **Stack** | Next.js + Tailwind + Framer Motion | Node.js + Express + vanilla JS |

---

## Stack

- **Next.js 14** App Router + TypeScript
- **Tailwind CSS v4** with custom design tokens
- **Framer Motion** — scroll animations, micro-interactions
- **Radix UI** — Accordion, Tabs (unstyled primitives)
- **Lucide React** — icons
- **next/font** — Inter + JetBrains Mono

## Design system

Code brutalism on the Laniameda warm palette:
- Warm paper background: `#fffaf5`
- Coral accent: `#ff7a64`
- Hard offset shadows: `4px 4px 0 #201710` — no blur
- Hover lift: `translate(-2px, -2px)` + shadow grows
- Inter 800/900 for headlines · JetBrains Mono for all labels + code

---

## Getting started

```bash
git clone https://github.com/Michailbul/laniameda-agent-hub
cd laniameda-agent-hub
npm install
npm run dev
# → http://localhost:3000
```

## Routes

| Route | Description |
|---|---|
| `/` | Variant selector — internal design review |
| `/v1` | Minimal Terminal — dense, CLI-forward |
| `/v2` | Editorial Bold — 96px headline, magazine rhythm |
| `/v3` | Dashboard Preview — CSS editor mock as hero |

Once a direction is chosen, the winning variant becomes the root `/` and others are removed.

## Deploy

```bash
npm run build   # static export
vercel deploy   # or push to main → auto-deploy via Vercel
```

---

## Related

- **[agent-hub](https://github.com/Michailbul/agent-hub)** — the open source app this page markets
- **Live demo** — https://agent-hub.srv1439489.hstgr.cloud
- **Install** — `npx @laniameda/agent-hub`

---

*Built by [Laniameda](https://laniameda.gallery)*
