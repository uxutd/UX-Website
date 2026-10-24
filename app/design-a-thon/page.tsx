"use client";
import { useRef, useState } from "react";
import { AboutCardSection } from "./components/AboutSection";
import { RulesSection } from "./components/RulesSection";
import { HeroSection } from "./components/HeroSection";
import { MentorsSection } from "./components/MentorsSection";
import { SponsorSection } from "./components/SponsorsSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { heroData } from "./data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

import { Cantora_One } from "next/font/google";
import { Bubbles } from "./components/SVGAssets";
import { PartnersSection } from "./components/PartnersSection";

const src = "/dthon_2026_assets";
const gradient1 =
  "bg-[linear-gradient(to_bottom,#4FC3D9_0%,#2A9DBF_8%,#1782A3_18%,#0E5A86_30%,#0A3D6B_42%,#072646_52%,#04142B_60%,#020A17_66%,#01050C_72%,#010307_100%)]";

const cantora = Cantora_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantora",
});

import { Megrim } from "next/font/google";

const megrim = Megrim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-megrim",
});

// Components

const START_ROTATIONS = [10, 30, 80, -100, 9, 120, 89, -110];

// Main Page

function Index({ navItems }: { navItems: string[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const suppressClick = useRef(false);
  // Mobile scrubber state: which dot the finger is over, and its viewport y.
  const [drag, setDrag] = useState<{ index: number; y: number } | null>(null);

  // Navigate to a section, whether or not ScrollSmoother is running (phones
  // skip it, so fall back to native scrollIntoView).
  const goTo = (name: string) => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(`#${name}-section`, true);
    else
      document
        .getElementById(`${name}-section`)
        ?.scrollIntoView({ behavior: "smooth" });
  };

  // The dot whose center is nearest the finger.
  const dotAt = (clientY: number) => {
    const dots = railRef.current?.querySelectorAll<HTMLElement>("[data-dot]");
    if (!dots?.length) return 0;
    let best = 0;
    let bestDist = Infinity;
    dots.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const d = Math.abs(clientY - (r.top + r.height / 2));
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  };

  const track = (e: React.TouchEvent) => {
    const t = e.touches[0];
    setDrag({ index: dotAt(t.clientY), y: t.clientY });
  };

  const release = (e: React.TouchEvent) => {
    if (drag) goTo(navItems[drag.index].toLowerCase());
    setDrag(null);
    // Swallow the click the browser synthesizes after a touch so it can't
    // re-navigate to the dot where the finger first landed.
    suppressClick.current = true;
    e.preventDefault();
  };

  return (
    <>
      <div
        ref={railRef}
        id="dthon-index"
        onTouchStart={track}
        onTouchMove={track}
        onTouchEnd={release}
        className="fixed top-1/2 -translate-y-1/2 -right-1 md:top-24 md:translate-y-0 md:right-6 z-30 flex flex-col md:gap-2 p-1 md:p-3 rounded-xl transition-colors duration-300 hover:bg-black/40 opacity-0 invisible touch-none md:touch-auto"
      >
        {navItems.map((item, i) => (
          <p
            id={`index-${item.toLowerCase()}`}
            onClick={() => {
              if (suppressClick.current) {
                suppressClick.current = false;
                return;
              }
              goTo(item.toLowerCase());
            }}
            key={i}
            className="p-2 md:p-0 text-white/20 text-xs cursor-pointer underline-offset-4 transition-colors duration-200 hover:text-white [&.active]:text-white [&.active]:underline"
          >
            <span
              data-dot
              className={`md:hidden block rounded-full bg-current transition-all duration-150 ${
                drag?.index === i ? "w-3 h-3 text-white" : "w-1.5 h-1.5"
              }`}
            />
            <span className="hidden md:inline">{item}</span>
          </p>
        ))}
      </div>

      {/* Mobile scrubber label pill, floating next to the finger */}
      {drag && (
        <div
          className="md:hidden fixed right-9 z-40 -translate-y-1/2 pointer-events-none rounded-full bg-black/80 px-3 py-1 text-xs text-white whitespace-nowrap shadow-lg"
          style={{ top: drag.y }}
        >
          {navItems[drag.index]}
        </div>
      )}
    </>
  );
}

const heroTimelineAnimation = () => {
  // Hero
  gsap.to("#hero-section > :not(#hero-bg):not(#hero-decoration)", {
    opacity: 0,
    y: -300,
    scrollTrigger: {
      trigger: "#hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Hero: kelp leans away and fades
  const kelpOut = {
    trigger: "#hero-section",
    start: "top top",
    end: "40% top",
    scrub: true,
  };

  gsap.to(".kelp-left", {
    // rotation: -45,
    xPercent: -50,
    opacity: 0,
    // force3D: true,
    transformOrigin: "0% 100%",
    ease: "sine.in",
    scrollTrigger: kelpOut,
  });

  gsap.to(".kelp-right", {
    // rotation: 45,
    xPercent: 50,
    opacity: 0,
    // force3D: true,
    transformOrigin: "100% 100%",
    ease: "sine.in",
    scrollTrigger: kelpOut,
  });
};

const bubbleTransitionAnimation = ({
  trigger_location,
}: {
  trigger_location: string;
}) => {
  // Descent: bubbles rise between sections
  const descent = {
    trigger: trigger_location,
    start: "top bottom",
    end: "top top",
    scrub: true,
    invalidateOnRefresh: true,
  };

  const bubbles = gsap.utils.toArray<HTMLElement>(".bubble");

  bubbles.forEach((b) => {
    const s = gsap.utils.random(8, 40);
    gsap.set(b, {
      width: s,
      height: s,
      left: `${gsap.utils.random(0, 100)}%`,
    });
  });

  gsap.fromTo(
    bubbles,
    { y: 0, x: 0 },
    {
      y: () => -window.innerHeight - 100,
      x: () => gsap.utils.random(-60, 60),
      ease: "none",
      stagger: { each: 0.03, from: "random" },
      immediateRender: false,
      scrollTrigger: descent,
    },
  );
};

const pinAwareBackgroundAnimation = ({ target }: { target: string }) => {
  // Background tracks scroll, but holds still during any pinned section
  const pins = ScrollTrigger.getAll().filter((st) => st.pin);

  const pinnedSoFar = (s: number) =>
    pins.reduce(
      (sum, st) => sum + gsap.utils.clamp(0, st.end - st.start, s - st.start),
      0,
    );

  const resize = () => {
    const max = ScrollTrigger.maxScroll(window);
    gsap.set(target, { height: max - pinnedSoFar(max) + window.innerHeight });
  };

  ScrollTrigger.addEventListener("refresh", resize);
  resize();

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const s = self.scroll();
      gsap.set(target, { y: -(s - pinnedSoFar(s)) });
    },
  });

  return () => ScrollTrigger.removeEventListener("refresh", resize);
};

const jellyDrift = (jelly: HTMLElement) => {
  const baby = jelly.offsetWidth < 50;
  const range = baby ? 25 : 40;

  return gsap.to(jelly, {
    x: () => gsap.utils.random(-range, range),
    y: () => gsap.utils.random(-range * 0.75, range * 0.75),
    rotation: () => gsap.utils.random(-8, 8),
    duration: baby ? gsap.utils.random(3, 5) : gsap.utils.random(6, 10),
    ease: "sine.inOut",
    repeat: -1,
    repeatRefresh: true,
  });
};

const ambientAnimation = () => {
  const tweens: gsap.core.Tween[] = [];

  // Kelp sway
  tweens.push(
    gsap.to("#kelp", {
      rotation: 3,
      transformOrigin: "50% 100%",
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    }),
  );

  // Jellyfish drift (mentors jellies have their own trigger)
  gsap.utils
    .toArray<HTMLElement>(".jellyfish")
    .filter((j) => !j.closest("#mentors-section"))
    .forEach((jelly) => tweens.push(jellyDrift(jelly)));

  // Fish school swims across
  tweens.push(
    gsap
      .fromTo(
        "#fishes",
        { x: () => window.innerWidth + 100 },
        { x: () => -600, y: "+=40", duration: 45, ease: "none", repeat: -1 },
      )
      .progress(0.25),
  );

  // Pause everything while the decorated sections are offscreen
  ScrollTrigger.create({
    trigger: "#hero-section",
    endTrigger: "#about-section",
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) =>
      tweens.forEach((t) => (self.isActive ? t.resume() : t.pause())),
  });
};

