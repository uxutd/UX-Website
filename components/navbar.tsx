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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import uxlogo from "../public/UX_Color_Logo.svg";

import { siteConfig } from "@/config/site";
import { DiscordIcon, InstagramIcon } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
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
            {siteConfig.navMenuItems.map((item) => {
              if (item.label === "Conference") {
                return (
                  <NavbarItem
                    key={item.href}
                    className="relative w-full text-center"
                  >
                    <Dropdown>
                      <DropdownTrigger>
                        <button
                          className={clsx(
                            linkStyles({ color: "foreground" }),
                            "data-[active=true]:font-medium",
                            pathname === item.href
                              ? "text-primary font-bold"
                              : "hover:text-primary transition-colors",
                          )}
                        >
                          {item.label}
                        </button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Conference editions"
                        onAction={(key) => {
                          const edition = key as string;
                          router.push(`/conference?edition=${edition}`);
                        }}
                        className="text-center"
                      >
                        <DropdownItem key="2026" className="text-center">
                          2026
                        </DropdownItem>
                        <DropdownItem key="2025" className="text-center">
                          2025
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavbarItem>
                );
              }

              return (
                <NavbarItem
                  key={item.href}
                  className="relative w-full text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:font-medium",
                        pathname === item.href
                          ? "text-primary font-bold"
                          : "hover:text-primary transition-colors",
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </NextLink>
                  </motion.div>
                </NavbarItem>
              );
            })}
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
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-3 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => {
              if (item.label === "Conference") {
                return (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    <div className="ml-4 flex flex-col gap-2">
                      <button
                        onClick={() => router.push("/conference?edition=2026")}
                        className="text-left text-sm hover:text-primary"
                      >
                        2026
                      </button>
                      <button
                        onClick={() => router.push("/conference?edition=2025")}
                        className="text-left text-sm hover:text-primary"
                      >
                        2025
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <NavbarMenuItem key={`${item.label}-${index}`}>
                  <Link href={item.href} size="lg">
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              );
            })}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  );
};
