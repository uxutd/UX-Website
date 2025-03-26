"use client";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

import { cn } from "@/lib/utils";

export function WavyBackground({
  className,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  className?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height =
      window.innerWidth < 768 ? window.innerHeight * 0.5 : window.innerHeight; // 50% height on mobile
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height =
        window.innerWidth < 768 ? window.innerHeight * 0.5 : window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? ["#405499", "#53A4F8", "#8FC0E9", "#405499"];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || (window.innerWidth < 768 ? 30 : 50); // Thinner waves on mobile
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;

        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "white";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(window.innerWidth < 768 ? 3 : 5); // Fewer waves on mobile
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(className)}
      id="canvas"
      style={{ height: "50vh" }} // Reduces space on mobile
      {...props}
    />
  );
}
