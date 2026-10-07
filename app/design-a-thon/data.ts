// Interface / Types

interface IHeroProps {
  title: string;
  date: string;
  checkInTime: string;
}

interface IAboutProps {
  title: string;
  description: string;
}

interface IFirstDraftProps {
  title: string;
  stats?: string[];
}

type TCard = {
  img_src?: string;
  name: string;
  work_position?: string;
};

interface IMeetSpeakersProps {
  title: string;
  subheadline?: string;
  cards?: TCard[];
}

type TScheduleEntry = {
  action: string;
  location: string;
};

interface IScheduleProps {
  title: string;
  day_one_entries?: TScheduleEntry[];
  day_two_entries?: TScheduleEntry[];
}

// Data

const heroData: IHeroProps = {
  title: "UXPERIENCE",
  date: "October 24 - 25",
  checkInTime: "0:00",
};

const aboutData: IAboutProps = {
  title: "What is UXPERIENCE?",
  description:
    "UXperience is an intensive 24-hour event that compresses weeks of product design into a single day. It replaces a traditional four-week design challenge and features non-stop collaboration, workshops, and networking opportunities.\n\nJoin us for an exciting 24-hour Design-a-Thon that compresses weeks of product design into a single day of creativity, teamwork, and innovation! Network with professionals, explore workshops, and have fun!",
};

const firstDraftData: IFirstDraftProps = {
  title: "UXPERIENCE: The first draft (2024)",
  stats: [
    "47+ attendees",
    "39+ projects",
    "20+ professionals",
    "$1400 won in prize money",
  ],
};

const cardData: TCard[] = [
  {
    name: "Bob",
    work_position: "SWE @ Fart",
  },
  {
    name: "Bob",
    work_position: "SWE @ Fart",
  },
  {
    name: "Bob",
    work_position: "SWE @ Fart",
  },
];

const meetSpeakerData: IMeetSpeakersProps = {
  title: "Meet our Speakers",
  subheadline: "Catch our amazing speakers at our design workshops!",
  cards: cardData,
};

const day_one_data: TScheduleEntry[] = [
  {
    action: "Check-In",
    location: "ECSW Altrum",
  },
  {
    action: "Opening Ceremony",
    location: "HH Room",
  },
  {
    action: "Designing Starts",
    location: "",
  },
  {
    action: "Workshop",
    location: "ECSW Altrum",
  },
  {
    action: "Lunch",
    location: "ECSW Altrum",
  },
  {
    action: "Workshop",
    location: "ECSW Altrum",
  },
];

const day_two_data: TScheduleEntry[] = [
  {
    action: "Sleeping",
    location: "ECSW Altrum",
  },
  {
    action: "Breakfast",
    location: "HH Room | 10am",
  },
  {
    action: "Designing Starts",
    location: "",
  },
  {
    action: "Workshop",
    location: "ECSW Altrum",
  },
  {
    action: "Lunch",
    location: "ECSW Altrum",
  },
  {
    action: "Workshop",
    location: "ECSW Altrum",
  },
];

const scheduleData: IScheduleProps = {
  title: "Schedule",
  day_one_entries: day_one_data,
  day_two_entries: day_two_data,
};

export { heroData, aboutData, firstDraftData, meetSpeakerData, scheduleData };
export type {
  IHeroProps,
  IAboutProps,
  IFirstDraftProps,
  IMeetSpeakersProps,
  IScheduleProps,
  TScheduleEntry,
};
