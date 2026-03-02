import { FEATURES } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrutalistCard } from "@/components/ui/BrutalistCard";

interface FeaturesProps {
  variant?: "v1" | "v2" | "v3";
}

export function Features({ variant = "v1" }: FeaturesProps) {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-[#fffaf5]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Features</SectionLabel>
        {variant === "v2" && (
          <h2 className="text-5xl font-black mt-4 mb-12 tracking-[-0.04em]">
            Everything you need.
          </h2>
        )}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 ${variant === "v2" ? "gap-6" : "gap-3"}`}>
          {FEATURES.map((f, i) => (
            <BrutalistCard
              key={f.title}
              className={`${variant === "v2" ? "p-8" : "p-5"} bg-white`}
            >
              {variant === "v2" ? (
                <div>
                  <div className="font-mono text-[#ff7a64] font-bold text-2xl mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-xl mb-2 tracking-[-0.02em]">{f.title}</h3>
                  <p className="text-[#4c3a2d] leading-relaxed">{f.description}</p>
                </div>
              ) : (
                <div className="flex gap-3">
                  <span className="font-mono text-lg shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#ff7a64] mb-1">{f.title}</h3>
                    <p className="text-[#4c3a2d] text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              )}
            </BrutalistCard>
          ))}
        </div>
      </div>
    </section>
  );
}
