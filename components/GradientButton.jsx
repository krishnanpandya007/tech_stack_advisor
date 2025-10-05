import { cn } from "@/lib/utils";
import React from "react";

export const GradientButton = ({ 
  children, 
  className,
  variant = "default",
  onClick 
}) => {
  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium",
          "bg-[hsl(var(--badge-bg))] text-[hsl(var(--badge-text))]",
          "transition-all duration-300 hover:scale-105",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 rounded-full",
        "text-sm font-semibold text-foreground",
        "transition-all duration-300 hover:scale-105",
        "group",
        className
      )}
    >
      {/* Spinning gradient border */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-[-200%] animate-border-spin bg-[conic-gradient(from_0deg,hsl(var(--gradient-start)),hsl(var(--gradient-middle)),hsl(var(--gradient-end)),hsl(var(--gradient-start)))]" />
      </div>

      {/* Inner background */}
      <div className="absolute inset-[2px] rounded-full bg-background z-10" />

      {/* Button content */}
      <span className="relative z-20 flex items-center space-x-2">
        {children}
      </span>
    </button>
  );
};
