import { officers, advisors } from "./data";
import { WordRotate } from "@/components/ui/word-rotate";
import OfficerGrid from "./components/OfficerGrid";
import { SectionHeader } from "./components/SectionHeader";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
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
          <div className="flex flex-row gap-2">
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

      {/* About + Team */}
      <main className="w-full px-[5vw] md:px-[10vw]">
        <section className="flex flex-col md:flex-row items-start justify-between gap-8 mt-12 p-6 md:pl-16">
          <div className="w-full md:w-[40%] mb-6 md:mb-0 flex-1">
            <img
              alt="About"
              className="rounded-lg mt-6 w-full h-auto"
              src="/ConferenceAbout.jpg"
            />
          </div>
          <div className="w-full flex-1">
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
        <SectionHeader>Meet the Team!</SectionHeader>
        <OfficerGrid people={officers} />

        <SectionHeader>Meet the Advisors!</SectionHeader>
        <OfficerGrid people={advisors} />
        <br />
      </main>
    </>
  );
}
