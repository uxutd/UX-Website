import { Megrim } from "next/font/google";
import { partnerData } from "../data";
import type { TPartner } from "../data";

const megrim = Megrim({ weight: "400", subsets: ["latin"] });

const src = "/dthon_2026_assets";
const staticSrc = `${src}/static-elements`;

const set: TPartner[] = Array.from(
  { length: 4 },
  () => partnerData.partners,
).flat();

export function PartnersSection() {
  return (
    <section
      id="partners-section"
      className="w-full max-w-3xl mx-auto flex flex-col items-center overflow-hidden"
    >
      <div
        id="partners-track"
        className="flex w-max self-start will-change-transform"
      >
        {[...set, ...set].map((p, i) => (
          <img
            key={i}
            src={`${staticSrc}/${p.company_logo}`}
            alt={p.company_name}
            className="h-16 w-auto px-12 shrink-0 invert"
          />
        ))}
      </div>

      <div
        id="thanks"
        className="min-h-[85vh] flex flex-col items-center justify-center gap-4 text-center text-white px-6"
      >
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-white/40">
          <span className="thanks-line h-px w-10 bg-white/25" />
          With gratitude
          <span className="thanks-line h-px w-10 bg-white/25" />
        </div>
        <h2
          id="thanks-title"
          className={`${megrim.className} text-6xl md:text-8xl leading-tight`}
        >
          Thank you
        </h2>
        <p id="thanks-sub" className="max-w-sm text-sm text-white/50">
          To the sponsors and partners who made Design-a-Thon possible.
        </p>
      </div>
    </section>
  );
}
