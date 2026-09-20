"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText);

interface WordPullUpProps {
  words: string;
  staggerAmount?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const animation = (y = 20, stagger = 0.15, duration = 0.6): gsap.TweenVars => ({
  y,
  opacity: 0,
  duration,
  ease: "power2.out",
  stagger,
});

export default function WordStagger({
  words,
  staggerAmount,
  duration,
  y,
  className,
}: WordPullUpProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const split = new SplitText(ref.current, { type: "words" });
      gsap.from(split.words, animation(y, staggerAmount, duration));
      return () => split.revert();
    },
    { scope: ref, dependencies: [words, staggerAmount, duration, y] },
  );

  return (
    <h1
      ref={ref}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {words}
    </h1>
  );
}
