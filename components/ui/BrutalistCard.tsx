import { ReactNode } from "react";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  coralShadow?: boolean;
}

export function BrutalistCard({ children, className = "", coralShadow = false }: BrutalistCardProps) {
  const shadow = coralShadow
    ? "shadow-[4px_4px_0_#ff7a64] hover:shadow-[6px_6px_0_#ff7a64]"
    : "shadow-[4px_4px_0_#201710] hover:shadow-[6px_6px_0_#201710]";
  return (
    <div className={`border-2 border-[#201710] ${shadow} hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ${className}`}>
      {children}
    </div>
  );
}
