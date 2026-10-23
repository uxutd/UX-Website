import { Clock, MapPin, CalendarDays } from "lucide-react";
import { IHeroProps } from "../data";
import Link from "next/link";
import { KelpLeftSvg, KelpRightSvg, JellyfishSvg, Fish } from "./SVGAssets";

const src = "/dthon_2026_assets";
const staticSrc = `${src}/static-elements`;
const mobileStaticSrc = `${src}/mobile-static`;
const background_hero = `${staticSrc}/HeroSection.png`;
const mobile_hero = `${mobileStaticSrc}/HeroMobile.png`;
const register_link =
  "https://luma.com/7hyx0qbk?fbclid=PAdGRleAVHwqZleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ0m1FyBSRRQpu4_IXDxzSnK-HyVYnNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpxaG-kovFSkHs_qE7nkqNxPJ48gAno51Wp-SukcIZoNHaRaXXP_itf6reSiD_aem_Q36tztPfXpZdTDBDZzPMnQ&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1dennhbnq5t2d&utm_medium=social&utm_source=ig";

type TIconBox = {
  icon: React.ReactNode;
  data: string;
};

function InfoBox({ icon, data }: TIconBox) {
  return (
    <div className="flex flex-row items-center gap-2">
      {icon} <p className="text-base">{data}</p>
    </div>
  );
}

function Decoration() {
  const FISH = Array.from({ length: 24 }, (_, i) => ({
    x: `${((i * 37) % 14) - 2}%`,
    y: `${20 + ((i * 53) % 12)}%`,
    size: 20 + (i % 3) * 2,
  }));
  const far = "linear-gradient(to bottom, #2E6E6A, #08262A)";
  const mid = "linear-gradient(to bottom, #3F8F86, #0A3236)";

  return (
    <div
      id="hero-decoration"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* back layer: small, dark, barely tilted — hidden on mobile */}
      <div className="kelp-left will-change-transform absolute inset-0 hidden md:block">
        <div className="absolute inset-0 origin-bottom-left md:scale-[0.75] lg:scale-100">
          <KelpLeftSvg x={90} size={90} color={far} rotate={-4} />
        </div>
      </div>
      <div className="kelp-right will-change-transform absolute inset-0 hidden md:block">
        <div className="absolute inset-0 origin-bottom-right md:scale-[0.75] lg:scale-100">
          <KelpRightSvg x={60} size={100} color={far} rotate={5} />
          <KelpRightSvg x={190} size={70} color={far} rotate={-3} />
        </div>
      </div>

      {/* jellyfish: adults with babies nearby */}
      <div className="absolute inset-0 origin-top-left scale-[0.6] md:scale-100">
        <JellyfishSvg x="12%" y="18%" size={110} rotate={-12} />
        <JellyfishSvg x="20%" y="31%" size={36} rotate={-20} />
        <JellyfishSvg x="8%" y="35%" size={28} rotate={8} />
      </div>

      <div className="absolute inset-0 origin-top-right scale-[0.6] md:scale-100">
        <JellyfishSvg x="78%" y="12%" size={90} rotate={10} />
        <JellyfishSvg x="87%" y="25%" size={32} rotate={15} />
      </div>

      <div className="hidden md:block">
        <JellyfishSvg x="81%" y="60%" size={26} rotate={-5} />
      </div>

      <div className="absolute inset-0 origin-top-left scale-[0.7] md:scale-100">
        {FISH.map((fish, i) => (
          <Fish key={i} {...fish} />
        ))}
      </div>

      {/* front layer: anchors the corners — scales down on smaller screens */}
      <div className="kelp-left will-change-transform absolute inset-0">
        <div className="absolute inset-0 origin-bottom-left scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-100">
          <KelpLeftSvg x={-48} size={200} />
          <KelpLeftSvg x={40} size={180} rotate={2} />
        </div>
      </div>
      <div className="kelp-right will-change-transform absolute inset-0">
        <div className="absolute inset-0 origin-bottom-right scale-[0.35] sm:scale-[0.55] md:scale-[0.8] lg:scale-100">
          <KelpRightSvg x={-10} size={180} rotate={-2} />
        </div>
      </div>
    </div>
  );
}

function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 md:px-4 md:py-2 min-h-11 md:min-h-0 text-sm border border-zinc-100 rounded-xl"
    >
      {children}
    </Link>
  );
}

function HeroSection({ title, date, location, checkInTime }: IHeroProps) {
  return (
    <div
      id="hero-section"
      className="relative isolate text-white w-full min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6"
    >
      <picture id="hero-bg">
        <source media="(max-width: 767px)" srcSet={mobile_hero} />
        <img
          src={background_hero}
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-bottom pointer-events-none"
        />
      </picture>
      <img
        src={`${staticSrc}/dthon_title.png`}
        className="w-full max-w-[900px] h-auto"
      />
      <div className="lg:px-64 w-full flex flex-col items-center gap-4 text-4xl text-white/80">
        <div className="flex flex-row items-center gap-6 md:gap-3 sm:gap-12">
          <InfoBox icon={<CalendarDays size={16} />} data={date} />
          <InfoBox icon={<Clock size={16} />} data={checkInTime} />
          <InfoBox icon={<MapPin size={16} />} data={location} />
        </div>
        <div className="text-white flex flex-col md:flex-row gap-6 md:gap-4 mt-6">
          <Button href={register_link}>Sign Up</Button>
        </div>
      </div>
      <Decoration />
    </div>
  );
}

export { HeroSection, Decoration };
