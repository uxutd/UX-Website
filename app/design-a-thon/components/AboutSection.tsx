import Image from "next/image";
import { IAboutProps } from "../data";
import { aboutData } from "../data";
import { JellyfishSvg, Fish } from "./SVGAssets";

const src = "/dthon_2026_assets";
const staticSrc = `${src}/static-elements`;
const mobileStaticSrc = `${src}/mobile-static`;
const background_about = `${staticSrc}/AboutSection.png`;
const mobile_about = `${mobileStaticSrc}/AboutMobile.png`;

function AboutDecoration() {
  const FISH = Array.from({ length: 14 }, (_, i) => ({
    x: `${((i * 41) % 12) - 2}%`,
    y: `${70 + ((i * 29) % 8)}%`,
    size: 16 + (i % 3) * 2,
  }));

  return (
    <div
      id="about-decoration"
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-80"
    >
      {/* jellyfish: top-left pair */}
      <div className="absolute inset-0 origin-top-left scale-[0.6] md:scale-100">
        <JellyfishSvg x="4%" y="14%" size={80} rotate={-8} />
        <JellyfishSvg x="12%" y="24%" size={28} rotate={-18} />
      </div>

      {/* jellyfish: bottom-right family */}
      <div className="absolute inset-0 origin-bottom-right scale-[0.6] md:scale-100">
        <JellyfishSvg x="86%" y="58%" size={100} rotate={12} />
        <JellyfishSvg x="80%" y="70%" size={30} rotate={6} />
        <JellyfishSvg x="93%" y="74%" size={24} rotate={-10} />
      </div>

      {/* lone drifter — desktop only */}
      <div className="hidden md:block">
        <JellyfishSvg x="90%" y="16%" size={44} rotate={14} />
      </div>

      {/* fish school near the bottom */}
      <div className="absolute inset-0 origin-bottom-left scale-[0.7] md:scale-100">
        {FISH.map((fish, i) => (
          <Fish key={i} {...fish} />
        ))}
      </div>
    </div>
  );
}

function Picture({ img }: { img: number }) {
  return (
    <div className="picture absolute top-1/2 left-1/2 w-[56px] md:w-[80px] aspect-[5/8] bg-white">
      <Image
        src={`${src}/dynamic-elements/${img}.jpg`}
        alt=""
        fill
        sizes="100px"
        className="object-cover"
      />
    </div>
  );
}

function PictureRotation() {
  const img_data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div id="picture-rotation" className="absolute inset-0">
      {img_data.map((item) => (
        <Picture key={item} img={item} />
      ))}
    </div>
  );
}

function AboutCardSection() {
  return (
    <section
      id="about-section"
      className="relative isolate min-h-[max(100vh,216.41vw)] md:min-h-[max(100vh,71.111vw)] w-full flex justify-center items-center"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile_about} />
        <img
          src={background_about}
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-top pointer-events-none"
        />
      </picture>
      <AboutDecoration />
      <div
        id="about-text"
        className="relative z-10 px-6 flex flex-col items-center justify-center min-w-0"
      >
        <h1
          id="about-header"
          className="absolute bottom-full mb-6 text-white font-light text-2xl md:text-[32px] whitespace-nowrap"
        >
          {aboutData.title}
        </h1>
        <div
          id="about-description"
          className="grid max-w-xs md:max-w-md text-lg md:text-[24px] text-center text-white"
        >
          {aboutData.description.map((paragraph, i) => (
            <p key={i} className="about-paragraph [grid-area:1/1]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <PictureRotation />
    </section>
  );
}

export { AboutCardSection };
