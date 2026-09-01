"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "clay" | "moss" | "white" | "outline";
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = "clay",
  className,
  ...props
}) => {
  const variantStyles = {
    clay: "bg-[#CC5833] text-white hover:bg-[#b04a29] shadow-lg shadow-[#CC5833]/20",
    moss: "bg-[#2E4036] text-white hover:bg-[#23322a] shadow-lg shadow-[#2E4036]/25",
    white: "bg-white text-[#1A1A1A] hover:bg-[#F2F0E9] shadow-md",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10"
  };

  return (
    <button
      className={cn(
        "magnetic-btn relative px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
