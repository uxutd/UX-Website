"use client";
import { useEffect } from "react";
import { Card, CardHeader, CardContent, useMediaQuery } from "@mui/material";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import TypingAnimation from "@/components/ui/typing-animation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal"; import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import SparklesText from "@/components/ui/sparkles-text";
import { HyperText } from "@/components/magicui/hyper-text";


export default function DesignPage() {
  useEffect(() => {
    // Dynamically adding the script once the component is mounted
    const script = document.createElement("script");

    script.id = "luma-checkout";
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  const saturdaySchedule = [
    { time: "9:00am", event: "Check In/Boothing", location: "ECSW Atrium" },
    {
      time: "10:00am",
      event: "Team Formin Mixer",
      location: "ECSW 'Bird's Nest'",
    },
    { time: "10:00am", event: "& Sponsor Networking", location: "ECSW Atrium" },
    { time: "11:00am", event: "Opening Ceremony", location: "SLC 1.102" },
    { time: "12:00pm", event: "Designing Starts 💙", location: "Anywhere!" },
    { time: "12:30pm", event: "Lunch", location: "ECSW Atrium" },
    {
      time: "1:00pm",
      event: "User Personas Workshop w/ Mercedes Johnson",
      location: "ECSW 1.355",
    },
    {
      time: "2:15pm",
      event: "Hacking the Design-a-thon Workshop w/ CBRE",
      location: "ECSW 1.365",
    },
    { time: "4:00pm", event: "Intro to UX Workshop", location: "ECSW 1.355" },
    {
      time: "5:00pm",
      event: "Storytelling in UX Workshop",
      location: "ECSW 1.365",
    },
    { time: "5:00pm", event: "& Color and Connect", location: "ECSW 3.210" },
    {
      time: "6:15pm",
      event: "& Rapid Prototyping in Figma Workshop",
      location: "ECSW 1.355",
    },
    {
      time: "7:15pm",
      event: "Info Architecture Workshop",
      location: "ECSW 1.365",
    },
    { time: "8:30pm", event: "Dinner", location: "ECSW Atrium" },
    { time: "10:30pm", event: "Brain Break!", location: "TBD" },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full flex-1 gap-4 text-center">
        <section className="flex flex-col h-full items-center pt-36 gap-4">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 mt-[-50] text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>The UX Club Presents</span>
            </AnimatedShinyText>
          </div>

          <BlurFade>
            <div className="flex items-center justify-center pt-12 w-[100vw]">
              <TextHoverEffect text="UXPERIENCE" />
            </div>
          </BlurFade>

          <div className="flex items-center justify-center relative">
            <BlurFade delay={2}>
              <div className="relative overflow-hidden hover:rotate-[4deg] hover:scale-110 transition ease-out">
                <img
                  alt="UXPERIENCE Logo"
                  className="w-[80vw] max-w-[600px] h-auto sm:w-[60vw]" // Improved width scaling for mobile screens
                  src="/Group3.svg"
                />
                <TypingAnimation
                  className="absolute inset-0 flex items-center justify-center font-bold text-[#08195E] rotate-[-2deg] text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] p-[3%] sm:p-[2%] md:p-[5%] lg:p-[5%] xl:p-[5%] max-w-full overflow-hidden whitespace-nowrap min-w-0" // Adjusted for mobile and larger screens
                  duration={200}
                  text="The First Draft"
                />
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={2}>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold text-[#08195E] hover:scale-110 transition ease-out">
                November 9th - 10th 2024
              </span>
              <a
                className="luma-checkout--button hover:scale-105 transition ease-out"
                href="https://utdallas.box.com/s/x5q67ny4oglb5amn4qe9yhhdbr4il789"

              >
                <AnimatedGradientText>
                  <span
                    className={cn(
                      `inline animate-gradient text-2xl bg-gradient-to-r from-sky-500 via-blue-300 to-white bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}
                  >
                    Check out Dthon pics!
                  </span>
                </AnimatedGradientText>
              </a>
            </div>
          </BlurFade>
          <br />
          <br />

        </section>




        <section className="text-white h-auto w-[100vw] flex flex-col justify-center items-center px-4">
          <BackgroundGradientAnimation
            containerClassName="h-auto" // Allow the gradient to expand
          >
            <div className="relative z-10">
              <div className="px-18 md:px-36 py-4 md:py-8 flex flex-col">
                <h1
                  className="text-left text-3xl md:text-[2.5rem] font-semibold leading-tight mb-2 text-[#ffffff]"
                  style={{
                    wordSpacing: "0.25rem",
                    WebkitTextStroke: "0.25px white",
                  }}
                >
                  <TypingAnimation
                    text="Designathon 2024: The First Draft"
                  />
                </h1>
              </div>

              {/* Wide Image (Centered and Longer) */}
              <div className="flex items-center px-24 justify-center w-full h-[40vh]">
                <img
                  src="/dthongroup.png"
                  alt="Designathon Group"
                  className="w-[80vw] h-[40vh] object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col md:flex-row w-full">
                {/* First Div (Left Side) */}
                <div className="pl-4 md:pl-36 pr-4 py-4 md:py-8 flex flex-col gap-4 flex-1">
                  <div className="flex-1 flex flex-col px-4 md:px-12 gap-1 sm:gap-2 p-4 sm:p-8 border-2 border-white rounded-lg bg-transparent w-full max-w-full md:max-w-[45vw] min-h-[250px] md:min-h-[350px] shadow-lg pb-8">
                    {/* First Row of Stats */}
                    <div className="flex flex-col md:flex-row gap-1 sm:gap-5 mt-11">
                      <div className="flex-1">
                        <div className="bg-white text-[#4694D6] rounded-2xl p-2 flex items-center justify-center h-[100px] shadow-lg">
                          <h1 className="text-1xl md:text-[1.935rem] font-semibold leading-tight text-center">
                            177+ Registrations
                          </h1>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white text-[#4694D6] rounded-2xl p-2 flex items-center justify-center h-[100px] shadow-lg">
                          <h1 className="text-1xl md:text-[1.935rem] font-semibold leading-tight text-center">
                            $1400+ in Won Prizes
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* Second Row of Stats */}
                    <div className="flex flex-col md:flex-row gap-1 sm:gap-5 mt-8">
                      <div className="flex-1">
                        <div className="bg-white text-[#4694D6] rounded-2xl p-2 flex items-center justify-center h-[100px] shadow-lg">
                          <h1 className="text-1xl md:text-[1.935rem] font-semibold leading-tight text-center">
                            20+ Professionals
                          </h1>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white text-[#4694D6] rounded-2xl p-2 flex items-center justify-center h-[100px] shadow-lg">
                          <h1 className="text-1xl md:text-[1.935rem] font-semibold leading-tight text-center">
                            10+ Design Workshops
                          </h1>
                        </div>
                      </div>
                    </div>
                    <br /> <br />
                  </div>

                </div>

                {/* Second Div (Right Side) */}
                <div className="pr-4 md:pr-36 pl-4 py-4 md:py-8 flex flex-col gap-4 flex-1">
                  <div className="flex-1 flex flex-col px-4 md:px-12 gap-2 sm:gap-0 p-4 sm:p-8 border-2 border-white rounded-lg bg-[#ffffff] w-full max-w-full md:max-w-[45vw] min-h-[250px] md:min-h-[350px] shadow-lg pb-8">
                    <div className="text-center text-xl font-bold text-[#4694D6] mt-1" style={{ fontSize: "2rem" }}>
                      First Prize Winner!
                    </div>
                    <img
                      src="/dthonwinnernames.png"
                      alt="Designathon Winner"
                      className="w-[full] h-[full] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
          </BackgroundGradientAnimation>
        </section>

        <section className="pt-10 pb-10 w-screen flex justify-center items-center px-4">
          <div className="flex justify-center w-full" style={{ maxWidth: '85vw' }}>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://drive.google.com/file/d/1Lnpax7eizohJA8jKuGRMXSEy5cU1WEOl/preview"
                allow="autoplay"
                className="absolute top-0 left-0 w-[85vw] h-[45vw] rounded-lg"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </section>



        {/* Saturday Schedule 
          <div className="py-24 sm:py-32 mb-[-10]">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
              <h2 className="text-center text-base/7 font-semibold  text-indigo-600">
                Join the Innovation
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-white sm:text-5xl hover:scale-105 transition ease-out">
                Unleash Your Creativity at Our Design-a-thon
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <Card className="lg:row-span-2 bg-white rounded-lg shadow-md p-4 ">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-gray-900">
                      What is a Design-a-thon?
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      A Design-a-thon is an exciting event where participants
                      collaborate to solve real-world problems through design
                      thinking. It{`'`}s a marathon of creativity, innovation,
                      and teamwork, typically lasting 24-48 hours.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-lg shadow-md p-4 ">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-gray-900">
                      What We Do
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-600 text-left">
                      <li>Brainstorm innovative solutions</li>
                      <li>Prototype and iterate designs</li>
                      <li>Present ideas to industry experts</li>
                      <li>Network with like-minded individuals</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-lg shadow-md p-4 ">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-gray-900">
                      How to Join
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Registration is easy! Visit our website, fill out the
                      application form, and select your preferred team size. We
                      {`'`}ll review your application and get back to you within
                      a week.
                    </p>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 ">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Who Can Participate?
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Our Design-a-thon is open to anyone passionate about
                      design and problem-solving, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 text-left">
                      <li>Students (high school and university)</li>
                      <li>Professional designers</li>
                      <li>Engineers and developers</li>
                      <li>Entrepreneurs and innovators</li>
                      <li>Design enthusiasts of all backgrounds</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      No prior design experience is required – just bring your
                      creativity and enthusiasm!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          */}


        <section className="flex flex-col h-full items-center pt-36 gap-4 ">


          <BlurFade>
            <div className="py-4">
              <SparklesText text="Design-a-thon Schedule!" />
            </div>
          </BlurFade>

          <div className="flex flex-col gap-4">

            <br />
            <a
              className="luma-checkout--button hover:scale-105 transition ease-out"
              href="https://discord.gg/TRQxZ6bDHH"
            >
              <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient text-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-white/40 bg-clip-text text-transparent`,
                  )}
                >
                  Stay updated!
                </span>
              </AnimatedGradientText>
            </a>

            <br />
          </div>

          <div
            className="flex flex-col lg:flex-row gap-8 relative align-items: stretch justify-center"
            id="schedule-section"
          >
            {/* Saturday Schedule */}
            <div
              className="flex flex-col w-full overflow-y-auto mx-auto px-4"
              style={{ maxHeight: "800px" }}
            >
              <div className="text-3xl font-black py-6 text-[#0C1533] text-center lg:text-left hover:scale-105 transition ease-out">
                Day 1 - Saturday
              </div>
              {/* Event Blocks for Saturday */}
              {saturdaySchedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out"
                >
                  <div className="border-b border-[#4D8889] p-2">
                    <div className="flex justify-between pb-1">
                      <div className="text-md font-bold">{item.time}</div>
                      <div className="text-md font-bold text-right">
                        {item.event}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-600 flex text-left">
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sunday Schedule */}
            <div className="flex flex-col w-full mx-auto px-4">
              <div className="text-3xl font-black py-6 text-[#0C1533] text-center lg:text-left hover:scale-105 transition ease-out">
                Day 2 - Sunday
              </div>
              {/* Event Blocks for Sunday */}
              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out">
                <div className="border-b border-[#4D8889] p-2  ">
                  <div className="flex justify-between pb-1">
                    <div className="text-md font-bold  ">12:00am</div>
                    <div className="text-md font-bold text-right ">
                      Quiet Hours
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
                      data-testid="LocationOnIcon"
                      focusable="false"
                      style={{ fontSize: "large", marginRight: "2px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    Anywhere!
                  </div>
                </div>
              </div>
              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out">
                <div className="border-b border-[#4D8889] p-2">
                  <div className="flex justify-between pb-1">
                    <div className="text-md font-bold  ">8:00am</div>
                    <div className="text-md font-bold text-right ">
                      Breakfast!
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
                      data-testid="LocationOnIcon"
                      focusable="false"
                      style={{ fontSize: "large", marginRight: "2px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    ECSW Atrium
                  </div>
                </div>
              </div>

              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out">
                <div className="border-b border-[#4D8889] p-2">
                  <div className="flex justify-between pb-1">
                    <div className="text-md font-bold  ">12:00pm</div>
                    <div className="text-md font-bold text-right ">
                      Designing Ends
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
                      data-testid="LocationOnIcon"
                      focusable="false"
                      style={{ fontSize: "large", marginRight: "2px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    HH
                  </div>
                </div>
              </div>

              {/* Event Block: Designing Starts */}
              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out">
                <div className="border-b border-[#4D8889] p-2">
                  <div className="flex justify-between pb-1">
                    <div className="text-md font-bold  ">12:30pm</div>
                    <div className="text-md font-bold text-right ">Lunch</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
                      data-testid="LocationOnIcon"
                      focusable="false"
                      style={{ fontSize: "large", marginRight: "2px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    ECSW Atrium
                  </div>
                </div>
              </div>

              {/* Event Block: Lunch */}
              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out">
                <div className="border-b border-[#4D8889] p-2">
                  <div className="flex justify-between pb-1">
                    <div className="text-md font-bold  ">1:30pm</div>
                    <div className="text-md font-bold text-right ">
                      Juding Expo!
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
                      data-testid="LocationOnIcon"
                      focusable="false"
                      style={{ fontSize: "large", marginRight: "2px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    ECSW 1.315
                  </div>
                </div>
              </div>

              {/* Event Block: Understanding User Personas Workshop */}
              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20 hover:scale-105 transition ease-out">
                <div className="border-b border-[#4D8889] p-2">
                  <div className="flex justify-between pb-1">
                    <div className="text-md font-bold  ">4:30pm</div>
                    <div className="text-md font-bold justify-right">
                      Closing Ceremony
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600 flex items-center">
                    <svg
                      aria-hidden="true"
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
                      data-testid="LocationOnIcon"
                      focusable="false"
                      style={{ fontSize: "large", marginRight: "2px" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    ECSW 1.315
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for other Sunday events */}
          </div>
        </section>



        <section className="flex items-center justify-center h-full gap-4">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col gap-2 items-center justify-center pointer-events-none text-center ">
              <p className="text-white font-bold text-3xl md:text-4xl lg:text-7xl drop-shadow-2xl ">
                Thank you for joining us.
              </p>
            </div>
          </BackgroundGradientAnimation>
        </section>
      </main >
    </>
  );
}
