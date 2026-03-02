"use client";
import { useState } from "react";

interface TerminalBlockProps {
  code: string;
  lineNumbers?: boolean;
  className?: string;
}

export function TerminalBlock({ code, lineNumbers = false, className = "" }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  const colorLine = (line: string) => {
    if (line.startsWith("$")) return <span className="text-[#8be9fd]">{line}</span>;
    if (line.startsWith("✓")) return <span className="text-[#50fa7b]">{line}</span>;
    if (line.startsWith("→")) return <span className="text-[#e8e8e8]">{line}</span>;
    if (line.startsWith("#")) return <span className="text-[#ab9381]">{line}</span>;
    if (line.startsWith("⚙️")) return <span className="text-[#ff7a64]">{line}</span>;
    if (line.includes(":")) {
      const idx = line.indexOf(":");
      const key = line.slice(0, idx + 1);
      const val = line.slice(idx + 1);
      return (
        <span>
          <span className="text-[#8be9fd]">{key}</span>
          <span className="text-[#50fa7b]">{val}</span>
        </span>
      );
    }
    return <span>{line}</span>;
  };

  return (
    <div className={`relative bg-[#0f0f0f] text-[#e8e8e8] font-mono text-sm overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#2a2a2a]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
        </div>
        <button
          onClick={copy}
          className="text-[#6b7280] hover:text-[#e8e8e8] text-xs font-mono transition-colors"
        >
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="whitespace-pre leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-4">
              {lineNumbers && (
                <span className="text-[#3a3a3a] select-none w-6 text-right shrink-0">{i + 1}</span>
              )}
              <span>{colorLine(line)}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
