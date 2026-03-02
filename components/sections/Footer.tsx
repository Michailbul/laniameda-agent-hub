export function Footer() {
  return (
    <footer className="bg-[#18181b] text-[#fafafa] border-t-2 border-[#201710]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span>⚙️</span>
          <span className="font-bold">Agent Hub</span>
          <span className="text-[#ab9381] ml-2">v0.2.0 · MIT License</span>
        </div>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/Michailbul/agent-hub" },
            { label: "Demo", href: "https://agent-hub.srv1439489.hstgr.cloud" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#ab9381] hover:text-[#ff7a64] transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-[#4c3a2d]">
          © 2025 Laniameda. Open Source.
        </p>
      </div>
    </footer>
  );
}
