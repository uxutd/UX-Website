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

const EventTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      fontSize: "2.3rem",
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
    variant="body2"
    sx={{
      color: "white",
      fontFamily: "Bricolage Grotesque",
      fontSize: "1.1rem",
      fontWeight: "bold",
      textShadow: "0.1875rem 0.125rem 0.25rem #3E68FD",
      marginTop: "0.001rem",
    }}
  >
    {children}
  </Typography>
);

export default function EventsPage() {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const events = [
    { title: "End-of-Semester Social", date: "12/02/2024", image: "/eossocial.jpg", alt: "Event 1" },
    { title: "UXperience: The First Draft", date: "11/09/2024", image: "/designathon.jpg", alt: "Event 2" },
    { title: "Design & Unwind Social", date: "10/30/2024", image: "/designandunwind.jpg", alt: "Event 3" },
    { title: "Design Systems Workshop", date: "10/07/2024", image: "/designsystems.jpg", alt: "Event 4", sx: { objectPosition: "center bottom", transform: "scale(1.1)" } },
    { title: "Intro to UX Design Workshop", date: "09/30/2024", image: "/introtoux.jpg", alt: "Event 5" },
    { title: "Figma Workshop Series", date: "09/24/2024 - 11/12/2024", image: "/figmaworkshop.png", alt: "Event 6" },
    { title: "Fall 2024 Kickoff", date: "09/12/2024", image: "/fallkickoff.jpg", alt: "Event 7" },
  ];

  const visibleEvents = showMore ? events : events.slice(0, 6);
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                marginTop: isMobile ? 0 : "-3.75rem",
                fontFamily: "Bricolage Grotesque",
                fontWeight: "bold",
                color: "#3E68FD",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Previous Events
            </Typography>
            <img
              src="/smallsquigglyarrow.png"
              alt="Arrow"
              style={{
                width: isMobile ? "10rem" : "12.5rem",
                height: "auto",
                position: "absolute",
                right: isMobile ? "-3.5rem" : "-5.3125rem",
                top: isMobile ? "4rem" : "0.3125rem",
                zIndex: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              maxWidth: "75rem",
            }}
          >
            {visibleEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  width: "23.4375rem",
                  height: "23.4375rem",
                  borderRadius: "3rem",
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
                    borderRadius: "3rem",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={event.image}
                    alt={event.alt}
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
                      padding: "1rem",
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
              onClick={() => setShowMore(!showMore)}
              style={{
                padding: "0.25rem 0.5rem",
                fontSize: "1.75rem",
                cursor: "pointer",
                fontFamily: "Bricolage Grotesque",
                fontWeight: "bold",
                color: "#3E68FD",
                border: "0.1875rem solid #3E68FD",
                borderRadius: "0.5rem",
              }}
            >
              {showMore ? "See less" : "See more"}
            </button>
          </Box>
        </Box>
      </section>
    </div>
  );
}
