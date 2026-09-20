import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full flex justify-center mt-10">
      <BlurFade>
        <div className="py-8">
          <AnimatedGradientText>
            <span className="tracking-tight inline font-semibold text-[2rem] md:text-[2.3rem] lg:text-5xl leading-9 text-center animate-gradient bg-gradient-to-r from-[#253B75] via-[#3E68FD] to-[#253B75] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              {children}
            </span>
          </AnimatedGradientText>
        </div>
      </BlurFade>
    </section>
  );
}
