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

// Components
function HeroSection({ title, date, checkInTime }: IHeroProps) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="uppercase">{title}</h1>
      <div className="flex flex-col items-center gap-2">
        <p>{date}</p>
        <p>Check-in @{checkInTime}</p>
        <button className="w-[280px] min-h-[45px]">Sign Up</button>
      </div>
    </div>
  );
}

function AboutCardSection({ title, description }: IAboutProps) {
  return (
    <div className="w-[90%] max-w-[980px] mx-auto flex flex-col items-center gap-6 p-6 text-center">
      <h1>{title}</h1>
      <p className="max-w-3xl">{description}</p>
    </div>
  );
}

function FirstDraftSection({ title, stats }: IFirstDraftProps) {
  return (
    <div className="w-full max-w-sm flex flex-col gap-2 p-6">
      <h1>{title}</h1>
      <ul className="flex flex-col gap-1">
        {stats?.map((item, i) => (
          <li key={i}>{item}</li>
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
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-6 px-6 py-8 text-center">
      <h1>{title}</h1>
      {subheadline && <h2 className="max-w-2xl">{subheadline}</h2>}
      <div className="w-full flex flex-row justify-center gap-6 mt-4">
        {cards?.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            {item.img_src && (
              <img
                alt={item.name}
                className="w-full h-auto"
                src={item.img_src}
              />
            )}
            <p>{item.name}</p>
            {item.work_position && <p>{item.work_position}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduleEntry({ action, location }: TScheduleEntry) {
  return (
    <div className="w-full flex flex-col gap-1 p-4">
      <p>{action}</p>
      <p>{location}</p>
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
      <h1>{title}</h1>
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <div className="w-full flex flex-col gap-4">
          {day_one_entries?.map((item, i) => (
            <ScheduleEntry key={i} {...item} />
          ))}
        </div>
        <div className="w-full flex flex-col gap-4">
          {day_two_entries?.map((item, i) => (
            <ScheduleEntry key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
// Main Page

function page() {
  return (
    <section className="text-black flex flex-col items-center justify-center min-h-screen md:min-h-[100vh] py-20 bg-cover bg-center scale-100 bg-linear-to-r from-linear-first to-linear-second">
      <HeroSection {...heroData} />
      <AboutCardSection {...aboutData} />
      <FirstDraftSection {...firstDraftData} />
      <MeetSpeakersSection {...meetSpeakerData} />
      <ScheduleSection {...scheduleData} />
    </section>
  );
}

export default page;
