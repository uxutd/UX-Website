import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { subtitle } from "@/components/primitives";
import { Card, CardContent } from "@/components/ui/card";
import { title } from "@/components/primitives";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import BlurFade from "@/components/magicui/blur-fade";

export default function AboutPage() {
  const officers = [
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
  ];
  const officersRowTwo = [
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
  ];

  return (

    <div className="bg-white overflow-hidden mx-0 px-0 min-w-screen min-h-screen">
      {/* Blue section limited to 800px in height */}
      <div className="bg-[#0C1533] w-full h-[800px]">
        <section className="flex flex-col items-start justify-center gap-4 text-white w-full h-full p-6">
          <div className="w-full mb-6">
            <h1 className="text-6xl font-semibold">Behind the pretty</h1>
            <h1 className="text-6xl font-semibold">interfaces</h1>
            <h2 className="font-semibold text-3xl leading-12 mt-2">
              We are <span className="text-[#3E68FD]">innovators</span>
            </h2>
            <p className="text-xl max-w-xl mt-1">
              The UX Club at UT Dallas has been around since 2014 with the mission to spread awareness about user-centered design around UT Dallas.
            </p>
          </div>
        </section>
      </div>


      {/* Row section with image and text side-by-side */}
      <div className="flex flex-wrap items-start justify-between mt-12 p-6">
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* The background rectangle */}
            <div className="bg-gradient-to-r from-[#253B75] to-[#0C1533] w-[451px] h-[230px] rounded-lg absolute top-10 left-8 z-0"></div>

            {/* The AboutPic PNG on top */}
            <Image
              src="/AboutPic.png"
              alt="About"
              width={451}
              height={367}
              className="rounded-lg relative z-10"
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          
          <p className="text-lg leading-relaxed mt-4">
            User experience is for <span className="text-[#3E68FD]">everyone</span>, encompassing multiple disciplines such as design, research, psychology,
            business analytics, and more to achieve a user-friendly product.
            <br /><br />
            User experience is a connecting experience. Here at UX Club UTD we give you the resources to bring client and concepts together. We teach you how to blend empathy, art, and software. We teach you how to <span className="text-[#3E68FD]">design the future</span>.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <BlurFade>
          <div className="py-8">
            <WordPullUp
              className="tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9 items-center justify-center w-full max-w-3xl text-center"
              words="Meet the team!"
            />
          </div>
        </BlurFade>
      </div>
      
    
      {/* Officers Section */}
      <div className="flex flex-wrap justify-center">
        {officers.map((officer, index) => (
          <div key={index} className="m-3 align-self-center">
            <div className="position-relative officer-wrapper grow ">
              <Image
                src={officer.img}
                alt={officer.name}
                width={250}
                height={250}
                className="rounded-lg transition-opacity duration-300 hover:opacity-50-lg"
              />
              <div className="external-links">
                <a href={officer.linkedIn} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="officer-description mt-2">
              <span>
                <p className="font-bold text-xl text-center">{officer.name}</p>
                <p className="text-sm text-gray-85 text-center">{officer.title}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        {officersRowTwo.map((officer, index) => (
          <div key={index} className="m-3 align-self-center">
            <div className="position-relative officer-wrapper grow">
              <Image
                src={officer.img}
                alt={officer.name}
                width={250}
                height={250}
                style={{
                  transition: 'filter 0.3s ease', // Smooth transition
                }}
                className="hoverEffect rounded-lg" 
                
              />
              
              <div className="external-links">
                <a href={officer.linkedIn} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="officer-description mt-2">
              <span>
                <p className="font-bold text-xl justify-center text-center">{officer.name}</p>
                <p className="text-sm text-gray-85 text-center">{officer.title}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <br />

    </div>
  );
}
