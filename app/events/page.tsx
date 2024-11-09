import { Box, Typography } from "@mui/material";

import { title } from "@/components/primitives";

export default function EventsPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0", // light background
        textAlign: "center",
        padding: { xs: "0 10px", sm: "0 20px", md: "0 40px" }, // responsive padding
      }}
    >
      <Typography
        className={title()}
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: "16px",
        }}
        variant="h2"
      >
        Under Construction
      </Typography>
      <Typography
        sx={{
          color: "#666",
          fontSize: "18px",
        }}
        variant="body1"
      >
        We&apos;re working hard to bring this page to life. Stay tuned!
      </Typography>
    </Box>
  );
}
