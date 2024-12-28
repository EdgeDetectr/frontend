"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";

export default function Operator() {
  const [operator, setOperator] = React.useState("");

  const handleChange = (event) => {
    setOperator(event.target.value);
  };

  const operators = ["sobel", "prewitt", "roberts"];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Container>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "primary.main",
              "&.Mui-focused": { color: "secondary.main" },
            }}
          >
            operator
          </InputLabel>
        </Container>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={operator}
          label="operator"
          onChange={handleChange}
          sx={{
            color: "primary.main",
            ".MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "secondary.main",
            },
          }}
        >
          {operators.map((operator) => (
            <MenuItem
              key={operator}
              value={operator}
              sx={{ color: "primary.main" }}
            >
              {operator}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
