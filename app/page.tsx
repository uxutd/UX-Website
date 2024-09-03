import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/AnimatedShinyText";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center p-2 leading-tight">
        <AnimatedShinyText />
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
      <section className="w-[100vw] sm:w-[70vw] py-16 dark:bg-gray-800 bg-[#0c1533] rounded-3xl mt-8 overflow-hidden">
        <div className="flex flex-col items-center justify-centermax-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-md text-white font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
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
                  <div className="p-1">
                    <Card className="bg-white">
                      <CardContent className="flex h-[12rem] items-center justify-center p-6 text-gray-900 dark:text-gray-100">
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
      <section>
        <div className="flex p-6 pt-12">
          <div className="flex-1 pr-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Highlights
            </h2>
            <p className="text-gray-700 mb-4">
              Our mission is to spread awareness about user centered design.
              Based at the University of Texas at Dallas, we welcome anyone in
              the DFW area to attend our beginner friendly events. Look out for
              our annual Conference and Design Challenge!
            </p>
          </div>
          <div className="flex-1">
            <img
              alt="Event"
              className="w-full h-auto rounded-lg"
              src="/api/placeholder/400/300"
            />
          </div>
        </div>
        <div className="flex p-6 px-12 pt-12">
          <div className="flex-1">
            <h1 className="text-[3rem] font-bold text-center text-blue-600 mb-4">
              27+ <br />
              Sponsors
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-[3rem] font-bold text-center text-blue-600 mb-4">
              50+ <br />
              Events
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-[3rem] font-bold text-center text-blue-600 mb-4">
              1000+ <br />
              Attendees
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
