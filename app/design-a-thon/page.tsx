"use client";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import TypingAnimation from "@/components/ui/typing-animation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import NumberTicker from "@/components/magicui/number-ticker";

// Fixing the import order here

// export function Iphone15ProDemo() {
//   return (
//     <div className="relative">
//       <Iphone15Pro className="size-full" />
//     </div>
//   );
// }

export default function DesignPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-[10vw] gap-4 text-center">
        <section className="flex flex-col h-screen items-center pt-48 gap-4">
          <BlurFade blur="30px" delay={3} duration={2}>
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>The UX Club presents</span>
              </AnimatedShinyText>
            </div>
          </BlurFade>
          <div className="flex items-center justify-center w-[100vw]">
            <TextHoverEffect text="UXPERIENCE" />
          </div>
          <div className="flex items-left justify-left">
            <BlurFade delay={5}>
              <div className="hover:rotate-[4deg] hover:scale-110 transition ease-out">
                <img
                  alt="UXPERIENCE Logo"
                  className="absolute items-center w-[40vw]"
                  src="/group3.svg"
                />
                <TypingAnimation
                  className="text-6xl font-bold text-[#08195E] p-10 rotate-[-2deg]"
                  duration={320}
                  text="The First Draft"
                />
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={5}>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold text-[#08195E] hover:scale-110 transition ease-out">
                November 9 - 10
              </span>
              <script
                id="luma-checkout"
                src="https://embed.lu.ma/checkout-button.js"
              />
              <a
                className="luma-checkout--button hover:scale-105 transition ease-out"
                data-luma-action="checkout"
                data-luma-event-id="evt-BSCDnA2C8SG382k"
                href="https://lu.ma/event/evt-BSCDnA2C8SG382k"
              >
                Register for Event
              </a>
            </div>
          </BlurFade>
        </section>

        <section className="text-white w-screen bg-[#08195E]">
          <VelocityScroll
            className="text-center text-xl font-bold tracking-[-0.02em] text-white drop-shadow-2xl dark:text-white md:text-4xl md:leading-[3rem]"
            default_velocity={-2.5}
            text="A Design-a-thon done like never before. November 9 - 10. "
          />
          <br />
          <div className="flex flex-row items-top justify-center gap-4 pt-8">
            <div className="flex-1 h-[70vh]">
              <p className="text-left text-sm lg:text-2xl px-[10vw] flex-1">
                Join us for an exciting 24-hour Design-a-thon, an intensive
                event that compresses weeks of product design into a single day
                of creativity and teamwork.
                <br />
                <br />
                Our Design-a-thon is not just about creating innovative product
                designs—it&apos;s an immersive experience that fosters skill
                development, creative problem-solving, and community building.
                Don&apos;t miss this chance to be part of a transformative event
                that showcases the best in rapid ideation and design execution.
              </p>
              <h1 className="text-[3rem] font-bold text-sm lg:text-6xl text-center text-white mt-4">
                <NumberTicker className="text-white" value={150} />+ Attendees
              </h1>
              <h1 className="text-[3rem] font-bold text-sm lg:text-6xl text-center text-white mt-4">
                <NumberTicker className="text-white" value={40} />+ Projects
              </h1>
            </div>
            {/* <div className="flex-1 h-[70vh]">
                  <Iphone15Pro className="size-full" src="https://lu.ma/embed/event/evt-BSCDnA2C8SG382k/simple" isIframe/>
                </div>  */}
            <div className="flex-1 h-[20vh]">
              <img
                alt="UXPERIENCE Logo"
                className="absolute items-center w-[30vw]"
                src="/Pixie.png"
              />
            </div>
          </div>
          <VelocityScroll
            className="text-center text-xl font-bold tracking-[-0.02em] text-white drop-shadow-2xl dark:text-white md:text-4xl md:leading-[3rem]"
            default_velocity={2.5}
            text="A Design-a-thon done like never before. November 9 - 10. "
          />
        </section>

        {/* <section className="text-white w-screen h-screen bg-[#08195E]">
        <BentoGrid className="px-[10vw] pt-8 mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
              ))}
            </BentoGrid>
      </section> */}

        <section className="flex items-center w-screen h-screen justify-center gap-4">
          <h1 className="text-4xl font-bold text-center mt-8">
            Rules and Event Schedule coming soon...
          </h1>
        </section>

        <section className="flex items-center justify-center gap-4">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col gap-2 items-center justify-center pointer-events-none text-center">
              <p className="text-white font-bold text-3xl md:text-4xl lg:text-7xl drop-shadow-2xl">
                This is Your Experience.
              </p>
            </div>
          </BackgroundGradientAnimation>
        </section>
      </main>
    </>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
// );

// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embrace the excitement of exploring the unknown.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
// ];
