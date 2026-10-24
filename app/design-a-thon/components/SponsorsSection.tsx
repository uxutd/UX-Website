import { sponsorData } from "../data";
import { JellyfishSvg } from "./SVGAssets";

const jellies = [
  { x: "6%", y: "12%", size: 70, rotate: -10, color: "#5CE1E6" },
  { x: "86%", y: "58%", size: 45, rotate: 12, color: "#B388FF" },
];

function SponsorSection() {
  const { title, company_name, company_logo } = sponsorData;

  return (
    <section
      id="sponsor-section"
      className="relative isolate w-full flex flex-col items-center justify-center gap-12 px-6 py-24 overflow-hidden text-white"
    >
      {jellies.map((j, i) => (
        <JellyfishSvg key={i} {...j} />
      ))}

      <h1
        id="sponsor-header"
        className="relative z-10 font-light text-4xl md:text-[48px]"
      >
        {title}
      </h1>

      <div
        id="sponsor-porthole"
        className="relative z-10 flex items-center justify-center w-64 h-64 md:w-80 md:h-80"
      >
        {company_logo ? (
          <img
            src={`/dthon_2026_assets/static-elements/${company_logo}.png`}
            alt={company_name}
            className="w-full h-full object-contain"
          />
        ) : (
          <p className="text-2xl md:text-3xl text-center">{company_name}</p>
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/40">
          Presented By
        </p>
        <p className="text-xl md:text-2xl">{company_name}</p>
      </div>
    </section>
  );
}

export { SponsorSection };
