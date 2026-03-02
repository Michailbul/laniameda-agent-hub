import { PROBLEMS } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface ProblemProps {
  variant?: "v1" | "v2" | "v3";
}

export function Problem({ variant = "v1" }: ProblemProps) {
  if (variant === "v2") {
    return (
      <section id="problem" className="bg-[#201710] text-[#fafafa] py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel className="text-[#ff7a64]">The problem</SectionLabel>
          <h2 className="text-5xl md:text-7xl font-black mt-4 mb-16 tracking-[-0.04em] leading-tight">
            Agent context is a mess.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="bg-[#fffaf5] text-[#201710] border-2 border-[#ff7a64] shadow-[4px_4px_0_#ff7a64] p-8 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#ff7a64] transition-all"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-xl mb-2 tracking-[-0.02em]">{p.title}</h3>
                <p className="text-[#4c3a2d] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="problem" className="bg-[#18181b] text-[#fafafa] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel className="text-[#ff7a64]">The problem</SectionLabel>
        <div className="grid md:grid-cols-3 gap-0 mt-8 border-2 border-[#ff7a64]">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className={`p-6 hover:shadow-[inset_4px_0_0_#ff7a64] transition-all ${
                i < PROBLEMS.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-[#2a2a2a]" : ""
              }`}
            >
              <div className="font-mono text-lg mb-3">{p.icon}</div>
              <h3 className="font-bold text-base mb-2">{p.title}</h3>
              <p className="text-[#ab9381] text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
