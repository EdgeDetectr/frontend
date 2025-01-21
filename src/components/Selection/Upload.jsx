"use client";

import React, { useRef } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";

// Upload component that allows users to upload images that is sent to the backend and onwards.
export default function Upload({ selectedOperator, setImageUrls }) {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (!selectedOperator) {
      alert("Please select an operator before uploading.");
      return;
    }

    // Open the file selection dialog
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedOperator) {
      alert("Please select an operator before uploading.");
      return;
    }
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("operator", selectedOperator);
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/operators/" + selectedOperator,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "text",
        }
      );
      const responseData = JSON.parse(response.data);
      const { inputImage, outputImage } = responseData;
      setImageUrls({ inputImage: inputImage, outputImage: outputImage });
    } catch (error) {
      console.error("Error hitting the backend route: ", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: "400px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          id="upload-input"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Fab
          variant="extended"
          color="primary"
          sx={{ mb: 2 }}
          onClick={handleUploadClick}
        >
          <FileUploadIcon sx={{ mr: 1 }} />
          Upload
        </Fab>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Selected operator: {selectedOperator || "None"}
        </Typography>
        <Typography variant="body2">
          Max size 100 MB. By proceeding, you agree to our
          <a href="#"> terms of use</a>.
        </Typography>
      </Box>
    </Container>
  );
}
