import { partnerData } from "../data";
import type { TPartner } from "../data";

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
      className="w-full max-w-3xl mx-auto py-24 flex items-center overflow-hidden"
    >
      <div id="partners-track" className="flex w-max">
        {[...set, ...set].map((p, i) => (
          <img
            key={i}
            src={`${staticSrc}/${p.company_logo}`}
            alt={p.company_name}
            className="h-16 w-auto px-12 shrink-0 invert"
          />
        ))}
      </div>
    </section>
  );
}
