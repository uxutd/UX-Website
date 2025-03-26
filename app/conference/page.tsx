"use client"

import { useState, Suspense } from "react"
import { X } from "lucide-react"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { WavyBackground } from "@/components/ui/wavy-background"

export default function ConferencePage() {
  const [showIframe, setShowIframe] = useState(false)

  const toggleIframe = () => {
    setShowIframe(!showIframe)
  }

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
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Brian Sullivan",
      designation: "Director of Design Strategy at Sabre",
      src: "/brian.png",
    },
    {
      quote:
        "Everett Swain II is the founder of UXD Academy and Hour Table. He has over 13 years of experience working with major companies like Wayfair, 7-Eleven, and Prudential.",
      name: "Everett Swain II",
      designation: "Founder of UXD Academy & AI Experience Designer at Guardian Life",
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
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Preston McCauley",
      designation: "Director of AI and Innovation at Tonic3",
      src: "/preston.jpg",
    },
  ]

  return (
    <>
      <section
        className="text-white flex flex-col items-center justify-center min-h-screen md:min-h-[95vh] py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/finalmap.svg')" }}
      >
        <div className="scale-90 transform">
          <div className="relative">
            <img
              alt="Conference hero design with event details"
              className="max-w-[100%] h-auto w-full md:max-w-[600px] lg:max-w-[1000px] mx-auto transform translate-y-1/8 object-contain"
              src="/paperhero.png"
            />
            {/* Design image positioned absolutely above the title */}
            <img
              alt="Decorative design elements for conference"
              className="absolute w-[40%] max-w-[400px] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
              src="/design.svg"
            />
            {/* Uncharted title image positioned absolutely in the middle */}
            <img
              alt="UXperience Conference Uncharted theme title"
              className="absolute w-[70%] max-w-[500px] top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
              src="/uncharted.svg"
            />
            {/* Ticket image positioned absolutely */}
            <img
              alt="Conference ticket registration button"
              className="absolute w-[40%] max-w-[600px] -bottom-[5%] left-[-20px] transform translate-y-1/4 object-contain"
              src="/ticket.svg"
            />
            {/* Tape image */}
            <img
              alt="Decorative tape element"
              className="absolute w-[40%] max-w-[200px] top-[-40px] right-0 transform -translate-y-1/12 translate-x-1/4 object-contain"
              src="/tape.svg"
            />
            {/* Path image positioned as a dotted line between Uncharted and Location */}
            <img
              alt="Dotted connecting path between conference elements"
              className="absolute w-[8%] max-w-[100px] top-[70%] left-[82%] transform -translate-x-1/2 rotate-[8deg] object-contain"
              src="/path.png"
            />
            {/* Location image moved further down */}
            <img
              alt="Conference location icon"
              className="rotate-[8deg] absolute w-[10%] max-w-[200px] bottom-[15px] right-[7%] transform translate-y-1/8 translate-x-1/4 object-contain"
              src="/location.svg"
            />
            {/* Register button */}
            <button
              aria-label="Register for the conference"
              className="absolute w-[35%] max-w-[550px] -bottom-[8.5%] right-[2%] transform translate-y-1/8 translate-x-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              onClick={toggleIframe}
            >
              <img alt="Conference registration button" className="w-full h-auto object-contain" src="/register.png" />
            </button>
          </div>
        </div>
      </section>

      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-[90%] max-w-[800px] h-[80%] bg-white rounded-lg overflow-hidden">
            <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
              <iframe
                className="w-full h-full border-none"
                loading="lazy"
                src="https://www.eventbrite.com/e/uxperience-conference-design-uncharted-tickets-1269729879249?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
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
      <div className="flex flex-col items-center mt-16 px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">Celebrating 5 Years of UX Conference at UTD</h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-[600px] text-center">
          Join us as we celebrate five incredible years of innovation, collaboration, and growth in our UX community.
          Together, we'll chart new territories and navigate the next chapters of design!
        </p>
        <div className="w-full max-w-[1067px] mt-8">
          <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
              frameBorder="0"
              src="https://www.youtube.com/embed/mMlVFjzoF04"
              title="YouTube video player"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mx-auto my-12 px-6 md:px-12 bg-[#3a5e9e] py-8 md:py-16">
        <div className="w-full max-w-[1067px] bg-blue-100 rounded-lg p-8 shadow-lg min-h-[300px] flex flex-col justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 text-center mb-8">Meet Our Speakers</h1>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>

        <div className="mt-12 w-full max-w-[800px] scale-110">
          <img alt="Conference Schedule" className="w-full h-auto object-contain" src="/conferenceschedule.svg" />
        </div>
      </div>

      <div className="relative mb-10 pt-16">
        <WavyBackground className="w-full md:scale-100">
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center leading-tight" />
          <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 text-white font-normal inter-var text-center leading-tight" />
        </WavyBackground>
        <div className="absolute inset-0 flex justify-center items-center z-10" style={{ top: "100px" }}>
          <img
            alt="Conference Footer"
            className="w-[85%] max-w-[800px] h-auto object-contain mb-10 md:w-[70%] md:mb-20 mx-auto"
            src="/conferencefooter.svg"
          />
        </div>
      </div>
    </>
  )
}

