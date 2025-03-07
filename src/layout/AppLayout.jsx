"use client";
import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

const AppLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ height: "100vh", backgroundColor: "#F4F4F4", overflow: "hidden" }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout;
