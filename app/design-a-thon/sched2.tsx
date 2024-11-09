"use client";
import { useEffect } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import TypingAnimation from "@/components/ui/typing-animation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import NumberTicker from "@/components/magicui/number-ticker";
import { Card, CardHeader, CardContent } from "@mui/material";
import SparklesText from "@/components/ui/sparkles-text";


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
                  className="w-[60vw] max-w-[600px] h-auto sm:w-[40vw]"
                  src="/Group3.svg"
                />
                <TypingAnimation
                  className="absolute inset-0 flex items-center justify-center font-bold text-[#08195E] rotate-[-2deg] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] p-[3%] sm:p-[2%] md:p-[5%] lg:p-[5%] xl:p-[5%] max-w-full overflow-hidden whitespace-nowrap min-w-0"
                  duration={200}
                  text="The First Draft"
                />
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={2}>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold text-[#08195E] hover:scale-110 transition ease-out">
                November 9th - 10th
              </span>
              <a
                className="luma-checkout--button hover:scale-105 transition ease-out"
                data-luma-action="checkout"
                data-luma-event-id="evt-BSCDnA2C8SG382k"
                href="https://lu.ma/event/evt-BSCDnA2C8SG382k"
              >
                Register Now!
              </a>
            </div>
          </BlurFade>
        </section>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />

     <section className="bg-[#0C1533] text-white h-full sm:h-full w-screen">
      <div className="py-24 sm:py-32 mb-[-10]">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-center text-base/7 font-semibold  text-indigo-600">Join the Innovation</h2>
          <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-white sm:text-5xl hover:scale-105 transition ease-out">
            Unleash Your Creativity at Our Design-a-thon
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <Card className="lg:row-span-2 bg-white rounded-lg shadow-md p-4">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">What is a Design-a-thon?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A Design-a-thon is an exciting event where participants collaborate to solve real-world problems through design thinking. It's a marathon of creativity, innovation, and teamwork, typically lasting 24-48 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg shadow-md p-4">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">What We Do</h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Brainstorm innovative solutions</li>
                  <li>Prototype and iterate designs</li>
                  <li>Present ideas to industry experts</li>
                  <li>Network with like-minded individuals</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-lg shadow-md p-4">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">How to Join</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Registration is easy! Visit our website, fill out the application form, and select your preferred team size. We'll review your application and get back to you within a week.
                </p>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">Who Can Participate?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our Design-a-thon is open to anyone passionate about design and problem-solving, including:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Students (high school and university)</li>
                  <li>Professional designers</li>
                  <li>Engineers and developers</li>
                  <li>Entrepreneurs and innovators</li>
                  <li>Design enthusiasts of all backgrounds</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  No prior design experience is required – just bring your creativity and enthusiasm!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
     </section>

    <section className="flex flex-col h-full items-center pt-36 gap-4">
  <div
    className="group rounded-full border border-black/5 bg-neutral-100 mt-[-50] text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
      <span>The UX Club Presents</span>
    </AnimatedShinyText>
  </div>
  <BlurFade>
            <div className="py-8 hover:scale-105 transition ease-out">
            <SparklesText text="Design-a-thon Schedule!" />
            </div>
          </BlurFade>

  <div className="flex flex-col gap-4">
    <span className="text-2xl font-bold text-[#08195E] hover:scale-110 transition ease-out">
      November 9th - 10th
    </span>
    <br />
    <a
      className="luma-checkout--button hover:scale-105 transition ease-out"
      data-luma-action="checkout"
      data-luma-event-id="evt-BSCDnA2C8SG382k"
      href="https://discord.gg/BBwy4Gfh"
    >
      Stay updated!
    </a>

    <br />
  </div>

  <div id="schedule-section" className="flex flex-col h-full items-center pt-36 gap-4">
  <div className="text-center text-2xl font-bold text-white p-2" style={{ textShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }}>
        Schedule
    </div>
    <div className="flex flex-col lg:flex-row justify-center gap-8 relative">
        <div className="flex lg:flex-row lg:w-2/3 w-full overflow-x-hidden mx-auto lg:w-auto">
        <div className="w-full lg:w-1/2 px-4 md:px-0 relative">
              <div className="text-3xl font-black py-6 text-[#7FC7E9]">
                    Day 1 - Saturday
                </div>
                
                {/* Event Block: Check In/Boothing */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">9:00am</div>
                            <div className="text-md font-bold text-right text-right ">Check In/Boothing</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW Atrium
                        </div>
                    </div>
                </div>

                {/* Event Block: ECSW Bird's Nest */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                  <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">10:00am</div>
                            <div className="text-md font-bold text-right ">Team Forming Workshop</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW "Bird's Nest"
                        </div>
                    </div>
                 </div>

              <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                 <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">10:00am</div>
                            <div className="text-md font-bold text-right ">& Sponsor Networking</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW Atrium
                        </div>
                    </div>
                  </div>
                 

                {/* Event Block: Opening Ceremony */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">11:00am</div>
                            <div className="text-md font-bold text-right">Opening Ceremony</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            SLC 1.102
                        </div>
                    </div>
                </div>

                {/* Event Block: Designing Starts */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">12:00pm</div>
                            <div className="text-md font-bold  text-right">Designing Starts 💙</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            HH
                        </div>
                    </div>
                </div>

                {/* Event Block: Lunch */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">12:30pm</div>
                            <div className="text-md font-bold text-right ">Lunch</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                    <div className="text-gray-600 flex items-center">
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="LocationOnIcon"
        style={{ fontSize: 'large', marginRight: '2px' }}
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
      </svg>
      ECSW Atrium
    </div>
                    </div>
                </div>

                {/* Event Block: Understanding User Personas Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">1:00pm</div>
                            <div className="text-md font-bold text-right  ">Understanding User Personas Workshop w/ Mercedes Johnson</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.355
                        </div>
                    </div>
                </div>

                {/* Event Block: Hacking the Design-a-thon Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">2:15pm</div>
                            <div className="text-md font-bold text-right ">Hacking the Design-a-thon Workshop with WEHack</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.365
                        </div>
                    </div>
                </div>

                {/* Event Block: Intro to UX Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">4:00pm</div>
                            <div className="text-md font-bold text-right ">Intro to UX Workshop with CBRE</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.355
                        </div>
                    </div>
                </div>

                {/* Event Block: Storytelling in UX Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">5:00pm</div>
                            <div className="text-md font-bold  text-right">Storytelling in UX Workshop with UX</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.365
                        </div>
                    </div>
                </div>

                {/* Event Block: Color and Connect */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">5:00pm</div>
                            <div className="text-md font-bold  text-right">Color and Connect</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 3.210
                        </div>
                    </div>
                </div>

                {/* Event Block: Rapid Prototyping in Figma Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">6:15pm</div>
                            <div className="text-md font-bold  text-right">Rapid Prototyping in Figma Workshop with UX</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.355
                        </div>
                    </div>
                </div>

                {/* Event Block: Understanding Info Architecture Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">7:15pm</div>
                            <div className="text-md font-bold text-right ">Understanding Info Architecture Workshop with KTP</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.355
                        </div>
                    </div>
                </div>

                {/* Event Block: Dinner */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">8:30pm</div>
                            <div className="text-md font-bold text-right ">Dinner</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW Atrium
                        </div>
                    </div>
                </div>

                {/* Event Block: Brain Break */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">10:30pm</div>
                            <div className="text-md font-bold text-right ">Brain Break!</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            TBD
                        </div>
                    </div>
                </div>

                <div className="text-3xl font-black py-6 text-[#7FC7E9]">
                    Day 2 - Sunday
                </div>
                
                {/* Event Block: Check In/Boothing */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">12:00am</div>
                            <div className="text-md font-bold text-right ">Quiet Hours</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            HH
                        </div>
                    </div>
                </div>

                {/* Event Block: ECSW Bird's Nest */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">8:00am</div>
                            <div className="text-md font-bold  text-right">Breakfast</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW Atrium"
                        </div>
                    </div>
                </div>

                {/* Event Block: Opening Ceremony */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">12:00pm</div>
                            <div className="text-md font-bold text-right ">Designing Ends</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            HH
                        </div>
                    </div>
                </div>

                {/* Event Block: Designing Starts */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">12:30pm</div>
                            <div className="text-md font-bold text-right ">Lunch</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW Atrium
                        </div>
                    </div>
                </div>

                {/* Event Block: Lunch */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">1:30pm</div>
                            <div className="text-md font-bold text-right ">Juding Expo!</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuw" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon" style={{ fontSize: 'large', marginRight: '2px' }}>
                                <path d="..." />
                            </svg>
                            ECSW 1.315
                        </div>
                    </div>
                </div>

                {/* Event Block: Understanding User Personas Workshop */}
                <div className="bg-white mb-8 mx-2 p-2 border-2 rounded-3xl border-[#05149C] border-opacity-20">
                    <div className="border-b border-[#4D8889] p-2">
                        <div className="flex justify-between pb-1">
                            <div className="text-md font-bold  ">4:30pm</div>
                            <div className="text-md font-bold justify-right">Closing Ceremony</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-600 flex items-center">
                            📍
                            ECSW 1.315
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
        </section>

        <br /><br /><br /><br /><br /><br /><br /><br /><br />

        
        <section className="flex items-center justify-center h-full gap-4">
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
