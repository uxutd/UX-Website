"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { TOfficer } from "../data";

const TOP_ALIGNED = ["tanvi", "shreya", "ananya", "tram", "sally", "rohan"];

export default function OfficerCard({ officer }: { officer: TOfficer }) {
  const topAlign = TOP_ALIGNED.includes(officer.name.toLowerCase());
  const [isLoaded, setLoaded] = useState(false);

  return (
    <div className="m-2 sm:m-4 relative flex flex-col items-center">
      <div className="off-wrapper grow relative">
        <div
          className={cn(
            "relative w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800",
            !isLoaded && "animate-pulse",
          )}
        >
          <Image
            alt={officer.name}
            src={officer.img!}
            width={250}
            height={250}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className={cn(
              "relative rounded-lg w-full h-full object-cover aspect-square transition-opacity duration-300",
              topAlign && "object-[top_center]",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
          />
        </div>
      </div>
      <h3 className="text-sm sm:text-lg font-semibold mt-2">{officer.name}</h3>
      <h4 className="text-xs sm:text-sm text-center">{officer.title}</h4>
      <a href={officer.linkedIn} rel="noopener noreferrer" target="_blank">
        <Image
          src="/linkedInLogo.png"
          alt="LinkedIn"
          width={28}
          height={28}
          className="w-7 h-7"
        />
      </a>
    </div>
  );
}
