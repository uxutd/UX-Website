"use client";

import React, { useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
    Box,
    Card,
    CardMedia,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export default function ConferencePage() {
    const [showIframe, setShowIframe] = useState(false);

    const toggleIframe = () => {
        setShowIframe(!showIframe);
    };

    return (
        <>
            <section className="text-white flex flex-col items-center justify-center min-h-screen md:min-h-[95vh] py-20 bg-cover bg-center" style={{ backgroundImage: "url('/finalmap.svg')" }}>
                <div className="scale-90 transform">
                    <div className="relative">
                        <img
                            src="/paperhero.png"
                            alt="Hero Image"
                            className="max-w-[100%] h-auto w-full md:max-w-[600px] lg:max-w-[1000px] mx-auto transform translate-y-1/8"
                        />
                        {/* Design image positioned absolutely above the title */}
                        <img
                            src="/design.svg"
                            alt="Design"
                            className="absolute w-[40%] max-w-[400px] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                        {/* Uncharted title image positioned absolutely in the middle */}
                        <img
                            src="/uncharted.svg"
                            alt="Uncharted Title"
                            className="absolute w-[70%] max-w-[500px] top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                        {/* Ticket image positioned absolutely */}
                        <img
                            src="/ticket.svg"
                            alt="Ticket"
                            className="absolute w-[40%] max-w-[600px] -bottom-[5%] left-[-20px] transform translate-y-1/4"
                        />
                        <img
                            src="/tape.svg"
                            alt="Tape"
                            className="absolute w-[40%] max-w-[200px] top-[-40px] right-0 transform -translate-y-1/12 translate-x-1/4"
                        />
                        {/* Path image positioned as a dotted line between Uncharted and Location */}
                        <img
                            src="/path.png"
                            alt="Path"
                            className="absolute w-[8%] max-w-[100px] top-[70%] left-[82%] transform -translate-x-1/2 rotate-[8deg]"
                        />
                        {/* Location image moved further down */}
                        <img
                            src="/location.svg"
                            alt="Loc"
                            className="rotate-[8deg] absolute w-[10%] max-w-[200px] bottom-[15px] right-[7%] transform translate-y-1/8 translate-x-1/4"
                        />
                        <a
                            onClick={toggleIframe}
                            className="absolute w-[35%] max-w-[550px] -bottom-[8.5%] right-[2%] transform translate-y-1/8 translate-x-1/4 transition-transform duration-300 hover:scale-105 cursor-pointer"
                        >
                            <img
                                src="/register.png"
                                alt="Register"
                                className="w-full h-auto"
                            />
                        </a>
                    </div>
                </div>
            </section>
            {showIframe && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-[90%] max-w-[800px] h-[80%] bg-white rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.eventbrite.com/e/uxperience-conference-design-uncharted-tickets-1269729879249?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                            title="Eventbrite Registration"
                            className="w-full h-full border-none"
                        ></iframe>
                        <button
                            onClick={toggleIframe}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
            <div className="flex flex-col md:flex-row items-start justify-start my-10">
                <img
                    src="/conferenceschedule.svg"
                    alt="Conference Schedule"
                    className="w-[60%] max-w-400px] h-auto"
                />
                <div className="flex flex-col w-[35%] max-w-[400px] ml-0 mt-12">
                    <h1 className="text-6xl font-bold text-blue-500">
                        Title
                    </h1>
                    <p className="mt-9 text-2xl text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div style={{ height: "1200px" }}></div>
            <div className="flex flex-col items-center my-10">
                <div
                    className="w-full scale-125 transform"
                    style={{
                        backgroundColor: "#d9f0ff",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: "8px",
                        padding: "20px",
                    }}
                >
                    <AnimatedTestimonialsDemo />
                </div>
            </div>
            <div className="relative">
                <WavyBackgroundDemo />
                <div className="absolute inset-0 flex justify-center items-center z-10" style={{ top: "100px" }}>
                    <img
                        src="/conferencefooter.svg"
                        alt="Conference Footer"
                        className="w-[70%] max-w-[100%] h-auto"
                    />
                </div>
            </div>
        </>
    );
}

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Averi Collen",
            designation: "UX Researcher at CBRE",
            src: "/averi.png",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
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
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "Everett Swain",
            designation: "AI Experience Designer at Guardian Life",
            src: "/everett.jpg",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Preston McCauley",
            designation: "Director of AI and Innovation at Tonic3",
            src: "/preston.jpg",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}

import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="w-full pb-40 -mb-60">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          </p>
        </WavyBackground>
      );
}
