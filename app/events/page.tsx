"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Divider } from "./Divider";
import { past_events as events, current_event } from "./data";

export default function EventsPage() {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const EventTitle: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <Typography
      sx={{
        fontSize: isMobile ? "0.85rem" : "2rem",
        color: "white",
        marginBottom: "0.2rem",
        fontFamily: "Bricolage Grotesque",
        fontWeight: "bold",
        textShadow: "0.1875rem 0.125rem 0.25rem #3E68FD",
      }}
    >
      {children}
    </Typography>
  );

  const EventDate: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography
      sx={{
        color: "white",
        fontFamily: "Bricolage Grotesque",
        fontSize: isMobile ? "0.75rem" : "1.1rem",
        fontWeight: "bold",
        textShadow: "0.1875rem 0.125rem 0.25rem #3E68FD",
        marginTop: "0.001rem",
      }}
      variant="body2"
    >
      {children}
    </Typography>
  );

  const visibleEvents = showMore ? events : events.slice(0, 6);

  return (
    <div>
      <section className="container mx-auto px-4">
        {/* Top Section */}
        <section className="flex flex-col items-center pt-12 gap-6">
          <Box className="event-box">
            <div className="px-4 md:px-6 py-1 md:py-4 flex flex-col md:flex-row items-start justify-between">
              {/* Text Content */}
              <div className="flex flex-col">
                <h1
                  className="text-3xl md:text-[3.1rem] font-semibold leading-tight mb-2 text-white"
                  style={{
                    wordSpacing: "0.25rem",
                    WebkitTextStroke: "0.25px white",
                  }}
                >
                  {current_event.headline}
                </h1>
                <h1
                  className="text-2xl md:text-[2.535rem] leading-tight mb-2 text-white"
                  style={{
                    wordSpacing: "0.65rem",
                    WebkitTextStroke: "0.25px white",
                  }}
                >
                  {current_event.date}, <br />
                  {current_event.time}
                </h1>
                <h1
                  className="text-2xl md:text-[2.535rem] font-semibold leading-tight mb-2 text-[#3e68fd]"
                  style={{
                    wordSpacing: "0.65rem",
                    WebkitTextStroke: "1.75px white",
                  }}
                >
                  {current_event.location}
                </h1>
              </div>

              {/* Flyer Image */}
              <img
                alt={current_event.headline}
                className="hidden md:block md:max-w-[35rem] w-full h-auto mr-4"
                src={current_event.img_url}
              />
            </div>
          </Box>
        </section>
        <Divider
          text={
            <>
              Up next
              <br />
              for the UX Club
            </>
          }
        />
      </section>

      {/* Previous Events Section */}
      <section className="sm:py-0 md:py-20">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              gap: "0.0625rem",
              position: "relative",
              marginLeft: isMobile ? 0 : "61.875rem",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                marginTop: isMobile ? "0.75rem" : "-3.75rem",
                fontFamily: "Bricolage Grotesque",
                fontWeight: "bold",
                color: "#3E68FD",
                textAlign: isMobile ? "center" : "left",
                fontSize: "2rem",
              }}
              variant="h3"
            >
              Previous Events
            </Typography>

            <img
              alt="Arrow"
              src="/squigglepreviousarrow.png"
              style={{
                width: isMobile ? "0" : "10.5rem",
                height: "auto",
                position: "absolute",
                right: isMobile ? "-3.5rem" : "0.5rem",
                top: isMobile ? "1.5rem" : "0.0rem",
                zIndex: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? "2rem" : "4rem",

              justifyContent: "center",
              maxWidth: "75rem",
            }}
          >
            {visibleEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  width: isMobile ? "9rem" : "19rem",
                  height: isMobile ? "9rem" : "19rem",
                  borderRadius: isMobile ? "1rem" : "3rem",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  boxShadow: 3,
                  zIndex: 0,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: isMobile ? "1rem" : "3rem",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    alt={event.alt}
                    component="img"
                    height="100%"
                    image={event.image}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      ...event.sx,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      height: "30%",
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: isMobile ? "0.75rem" : "1.2rem",
                    }}
                  >
                    <EventTitle>{event.title}</EventTitle>
                    <EventDate>{event.date}</EventDate>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
          <Box sx={{ marginTop: "1.5rem" }}>
            <button
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: isMobile ? "1rem" : "1.75rem",
                cursor: "pointer",
                fontFamily: "Bricolage Grotesque",
                fontWeight: "bold",
                color: "#3E68FD",
                border: "0.1875rem solid #3E68FD",
                borderRadius: "0.5rem",
              }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See less" : "See more"}
            </button>
          </Box>
        </Box>
      </section>
    </div>
  );
}
