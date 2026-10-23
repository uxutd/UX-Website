import { rulesData } from "../data";

function RulesSection() {
  return (
    <section
      id="rules-section"
      className="relative min-h-screen w-full flex justify-center items-center px-6 text-white"
    >
      <div className="flex gap-6 md:gap-10 w-full max-w-xl">
        <div className="relative w-px bg-white/15 self-stretch">
          <div
            id="rules-gauge"
            className="absolute inset-0 bg-white origin-top scale-y-0"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <h2 id="rules-header" className="text-xl md:text-[32px] font-light">
            {rulesData.title}
          </h2>
          {rulesData.rules.map((item, i) => (
            <div key={i} className="rule flex gap-4 items-baseline">
              <span className="text-sm text-white/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { RulesSection };
