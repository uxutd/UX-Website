const src = "/dthon_2026_assets/svgs";

type TSvgProps = {
  x?: number | string;
  y?: number | string;
  size?: number;
  color?: string;
  rotate?: number;
};

function Fish({ x = 0, y = 0, size = 10, rotate = 0 }: TSvgProps) {
  return (
    <img
      id="fishes"
      src={`${src}/single_fish.svg`}
      alt=""
      style={{ left: x, top: y, width: size, rotate: `${rotate}deg` }}
      className="absolute -z-10 h-auto pointer-events-none"
    />
  );
}

function KelpLeftSvg({
  x = -48,
  y = 0,
  rotate,
  size = 200,
  color = "linear-gradient(to bottom, #59B4A8, #0C3E41)",
}: TSvgProps) {
  return (
    <div
      id="kelp"
      style={{
        left: x,
        bottom: y,
        width: size,
        rotate: `${rotate}deg`,
        transformOrigin: "50% 100%",
        aspectRatio: "352 / 1618",
        background: color,
        maskImage: `url(${src}/kelpLeft.svg)`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
      }}
      className="kelp-left absolute pointer-events-none"
    />
  );
}

function Bubbles({ count = 30 }: { count?: number }) {
  return (
    <div className="fixed inset-0 z-20 overflow-hidden pointer-events-none">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="bubble absolute top-full rounded-full border border-white/50 bg-white/10"
        />
      ))}
    </div>
  );
}

function JellyfishSvg({
  x = 0,
  y = 0,
  rotate = 0,
  size = 120,
  color,
}: TSvgProps) {
  return (
    <img
      src={`${src}/jellyfish.svg`}
      alt=""
      style={
        {
          left: x,
          top: y,
          width: size,
          rotate: `${rotate}deg`,
          "--glow-1": color ?? "rgba(230, 214, 255, 0.9)",
          "--glow-2": color ?? "rgba(188, 221, 225, 0.6)",
        } as React.CSSProperties
      }
      className="jellyfish absolute h-auto pointer-events-none [filter:drop-shadow(0_0_6px_var(--glow-1))] md:[filter:drop-shadow(0_0_8px_var(--glow-1))_drop-shadow(0_0_24px_var(--glow-2))]"
    />
  );
}

function KelpRightSvg({
  x = 0,
  y = 0,
  rotate = 0,
  size = 200,
  color = "linear-gradient(to bottom, #59B4A8, #0C3E41)",
}: TSvgProps) {
  return (
    <div
      id="kelp"
      style={{
        right: x,
        bottom: y,
        width: size * 1.59,
        rotate: `${rotate}deg`,
        transformOrigin: "50% 100%",
        aspectRatio: "575 / 1663",
        background: color,
        maskImage: `url(${src}/kelpRight.svg)`,
        maskSize: "contain",
        maskPosition: "bottom",
        maskRepeat: "no-repeat",
      }}
      className="kelp-right absolute pointer-events-none"
    />
  );
}

export { KelpLeftSvg, KelpRightSvg, JellyfishSvg, Bubbles, Fish };
