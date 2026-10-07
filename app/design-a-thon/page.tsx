import { Calendar, User2 } from "lucide-react";
import {
  heroData,
  aboutData,
  firstDraftData,
  meetSpeakerData,
  scheduleData,
} from "./data";
import type {
  IHeroProps,
  IAboutProps,
  IFirstDraftProps,
  IMeetSpeakersProps,
  IScheduleProps,
  TScheduleEntry,
} from "./data";

import { Cantora_One } from "next/font/google";

const cantora = Cantora_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantora",
});

// Components
function HeroSection({ title, date, checkInTime }: IHeroProps) {
  return (
    <div className="text-[#02367B] w-full min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="uppercase text-8xl">{title}</h1>
      <div className="flex flex-col items-center gap-2 text-4xl">
        <p>{date}</p>
        <p className="flex flex-row items-center">Check-in @ {checkInTime}</p>
      </div>
    </div>
  );
}

function AboutCardSection({ title, description }: IAboutProps) {
  return (
    <div className="w-full h-auto max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 bg-white rounded-3xl">
      <div className="h-[780] bg-zinc-100 rounded-3xl" />
      <div className="flex flex-col items-start gap-6 min-w-0">
        <h1 className="text-[#41BAD0] text-6xl">{title}</h1>
        <p className="text-3xl text-left whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}

function FirstDraftSection({ title, stats }: IFirstDraftProps) {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-6 p-6 text-white">
      <h1 className="text-6xl">{title}</h1>
      <ul className="flex flex-col items-center gap-2">
        {stats?.map((item, i) => (
          <li className="text-3xl" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MeetSpeakersSection({
  title,
  subheadline,
  cards,
}: IMeetSpeakersProps) {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 p-6 text-center text-white">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl">{title}</h1>
        {subheadline && <h2 className="max-w-2xl text-2xl">{subheadline}</h2>}
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {cards?.map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[300px] h-[420px] flex flex-col overflow-hidden bg-white text-black rounded-3xl shadow-lg"
          >
            <div className="h-2/3 shrink-0 flex items-center justify-center bg-zinc-100">
              {item.img_src ? (
                <img
                  alt={item.name}
                  className="w-full h-full object-cover"
                  src={item.img_src}
                />
              ) : (
                <User2 size={72} className="text-zinc-400" />
              )}
            </div>
            <div className="h-1/3 flex flex-col items-center justify-center gap-1 px-2">
              <p className="text-xl">{item.name}</p>
              {item.work_position && (
                <p className="text-lg text-zinc-600">{item.work_position}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduleEntry({ action, location }: TScheduleEntry) {
  return (
    <div className="w-full h-full max-h-[102px] flex flex-col gap-1 p-4 bg-white text-black rounded-3xl">
      <p className="text-2xl font-bold">{action}</p>
      <p className="text-xl text-black/80">
        {location == "" ? "Any Room" : location}
      </p>
    </div>
  );
}

function ScheduleSection({
  title,
  day_one_entries,
  day_two_entries,
}: IScheduleProps) {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 px-6 py-24">
      <h1 className="text-white text-6xl">{title}</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="w-full flex flex-col items-center text-4xl gap-4 text-white font-bold">
            <Calendar size={36} />
            <p>Day One</p>
          </div>
          {day_one_entries?.map((item, i) => (
            <ScheduleEntry key={i} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-full flex flex-col items-center text-4xl gap-4 text-white font-bold">
            <Calendar size={36} />
            <p>Day Two</p>
          </div>
          {day_two_entries?.map((item, i) => (
            <ScheduleEntry key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Page

function Water() {
  return (
    <div
      className="absolute inset-0 flex flex-col pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="block w-full h-40 shrink-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#55E3EA"
          d="M0,160 C240,0 480,0 720,160 S1200,320 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
      <div className="flex-1 -mt-px bg-[linear-gradient(to_bottom,#55E3EA_0%,#02367B_46%,#072657_56%,#0C1533_69%,#000000_89%)]" />
    </div>
  );
}

function page() {
  return (
    <section
      className={`${cantora.className} shrink-0 text-black flex flex-col items-center min-h-screen pt-20 bg-gradient-to-b from-[#dafbff] to-[#ffd889]`}
    >
      <HeroSection {...heroData} />
      <div className="relative w-full">
        <Water />
        <div className="relative z-10 flex flex-col items-center pt-[500px] pb-64 gap-[300px]">
          <AboutCardSection {...aboutData} />
          <FirstDraftSection {...firstDraftData} />
          <MeetSpeakersSection {...meetSpeakerData} />
          <ScheduleSection {...scheduleData} />
        </div>
      </div>
    </section>
  );
}

export default page;
