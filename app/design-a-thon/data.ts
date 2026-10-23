// Interface / Types

interface IHeroProps {
  title: string;
  date: string;
  location: string;
  checkInTime: string;
}

interface IAboutProps {
  title: string;
  description: string[];
  images?: string[];
}

interface IFirstDraftProps {
  title: string;
  stats?: string[];
}

type TScheduleEntry = {
  action: string;
  location?: string;
  time?: string;
};

interface IScheduleProps {
  title: string;
  day_one_entries?: TScheduleEntry[];
  day_two_entries?: TScheduleEntry[];
}

interface IRulesProps {
  title: string;
  rules: string[];
}

type TExperience = {
  role: string;
};

type TMentor = {
  name: string;
  role: string;
  headshot?: string;
  company?: string;
  experiences?: string[];
};

interface IMentorProps {
  title: string;
  mentors: TMentor[];
}

interface ISponsorProps {
  title: string;
  company_name: string;
  company_logo: string;
}

type TPartner = {
  company_name: string;
  company_logo?: string;
};

interface IPartnerProps {
  title: string;
  partners: TPartner[];
}

interface IHonorableProps {
  title: string;
  headshot: string;
  name: string;
  role: string;
  company: string;
}

// Data

const partners: TPartner[] = [
  {
    company_name: "Redbull",
    company_logo: "redbull_logo.png",
  },
  {
    company_name: "Figma",
    company_logo: "figma_logo.png",
  },
  {
    company_name: "Adobe",
    company_logo: "adobe_logo.png",
  },
];

const partnerData: IPartnerProps = {
  title: "Partners Section",
  partners: partners,
};

const heroData: IHeroProps = {
  title: "UXPERIENCE",
  date: "Oct. 24 - 25",
  location: "ECSW",
  checkInTime: "7:00am",
};

const aboutData: IAboutProps = {
  title: "What is UXPERIENCE?",
  description: [
    "UXperience is an intensive 24-hour event that compresses weeks of product design into a single day.",
    "It replaces a traditional four-week design challenge and features non-stop collaboration, workshops, and networking opportunities.\n",
    "\nJoin us for an exciting 24-hour Design-a-Thon that compresses weeks of product design into a single day of creativity, teamwork, and innovation!",
    "Network with professionals, explore workshops, and have fun!",
  ],
};

const rulesData: IRulesProps = {
  title: "Rules",
  rules: [
    "Teams must not exceed 4 people total.",
    "Each team may only submit one submission.",
    "All work submitted to UXperience Design-a-thon must be original work. Any submissions with plagiarized work will be disqualified.",
    "You may not submit work previously designed before UXperience Design-a-thon. All designs must be made between the dates of October 24th, 2026 to October 25th, 2026.",
    "Submission need to have all three: Devpost project description, Figma design file, and 2-min walkthough video",
    "Late submissions will not be accepted.",
    "If there are any adjustments made to your prototype after Sunday, October 25th 12:00 PM CST, your submission will not be considered for judging.",
  ],
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

const day_one_data: TScheduleEntry[] = [
  {
    action: "Student Check-in & Boothing",
    time: "9:00am",
  },
  {
    action: "Team Forming Workshop",
    time: "10:00am",
  },
  {
    action: "Opening Ceremony",
    time: "11:00am",
  },
  {
    action: "Designing Begins!",
    time: "12:00pm",
  },
  {
    action: "Lunch at ECSW",
    time: "12:30pm",
  },
  {
    action: "Workshops",
    location: "ECSW Altrum",
    time: "1pm - 7:15pm",
  },
  {
    action: "Dinner at ECSW",
    time: "8:00pm",
  },
  {
    action: "Office Hours",
    time: "8:30pm",
  },
  {
    action: "Fun Activity",
    time: "10:30pm",
  },
  {
    action: "Quiet Working Hours",
    time: "12am - 7:30am",
  },
];

const day_two_data: TScheduleEntry[] = [
  {
    action: "Breakfast",
    time: "8:00am",
  },
  {
    action: "Designing Ends",
    time: "12:00pm",
  },
  {
    action: "Lunch",
    time: "12:30pm",
  },
  {
    action: "Judging Expo",
    time: "1:30pm",
  },
  {
    action: "Closing Ceremony",
    time: "5:00pm",
  },
];

const scheduleData: IScheduleProps = {
  title: "Schedule",
  day_one_entries: day_one_data,
  day_two_entries: day_two_data,
};

const mentors: TMentor[] = [
  {
    name: "Zia Kim",
    role: "UX Designer",
    company: "McGraw Hill",
    headshot: "zia-kim",
  },
  {
    name: "Maurice Cruz",
    role: "Product Designer",
    company: "JPMorganChase",
    headshot: "maurice-cruz",
  },
  {
    name: "Vanessa Astronto",
    role: "UX Designer",
    company: "Indeed",
    headshot: "vanessa-astronto",
  },
  {
    name: "Grace Nguyen",
    role: "Sr. UX Researcher",
    company: "Baylor Scott & White Health",
    headshot: "grace-nguyen",
  },
  {
    name: "Hector Mavrakis",
    role: "Sr. Experience Designer",
    company: "Capital One",
    headshot: "hector-mavrakis",
  },
  {
    name: "Rohan Cheruku",
    role: "UX/UI Designer",
    company: "Klein Tools",
    headshot: "rohan-cheruku",
  },
];

const mentorData: IMentorProps = {
  title: "Mentors",
  mentors: mentors,
};

const sponsorData: ISponsorProps = {
  title: "Sponsor",
  company_name: "BaylorScott & White",
  company_logo: "baylorscott_logo",
};

const honorableData: IHonorableProps = {
  title: "Honorable Mention",
  headshot: "",
  name: "Andy Trinh",
  role: "SWE",
  company: "Toyota",
};

export {
  heroData,
  aboutData,
  firstDraftData,
  scheduleData,
  rulesData,
  mentorData,
  sponsorData,
  honorableData,
  partnerData,
};
export type {
  IHeroProps,
  IAboutProps,
  IScheduleProps,
  TScheduleEntry,
  IRulesProps,
  IMentorProps,
  ISponsorProps,
  IPartnerProps,
  IHonorableProps,
  TPartner,
};
