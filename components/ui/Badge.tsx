interface BadgeProps {
  children: React.ReactNode;
  variant?: "square" | "pill";
  coral?: boolean;
}

export function Badge({ children, variant = "square", coral = false }: BadgeProps) {
  const radius = variant === "pill" ? "rounded-full" : "";
  const colors = coral
    ? "bg-[#ff7a64] text-white border-[#ff7a64]"
    : "bg-transparent text-[#201710] border-[#201710]";
  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium border-2 ${colors} ${radius}`}>
      {children}
    </span>
  );
}
