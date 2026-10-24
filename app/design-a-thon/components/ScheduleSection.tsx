import type { TScheduleEntry } from "../data";
import { Calendar } from "lucide-react";
import { scheduleData } from "../data";

const src = "/dthon_2026_assets";
const staticSrc = `${src}/static-elements`;
const mobileStaticSrc = `${src}/mobile-static`;
const background_schedule = `${staticSrc}/RulesSection.png`;
const mobile_schedule = `${mobileStaticSrc}/RulesMobile.png`;

function ScheduleEntry({ action, time }: TScheduleEntry) {
  return (
    <div className="schedule-entry flex items-baseline gap-4 md:gap-6 py-3 border-b border-white/10 text-white">
      <p className="w-20 md:w-28 shrink-0 text-xs md:text-sm text-white/40 tabular-nums">
        {time}
      </p>
      <p className="text-sm min-[400px]:text-base md:text-lg">{action}</p>
    </div>
  );
}

const listClass =
  "lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:pr-2 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]";

function ScheduleSection() {
  return (
    <section
      id="schedule-section"
      className="relative isolate min-h-[max(100vh,216.41vw)] md:min-h-screen w-full flex justify-center items-center"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile_schedule} />
        <img
          src={background_schedule}
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-top pointer-events-none"
        />
      </picture>

      <div className="w-full max-w-5xl mx-auto lg:h-svh flex flex-col items-center gap-10 md:gap-12 px-6 py-20 md:py-24">
        <h1 className="text-white font-light text-3xl min-[400px]:text-4xl md:text-[48px]">
          {scheduleData.title}
        </h1>
        <div className="w-full lg:flex-1 lg:min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10">
          <div className="schedule-col flex flex-col gap-4 lg:min-h-0">
            <div className="flex flex-row items-center justify-center gap-3 pb-2 text-white/80 text-2xl md:text-[32px] font-light">
              <Calendar size={24} />
              <p>Day One</p>
            </div>
            <div className={listClass}>
              {scheduleData.day_one_entries?.map((item, i) => (
                <ScheduleEntry key={i} {...item} />
              ))}
            </div>
          </div>
          <div className="schedule-col flex flex-col gap-4 lg:min-h-0">
            <div className="flex flex-row items-center justify-center gap-3 pb-2 text-white/80 text-2xl md:text-[32px] font-light">
              <Calendar size={24} />
              <p>Day Two</p>
            </div>
            <div className={listClass}>
              {scheduleData.day_two_entries?.map((item, i) => (
                <ScheduleEntry key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ScheduleSection };
