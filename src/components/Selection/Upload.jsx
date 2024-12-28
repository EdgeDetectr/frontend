"use client";

import Fab from "@mui/material/Fab";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

export default function Upload() {
  return (
    <Grid xs={12}>
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
          <Fab variant="extended" color="primary" sx={{ mb: 2 }}>
            <FileUploadIcon sx={{ mr: 1 }} />
            upload
          </Fab>
          <Typography variant="body2" sx={{ mb: 1 }}>
            max size 100 mb.
          </Typography>
          <Typography variant="body2">
            by proceeding, you agree to our <a href="#">terms of use</a>.
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
}
