import { mentorData } from "../data";
import type { IMentorProps } from "../data";
import { JellyfishSvg } from "./SVGAssets";

type TMentor = IMentorProps["mentors"][number];

const headshotSrc = "/dthon_2026_assets/mentor-headshots";

const jellies = [
  { x: "2%", y: "6%", size: 110, rotate: -12, color: "#C9B8E8" },
  { x: "70%", y: "90%", size: 90, rotate: 8, color: "#9FB4E0" },
  { x: "6%", y: "72%", size: 36, rotate: -6, color: "#E3B778" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

function MentorCard({ name, role, company, headshot }: TMentor) {
  return (
    <div className="mentor-card group flex flex-col items-center gap-4 px-6 py-8 rounded-2xl border border-white/20 bg-white/5 text-white text-center transition-colors duration-300 hover:bg-white/10 hover:border-white/40">
      <div className="mentor-bubble relative w-20 h-20 rounded-full flex items-center justify-center border border-white/30 bg-white/5 overflow-hidden">
        {headshot ? (
          <img
            src={`${headshotSrc}/${headshot}.webp`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span className="text-2xl tracking-wide">{initials(name)}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-lg md:text-xl">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
        {company && (
          <p className="text-xs uppercase tracking-widest text-[#3AAFC4]">
            {company}
          </p>
        )}
      </div>
    </div>
  );
}

export function MentorsSection() {
  return (
    <section
      id="mentors-section"
      className="relative w-full max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center gap-12 px-6 py-24"
    >
      {jellies.map((j, i) => (
        <JellyfishSvg key={i} {...j} />
      ))}

      <h1 className="relative z-10 text-white font-light text-4xl md:text-[48px]">
        {mentorData.title}
      </h1>
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentorData.mentors.map((m, i) => (
          <MentorCard key={i} {...m} />
        ))}
      </div>
    </section>
  );
}