const mentorsJellyfishAnimation = () => {
  // Mentors: jellyfish drift, paused while the section is offscreen
  const tweens = gsap.utils
    .toArray<HTMLElement>("#mentors-section .jellyfish")
    .map((jelly) => jellyDrift(jelly).pause());

  ScrollTrigger.create({
    trigger: "#mentors-section",
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) =>
      tweens.forEach((t) => (self.isActive ? t.resume() : t.pause())),
  });
};

const aboutTimelineAnimation = () => {
  // About: setup
  const pics = gsap.utils.toArray<HTMLElement>(".picture");
  const paragraphs = gsap.utils.toArray<HTMLElement>(".about-paragraph");
  const angle = (i: number) => (i / pics.length) * Math.PI * 2;
  const radius = () => {
    const margin = window.innerWidth < 768 ? 40 : 100;
    return Math.min(window.innerWidth, window.innerHeight) / 2 - margin;
  };

  gsap.set(pics, {
    xPercent: -50,
    yPercent: -50,
    rotation: (i) => START_ROTATIONS[i],
  });

  // About: header + cards fan out
  // About: header in → out, then cards appear and fan out
  const aboutTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "center center",
        end: "+=8000",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    })
    .from("#about-header", { y: 50, autoAlpha: 0 })
    .to("#about-header", { y: -50, autoAlpha: 0, duration: 1 }, "+=2")
    .fromTo(pics, { scale: 0 }, { scale: 1, stagger: 0.3 })
    .to(pics, {
      x: (i) => Math.cos(angle(i)) * radius(),
      y: (i) => Math.sin(angle(i)) * radius(),
      rotation: (i) => (i / pics.length) * 360,
      stagger: 0.05,
    })
    .addLabel("text");

  // About: paragraphs swap in place
  paragraphs.forEach((p, i) => {
    const words = SplitText.create(p, { type: "words" }).words;

    aboutTl.from(words, { y: 100, autoAlpha: 0, stagger: 0.005 });

    if (i < paragraphs.length - 1) {
      aboutTl.to(words, { y: -100, autoAlpha: 0, stagger: 0.005 }, "+=1");
    }
  });

  // About: ring orbits during the text, then text fades and cards explode
  aboutTl
    .to(
      "#picture-rotation",
      {
        rotation: 180,
        ease: "none",
        duration: aboutTl.duration() - aboutTl.labels.text,
      },
      "text",
    )
    .to("#about-description", { opacity: 0 })
    .to(pics, {
      x: (i) => Math.cos(angle(i)) * radius() * 4,
      y: (i) => Math.sin(angle(i)) * radius() * 4,
      rotation: () => gsap.utils.random(-720, 720),
      scale: () => gsap.utils.random(0.4, 1.6),
      autoAlpha: 0,
      ease: "power4.in",
      duration: 2,
      stagger: { each: 0.02, from: "random" },
    });
};

