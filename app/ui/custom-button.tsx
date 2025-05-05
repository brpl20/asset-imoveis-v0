import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  children: React.ReactNode
  className?: string
}

export function CustomButton({ variant = "primary", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "font-medium py-4 px-8 rounded transition-colors",
        variant === "primary"
          ? "bg-[#f3c76c] text-black hover:bg-[#c38d51]"
          : "bg-black text-[#f3c76c] hover:bg-gray-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}