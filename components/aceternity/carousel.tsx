"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[48vmin] h-[48vmin] mx-[3vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index ? "scale(0.8) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="w-[70%] h-[70%] mx-auto mb-4 overflow-hidden relative transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="w-full h-full object-cover transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.8 }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />

          {/* Centered overlay inside the image */}
          <article
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-500 ease-in-out pointer-events-none ${
              current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-center text-white">
              {title}
            </h2>
            <div className="mt-4">
              <button className="px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-10 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 pointer-events-auto">
                {button}
              </button>
            </div>
          </article>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  const isPrev = type === "previous";
  return (
    <button
      className={`
        pointer-events-auto
        absolute top-1/2 -translate-y-1/2
        w-10 h-10 flex items-center justify-center
        bg-neutral-200 dark:bg-neutral-800
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
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
  spacing?: string; // CSS length for side margin per slide (e.g., '4vmin')
  initialIndex?: number; // 0-based index to start on
}

export function Carousel({
  slides,
  spacing = "4vmin",
  initialIndex = 0,
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
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[50vmin] h-[50vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
      // Share spacing with children (slides and arrows)
      style={{ ["--gap" as any]: spacing }}
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
          <div key={index} style={{ margin: "3 var(--gap)" }}>
            <Slide
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          </div>
        ))}
      </ul>

      {/* Controls: inside the visible frame, aligned to the spacing/margins */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
