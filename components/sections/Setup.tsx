"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { SETUP_TABS } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TerminalBlock } from "@/components/ui/TerminalBlock";

export function Setup() {
  return (
    <section id="setup" className="py-20 px-4 sm:px-6 bg-[#18181b] text-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <SectionLabel className="text-[#ff7a64]">Setup</SectionLabel>
        <h2 className="text-3xl font-black mt-4 mb-8 tracking-[-0.04em]">
          One command to start.
        </h2>
        <Tabs.Root defaultValue="0">
          <Tabs.List className="flex border-b-2 border-[#2a2a2a] mb-0">
            {SETUP_TABS.map((tab, i) => (
              <Tabs.Trigger
                key={i}
                value={String(i)}
                className="font-mono text-xs px-4 py-2.5 text-[#ab9381] border-b-2 border-transparent data-[state=active]:border-[#ff7a64] data-[state=active]:text-[#ff7a64] transition-colors cursor-pointer"
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {SETUP_TABS.map((tab, i) => (
            <Tabs.Content key={i} value={String(i)}>
              <TerminalBlock code={tab.code} lineNumbers />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
