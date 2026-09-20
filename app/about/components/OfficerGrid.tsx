import OfficerCard from "./OfficerCard";
import type { TOfficer } from "../data";

export default function OfficerGrid({ people }: { people: TOfficer[] }) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center text-center mt-8 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center">
      {people.map((officer) => (
        <OfficerCard key={officer.name} officer={officer} />
      ))}
    </section>
  );
}
