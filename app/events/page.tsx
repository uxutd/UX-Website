import { Box } from "@mui/material";

export default function EventsPage(): JSX.Element {
  return (
    <main className="container mx-auto px-4">

      {/* Top section - Date and Time */}

      {/* Event Details Section */}
      <section className="flex flex-col items-center pt-12 gap-6">

        {/* <div className="psst-text"> {/* Shifted content to the right 
          <h1>
            *psst click the card to learn more*
          </h1>
        </div> */}

        {/*<img src="/arrowpsst.png" alt="Arrow" className="arrowpsst-image" />*/}

        <Box className="event-box">
          <div
            className="px-4 md:px-6 py-1 md:py-4 flex flex-col"
          >
            <h1
              className="text-3xl md:text-[3.1rem] font-semibold leading-tight mb-2 text-[#3e68fd]"
              style={{ wordSpacing: "0.25rem", WebkitTextStroke: "1.75px white" }}
            >
              UX Conference 2025
            </h1>
            <h1
              className="text-2xl md:text-[2.535rem] font-semibold leading-tight mb-2 text-[#3e68fd]"
              style={{ wordSpacing: "0.65rem", WebkitTextStroke: "1.75px white" }}
            >
              April 14, 4:00 pm
            </h1>
            <h1
              className="text-2xl md:text-[2.535rem] font-semibold leading-tight mb-2 text-[#3e68fd]"
              style={{ wordSpacing: "0.65rem", WebkitTextStroke: "1.75px white" }}
            >
              ECSW 1.316

            </h1>
          </div>

          <img src="/iphonebig.png" alt="iphone" className="iphone-image" />
        </Box>
      </section>

      <section className="flex flex-col pt-12 pb-80">
        <img src="/arrow.png" alt="Arrow" className="arrow-image" />



        <div className="upnext-text flex justify-start px-4 md:px-10">
          <h1
            className="text-1xl md:text-3xl font-semibold text-[#FFFFFF] leading-tight text-[#000000] text-stroke-3 text-stroke-[#3e68fd]"
            style={{ wordSpacing: "0.1rem", WebkitTextStroke: "1.75px #3e68fd" }}
          >
            Up next<br />for UX!
          </h1>
        </div>


      </section>

    </main>
  );
}