export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "UX Club",
  description: "Spreading user experience awareness since 2014",
  icon: "/UX_Color_Logo.svg",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Design-a-thon",
      href: "/design-a-thon",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Events",
      href: "/events",
      // sublinks: [
      //   {
      //     label: "Coming Soon!",
      //     href: "/events",
      //   },
      // ],
    },
    {
      label: "Design-a-thon",
      href: "/design-a-thon",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/ux_utd/",
    linkedin: "",
    discord: "https://discord.gg/68crdRwSD5",
    github: "",
    mailinglist:
      "https://docs.google.com/forms/d/e/1FAIpQLSfsK7f1D7whW0AGTJS97xpqPdUru_e6SYNhyejdGkcowByRng/viewform",
    mail: "mailto:uxutdallas@gmail.com",
  },
};
