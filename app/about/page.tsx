import Image from "next/image";

import WordPullUp from "@/components/magicui/word-pull-up";
import BlurFade from "@/components/magicui/blur-fade";

export default function AboutPage() {
  const officers = [
    {
      name: "Vincent Joubarne",
      title: "President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/vincentjoubarne/",
    },
    {
      name: "Officer 2",
      title: "Vice President",
      img: "/vincent.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer2/",
    },
    {
      name: "Officer 3",
      title: "Secretary",
      img: "/officer3.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer3/",
    },
    {
      name: "Officer 4",
      title: "Treasurer",
      img: "/officer4.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer4/",
    },
  ];

  const officersRowTwo = [
    {
      name: "Officer 5",
      title: "Event Coordinator",
      img: "/officer5.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer5/",
    },
    {
      name: "Officer 6",
      title: "PR Lead",
      img: "/officer6.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer6/",
    },
    {
      name: "Officer 7",
      title: "Corporate Relations",
      img: "/officer7.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer7/",
    },
    {
      name: "Officer 8",
      title: "Web Developer",
      img: "/officer8.jpg.png",
      linkedIn: "https://www.linkedin.com/in/officer8/",
    },
  ];

  return (
    <div>
      <h1 className={title()}>About</h1>
    </div>
  );
}
