"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";

// Operator component that displays the operator selection dropdown
export default function Operator({ onOperatorChange }) {
  const [operator, setOperator] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setOperator(value);
    onOperatorChange(value);
  };

  const operators = ["opencv sobel", "alternative sobel", "openmp sobel"];

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
            Operator
          </InputLabel>
        </Container>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={operator}
          label="Operator"
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
