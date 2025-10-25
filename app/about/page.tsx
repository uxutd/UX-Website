import Image from "next/image";

import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function AboutPage() {
  const officers = [
    {
      name: "Vaishali Sathiyachalam",
      title: "President",
      img: "/UX_Officers/vai.svg",
      linkedIn: "https://www.linkedin.com/in/vaishali-sathiyachalam/",
    },
    {
      name: "Sally Nguyen",
      title: "Vice President",
      img: "/UX_Officers/sally.svg",
      linkedIn: "https://www.linkedin.com/in/an-nguyen-tran/",
    },
    {
      name: "Rohan Cheruku",
      title: "Secretary",
      img: "/UX_Officers/rohan.svg",
      linkedIn: "https://www.linkedin.com/in/rohancheruku/",
    },
    {
      name: "Hiba Mubeen",
      title: "Marketing Director",
      img: "/UX_Officers/hiba.svg",
      linkedIn: "https://www.linkedin.com/in/hiba-mubeen/",
    },
  ];

  const officersRowTwo = [
    {
      name: "Aakriti Ramakrishnan",
      title: "Finance",
      img: "/UX_Officers/aakriti.svg",
      linkedIn: "https://www.linkedin.com/in/aakritiramakrishnan/",
    },
    {
      name: "Ankiita Murali",
      title: "Finance",
      img: "/UX_Officers/ankiita.svg",
      linkedIn: "https://www.linkedin.com/in/ankiita-murali/",
    },
    {
      name: "Ananya Singamsetty",
      title: "Event Coordinator",
      img: "/UX_Officers/ananya.svg",
      linkedIn: "https://www.linkedin.com/in/ananyasingamsetty/",
    },
    {
      name: "Sumayya Ali",
      title: "Event Coordinator",
      img: "/UX_Officers/sumayya.svg",
      linkedIn: "https://www.linkedin.com/in/sumayyaali04/",
    },
  ];

  const officersRowThree = [
    {
      name: "Sarah Zaki",
      title: "Corporate Relations",
      img: "/UX_Officers/sarah.svg",
      linkedIn: "https://www.linkedin.com/in/sarah-zaki1/",
    },
    {
      name: "Srinaya Vemula",
      title: "Corporate Relations",
      img: "/UX_Officers/srinaya.svg",
      linkedIn: "https://www.linkedin.com/in/srinayavemula/",
    },
    {
      name: "Alfredo Ayala",
      title: "Student Engagement",
      img: "/UX_Officers/alfredo.svg",
      linkedIn:
        "https://www.linkedin.com/in/alfredo-ayala-64646464646464646464/",
    },
    {
      name: "Aryan KC",
      title: "Student Engagement",
      img: "/UX_Officers/aryan.svg",
      linkedIn: "https://www.linkedin.com/in/aryankc/",
    },
  ];

  const officersRowFour = [
    {
      name: "Elise Hart",
      title: "Designer",
      img: "/UX_Officers/elise.svg",
      linkedIn: "https://www.linkedin.com/in/elisech/",
    },
    {
      name: "Vidur Nangia",
      title: "Designer",
      img: "/UX_Officers/vidur.svg",
      linkedIn: "https://www.linkedin.com/in/vidur-nangia/",
    },
    {
      name: "Chris Tran",
      title: "Designer",
      img: "/UX_Officers/chris.svg",
      linkedIn: "https://www.linkedin.com/in/christopherthanhtran/",
    },
    {
      name: "Priyanka Jidagamu",
      title: "Social Media Coordinator",
      img: "/UX_Officers/priyanka.svg",
      linkedIn: "https://www.linkedin.com/in/priyanka-jidagamu/",
    },
  ];

  const officersRowFive = [
    {
      name: "Dhurga Venugopal",
      title: "Media Coordinator",
      img: "/UX_Officers/dhurga.svg",
      linkedIn: "https://www.linkedin.com/in/dhurga-venugopal-4b62b42a6/",
    },
    {
      name: "Bennett Feigenbaum",
      title: "Web Developer",
      img: "/UX_Officers/bennett.svg",
      linkedIn: "https://www.linkedin.com/in/bennettfeigenbaum/",
    },
    {
      name: "Mariamawit Dabi",
      title: "Web Developer",
      img: "/UX_Officers/mary.svg",
      linkedIn: "https://www.linkedin.com/in/mariamawitdabi/",
    },
  ];
  const officersRowSix = [
    {
      name: "Mani Vipat",
      title: "Chief of Internal Affairs",
      img: "/UX_Officers/mani.svg",
      linkedIn: "https://www.linkedin.com/in/manasivipat/",
    },
    {
      name: "Manasa Valluru",
      title: "Advisor",
      img: "/UX_Officers/manasav.svg",
      linkedIn: "https://www.linkedin.com/in/manasa-valluru-28a729201/",
    },
    {
      name: "Kshitij Kulshrestha",
      title: "Advisor",
      img: "/UX_Officers/kk.svg",
      linkedIn: "https://www.linkedin.com/in/kshitijkulshrestha/",
    },
    {
      name: "Shaz Kumar",
      title: "Advisor",
      img: "/UX_Officers/shaz.jpg",
      linkedIn: "https://www.linkedin.com/in/shaswatkumar1/",
    },
    {
      name: "Varshni Karthikeyan",
      title: "Advisor",
      img: "/UX_Officers/varshni.svg",
      linkedIn: "https://www.linkedin.com/in/varshnik/",
    },
  ];

  const heroWords = ["innovators", "engineers", "designers", "futurists"];

  return (
    <>
      {/* Intro Section */}

      <section className="bg-[#0C1533] text-white flex flex-col items-center justify-center min-h-screen md:min-h-[87.5vh] py-20">
        <div className="container mx-auto px-4 md:px-36 flex flex-col justify-center h-full animate-slide-in">
          <h1
            className="text-4xl md:text-[4.375rem] font-semibold leading-tight mb-0"
            style={{ wordSpacing: "0.25rem" }}
          >
            Behind the pretty
          </h1>
          <h1
            className="text-4xl md:text-[4.375rem] font-semibold leading-tight mb-0"
            style={{ wordSpacing: "0.65rem" }}
          >
            interfaces,
          </h1>
          <div className="inline-block flex flex-row gap-2">
            <h2 className="text-2xl md:text-[1.575rem] mt-2 inline-block">
              We are
            </h2>
            <WordRotate
              className="text-2xl md:text-[1.575rem] text-[#3E68FD] p-0 m-0 inline-block gap-1"
              words={[
                "innovators",
                "researchers",
                "designers",
                "collaborators",
                "curators",
                "storytellers",
                "developers",
              ]}
            />
          </div>
          <p className="mt-4 w-full text-lg md:text-[1.625rem] font-extralight leading-tight">
            The UX Club at UT Dallas has been around since 2014 with the
          </p>
          <p className="mt-4 text-lg md:text-[1.625rem] w-full mb-1 font-extralight leading-tight">
            mission to spread awareness about user-centered design
          </p>
          <p className="mt-4 text-lg md:text-[1.625rem] w-full mb-1 font-extralight leading-tight">
            and development.
          </p>
        </div>
      </section>

      {/* About Section */}
      <main className="px-[5vw] md:px-[10vw]">
        <section className="flex flex-col md:flex-row items-start justify-between gap-8 mt-12 p-6 md:pl-16">
          {/* Image Section */}
          <div className="w-full md:w-[40%] mb-6 md:mb-0 flex-1">
            <img
              alt="About"
              className="rounded-lg mt-6 w-full h-auto"
              src="/ConferenceAbout.jpg"
              style={{ height: "300px", width: "450px", objectFit: "cover" }}
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[60%] lg:w-[65%] pr-12 md:pr-16 lg:pr-24 flex-1">
            <p className="text-lg leading-relaxed mt-4">
              User experience is for{" "}
              <span className="text-[#3E68FD]">everyone</span>, encompassing
              multiple disciplines such as design, research, psychology,
              business analytics, and more to achieve a user-friendly product.
              <br />
              <br />
              User experience is a connecting experience. Here at UX Club UTD we
              give you the resources to bring client and concepts together. We
              teach you how to blend empathy, art, and software. We teach you
              how to <span className="text-[#3E68FD]">design the future</span>.
            </p>
          </div>
        </section>

        {/* Meet the Team Header */}
        <section className="w-full flex justify-center mt-10">
          <BlurFade>
            <div className="py-8">
              <AnimatedGradientText>
                <span className="tracking-tight inline font-semibold text-[2rem] md:text-[2.3rem] lg:text-5xl leading-9 text-center inline animate-gradient bg-gradient-to-r from-[#253B75] via-[#3E68FD] to-[#253B75] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Meet the Team!
                </span>
              </AnimatedGradientText>
            </div>
          </BlurFade>
        </section>

        {/* Officers Sections */}
        {[
          officers,
          officersRowTwo,
          officersRowThree,
          officersRowFour,
          officersRowFive,
        ].map((officerRow, rowIndex) => (
          <section
            key={rowIndex}
            className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center text-center mt-8"
          >
            {officerRow.map((officer, index) => (
              <div
                key={index}
                className="m-2 sm:m-4 relative flex flex-col items-center"
              >
                <div className="off-wrapper grow relative">
                  <a
                    href={officer.linkedIn}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={officer.name}
                      className={`rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover aspect-square ${["tanvi", "shreya", "ananya", "tram", "sally", "rohan"].includes(officer.name.toLowerCase()) ? "object-[top_center]" : ""}`}
                      height={250}
                      src={officer.img}
                      width={250}
                    />
                  </a>
                </div>
                <div className="flex justify-center mt-2">
                  <h3 className="text-sm sm:text-lg font-semibold">
                    {officer.name}
                  </h3>
                </div>
                <h4 className="text-xs sm:text-sm text-center">
                  {officer.title}
                </h4>
              </div>
            ))}
          </section>
        ))}

        {/* Add "Meet the Advisors" header right after row five */}
        <section className="w-full flex justify-center mt-10">
          <BlurFade>
            <div className="py-8">
              <AnimatedGradientText>
                <span className="tracking-tight inline font-semibold text-[2rem] md:text-[2.3rem] lg:text-5xl leading-9 text-center inline animate-gradient bg-gradient-to-r from-[#253B75] via-[#3E68FD] to-[#253B75] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Meet the Advisors!
                </span>
              </AnimatedGradientText>
            </div>
          </BlurFade>
        </section>

        {/* Continue with the next row (Advisors) (officersRowSix is down here instead of in the array since it is separated by "Meet the Advisors") */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center text-center mt-8">
          {officersRowSix.map((officer, index) => (
            <div
              key={index}
              className="m-2 sm:m-4 relative flex flex-col items-center"
            >
              <a
                href={officer.linkedIn}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={officer.name}
                  className="rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover aspect-square"
                  height={250}
                  src={officer.img}
                  width={250}
                />
              </a>
              <h3 className="text-sm sm:text-lg font-semibold mt-2">
                {officer.name}
              </h3>
              <h4 className="text-xs sm:text-sm text-center">
                {officer.title}
              </h4>
            </div>
          ))}
        </section>
        <br />
      </main>
    </>
  );
}