const indexAnimation = ({ navItems }: { navItems: string[] }) => {
  // Index: active state
  navItems.forEach((item) => {
    const name = item.toLowerCase();
    if (!document.querySelector(`#${name}-section`)) return;

    ScrollTrigger.create({
      trigger: `#${name}-section`,
      start: "top center",
      end: "bottom center",
      toggleClass: { targets: `#index-${name}`, className: "active" },
    });
  });

  // Index: visibility
  gsap.to("#dthon-index", {
    autoAlpha: 1,
    duration: 0.3,
    scrollTrigger: {
      trigger: "#about-section",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });
};

const partnersAnimation = () => {
  gsap.to("#partners-track", {
    xPercent: -50,
    duration: 50,
    ease: "none",
    repeat: -1,
  });
};

const sectionJellyfishAnimation = (section: string) => {
  // Jellyfish drift, paused while the section is offscreen
  const tweens = gsap.utils
    .toArray<HTMLElement>(`${section} .jellyfish`)
    .map((jelly) => jellyDrift(jelly).pause());

  ScrollTrigger.create({
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) =>
      tweens.forEach((t) => (self.isActive ? t.resume() : t.pause())),
  });
};

const navbarAnimation = () => {
  // Navbar: show on scroll up, hide when idle
  const showNav = gsap
    .from("#dthon-navbar", { yPercent: -100, duration: 0.3, paused: true })
    .progress(1);

  let idleTimer: ReturnType<typeof setTimeout> | undefined;

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      clearTimeout(idleTimer);

      if (self.direction === -1) {
        showNav.play();
        idleTimer = setTimeout(() => showNav.reverse(), 1500);
      } else {
        showNav.reverse();
      }
    },
  });

  return () => clearTimeout(idleTimer);
};

