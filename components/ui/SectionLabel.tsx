interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`font-mono text-xs uppercase tracking-widest text-[#ff7a64] ${className}`}>
      {"// "}{children}
    </span>
  );
}
