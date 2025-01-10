"use client";

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
import { motion } from "framer-motion"; // Import motion for animations
import { useEffect, useState } from "react";

import uxlogo from "../public/UX_Color_Logo.svg"; // Correct image import

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { DiscordIcon, InstagramIcon } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    // Fade-in effect
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay to allow for the transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      initial={{ opacity: 0, y: -10 }} // Initial state: transparent and slightly above
      transition={{ duration: 0.5 }} // Transition duration
    >
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
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
        <NavbarContent className="hidden md:flex justify-center basis-full">
          <ul className="flex gap-4 justify-center items-center mx-auto w-full max-w-md">
            {siteConfig.navMenuItems.map((item) => (
              <NavbarItem
                key={item.href}
                className="relative w-full text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Scale up on hover
                  whileTap={{ scale: 0.95 }} // Scale down on tap
                >
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:font-medium",
                      pathname === item.href
                        ? "text-primary font-bold" // Active link styling
                        : "hover:text-primary transition-colors",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </motion.div>

                {/* Render sublinks if they exist */}
                {item.sublinks && item.sublinks.length > 0 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden flex-col gap-1 bg-white border border-gray-300 rounded-md shadow-md group-hover:flex">
                    {item.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={`${sublink.label}-${subIndex}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                        href={sublink.href}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              aria-label="Discord"
              href={siteConfig.links.discord}
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <InstagramIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-white bg-blue-500 hover:bg-blue-600"
              href={siteConfig.links.mailinglist}
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
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500 transition-transform duration-200 ease-in-out hover:scale-110" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-3 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link href={item.href} size="lg">
                  {item.label}
                </Link>
                {/* Render sublinks if they exist */}
                {item.sublinks && item.sublinks.length > 0 && (
                  <div className="ml-4 flex flex-col gap-2 pl-4 border-l border-gray-300 mt-1">
                    {item.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={`${sublink.label}-${subIndex}`}
                        className="hover:text-primary"
                        href={sublink.href}
                        size="sm"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  );
};
