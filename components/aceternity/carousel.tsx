"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";

interface SlideData {
  title: string; // plain text (or swap to dangerouslySetInnerHTML if you want <br/>)
  src: string; // headshot image
  subtitle?: string; // bio under the title
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    const planet = planetRef.current;
    if (!el || !planet) return;

    const r = el.getBoundingClientRect();
    const x = event.clientX - (r.left + Math.floor(r.width / 2));
    const y = event.clientY - (r.top + Math.floor(r.height / 2));

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      if (current === index) {
        planet.style.transform = `translate3d(${x / 30}px, ${y / 30}px, 0)`;
      } else {
        planet.style.transform = "none";
      }
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    const planet = planetRef.current;
    if (planet) planet.style.transform = "none";
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, subtitle } = slide;

  return (
    <li
      ref={slideRef}
      className="flex flex-1 flex-col items-center justify-start relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[48vmin] h-[48vmin] mx-[3vmin] z-10"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          current !== index
            ? "scale(0.9) rotateX(6deg)"
            : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      {/* Planet container (circular mask) */}
      <div
        ref={planetRef}
        className="
          relative w-[70%] aspect-square mx-auto
          rounded-full overflow-hidden
          transition-transform duration-150 ease-out
        "
      >
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: current === index ? 1 : 0.85 }}
          alt={title}
          src={src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
      </div>

      {/* Title and bio under the planet */}
      <div className="mt-4 px-4">
        <h2
          className="
            text-lg md:text-xl lg:text-2xl font-semibold
            bg-gradient-to-r text-white/55]
            bg-clip-text
          "
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs md:text-sm lg:text-base text-white/90 leading-snug">
            {subtitle}
          </p>
        )}
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  const isPrev = type === "previous";
  return (
    <button
      className={`
        pointer-events-auto
        absolute top-1/2 -translate-y-1/2
        w-10 h-10 flex items-center justify-center
        bg-neutral-200/80 dark:bg-neutral-800/80
        border-3 border-transparent rounded-full
        focus:border-[#6D64F7] focus:outline-none
        hover:-translate-y-[calc(50%-2px)] active:translate-y-[calc(50%)]
        transition duration-200
        ${isPrev ? "rotate-180" : ""}
      `}
      style={{
        left: isPrev ? "var(--gap)" : undefined,
        right: !isPrev ? "var(--gap)" : undefined,
      }}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-700 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
  spacing?: string; // CSS length (e.g., '4vmin')
  initialIndex?: number; // 0-based
  offsetY?: string; // move carousel up/down (e.g., '-2rem', '-6vmin')
}

export function Carousel({
  slides,
  spacing = "4vmin",
  initialIndex = 0,
  offsetY = "-3vmin",
}: CarouselProps) {
  const [current, setCurrent] = useState(initialIndex);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-[50vmin] h-[50vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
      style={{
        ["--gap" as any]: spacing,
        transform: `translateY(${offsetY})`,
      }}
    >
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          marginLeft: "calc(var(--gap) * -1)",
          marginRight: "calc(var(--gap) * -1)",
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
    </div>
  );
}
