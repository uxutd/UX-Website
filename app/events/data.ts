// Types defined below

type TCurrentEvent = {
  headline: string;
  date: string;
  time: string;
  location: string;
  img_url?: string;
};

type TPreviousEvent = {
  title: string;
  date: string;
  image?: string;
  alt?: string;
  sx?:
    | {
        objectPosition: string;
        transform: string;
      }
    | undefined;
};

// Here is where you can update the current & previous events.
// NOTE: Images need to be around 2000px x 1430px

const current_event: TCurrentEvent = {
  headline: "UX CLUB KICKOFF",
  date: "September 8th",
  time: "7pm - 9pm",
  location: "ECSS 2.410",
  img_url: "uxkickoff2026.png",
};

const past_events: TPreviousEvent[] = [
  {
    title: "Unplug and Unwind Social",
    date: "04/27/2026",
    image: "unplugandunwind.png",
    alt: "Event 24",
  },
  {
    title: "Design Between Spaces Conference",
    date: "04/04/2026",
    image: "/conference2026photo.jpg",
    alt: "Event 23",
  },
  {
    title: "Interview Prep Workshop",
    date: "03/09/2026",
    image: "interviewWorkshopEvent.webp",
    alt: "Event 22",
  },
  {
    title: "Design Principles Workshop",
    date: "02/09/2026",
    image: "nebulaDesignWorkshop.webp",
    alt: "Event 21",
  },
  {
    title: "Spring 2026 Kickoff",
    date: "02/03/2026",
    image: "spring2026kickoffcover.jpg",
    alt: "Event 20",
  },
  {
    title: "End of Semester Social",
    date: "12/08/2025",
    image: "F25_EOSsocial.webp",
    alt: "Event 19",
  },
  {
    title: "Portfolio Power Hour",
    date: "11/17/2025",
    image: "Portfolio_Power_Hour-135.jpg",
    alt: "Event 18",
  },
  {
    title: "Echoes of Tomorrow",
    date: "10/25/2025 - 10/26/2025",
    image: "Echoes of Tomorrow.webp",
    alt: "Event 17",
  },
  {
    title: "Between the Lines",
    date: "09/25/2025",
    image: "figma_workshop-06.webp",
    alt: "Event 16",
  },
  {
    title: "Fall 2025 Kickoff",
    date: "09/08/2025",
    image: "/fallkickoff25.jpg",
    alt: "Event 15",
  },
  {
    title: "End of Semester Social",
    date: "04/28/2025",
    image: "/uxclub_social.png",
    alt: "Event 14",
  },
  {
    title: "Intuit Campus Tour",
    date: "04/11/2025",
    image: "/intuit_campus_tour.png",
    alt: "Event 13",
  },
  {
    title: "Design Uncharted Conference",
    date: "03/29/2025",
    image: "/spring_2025_conference.png",
    alt: "Event 12",
  },
  {
    title: "CBRE Campus Tour",
    date: "03/06/2025",
    image: "/cbre_campus_tour.png",
    alt: "Event 11",
  },
  {
    title: "Portfolio Essentials",
    date: "03/05/2025",
    image: "/portfolioessentials.jpg",
    alt: "Event 10",
  },
  {
    title: "Design For Devs",
    date: "02/17/2025 - 02/18/2025",
    image: "/designfordevs.jpg",
    alt: "Event 9",
  },
  {
    title: "Spring 2025 Kickoff",
    date: "02/03/2025",
    image: "/springkickoff2025.jpg",
    alt: "Event 8",
  },
  {
    title: "End-of-Sem Social",
    date: "12/02/2024",
    image: "/eossocial.jpg",
    alt: "Event 7",
  },
  {
    title: "UXperience: The First Draft",
    date: "11/09/2024 - 11/10/2024",
    image: "/designathon.jpg",
    alt: "Event 6",
  },
  {
    title: "Design & Unwind Social",
    date: "10/30/2024",
    image: "/designandunwind.jpg",
    alt: "Event 5",
  },
  {
    title: "Design Systems Workshop",
    date: "10/07/2024",
    image: "/designsystems.jpg",
    alt: "Event 4",
    sx: { objectPosition: "center bottom", transform: "scale(1.1)" },
  },
  {
    title: "Intro UX Design Workshop",
    date: "09/30/2024",
    image: "/introtoux.jpg",
    alt: "Event 3",
  },
  {
    title: "Figma Workshop Series",
    date: "09/24/2024 - 11/12/2024",
    image: "/figmaworkshop.png",
    alt: "Event 2",
  },
  {
    title: "Fall 2024 Kickoff",
    date: "09/12/2024",
    image: "/fallkickoff.jpg",
    alt: "Event 1",
  },
];

export { past_events, current_event };
export type { TCurrentEvent, TPreviousEvent };
