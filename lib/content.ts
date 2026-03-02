export const HERO = {
  eyebrow: "// v0.2.0 · Open Source · MIT",
  tagline: "Your agents are only as good as their context.",
  sub: "Self-hosted editor for the files that make your AI agents smart. Instructions, skills, memory — without opening an IDE.",
  ctas: {
    primary: "npx @laniameda/agent-hub",
    secondary: "View on GitHub →",
    secondaryUrl: "https://github.com/Michailbul/agent-hub",
  },
};

export const PROBLEMS = [
  {
    icon: "📁",
    title: "Files scattered everywhere",
    description:
      "SOUL.md in one dir, skills in another, MEMORY.md somewhere else. No single view of your agent's context.",
  },
  {
    icon: "🔧",
    title: "Wrong tool for the job",
    description:
      "Editing agent personalities in VS Code. These aren't code files — they need a different editing experience.",
  },
  {
    icon: "🌀",
    title: "No overview of capabilities",
    description:
      "Which agent has which skills? What's in their memory right now? Nobody knows without digging through dirs.",
  },
];

export const FEATURES = [
  {
    icon: "⬜",
    title: "Multi-pane editor",
    description: "VSCode-style up to 4 panes. Compare agent files side by side.",
  },
  {
    icon: "🧩",
    title: "Skill browser",
    description: "All skills for all agents in one sidebar. Filter by Studio/Community/System.",
  },
  {
    icon: "🖱️",
    title: "Drag & drop",
    description: "Drag to open. Drag to header = new split pane. Right-click copy/move/delete.",
  },
  {
    icon: "🔍",
    title: "Auto-discovery",
    description: "Point at ~/.openclaw/. Finds agents via IDENTITY.md. Zero config.",
  },
  {
    icon: "⚡",
    title: "Setup agent",
    description: "Runs Claude Code/Codex CLI scan, writes config in 30 seconds.",
  },
  {
    icon: "🍅",
    title: "Focus timer",
    description: "Pomodoro built-in: 25/45/60/90m. Stay in flow while editing context.",
  },
  {
    icon: "🏠",
    title: "Self-hosted",
    description: "Local/VPS/Docker. No cloud, no telemetry, no account required.",
  },
  {
    icon: "🆓",
    title: "Free forever",
    description: "MIT license. Open source. Fork it, modify it, ship it.",
  },
];

export const SETUP_TABS = [
  {
    label: "Install",
    code: `# One command to start
$ npx @laniameda/agent-hub

⚙️  Agent Hub v0.2.0
→ Auto-discovering agents...
✓ Found: Persey ⚙️  (CTO)
✓ Found: Meda 🎨  (Marketing)
✓ Found: Desi ✨  (Design)
✓ Found: Main 🤖  (General)
→ 42 skills loaded
→ Starting server on :4001
✓ Ready at http://localhost:4001`,
  },
  {
    label: "Configure",
    code: `# agent-hub.config.json (auto-generated)
{
  "workspaces": [
    "~/.openclaw/workspace-persey",
    "~/.openclaw/workspace-meda"
  ],
  "port": 4001,
  "editor": {
    "panes": 2,
    "theme": "brutal-warm"
  },
  "focusTimer": {
    "default": 25,
    "breaks": true
  }
}`,
  },
  {
    label: "Docker",
    code: `# Run with Docker
docker run -d \\
  --name agent-hub \\
  -p 4001:4001 \\
  -v ~/.openclaw:/root/.openclaw \\
  ghcr.io/michailbul/agent-hub:latest

# Or with compose
services:
  agent-hub:
    image: ghcr.io/michailbul/agent-hub:latest
    ports: ["4001:4001"]
    volumes:
      - ~/.openclaw:/root/.openclaw`,
  },
];

export const FAQ = [
  {
    q: "What agent frameworks does it support?",
    a: "Any markdown-based agent setup. Works with OpenClaw, Claude Code, Codex, and any custom setup using SOUL.md / MEMORY.md / skills patterns. If your agent reads files, Agent Hub can edit them.",
  },
  {
    q: "Is my data sent anywhere?",
    a: "No. Agent Hub runs entirely locally. No telemetry, no analytics, no cloud sync. Your agent files stay on your machine.",
  },
  {
    q: "Can I use it on a VPS/server?",
    a: "Yes. Run it on any Linux box, expose it behind a reverse proxy with auth. Docker image available. No GUI required on the server.",
  },
  {
    q: "How is this different from VS Code?",
    a: "VS Code is a general-purpose code editor. Agent Hub is purpose-built for agent context files — it understands SOUL.md, MEMORY.md, skill structure, and gives you an overview across all your agents at once.",
  },
  {
    q: "Is it production ready?",
    a: "v0.2.0 is stable for personal use. We use it daily for managing 4 agents across 40+ skills. Breaking changes possible before v1.0.",
  },
];

export const COMPAT = {
  agents: ["OpenClaw", "Claude Code", "Codex", "Cursor", "Any Markdown Agent"],
  platforms: ["macOS", "Linux", "Windows (WSL)", "Docker", "VPS/Server"],
};
