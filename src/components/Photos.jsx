import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const backendUrl = "http://localhost:3001/uploads";

// Photos component that is invisible unless upload is triggered, used to display the before and after images
export default function Photos({ inputImage, outputImage }) {
  if (!inputImage && !outputImage) {
    return null;
  }

  const inputImageUrl = `${backendUrl}/${inputImage}`;
  const outputImageUrl = `${backendUrl}/${outputImage}`;

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 3,
      }}
    >
      {inputImage && (
        <>
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
              src={inputImageUrl}
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDownload(inputImageUrl, "input.jpg")}
          >
            Download Before Image
          </Button>
        </>
      )}

      {outputImage && (
        <>
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
              src={outputImageUrl}
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDownload(outputImageUrl, "output.jpg")}
          >
            Download After Image
          </Button>
        </>
      )}
    </Container>
  );
}
