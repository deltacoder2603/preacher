"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, type AnimationProps } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.9 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 30,
    damping: 12,
    mass: 1.5,
    scale: {
      type: "spring",
      stiffness: 180,
      damping: 8,
      mass: 0.7,
    },
  },
} as AnimationProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative rounded-md px-4 py-1 text-sm font-medium text-white",
        "transition-shadow duration-300 ease-in-out",
        "backdrop-blur-md hover:shadow-md",
        "bg-gradient-to-r from-blue-500 to-indigo-600",
        "dark:from-purple-600 dark:to-pink-500",
        "hover:brightness-110 hover:saturate-150",
        "leading-tight h-10",  // ✅ Reduced height
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative block w-full uppercase tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg, rgba(255, 255, 255, 0.9) calc(var(--x) + 10%), transparent calc(var(--x) + 30%), rgba(255, 255, 255, 0.9) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, rgba(255, 255, 255, 0.9) calc(var(--x) + 10%), transparent calc(var(--x) + 30%), rgba(255, 255, 255, 0.9) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)+10%),rgba(255,255,255,0.5)_calc(var(--x)+20%),rgba(255,255,255,0.1)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
