"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 1000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];

    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={currentWord}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={cn(
          "z-10 inline-block relative text-left px-2",
          className, // Removed conflicting color classes
        )}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="inline-block whitespace-nowrap"
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                className="inline-block"
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