const rulesTimelineAnimation = () => {
  const rules = gsap.utils.toArray<HTMLElement>(".rule");

  const rulesTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#rules-section",
        start: "center center",
        end: () => `+=${rules.length * 400}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    })
    .from("#rules-header", { y: 40, autoAlpha: 0 })
    .addLabel("rules");

  // Rules: each one surfaces, the previous one dims
  // Rules: each one surfaces, the previous one dims
  rules.forEach((rule, i) => {
    rulesTl.from(rule, {
      y: 60,
      autoAlpha: 0,
      ...(ScrollTrigger.isTouch !== 1 && { filter: "blur(8px)" }),
    });
    if (i > 0) rulesTl.to(rules[i - 1], { opacity: 0.3 }, "<");
  });

  // Rules: gauge fills across the whole reveal, then hold on the last rule
  rulesTl
    .to(
      "#rules-gauge",
      {
        scaleY: 1,
        ease: "none",
        duration: rulesTl.duration() - rulesTl.labels.rules,
      },
      "rules",
    )
    .to({}, { duration: 0.5 });
};

const scheduleAnimation = () => {
  gsap.utils.toArray<HTMLElement>(".schedule-col").forEach((col, c) => {
    const side = c === 0 ? -1 : 1;

    gsap.from(col.querySelectorAll(".schedule-entry"), {
      y: 120,
      x: 60 * side,
      rotation: 4 * side,
      scale: 0.9,
      autoAlpha: 0,
      filter: "blur(10px)",
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: col,
        start: "top 80%",
        end: "bottom 60%",
      },
    });
  });
};

const thanksAnimation = () => {
  const words = SplitText.create("#thanks-title", { type: "words" }).words;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#thanks",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
    .from(".thanks-line", {
      scaleX: 0,
      transformOrigin: (i) => (i === 0 ? "100% 50%" : "0% 50%"),
      duration: 0.8,
      ease: "power2.out",
    })
    .from(
      words,
      { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.15, ease: "power3.out" },
      "<0.2",
    )
    .from("#thanks-sub", { autoAlpha: 0, y: 12, duration: 0.6 }, "-=0.4");
};

function page() {
  const navItems = [
    "About",
    "Schedule",
    "Rules",
    "Mentors",
    "Sponsor",
    "Partners",
  ];

  useGSAP(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    let footer: HTMLElement | null = null;
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
      });
    } else {
      // Mobile (no ScrollSmoother): the global site footer rendered by the
      // root layout stacks below #smooth-content and adds a screen of empty
      // dark scroll after #partners-section. On desktop ScrollSmoother's fixed
      // wrapper pushes it out of view; match that on touch devices.
      footer = document.querySelector("footer");
      if (footer) footer.style.display = "none";
    }

    heroTimelineAnimation();
    bubbleTransitionAnimation({ trigger_location: "#about-section" });
    aboutTimelineAnimation();
    ambientAnimation();
    mentorsJellyfishAnimation();
    indexAnimation({ navItems });
    rulesTimelineAnimation();
    scheduleAnimation();
    sectionJellyfishAnimation("#mentors-section");
    sectionJellyfishAnimation("#sponsor-section");
    partnersAnimation();

    const cleanupNav = navbarAnimation();
    const cleanupBg = pinAwareBackgroundAnimation({ target: "#page-bg" }); // keep last: needs all pins

    return () => {
      cleanupNav();
      cleanupBg();
      if (footer) footer.style.display = "";
    };
  });

  return (
    <section
      id="smooth-wrapper"
      className={`${cantora.className} ${megrim.variable} shrink-0 text-black flex flex-col items-center min-h-screen`}
    >
      <Bubbles />
      <Index navItems={navItems} />
      <div
        id="descent-blur"
        className="fixed inset-0 z-[15] pointer-events-none bg-[#071E3D] opacity-0"
        style={
          {
            "--blur": "0px",
            backdropFilter: "blur(var(--blur))",
            WebkitBackdropFilter: "blur(var(--blur))",
          } as React.CSSProperties
        }
      />

      <div
        id="page-bg"
        className={`fixed inset-x-0 top-0 pointer-events-none ${gradient1}`}
      />
      <div id="smooth-content" className="relative w-full">
        <HeroSection {...heroData} />
        <AboutCardSection />
        <ScheduleSection />
        <RulesSection />
        <MentorsSection />
        <SponsorSection />
        <PartnersSection />
      </div>
    </section>
  );
}

export default page;
