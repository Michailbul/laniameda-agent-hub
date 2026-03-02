"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-[#fffaf5]/90 backdrop-blur-sm border-b-2 border-[#201710]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="/" className="font-mono font-bold text-[#201710] text-sm no-underline flex items-center gap-2">
          <span>⚙️</span> Agent Hub
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {["Features", "Setup", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs text-[#4c3a2d] hover:text-[#ff7a64] transition-colors no-underline"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button href="https://github.com/Michailbul/agent-hub" variant="primary">
          GitHub →
        </Button>
      </div>
    </header>
  );
}
