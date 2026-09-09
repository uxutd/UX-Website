export function Divider({ text }: { text: React.ReactNode }) {
  return (
    <section className="hidden md:flex flex-col pt-12 sm:pb-10 md:pb-20 ">
      <img
        alt="Arrow"
        className="arrow-image hover:scale-105 transition ease-out"
        src="/Arrow.png"
      />
      <div className="upnext-text flex justify-start px-4 md:px-20.0 mt-3">
        <h1
          className="text-1xl md:text-3xl font-semibold leading-tight text-[#ffffff] hover:scale-105 transition ease-out"
          style={{
            wordSpacing: "0.1rem",
            WebkitTextStroke: "1.75px #3e68fd",
          }}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}
