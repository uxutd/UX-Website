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
        padding: "0 20px", // small padding for mobile view
      }}
    >
      <Typography
        variant="h2"
        className={title()}
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: "16px"
        }}
      >
        Under Construction
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontSize: "18px"
        }}
      >
        We&apos;re working hard to bring this page to life. Stay tuned!
      </Typography>
    </Box>
  );
}
