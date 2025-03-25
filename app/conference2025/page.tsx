"use client"

import { useState, Suspense } from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { WavyBackground } from "@/components/ui/wavy-background"
import { X } from "lucide-react"

export default function ConferencePage() {
  const [showIframe, setShowIframe] = useState(false)

  const toggleIframe = () => {
    setShowIframe(!showIframe)
  }

  return (
    <>
      <section
        className="text-white flex flex-col items-center justify-center min-h-screen md:min-h-[95vh] py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/finalmap.svg')" }}
      >
        <div className="scale-90 transform">
          <div className="relative">
            <img
              src="/paperhero.png"
              alt="Hero Image"
              className="max-w-[100%] h-auto w-full md:max-w-[600px] lg:max-w-[1000px] mx-auto transform translate-y-1/8 object-contain"
            />
            {/* Design image positioned absolutely above the title */}
            <img
              src="/design.svg"
              alt="Design"
              className="absolute w-[40%] max-w-[400px] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
            />
            {/* Uncharted title image positioned absolutely in the middle */}
            <img
              src="/uncharted.svg"
              alt="Uncharted Title"
              className="absolute w-[70%] max-w-[500px] top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
            />
            {/* Ticket image positioned absolutely */}
            <img
              src="/ticket.svg"
              alt="Ticket"
              className="absolute w-[40%] max-w-[600px] -bottom-[5%] left-[-20px] transform translate-y-1/4 object-contain"
            />
            {/* Tape image */}
            <img
              src="/tape.svg"
              alt="Tape"
              className="absolute w-[40%] max-w-[200px] top-[-40px] right-0 transform -translate-y-1/12 translate-x-1/4 object-contain"
            />
            {/* Path image positioned as a dotted line between Uncharted and Location */}
            <img
              src="/path.png"
              alt="Path"
              className="absolute w-[8%] max-w-[100px] top-[70%] left-[82%] transform -translate-x-1/2 rotate-[8deg] object-contain"
            />
            {/* Location image moved further down */}
            <img
              src="/location.svg"
              alt="Loc"
              className="rotate-[8deg] absolute w-[10%] max-w-[200px] bottom-[15px] right-[7%] transform translate-y-1/8 translate-x-1/4 object-contain"
            />
            {/* Register button */}
            <button
              onClick={toggleIframe}
              className="absolute w-[35%] max-w-[550px] -bottom-[8.5%] right-[2%] transform translate-y-1/8 translate-x-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              aria-label="Register for the conference"
            >
              <img src="/register.png" alt="Register" className="w-full h-auto object-contain" />
            </button>
          </div>
        </div>
      </section>

      {showIframe && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="relative w-[90%] max-w-[800px] h-[80%] bg-white rounded-lg overflow-hidden">
      <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
        <iframe
          loading="lazy"
          src="https://www.eventbrite.com/e/uxperience-conference-design-uncharted-tickets-1269729879249?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
          title="Eventbrite Registration"
          className="w-full h-full border-none"
        ></iframe>
      </Suspense>
      <button
        onClick={toggleIframe}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
        aria-label="Close registration form"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  </div>
)}

       <div className="flex flex-col items-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">Title</h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-[600px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="w-full max-w-[1067px] mt-8">
          <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/mMlVFjzoF04"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-16 px-4">
        <div className="w-full max-w-[800px] bg-blue-100 rounded-lg p-8 shadow-lg">
          <AnimatedTestimonialsDemo />
        </div>
        <div className="mt-8 w-full max-w-[600px]">
          <img src="/conferenceschedule.svg" alt="Conference Schedule" className="w-full h-auto object-contain" />
        </div>
      </div>

      <div className="relative">
        <WavyBackgroundDemo />
        <div className="absolute inset-0 flex justify-center items-center z-10" style={{ top: "100px" }}>
          <img
            src="/conferencefooter.svg"
            alt="Conference Footer"
            className="w-[70%] max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </>
  )
}

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Averi has three years of experience and brings firsthand expertise in user-centered design.",
      name: "Averi Collen",
      designation: "UX Researcher at CBRE",
      src: "/averi.png",
    },
    {
      quote:
        "Linh-Hoa has worked on various products (Consumer, B2B, B2C, and internal) at Capital One since 2021. Her design background is in graphic and brand design as shown in her B.A. in Arts, Technology, and Emerging Communication and Minor in Marketing from UT Dallas.",
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
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Preston McCauley",
      designation: "Director of AI and Innovation at Tonic3",
      src: "/preston.jpg",
    },
  ]
  return <AnimatedTestimonials testimonials={testimonials} />
}

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="w-full pb-40 -mb-60">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"></p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"></p>
    </WavyBackground>
  )
}

