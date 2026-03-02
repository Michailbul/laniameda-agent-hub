import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const VARIANTS = [
  {
    id: "v1",
    name: "V1 — Minimal Terminal",
    description: "Dense, developer-first. Hero is a typewriter CLI output. Grid background, mono dominant, coral pops.",
    href: "/v1",
    accent: "#8be9fd",
  },
  {
    id: "v2",
    name: "V2 — Editorial Bold",
    description: "96px headline. Full-bleed section breaks. Magazine rhythm. Marquee. Big typography is the design.",
    href: "/v2",
    accent: "#ff7a64",
  },
  {
    id: "v3",
    name: "V3 — Dashboard Preview",
    description: "The product IS the hero. CSS-rendered Agent Hub UI mock in the hero. Product-forward SaaS feel.",
    href: "/v3",
    accent: "#50fa7b",
  },
];

export default function Home() {
  return (
    <div className="bg-[#fffaf5] min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <p className="font-mono text-xs text-[#ff7a64] mb-2">// internal design review</p>
        <h1 className="text-4xl font-black tracking-[-0.04em] text-[#201710] mb-3">
          Agent Hub — Pick a direction.
        </h1>
        <p className="text-[#4c3a2d] mb-12 max-w-md">
          Three design variants for the Agent Hub landing page. Review and choose one to ship.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {VARIANTS.map((v) => (
            <a
              key={v.id}
              href={v.href}
              className="block border-2 border-[#201710] shadow-[4px_4px_0_#201710] hover:shadow-[6px_6px_0_#201710] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all bg-white no-underline"
            >
              {/* Color strip */}
              <div className="h-2 border-b-2 border-[#201710]" style={{ background: v.accent }} />
              <div className="p-6">
                <p className="font-mono text-xs text-[#ab9381] mb-2">{v.id.toUpperCase()}</p>
                <h2 className="font-bold text-lg text-[#201710] mb-2 tracking-[-0.02em]">{v.name}</h2>
                <p className="text-[#4c3a2d] text-sm leading-relaxed mb-4">{v.description}</p>
                <span className="font-mono text-xs text-[#ff7a64]">View →</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
