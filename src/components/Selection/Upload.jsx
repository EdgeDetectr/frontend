"use client";

import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";

export default function Upload({ selectedOperator }) {
  const handleUpload = async () => {
    if (!selectedOperator) {
      alert("Please select an operator before uploading.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3001/api/operators");
      console.log(response);
    } catch (error) {
      console.error("Error hitting the backend route:", error);
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
        <Fab
          onClick={handleUpload}
          variant="extended"
          color="primary"
          sx={{ mb: 2 }}
        >
          <FileUploadIcon sx={{ mr: 1 }} />
          Upload
        </Fab>
        <Typography variant="body2" sx={{ mb: 1 }}>
          selected operator: {selectedOperator || "None"}
        </Typography>
        <Typography variant="body2">
          max size 100 mb. by proceeding, you agree to our
          <a href="#"> terms of use</a>.
        </Typography>
      </Box>
    </Container>
  );
}
