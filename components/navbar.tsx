"use client"; // This makes the component a client component

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation

import uxlogo from "../public/UX_Color_Logo.svg"; // Correct image import

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DiscordIcon } from "@/components/icons";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    // Fade-in effect
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to allow for the transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="UX Club Logo"
              className="rounded-sm"
              height={48}
              quality={100}
              src={uxlogo}
              width={48}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Centered Navigation Links */}
      <NavbarContent className="hidden lg:flex justify-center basis-full">
        <ul className="flex gap-4 justify-center items-center mx-auto w-full max-w-md">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} className="w-full text-center">
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:font-medium transition-transform duration-200 ease-in-out",
                  pathname === item.href
                    ? "text-primary font-bold" // Active link styling
                    : "hover:text-primary transition-colors",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500 transition-transform duration-200 ease-in-out hover:scale-110" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500 transition-transform duration-200 ease-in-out hover:scale-110" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-white bg-blue-500 hover:bg-blue-600 transition-transform duration-200"
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Join Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
          <DiscordIcon className="text-default-500 transition-transform duration-200 ease-in-out hover:scale-110" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="transition-transform duration-300 ease-in-out">
        <div className="mx-3 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
