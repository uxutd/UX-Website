"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import TypingAnimation from "@/components/ui/typing-animation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { secureHeapUsed } from "crypto";

export default function DesignPage() {

  return (
    <>
      <section className="flex flex-col h-[84vh] items-center pt-36 gap-4">
        <BlurFade blur="30px" duration={2}>
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>The UX Club</span>
            </AnimatedShinyText>
          </div>
        </BlurFade>
        <div className="flex items-center justify-center w-[100vw]">
          <TextHoverEffect text="UXPERIENCE" />
        </div>
        <div className="flex items-left justify-left">
          <TypingAnimation
            duration={300}
            className="text-6xl font-bold text-blue"
            text="The First Draft"
          />
        </div>
        <p>November 9 - 10</p>
        <a
          href="https://lu.ma/event/evt-BSCDnA2C8SG382k"
          className="luma-checkout--button"
          data-luma-action="checkout"
          data-luma-event-id="evt-BSCDnA2C8SG382k"
        > 
            Register for Event
          </a>

      <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
      </section>
      <section className="flex flex-col items-center justify-center gap-4">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              This is Your Experience.
            </p>
          </div>
        </BackgroundGradientAnimation>
      </section>
    </>
  );
}
