"use client";

import { useState, Suspense } from "react";
import { X } from "lucide-react";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function ConferencePage() {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  // Moved these components inside the main component
  const testimonials = [
    {
      quote:
        "Linh-Hoa has worked at Capital One since 2021 on various products. She holds a B.A. in Arts, Technology, and Emerging Communication with a Minor in Marketing from UT Dallas and founded the UX conference.",
      name: "Linh-Hoa Nguyen",
      designation: "Sr. Experience Designer at Capital One",
      src: "/linh-hoa.jpg",
    },
    {
      quote:
        "Brian Sullivan is the Director of Design Strategy at Sabre. He helps travel brands build products and services for the future of travel. He works with large brands including American Airlines, Hyatt Hotels, Virgin Australia, AMEX, and more.",
      name: "Brian Sullivan",
      designation: "Director of Design Strategy at Sabre",
      src: "/brian.png",
    },
    {
      quote:
        "Everett Swain II is the founder of UXD Academy and Hour Table. He has over 13 years of experience working with major companies like Wayfair, 7-Eleven, and Prudential.",
      name: "Everett Swain II",
      designation:
        "Founder of UXD Academy & AI Experience Designer at Guardian Life",
      src: "/everett.jpg",
    },
    {
      quote:
        "Averi is a UX Researcher at CBRE, driving user-centered design solutions in commercial real estate. A University of North Texas graduate, she leads CBRE's engagement with UX students across DFW universities.",
      name: "Averi Collen",
      designation: "UX Researcher at CBRE",
      src: "/averi.png",
    },
    {
      quote:
        "Preston McCauley is an AI, UX, and immersive technologies expert with 25+ years of experience creating human-centered AI systems. He is also the author of Generative AI for Everyone: A Practical Guidebook.",
      name: "Preston McCauley",
      designation: "Director of AI and Innovation at Tonic3",
      src: "/preston.jpg",
    },
  ];

  return (
    <>
      <section
        className="text-white flex flex-col items-center justify-center min-h-screen md:min-h-[100vh] py-20 bg-cover bg-center scale-100"
        style={{ backgroundImage: "url('/designbetweenspacesbackground.svg')" }}
      >
        <div className="scale-100 transform"> {/* I needed a container for the div this actually scales nothing */ }
          <div className="relative">
            <img
              alt="Conference hero design with event details"
              className="max-w-[100%] h-auto w-full md:max-w-[600px] lg:max-w-[1000px] mx-auto transform translate-y-1/8 object-contain"
              src="/paperhero.png" //I am not joking I just deleted the image and kept the image size the same because every other image in the container was dependent on the size of this image.
            />

            {/* Design Between Spaces title image positioned absolutely in the middle */}
            <img
              alt="UXperience Conference Uncharted theme title"
              className="absolute w-[70%] max-w-[500px] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
              src="/designbetweenspaces.svg"
            />
            {/* Ticket image positioned absolutely */}
            <img
              alt="Conference ticket registration button"
              className="absolute top-[65%] -bottom-[15%] left-[-20px] transform object-contain"
              src="/designbetweenspacessignperson.svg"
            />
            {/* Location image moved further down */}
            <img
              alt="Conference location icon"
              className="rotate-[8deg] absolute w-[10%] max-w-[200px] bottom-[15px] right-[7%] transform translate-y-1/8 translate-x-1/4 object-contain"
              src="/designbetweenspaceslocation.svg"
            />
            {/* Register button */}
            <button
              aria-label="Register for the conference"
              className="absolute w-[35%] max-w-[550px] -bottom-[8.5%] right-[2%] transform translate-y-1/8 translate-x-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              onClick={toggleIframe}
            >
              <img
                alt="Conference registration button"
                className="w-full h-auto object-contain"
                src="/designbetweenspacesregister.svg"
              />
            </button>
          </div>
        </div>
      </section>

      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-[90%] max-w-[800px] h-[80%] bg-white rounded-lg overflow-hidden">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  Loading...
                </div>
              }
            >
              <iframe
                className="w-full h-full border-none"
                loading="lazy"
                src="https://www.eventbrite.com/e/uxperience-conference-design-between-spaces-tickets-1984138544799?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                title="UXperience Conference Eventbrite Registration Page"
              />
            </Suspense>
            <button
              aria-label="Close registration form"
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
              onClick={toggleIframe}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full mx-auto px-6 md:px-12 bg-gradient-to-b from-[#516ED4] to-[#161E3C] py-8 md:py-16">
        <div className="w-full max-w-[1067px] bg-[#FAD8BF] rounded-lg p-8 border border-[#F9732B] border-8 shadow-lg min-h-[600px] flex flex-col justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 text-center mb-8">
            Meet Our Speakers
          </h1>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>

        <div className="mt-12 w-full max-w-[800px] scale-110">
          <img
            alt="Conference Schedule"
            className="w-full h-auto object-contain"
            src="/designbetweenspacesschedule.svg"
          />
        </div>
      </div>

      <div className="relative mb-10 pt-16">
        {/* Remove WavyBackground and conferencefooter for mobile */}
        <WavyBackground className="hidden md:block w-full md:scale-100">
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center leading-tight" />
          <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 text-white font-normal inter-var text-center leading-tight" />
        </WavyBackground>
        <div
          className="hidden md:flex absolute inset-0 justify-center items-center z-10"
          style={{ top: "100px" }}
        >
          <img
            alt="Conference Footer"
            className="w-[85%] max-w-[800px] h-auto object-contain mb-10 md:w-[70%] md:mb-20 mx-auto"
            src="/conferencefooter.svg"
          />
        </div>
        <div
          className="block md:hidden"
          style={{ marginTop: "-115px", marginBottom: "-40px" }}
        >
          <img
            alt="Mobile Footer"
            className="w-full h-auto object-contain"
            src="/mobilefooter.svg"
          />
        </div>
      </div>
    </>
  );
}
