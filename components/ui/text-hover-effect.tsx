"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      className="select-none"
      height="100%"
      viewBox="0 0 300 30"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <defs>
        <linearGradient
          cx="50%"
          cy="50%"
          gradientUnits="userSpaceOnUse"
          id="textGradient"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"var(--yellow-500)"} />
              <stop offset="25%" stopColor={"var(--red-500)"} />
              <stop offset="50%" stopColor={"var(--blue-500)"} />
              <stop offset="75%" stopColor={"var(--cyan-500)"} />
              <stop offset="100%" stopColor={"var(--violet-500)"} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          animate={maskPosition}
          gradientUnits="userSpaceOnUse"
          id="revealMask"
          r="20%"
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            fill="url(#revealMask)"
            height="100%"
            width="100%"
            x="0"
            y="0"
          />
        </mask>
      </defs>

      {/* Text outline with blue or gray depending on hover */}
      <text
        className="font-[helvetica] font-bold fill-transparent text-3xl"
        dominantBaseline="middle"
        strokeWidth="0.25"
        style={{
          opacity: hovered ? 0 : 1, // Slight opacity change on hover
        }}
        textAnchor="middle"
        x="50%"
        y="50%"
      >
        {text}
      </text>

      {/* Stroke-dash animation */}
      <motion.text
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        className="font-[helvetica] font-bold fill-transparent text-3xl stroke-neutral-200 dark:stroke-neutral-800"
        dominantBaseline="middle"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        strokeWidth="0.25"
        style={{
          stroke: hovered ? "#a0a0a0" : "#335bff", // Gray on hover, blue otherwise
          opacity: hovered ? 0 : 1, // Slight opacity change on hover
        }}
        textAnchor="middle"
        transition={{
          duration: 20,
          ease: "easeInOut",
        }}
        x="50%"
        y="50%"
      >
        {text}
      </motion.text>

      {/* Masked text with gradient hover effect */}
      <text
        className="font-[helvetica] font-bold fill-transparent text-3xl"
        dominantBaseline="middle"
        mask="url(#textMask)"
        stroke={"#335bff"} // Gray on hover, blue when not
        strokeWidth="0.5"
        textAnchor="middle"
        x="50%"
        y="50%"
      >
        {text}
      </text>
    </svg>
  );
};
