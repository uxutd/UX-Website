import Image from "next/image";

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
      name: "Officer 2",
      title: "Vice President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer2/",
    },
    {
      name: "Officer 3",
      title: "Secretary",
      img: "/officer3.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer3/",
    },
    {
      name: "Officer 4",
      title: "Treasurer",
      img: "/officer4.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer4/",
    },
  ];

  const officersRowTwo = [
    {
      name: "Officer 5",
      title: "Event Coordinator",
      img: "/officer5.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer5/",
    },
    {
      name: "Officer 6",
      title: "PR Lead",
      img: "/officer6.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer6/",
    },
    {
      name: "Officer 7",
      title: "Corporate Relations",
      img: "/officer7.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer7/",
    },
    {
      name: "Officer 8",
      title: "Web Developer",
      img: "/officer8.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer8/",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="bg-[#0C1533] text-white flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 text-center flex flex-col justify-center items-center h-full h-[80vh]">
          <h1 className="text-6xl font-semibold leading-tight mb-2">
            Behind the pretty interfaces,
          </h1>
          <h2 className="text-3xl font-semibold mt-2">
            We are <span className="text-[#3E68FD]">innovators</span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl w-full">
            The UX Club at UT Dallas has been around since 2014 with the mission to
            spread awareness about user-centered design.
          </p>
        </div>
      </section>

      {/* About Section */}
      <main className="px-[10vw]">
        <section className="flex flex-col md:flex-row items-start justify-between mt-12 p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#253B75] to-[#0C1533] w-[451px] h-[230px] rounded-lg absolute top-10 left-8 z-0" />
              <Image
                alt="About"
                className="rounded-lg relative z-10"
                height={367}
                src="/AboutPic.png"
                width={451}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <p className="text-lg leading-relaxed">
              User experience is for{" "}
              <span className="text-[#3E68FD]">everyone</span>, encompassing
              multiple disciplines such as design, research, psychology, and more
              to achieve a user-friendly product.
              <br />
              <br />
              At UX Club UTD, we teach how to blend empathy, art, and software to{" "}
              <span className="text-[#3E68FD]">design the future</span>.
            </p>
          </div>
        </section>

        {/* Meet the Team Header */}
        <section className="w-full flex justify-center mt-16">
          <BlurFade>
            <div className="py-8">
              <WordPullUp
                className="tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9 text-center"
                words="Meet the team!"
              />
            </div>
          </BlurFade>
        </section>

        {/* Officers Section */}
        <section className="flex flex-wrap justify-center mt-8">
          {officers.map((officer, index) => (
            <div key={index} className="m-3">
              <div className="officer-wrapper grow relative">
                <Image
                  alt={officer.name}
                  className="rounded-lg transition-opacity duration-300 hover:opacity-50"
                  height={250}
                  src={officer.img}
                  width={250}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <a
                    className="fab fa-linkedin text-white text-2xl"
                    href={officer.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-xl">{officer.name}</p>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Second Row of Officers */}
        <section className="flex flex-wrap justify-center mt-8">
          {officersRowTwo.map((officer, index) => (
            <div key={index} className="m-3">
              <div className="officer-wrapper grow relative">
                <Image
                  alt={officer.name}
                  className="rounded-lg transition-opacity duration-300 hover:opacity-50"
                  height={250}
                  src={officer.img}
                  width={250}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <a
                    className="fab fa-linkedin text-white text-2xl"
                    href={officer.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-xl">{officer.name}</p>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
