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
      title: "Marketing Director",
      img: "/officer4.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer4/",
    },
  ];

  const officersRowTwo = [
    {
      name: "Officer 5",
      title: "Director",
      img: "/officer5.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer5/",
    },
    {
      name: "Officer 6",
      title: "Treasurer",
      img: "/officer6.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer6/",
    },
    {
      name: "Officer 7",
      title: "Logistics Coordinator",
      img: "/officer7.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer7/",
    },
    {
      name: "Officer 8",
      title: "Social Media Coordinator",
      img: "/officer8.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer8/",
    },
  ];

  const officersRowThree = [
    {
      name: "Officer 5",
      title: "Student Engagement",
      img: "/officer5.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer5/",
    },
    {
      name: "Officer 6",
      title: "Event Coordinator",
      img: "/officer6.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer6/",
    },
    {
      name: "Officer 7",
      title: "Event Coordinator",
      img: "/officer7.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer7/",
    },
    {
      name: "Officer 8",
      title: "Corporate Relations",
      img: "/officer8.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer8/",
    },
  ];

  const officersRowFour = [
    {
      name: "Officer 5",
      title: "Corporate Relations",
      img: "/officer5.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer5/",
    },
    {
      name: "Officer 6",
      title: "Designer",
      img: "/officer6.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer6/",
    },
    {
      name: "Officer 7",
      title: "Designer",
      img: "/officer7.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer7/",
    },
    {
      name: "Officer 8",
      title: "Designer",
      img: "/officer8.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer8/",
    },
  ];

  const officersRowFive = [
    {
      name: "Officer 5",
      title: "Designer Coordinator",
      img: "/officer5.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer5/",
    },
    {
      name: "Officer 6",
      title: "Web Developer",
      img: "/officer6.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer6/",
    },
    {
      name: "Officer 7",
      title: "Event Coordinator",
      img: "/officer7.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer7/",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="bg-[#0C1533] text-white flex flex-col items-center justify-center h-[600px] md:h-[870px]">
        <div className="container mx-auto px-4 md:px-36 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-[4.375rem] font-semibold leading-tight mb-0  " style={{ wordSpacing: '0.65rem' }}>
            Behind the pretty
          </h1>
          <h1 className="text-4xl md:text-[4.375rem] font-semibold leading-tight mb-0" style={{ wordSpacing: '0.75rem' }}>
            interfaces,
          </h1>
          
          <h2 className="text-2xl md:text-[1.875rem] mt-2">
            We are <span className="text-[#3E68FD]">innovators</span>
          </h2>
          <p className="mt-4 w-full text-lg md:text-[1.625rem] font-extralight leading-tight">
            The UX Club at UT Dallas has been around since 2014 with the
          </p>
          <p className="mt-4 text-lg md:text-[1.625rem] w-full mb-1 font-extralight leading-tight">
            mission to spread awareness about user-centered design
          </p>
          <p className="mt-4 text-lg md:text-[1.625rem] w-full mb-1 font-extralight leading-tight">
            & development.
          </p>
        </div>
      </section>


      {/* About Section */}
      {/* About Section */}
      <main className="px-[5vw] md:px-[10vw]">
      <section className="flex flex-col md:flex-row items-start justify-between gap-8 mt-12 p-6 md:pl-16">
        
        {/* Image Section */}
        <div className="w-full md:w-[40%] mb-6 md:mb-0 flex-1">
          <div className="relative">
            
            {/* <div className="bg-gradient-to-r from-[#253B75] to-[#0C1533] w-[450px] h-[230px] rounded-lg absolute top-4 left-4 md:left-8 z-0" />*/}
            
              {/* Image */}
              <Image
                alt="About"
                className="absolute rounded-lg relative z-10 mt-6 flex-1"
                height={230}  
                width={450}  
                objectFit="cover"  
                src="/AboutPic.png"
              />

          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[60%] lg:w-[65%] pr-12 md:pr-16 lg:pr-24 flex-1">
          <p className="text-lg leading-relaxed mt-4">
            User experience is for <span className="text-[#3E68FD]">everyone</span>, encompassing multiple disciplines such as design, research, psychology,
            business analytics, and more to achieve a user-friendly product.
            <br /><br />
            User experience is a connecting experience. Here at UX Club UTD we give you the resources to bring client and concepts together. We teach you how to blend empathy, art, and software. We teach you how to <span className="text-[#3E68FD]">design the future</span>.
          </p>
        </div>
      </section>




        {/* Meet the Team Header */}
        <section className="w-full flex justify-center mt-16">
          <BlurFade>
            <div className="py-8">
              <WordPullUp
                className="tracking-tight inline font-semibold text-[2rem] md:text-[2.3rem] lg:text-5xl leading-9 text-center"
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
                <p className="font-bold text-lg md:text-xl">{officer.name}</p>
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
                <p className="font-bold text-lg md:text-xl">{officer.name}</p>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-wrap justify-center mt-8">
          {officersRowThree.map((officer, index) => (
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
                <p className="font-bold text-lg md:text-xl">{officer.name}</p>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-wrap justify-center mt-8">
          {officersRowFour.map((officer, index) => (
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
                <p className="font-bold text-lg md:text-xl">{officer.name}</p>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-wrap justify-center mt-8">
          {officersRowFive.map((officer, index) => (
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
                <p className="font-bold text-lg md:text-xl">{officer.name}</p>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </div>
          ))}
        </section>
        <br /><br />
        <br /><br />
      </main>
    </>
  );
}
