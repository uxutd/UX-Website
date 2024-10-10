import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { subtitle } from "@/components/primitives";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import NumberTicker from "@/components/magicui/number-ticker";
import WordPullUp from "@/components/magicui/word-pull-up";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center p-2 leading-tight pt-12">
        <div className="flex absolute top-[10vw] left-[-10vw]">
          <Image alt="UX Club" height={450} src="/Arrow.png" width={450} />
        </div>
        <div className="flex absolute top-[10vw] right-[-10vw]">
          <Image alt="UX Club" height={450} src="/Pixie.png" width={450} />
        </div>
        <BlurFade blur="30px" duration={2}>
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>User Experience Club @ UT Dallas</span>
            </AnimatedShinyText>
          </div>
        </BlurFade>
        <BlurFade>
          <div className="py-8">
            <WordPullUp
              className="tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9 text-[#3E68FD]"
              words="We help design the future by empowering UT Dallas students through user-centric design"
            />
            <BlurFade delay={2}>
              <h2 className={subtitle({ class: "mt-4" })}>
                More than just a pretty interface!
              </h2>
            </BlurFade>
          </div>
        </BlurFade>
      </div>

      <div className="flex justify-center w-full">
        <Link
          isExternal
          className={cn(
            buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            }),
            "bg-blue-500 hover:bg-blue-600 shadow-none",
          )}
          href={siteConfig.links.discord}
        >
          Learn More
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </Link>
      </div>

      <section className="w-[100vw] sm:w-[70vw] py-8 pb-14 dark:bg-gray-800 bg-[#0c1533] rounded-3xl mt-12 overflow-hidden">
        <div className="flex flex-col items-center justify-centermax-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-md text-white font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
            Creating Events that Excel Your Career
          </h1>
          <Carousel
            className="w-[100vw] sm:w-[80vw]"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div>
                    <Card>
                      <CardContent className="flex items-center justify-center text-gray-900 dark:text-gray-100">
                        <Image
                          alt={`Image ${index + 1}`}
                          height={200} // adjust the height as per your requirements
                          objectFit="cover" // adjust the object-fit as per your requirements
                          src={`/ux-pic${index + 1}.png`}
                          style={{ borderRadius: "10px" }}
                          width={500} // adjust the width as per your requirements
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section>
        <div className="flex p-6 px-12 pt-12">
          <div className="flex-1">
            <h1 className="text-[3rem] font-bold text-center text-blue-600 mb-4">
              <NumberTicker className="text-blue-600" value={52} />+
              <br />
              Sponsors
            </h1>
          </div>
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-[3rem] font-bold text-center text-blue-600 mb-4">
              <NumberTicker className="text-blue-600" value={114} />+
              <br />
              Events
            </h1>
          </div>
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-[3rem] font-bold text-center text-blue-600 mb-4">
              <NumberTicker className="text-blue-600" value={1082} />+
              <br />
              Attendees
            </h1>
          </div>
        </div>
        <div className="flex p-12 pt-12">
          <div className="flex-1 pr-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Highlights
            </h2>
            <p className="text-gray-700 mb-4">
              Our mission is to spread awareness about user-centered design.
              Based at the University of Texas at Dallas, we welcome anyone in
              the DFW area to attend our beginner-friendly events. Look out for
              our annual Conference and Design Challenge!
            </p>
          </div>
          <div className="flex-1">
            <img
              alt="Event"
              className="w-full h-auto rounded-lg"
              src="/highlights-pic.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
