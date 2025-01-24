import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-fit items-center justify-center text-sm font-medium transition-shadow duration-500 ease-out",
        className,
      )}
    >
      <span className="bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
        {children}
      </span>
    </div>
  );
}
