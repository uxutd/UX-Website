import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center p-2 leading-tight">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-64",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out duration-300 hover:text-neutral-600 dark:hover:text-neutral-400">
            <span>The UX Club @ UT Dallas</span>
          </AnimatedShinyText>
        </div>

        <h1 className={title({ color: "blue" })}>
          We help design the future by empowering UT Dallas students through
          user-centric design
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          630+ Members, 50+ Sponsors, 100+ Events
        </h2>
      </div>

      {/* Centering the button */}
      <div className="flex justify-center w-full mt-4">
        <Link
          isExternal
          className={cn(
            buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            }),
            "bg-blue-500 hover:bg-blue-600 shadow-none", // Ensure no shadow
          )}
          href={siteConfig.links.docs}
        >
          Learn More
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* New Carousel Section */}
      <section className="w-full py-8 bg-gray-100 dark:bg-gray-800 rounded-lg mt-8">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto p-4">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
            Creating Events that Excel Your Career
          </h3>
          <Carousel
            className="w-full max-w-sm"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 text-gray-900 dark:text-gray-100">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </section>
  );
}
