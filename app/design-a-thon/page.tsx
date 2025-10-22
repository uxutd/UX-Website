"use client";
import { useEffect, useState } from "react";

import { MorphingText } from "@/components/ui/morphing-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Carousel } from "@/components/aceternity/carousel";
import { Vortex } from "@/components/ui/vortex";


export default function DesignPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Simple config for the ABOUT title on the left (percent-based, easy to tweak)
  const aboutConfig = {
    top: "25%",
    left: "20%",
    width: "40%", // width relative to moon image container
    classes: "z-20 rounded-3xl p-2 text-center text-sm md:text-base",
    style: { maxWidth: 920, fontFamily: "Sarpanch, sans-serif" as any },
  } as const;

  // Independent config for the STATSoverlay on the right
  const aboutConfig2 = {
    top: "30%",
    left: "60%",
    width: "20%",
    // Theme colors: main B5A0FF and sub DAD0FF; softened translucency so the purple blends with the moon
    classes:
      "z-20 bg-gradient-to-br from-[#B5A0FF]/30 via-[#B5A0FF]/20 to-[#DAD0FF]/15 backdrop-blur-sm border border-[#B5A0FF]/8 text-black/90 rounded-2xl p-6 text-sm md:text-base",
    // Softer shadow and lower contrast so the card reads as part of the moon surface
    style: { ...aboutConfig.style, boxShadow: "0 10px 30px rgba(0,0,0,0.35)" as any },
  } as const;

  // Independent config for the WHAT IS DESIGNATHON overlay in the center
  const aboutConfig3 = {
    top: "15%",
    left: "50%",
    width: "min(90%, 980px)",
    // Theme colors: main #B5A0FF and sub #DAD0FF; softened translucency so the purple blends with the moon
    classes:
      "z-20 bg-gradient-to-br from-[#B5A0FF]/35 via-[#B5A0FF]/20 to-[#DAD0FF]/15 backdrop-blur-sm border border-[#B5A0FF]/8 text-black/90 text-center rounded-2xl p-6 text-sm md:text-base",
    // Softer shadow and lower contrast so the card reads as part of the moon surface
    style: { ...aboutConfig.style, boxShadow: "0 10px 30px rgba(0,0,0,0.35)" as any },
  } as const;

  useEffect(() => {
    // Hide global footer while on this page and set page-local background
    document.body.classList.add("no-footer");
    const previousBg = document.body.style.backgroundColor;
    // apply purple background for this page only
    document.body.style.backgroundColor = "#B5A0FF";

    return () => {
      document.body.classList.remove("no-footer");
      // restore previous background
      document.body.style.backgroundColor = previousBg || "";
    };
  }, []);

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
        className="text-white min-h-[220vh] py-20 bg-cover bg-center relative overflow-visible"
        style={{ backgroundImage: "url('/DTHONbackground.png')" }}
      >
        {/* Grid Container */}
        <div className="grid grid-cols-12 grid-rows-[auto_auto_1fr_auto] min-h-[120vh] gap-6 px-6">
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
            <div className="relative w-full">
              <img alt="Moon Design" className="w-full h-auto transform scale-70" src="/moon 1.svg" />

              <section
                aria-labelledby="speakers-heading"
                className="w-full mt-60 px-6"
                style={{ fontFamily: "Sarpanch, sans-serif" }} // ensure Sarpanch across the section
              >
                <div className="mx-auto max-w-6xl">
                  {/* Gradient border wrapper */}
                  <div className="
                    relative rounded-3xl p-[1px]
                    bg-gradient-to-br from-[#B5A0FF] via-[#C8BBFF] to-[#DAD0FF]
                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  ">
                    {/* Glass panel */}
                    <div className="
                      relative rounded-[calc(theme(borderRadius.3xl)-1px)]
                      bg-white/55 backdrop-blur-xl
                      ring-1 ring-white/30
                      px-6 py-8 md:px-12 md:py-12
                      text-black/90
                    ">
                      {/* Decorative glows */}
                      <span className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#B5A0FF]/25 blur-2xl" />
                      <span className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#DAD0FF]/25 blur-2xl" />

                      {/* Header */}
                      <header className="text-center">
                        <h2
                          id="speakers-heading"
                          className="font-extrabold tracking-[-0.02em] leading-tight
                                    text-3xl md:text-5xl lg:text-6xl"
                        >
                          <span className="bg-gradient-to-r from-[#6A41FF] via-[#B5A0FF] to-[#6A41FF] bg-clip-text text-transparent"style={{ fontFamily: "Sarpanch, sans-serif" }}>
                            Meet our speakers
                          </span>
                        </h2>
                        <div className="mx-auto mt-4 mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#6A41FF]/50 to-transparent" />
                        <p className="mx-auto max-w-2xl text-sm md:text-base text-black/70"
                          style={{ fontFamily: "Bai Jamjuree, sans-serif" }}>
                          Industry leaders and innovators sharing insights across product, UX, and emerging tech.
                        </p>
                      </header>

                      {/* Carousel */}
                      <div className="mt-10 flex justify-center">
                        <Carousel
                          slides={[
                            { title: "Grace Nguyen",  src: "/dthonvenus.svg",   subtitle: "Sr. Product Designer @ Google" },
                            { title: "Jonathan Castaneda", src: "/dthonmars.svg",    subtitle: "Sr. Product Design Manager, Design Systems & Accessibility @ Cencora" },
                            { title: "Averi Collens", src: "/dthonneptune.svg",    subtitle: "UX Researcher @ CBRE" },
                            { title: "Kyle Reubens",  src: "/dthonvenus.svg", subtitle: "Freelance UX Designer"},
                          ]}
                          spacing="2vmin"
                          //initialIndex={1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            {/* Schedule Section */}
            <section
              className="relative flex flex-col items-center justify-center pt-36 pb-24 px-6">

              {/* Decorative glow */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(181,160,255,0.25)_0%,transparent_70%)] blur-3xl" />
              </div>

              {/* Title Badge */}
              <div className="group rounded-full border border-black/10 bg-white/70 backdrop-blur-md text-base text-black transition-all ease-in hover:bg-white/90 hover:cursor-default shadow-lg">
                <span className="inline-flex items-center justify-center px-6 py-2 font-semibold">
                  October 25th - 26th
                </span>
              </div>

              {/* Section Heading */}
              <div className="relative flex justify-center mt-10 mb-14">
                {/* Outer gradient border */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#6A41FF] via-[#B5A0FF] to-[#6A41FF]">
                  {/* Inner translucent box */}
                  <div className="bg-white/70 backdrop-blur-md rounded-2xl px-8 py-4 shadow-md">
                    {/* Gradient text */}
                    <h2
                      className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-[#6A41FF] via-[#B5A0FF] to-[#6A41FF] bg-clip-text text-transparent"
                      style={{ fontFamily: "Sarpanch, sans-serif" }}
                    >
                      Design-a-thon Schedule
                    </h2>
                  </div>
                </div>
              </div>


              {/* Schedule Panels */}
              <div className="flex flex-col lg:flex-row gap-10 justify-center w-full max-w-7xl px-6">
                {/* --- Day 1 --- */}
                <div
                  className="flex flex-col w-full overflow-y-auto mx-auto p-6 rounded-3xl border border-[#B5A0FF]/20 bg-white/60 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300"
                  style={{ maxHeight: "800px" }}
                >
                  <h3 className="text-3xl font-bold text-[#0C1533] mb-8 text-center lg:text-left"style={{ fontFamily: "Sarpanch, sans-serif" }}>
                    Day 1 — Saturday
                  </h3>
                  {[
                    { time: "9:00 AM", event: "Student Check-In & Boothing", location: "ECSW Atrium" },
                    { time: "10:00 AM", event: "Team Forming Workshop - UX", location: "ECSW 'Bird's Nest'" },
                    { time: "11:00 AM", event: "Opening Ceremony", location: "TBD" },
                    { time: "12:00 PM", event: "Designing Starts 💙", location: "Anywhere!" },
                    { time: "12:30 PM", event: "Lunch", location: "ECSW Atrium" },
                    { time: "1:00 PM", event: "Workshop Slot", location: "ECSW 1.355" },
                    { time: "2:15 PM", event: "Workshop Slot", location: "ECSW 1.365" },
                    { time: "3:30 PM", event: "Workshop Slot", location: "ECSW 1.355" },
                    { time: "5:00 PM", event: "Color and Connect", location: "ECSW 1.365" },
                    { time: "6:00 PM", event: "Workshop Slot", location: "ECSW 3.210" },
                    { time: "7:15 PM", event: "Workshop Slot", location: "ECSW 1.355" },
                    { time: "8:00 PM", event: "Dinner", location: "ECSW Atrium" },
                    { time: "8:30 PM", event: "Office Hours", location: "ECSW Atrium" },
                    { time: "10:30 PM", event: "Fun Activity!", location: "ECSW Atrium" },
                    { time: "12:00 AM - 7:00 AM", event: "Quiet Hours", location: "" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/80 border border-[#B5A0FF]/20 rounded-2xl p-4 mb-4 hover:bg-[#F8F6FF] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between font-semibold text-[#3D2FBF]">
                        <span className="text-[#08195E] font-bold"style={{ fontFamily: "Sarpanch, sans-serif" }}>{item.time}</span>
                        <span>{item.event}</span>
                      </div>
                      <div className="text-gray-600 italic text-sm mt-1"style={{ fontFamily: "Sarpanch, sans-serif" }}>{item.location}</div>
                    </div>
                  ))}
                </div>

                {/* --- Day 2 --- */}
                <div
                  className="flex flex-col w-full overflow-y-auto mx-auto p-6 rounded-3xl border border-[#B5A0FF]/20 bg-white/60 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300"
                  style={{ maxHeight: "800px" }}
                >
                  <h3 className="text-3xl font-bold text-[#0C1533] mb-8 text-center lg:text-left"style={{ fontFamily: "Sarpanch, sans-serif" }}>
                    Day 2 — Sunday
                  </h3>
                  {[
                    { time: "12:00 AM - 7:00 AM", event: "Quiet Hours", location: "" },
                    { time: "8:00 AM", event: "Breakfast!", location: "ECSW Atrium" },
                    { time: "12:00 PM", event: "Designing Ends", location: "" },
                    { time: "12:30 PM", event: "Lunch", location: "ECSW Atrium" },
                    { time: "1:30 PM - 4:00 PM", event: "Judging Expo!", location: "ECSW 1.315" },
                    { time: "5:00 PM", event: "Closing Ceremony", location: "ECSW 1.315" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/80 border border-[#B5A0FF]/20 rounded-2xl p-4 mb-4 hover:bg-[#F8F6FF] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between font-semibold text-[#3D2FBF]">
                        <span className="text-[#08195E] font-bold"style={{ fontFamily: "Sarpanch, sans-serif" }}>{item.time}</span>
                        <span>{item.event}</span>
                      </div>
                      <div className="text-gray-600 italic text-sm mt-1"style={{ fontFamily: "Sarpanch, sans-serif" }}>{item.location}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Scrollbar Styling */}
              <style jsx>{`
                /* Scrollbar for WebKit browsers */
                div::-webkit-scrollbar {
                  width: 10px;
                }
                div::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.5);
                  border-radius: 9999px;
                }
                div::-webkit-scrollbar-thumb {
                  background: linear-gradient(180deg, #B5A0FF, #6A41FF);
                  border-radius: 9999px;
                  border: 2px solid rgba(255, 255, 255, 0.6);
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: linear-gradient(180deg, #6A41FF, #4D2AFF);
                }

                /* Firefox scrollbar */
                div {
                  scrollbar-width: thin;
                  scrollbar-color: #B5A0FF rgba(255, 255, 255, 0.4);
                }
              `}</style>
            </section>



              {/* Absolutely-positioned About card over the moon image */}
              {/*<div
                className={"absolute -translate-x-1/2 left-1/2 " + aboutConfig.classes}
                style={{ top: aboutConfig.top, left: aboutConfig.left, width: aboutConfig.width, ...aboutConfig.style }}
                aria-labelledby="dthon-about-title"
              >
                <h2 id="dthon-about-title" className="font-extrabold text-black" style={{ fontFamily: "Sarpanch, sans-serif", fontSize: "135px", lineHeight: 1 }}>About</h2>
                <div className="mt-4">
                </div>
              </div>*/}

              {/* Refer to aboutConfig2 for editing this one*/}
              <div
                className={"absolute -translate-x-1/2 " + aboutConfig2.classes}
                style={{ top: aboutConfig2.top, left: aboutConfig2.left, width: aboutConfig2.width, ...aboutConfig2.style }}
                aria-labelledby="dthon-about-title-2"
              >
                <h2 id="dthon-about-title-2" className="text-xl font-semibold text-black" style={{ fontFamily: "Sarpanch, sans-serif" }}>UXperience: The First Draft (2024)</h2>
                <p className="mt-2 text-black/90" style={{ fontFamily: "Sarpanch, sans-serif" }}>• 147+ attendees, <br/> • 39+ projects, <br/> • 20+ professionals,<br/> • $1400 won in prize money<br/> </p>
                <div className="mt-4">
                </div>
              </div>

              {/* Refer to aboutConfig3 for editing this one (WHAT IS DESIGNATHON CARD) */}
              <div
                className={"absolute -translate-x-1/2 " + aboutConfig3.classes}
                style={{ top: aboutConfig3.top, left: aboutConfig3.left, width: aboutConfig3.width, ...aboutConfig3.style }}
                aria-labelledby="dthon-about-title-3"
              >
                {/* Gradient border wrapper */}
                <div className="
                    relative rounded-3xl p-[1px]
                    bg-gradient-to-br from-[#B5A0FF] via-[#C8BBFF] to-[#DAD0FF]
                    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                    transition-transform duration-300 ease-out hover:-translate-y-0.5
                  "
                >
                  {/* Glass panel */}
                  <div className="
                      relative rounded-[calc(theme(borderRadius.3xl)-1px)]
                      bg-white/55 backdrop-blur-xl
                      ring-1 ring-white/30
                      px-6 py-7 md:px-10 md:py-10
                      text-black/90
                    "
                    >
                    {/* Subtle radial glows (decoration only) */}
                    <span className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#B5A0FF]/25 blur-2xl" />
                    <span className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#DAD0FF]/25 blur-2xl" />

                    {/* Heading */}
                    <h3
                      id="dthon-about-title-3"
                      className="
                        font-extrabold text-black tracking-[-0.01em]
                        text-2xl md:text-4xl lg:text-5xl leading-tight
                      "
                    >
                      <span className="bg-gradient-to-r from-[#6A41FF] via-[#B5A0FF] to-[#6A41FF] bg-clip-text text-transparent"style={{ fontFamily: "Sarpanch, sans-serif" }}>
                        What is Designathon?
                      </span>
                    </h3>

                    {/* Divider */}
                    <div className="mx-auto mt-4 mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#6A41FF]/50 to-transparent" />

                    {/* Body copy */}
                    <p
                      className="mx-auto max-w-3xl text-left md:text-center text-base md:text-lg leading-relaxed text-black/85"
                      style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                    >
                      <strong className="font-semibold text-black/90">UXperience</strong> is an intensive 24-hour event that compresses
                      weeks of product design into a single day. It replaces a traditional four-week design challenge and features
                      non-stop collaboration, workshops, and networking opportunities.
                      <br /><br />
                      Join us for two epic days of designing, brainstorming, and building the future of user experience together. 
                      It’s your chance to tackle exciting design challenges with fellow creatives and bring your boldest ideas to life!
                    </p>
                    </div>
                  </div>
                </div>

            </div>
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
        <div className="w-100% mx-auto h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Can't wait to see you there!
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          UXperience: Echoes of Tomorrow (10/25-10/26)
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Register now
          </button>
          <button className="px-4 py-2  text-white ">Explore</button>
        </div>
      </Vortex>
    </div>
      </section>
    </>
  );
}
