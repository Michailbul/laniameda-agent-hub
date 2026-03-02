"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { FAQ as FAQ_DATA } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[#fffaf5]">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="text-3xl font-black mt-4 mb-10 tracking-[-0.04em]">Common questions.</h2>
        <Accordion.Root type="multiple" className="space-y-2">
          {FAQ_DATA.map((item, i) => (
            <Accordion.Item
              key={i}
              value={String(i)}
              className="border-2 border-[#201710] shadow-[4px_4px_0_#201710] overflow-hidden"
            >
              <Accordion.Trigger className="w-full text-left px-5 py-4 font-bold text-sm flex justify-between items-center group cursor-pointer bg-white hover:bg-[#fff4ea] transition-colors">
                <span>{item.q}</span>
                <span className="font-mono text-[#ff7a64] text-lg group-data-[state=open]:rotate-45 transition-transform">+</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-5 py-4 text-sm text-[#4c3a2d] leading-relaxed bg-[#fff4ea] border-t-2 border-[#201710]">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
