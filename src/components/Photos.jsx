import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Photos() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16/9",
          position: "relative",
          border: "2px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://via.placeholder.com/300x200"
          alt="Before"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          before
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          aspectRatio: "16/9",
          position: "relative",
          border: "2px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://via.placeholder.com/300x200"
          alt="After"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          after
        </Typography>
      </Box>
    </Container>
  );
}
