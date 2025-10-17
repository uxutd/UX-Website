"use client";
import { useEffect, useState } from "react";

import { MorphingText } from "@/components/ui/morphing-text";
import { MagicCard } from "@/components/ui/magic-card";

export default function DesignPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById("luma-checkout")) {
      setScriptLoaded(true);

      return;
    }

    const script = document.createElement("script");

    script.id = "luma-checkout";
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setScriptLoaded(true); //fallback

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("luma-checkout");

      if (existingScript && existingScript === script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white min-h-screen py-20 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/DTHONbackground.png')" }}
      >
        {/* Grid Container */}
        <div className="grid grid-cols-12 grid-rows-[auto_auto_1fr_auto] min-h-screen gap-6 px-6">
          {/* Title Section */}
          <div className="col-start-2 col-span-10 row-start-1 flex flex-col items-center justify-center mb-8">
            <div className="mb-6 mt-24">
              <img
                alt="UXPERIENCE"
                className="w-full hover:scale-105 transition ease-out max-w-2xl h-auto"
                src="/uxperience.png"
              />
            </div>
            <div className="flex flex-col hover:scale-105 active:scale-100 transition-all duration-300 ease-out">
              <MorphingText
                className="!text-3xl pr-80 !h-auto !max-w-16 text-center"
                texts={["echoes of tomorrow", "october 25th-26th"]}
              />
            </div>
          </div>

          {/* Register Button */}
          <div className="col-start-5 col-span-4 row-start-2 flex items-center justify-center mb-8">
            <a
              aria-label="register"
              className={`
                luma-checkout--button 
                transition-all duration-300 ease-out
                inline-flex items-center justify-center
                rounded-full 
                shadow-2xl
                hover:scale-105 active:scale-100
                transform-gpu
                ${!scriptLoaded ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}
              `}
              data-luma-action="checkout"
              data-luma-event-id="evt-2025"
              href="https://luma.com/wvqwf1gt"
              role="button"
              style={{
                backgroundColor: "#D9D9D9",
                color: "#000000",
                fontFamily: "Bai Jamjuree, sans-serif",
                fontWeight: "800",
                padding: "12px 20px",
                fontSize: "1.25rem",
                minHeight: "45px",
                width: "280px",
                maxWidth: "380px",
              }}
              tabIndex={0}
              onClick={(e) => !scriptLoaded && e.preventDefault()}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <MagicCard className="w-full h-full" />
              </div>
              <span className="relative z-10">register</span>
            </a>
          </div>

          {/* Moon Section */}
          <div className="col-span-full row-start-4 flex items-end relative">
            <img
              alt="Moon Design"
              className="w-full h-auto transform scale-105"
              src="/moon 1.svg"
            />
          </div>

          {/* Astronaut Section */}
          <div className="absolute right-6 mt-72 mr-80 ">
            <img
              alt="astronaut"
              className="w-48 h-auto scale-85 "
              src="/astronaut.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
