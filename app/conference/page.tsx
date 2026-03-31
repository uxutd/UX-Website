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
        "Gordon has worked in various industries and has seen first-hand how accessibility needs, challenges, and opportunities can be wildly different. His talk explores how accessibility becomes a differentiating feature when designing products for individuals with unique needs rather than broad personas. He will share specific examples of this approach in practice, while also highlighting the new possibilities AI is unlocking that designers should be exploring.",
      name: "Gordon Clines",
      designation: "Associate Partner, Product Design & Engineering, IBM Consulting",
      src: "/Clines_Gordon.jpg",
    },
    //After Gordon, the photos are strangely thin idk but i'll come back to it.
    {
      quote:
        "With 30 years of experience in UX, Craig’s talk challenges the industry tendency to treat accessibility as a final compliance task. He explores the vital shift toward inclusive design by considering the full spectrum of human ability from a project’s inception. Focusing on the “edges” of user experience and utilizing AI as a strategic copilot, he talks about how teams can build products that are truly usable for the full range of human experience.",
      name: "Craig Moser",
      designation: "UX Design Executive @ IBM",
      src: "/Moser_Craig.png",
    },
    {
      quote:
        "Barbara’s talk explores the necessity of inclusive design in the rapidly evolving healthcare sector. With her design experience in healthcare like Walmart Health, CVS, and Cencora, Barbara highlights the importance of designing with every user in mind. This session dives into how we can ensure no one is excluded from essential care, providing a roadmap for creating truly accessible experiences.",
      name: "Barbara Ruiz",
      designation: "Senior Designer @ Cencora",
      src: "/Ruiz_Barbara.jpg",
    },
    {
      quote:
        "In medicine, the first rule is to do no harm! But what does that look like in the world of digital product design? Drawing from her background in healthcare and UX, Kimberly’s session explores how we can translate clinical ethics into design to prioritize safety and accountability. This talk challenges designers to look beyond simple usability and ask how we can ensure every user is accounted for, protected, and empowered by the products we build.",
      name: "Kimberly Ezeama",
      designation:
        "Senior Product Designer",
      src: "/kimberly.png",
    },
    {
      quote:
        "Nat has designed the UX for just about anything you can think of, including physical and voice only products. Successful design requires more than just technical skill; it demands the ability to think laterally across different platforms. This session explores how lateral thinking transforms the design process. Nat will share real examples from her diverse career to show how a curious mindset leads to more innovative, inclusive UX.",
      name: "Nat Weston",
      designation: "Independent Consultant",
      src: "/JN_Weston.jpg",
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
