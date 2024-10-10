"use client";
import { Button } from "@nextui-org/button";
import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BlurFade from "@/components/magicui/blur-fade";
import HyperText from "@/components/ui/hyper-text";
import { subtitle } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function DesignPnpx shadcn@latest add "https://magicui.design/r/dot-pattern"
age() {
  // FAQ data
  const faqs = [
    {
      question: "What is the UX Designathon?",
      answer:
        "The UXPerience is a 24-hour challenge where participants create innovative design solutions.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone interested in UX design can participate, from students to professionals.",
    },
    {
      question: "How do I register?",
      answer:
        "You can register by clicking the 'Register Now' button on this page.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! There will be prizes for the top designs, along with certificates for all participants.",
    },
    {
      question: "What tools should I bring?",
      answer:
        "Bring your laptop and any design tools you prefer, such as Figma, Sketch, or Adobe XD.",
    },
  ];

  // Sponsors data
  const sponsors = [
    {
      name: "UX Club",
      logo: "/UX_Color_Logo.png",
      description: "Collaborative interface design tool.",
    },
    {
      name: "UX Club",
      logo: "/UX_Color_Logo.png",
      description: "A suite of creative software tools.",
    },
    {
      name: "UX Club",
      logo: "/UX_Color_Logo.png",
      description: "Promoting user-centered design.",
    },
    // Add more sponsors as needed
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-2 p-4 md:p-6 text-white">
      {/* Main Title */}
      <HyperText
        className="text-4xl font-bold text-center text-blue-400"
        text="UXPerience: The First Draft"
      />
      <BlurFade delay={2}>
        <h2 className={subtitle({ class: "mt-4 text-xl md:text-2xl" })}>
          Join us in a 24-hour design challenge to innovate and create!
        </h2>
      </BlurFade>

      {/* Description Section */}
      <div className="max-w-2xl text-center text-gray-300 mt-8 px-6 py-4 mx-auto">
        <h1 className="text-xl md:text-2xl font-bold mt-2 mb-4">
          What is UXPerience: The First Draft?
        </h1>
        <p className="text-base md:text-lg mb-2">
          &quot;UXPerience: The First Draft&quot; is a one of a kind
          design-a-thon aimed at fostering creativity and innovation in the
          field of User Experience (UX) Design. In this intense 24-hour event,
          participants will work on a design project from scratch, collaborating
          with like-minded individuals and mentors to bring fresh ideas to life.
          Whether you&apos;re an aspiring designer or a seasoned professional,
          this event is designed to challenge your creativity, problem-solving
          skills, and ability to deliver a polished design under time
          constraints.
        </p>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mb-2 w-full max-w-md">
        <Button className="bg-blue-500 hover:bg-blue-600 transition duration-300 py-2 px-4 text-sm md:text-base w-full">
          Register Now
        </Button>
      </div>

      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to bottom, white 70%, transparent 100%)]",
          "absolute inset-0",
        )}
        cr={1}
        cx={1}
        cy={1}
        height={100}
        width={100}
      />

      {/* FAQs Section */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-green-500 hover:bg-green-600 transition duration-300 py-2 px-4 text-sm md:text-base">
            FAQs
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-lg font-bold text-blue-400">
              Frequently Asked Questions
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-2 max-h-[400px] overflow-y-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="font-bold text-gray-300">{faq.question}</div>
                <div className="text-gray-400">{faq.answer}</div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="bg-gray-700 hover:bg-gray-800 transition duration-300 py-2 px-4 text-sm md:text-base">
                Done
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Sponsors Section */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-400">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                alt={`${sponsor.name} logo`}
                className="h-20 w-20 mb-4"
                src={sponsor.logo}
              />
              <h3 className="text-lg font-semibold text-white">
                {sponsor.name}
              </h3>
              <p className="text-gray-400">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
