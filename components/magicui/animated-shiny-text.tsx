import { CSSProperties, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-md text-gray-900 dark:text-white", // Set solid text color for both light and dark modes
        className,
      )}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
