import { COMPAT } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Compat() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#fff4ea] border-y-2 border-[#201710]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Compatibility</SectionLabel>
        <div className="mt-6 space-y-4">
          <div>
            <p className="font-mono text-xs text-[#7d6755] mb-2 uppercase tracking-wider">Agent Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {COMPAT.agents.map((a) => (
                <Badge key={a}>{a}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-[#7d6755] mb-2 uppercase tracking-wider">Platforms</p>
            <div className="flex flex-wrap gap-2">
              {COMPAT.platforms.map((p) => (
                <Badge key={p} coral>{p}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
