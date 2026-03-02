"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "coral";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function Button({ children, variant = "primary", onClick, href, className = "" }: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-medium transition-all cursor-pointer border-2 border-[#201710] no-underline";
  const variants = {
    primary: "bg-[#201710] text-[#fffaf5] shadow-[4px_4px_0_#ff7a64] hover:shadow-[6px_6px_0_#ff7a64] hover:-translate-x-0.5 hover:-translate-y-0.5",
    ghost: "bg-transparent text-[#201710] shadow-[4px_4px_0_#201710] hover:shadow-[6px_6px_0_#201710] hover:-translate-x-0.5 hover:-translate-y-0.5",
    coral: "bg-[#ff7a64] text-white border-[#ff7a64] shadow-[4px_4px_0_#201710] hover:shadow-[6px_6px_0_#201710] hover:-translate-x-0.5 hover:-translate-y-0.5",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return <button className={cls} onClick={onClick}>{children}</button>;
}
