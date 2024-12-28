import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

import Heading from "../components/Heading";
import Selection from "../components/Selection";
import Photos from "../components/Photos";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 5,
      }}
      maxWidth="lg"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid xs={12}>
            <Heading />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid
            md={2}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              padding: 2,
              height: "100%",
            }}
          >
            <Selection />
          </Grid>

          <Grid
            md={10}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              padding: 2,
              height: "100%",
            }}
          >
            <Photos />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
