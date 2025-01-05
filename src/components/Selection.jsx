"use client";

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Operator from "./Selection/Operators";
import Upload from "./Selection/Upload";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "../styles/selection.css";

export default function Selection({ setImageUrls }) {
  const [selectedOperator, setSelectedOperator] = useState("");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={12}>
          <Container maxWidth="sm" className="operator_container">
            <Typography variant="h5">select an operator</Typography>
            <Operator onOperatorChange={setSelectedOperator} />
          </Container>
        </Grid>
        <Grid xs={12}>
          <Container maxWidth="sm" className="upload_container">
            <Upload
              selectedOperator={selectedOperator}
              setImageUrls={setImageUrls}
            />
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
