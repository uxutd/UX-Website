import Image from "next/image";

import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function AboutPage() {
  const officers = [
    {
      name: "Mariamawit Dabi",
      title: "President",
      img: "/UX_Officers/maryd.png",
      linkedIn: "https://www.linkedin.com/in/mariamawitdabi/",
    },
    {
      name: "Batrisyia Nablan",
      title: "Vice President",
      img: "/UX_Officers/bat.jpg",
      linkedIn: "https://www.linkedin.com/in/aleabatrisyianablan/",
    },
    {
      name: "Bindu Dullur",
      title: "Secretary",
      img: "/UX_Officers/bindud.png",
      linkedIn: "https://www.linkedin.com/feed/foryou/",
    },
  ];

  const officersRowTwo = [
    {
      name: "Kayla Burks",
      title: "Corporate Relations",
      img: "/UX_Officers/kaylab.png",
      linkedIn: "https://www.linkedin.com/in/kayla-burks-8490b8331/",
    },
    {
      name: "Sheryl Gerald",
      title: "Corporate Relations",
      img: "/UX_Officers/sherylg.png",
      linkedIn: "https://www.linkedin.com/in/scgerxld07/",
    },
    {
      name: "Shiloh Asir",
      title: "Student Engagement",
      img: "/UX_Officers/shiloh.png",
      linkedIn: "https://www.linkedin.com/in/shiloh-asir-4ba811406/",
    },
    //{
      //name: "???",
      //title: "Event Coordinator",
      //img: "/UX_Officers/srinaya.svg",
      //linkedIn: "https://www.linkedin.com/in/srinayavemula/",
    //},
  ];

  const officersRowThree = [
    {
      name: "Tanishka Yuvaraj",
      title: "Event Coordinator",
      img: "/UX_Officers/tanishka.jpg",
      linkedIn: "https://www.linkedin.com/in/tanishka-yuvaraj-20a74b383/",
    },
    {
      name: "Muskan Pirani",
      title: "Event Coordinator",
      img: "/UX_Officers/muskan.png",
      linkedIn: "https://www.linkedin.com/in/muskanpirani1/",
    },
    {
      name: "Meghna Mahendran",
      title: "Media Coordinator",
      img: "/UX_Officers/meghna.jpg",
      linkedIn:
        "https://www.linkedin.com/in/meghna-mahendran/",
    },
    {
      name: "Snigdha Mallajosyula",
      title: "Social Media Coordinator",
      img: "/UX_Officers/snigdha.jpg",
      linkedIn: "https://www.linkedin.com/in/snigdha-mallajosyula-a07a8628a/",
    },
  ];

  const officersRowFour = [
    {
      name: "Vidur Nangia",
      title: "Designer",
      img: "/UX_Officers/vidur.png",
      linkedIn: "https://www.linkedin.com/in/vidur-nangia/",
    },
    {
      name: "Tommy Nguyen",
      title: "Designer",
      img: "/UX_Officers/tommy.png",
      linkedIn: "https://www.linkedin.com/in/tommy-nguyen-ba899423a/",
    },
    {
      name: "Emmalyn Ramirez",
      title: "Designer",
      img: "/UX_Officers/emmalynr.png",
      linkedIn: "https://www.linkedin.com/in/emmalynramirez/",
    },
    // {
    //   name: "Priyanka Jidagamu",
    //   title: "Social Media Coordinator",
    //   img: "/UX_Officers/priyanka.svg",
    //   linkedIn: "https://www.linkedin.com/in/priyanka-jidagamu/",
    // },
  ];

  const officersRowFive = [
    // {
    //   name: "Dhurga Venugopal",
    //   title: "Media Coordinator",
    //   img: "/UX_Officers/dhurga.svg",
    //   linkedIn: "https://www.linkedin.com/in/dhurga-venugopal-4b62b42a6/",
    // },
    {
      name: "Andres Ortiz",
      title: "Web Developer",
      img: "/UX_Officers/placeholder.png",
      linkedIn: "https://www.linkedin.com/in/andres-ortiz-758117247/",
    },
    {
      name: "Madailein Quinn",
      title: "Web Developer",
      img: "/UX_Officers/maddy.png",
      linkedIn: "https://www.linkedin.com/in/quinnmadailein/",
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
      name: "Kshitij Kulshrestha",
      title: "Internal Advisor",
      img: "/UX_Officers/kk.svg",
      linkedIn: "https://www.linkedin.com/in/kshitijkulshrestha/",
    },
        {
      name: "Varshni Karthikeyan",
      title: "Advisor",
      img: "/UX_Officers/varshni.svg",
      linkedIn: "https://www.linkedin.com/in/varshnik/",
    },
    {
      name: "Manasa Valluru",
      title: "Advisor",
      img: "/UX_Officers/manasav.svg",
      linkedIn: "https://www.linkedin.com/in/manasa-valluru-28a729201/",
    },
  ];
  const officersRowSeven = [
    {
      name: "Shaz Kumar",
      title: "Advisor",
      img: "/UX_Officers/shaz.jpg",
      linkedIn: "https://www.linkedin.com/in/shaswatkumar1/",
    },

    {
      name: "Hiba Mubeen",
      title: "Advisor",
      img: "/UX_Officers/hiba.svg",
      linkedIn: "https://www.linkedin.com/in/hiba-mubeen/",
    },
    {
      name: "Elise Hart",
      title: "Design Advisor",
      img: "/UX_Officers/elise.svg",
      linkedIn: "https://www.linkedin.com/in/elisech/",
    },
  ];

  const heroWords = ["innovators", "engineers", "designers", "futurists"];

  return (
    <>
      {/* Intro Section */}

      <section className="bg-[#0C1533] text-white flex flex-col items-center justify-center min-h-[60vh] md:min-h-[87.5vh] py-20">
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
            className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center text-center mt-8 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center"
          >
            {officerRow.map((officer, index) => (
              <div
                key={index}
                className="m-2 sm:m-4 relative flex flex-col items-center"
              >
                <div className="off-wrapper grow relative">
                  
                    <Image
                      alt={officer.name}
                      className={`rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover aspect-square ${["tanvi", "shreya", "ananya", "tram", "sally", "rohan"].includes(officer.name.toLowerCase()) ? "object-[top_center]" : ""}`}
                      height={250}
                      src={officer.img}
                      width={250}
                    />
                </div>
                <div className="flex justify-center mt-2">
                  <h3 className="text-sm sm:text-lg font-semibold">
                    {officer.name}
                  </h3>
                </div>
                <h4 className="text-xs sm:text-sm text-center">
                  {officer.title}
                </h4>
                <div className ="off-wrapper grow relative">
                  <a
                      href={officer.linkedIn}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img 
                      src = "../linkedIn.png"
                      className = "justify-center flex w-7 h-7">
                      </img>
                    </a>
                  </div>
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
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center text-center mt-8 ">
          {officersRowSix.map((officer, index) => (
            <div
              key={index}
              className="m-2 sm:m-4 relative flex flex-col items-center "
            >
             
                <Image
                  alt={officer.name}
                  className="rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover aspect-square"
                  height={250}
                  src={officer.img}
                  width={250}
                />
              <h3 className="text-sm sm:text-lg font-semibold mt-2">
                {officer.name}
              </h3>
              <h4 className="text-xs sm:text-sm text-center">
                {officer.title}
              </h4>
              <div className ="off-wrapper grow relative">
                <a
                  href={officer.linkedIn}
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                  <img 
                    src = "../linkedIn.png"
                    className = "justify-center flex w-7 h-7">
                  </img>
                </a>
              </div>
            </div>
          ))}
        {/*officersRowSeven displays the last 3 officers (we have 6 advisors as of S26) */}
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center text-center mt-8 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center">
          {officersRowSeven.map((officer, index) => (
            <div
              key={index}
              className="m-2 sm:m-4 relative flex flex-col items-center"
            >
              
                <Image
                  alt={officer.name}
                  className="rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover aspect-square"
                  height={250}
                  src={officer.img}
                  width={250}
                />
              <h3 className="text-sm sm:text-lg font-semibold mt-2">
                {officer.name}
              </h3>
              <h4 className="text-xs sm:text-sm text-center">
                {officer.title}
              </h4>
                <div className ="off-wrapper grow relative">
                  <a
                      href={officer.linkedIn}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img 
                      src = "../linkedIn.png"
                      className = "justify-center flex w-7 h-7">
                      </img>
                    </a>
                  </div>
            </div>
          ))}
        </section>
        <br />
      </main>
    </>
  );
}
