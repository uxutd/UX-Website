import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/UX_White_Logo.svg", // Path to your favicon or icon
  },
  openGraph: {
    title: siteConfig.name, // Title for the Open Graph preview
    description: siteConfig.description, // Description for the Open Graph preview
    url: "https://ux-website.vercel.app/", // Replace with your site's URL
    siteName: siteConfig.name,
    images: [
      {
        url: "/UX_White_Logo.svg", // Path to your logo
        width: 800, // Optional: width of the image
        height: 600, // Optional: height of the image
        alt: siteConfig.name, // Alternative text for the image
      },
    ],
    locale: "en_US", // Optional: the locale for the page
    type: "website", // Type of your content
  },
  twitter: {
    card: "summary_large_image", // Use 'summary' for a smaller image preview
    title: siteConfig.name, // Title for Twitter preview
    description: siteConfig.description, // Description for Twitter preview
    images: ["/path/to/your/logo.png"], // Path to your logo
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen w-screen overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
            {/* Footer Section */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
