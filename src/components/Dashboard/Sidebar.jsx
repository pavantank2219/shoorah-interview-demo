"use client";

import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

import { sidebarMenus } from "@/data";
import { IOSSwitch } from "../IOSSwitch";
import { StyledPaper } from "./styles";

const Sidebar = () => {
  return (
    <StyledPaper>
      <img src="/assets/images/shoorah.svg" alt="logo" />
      {sidebarMenus.map((menu, index) => {
        return (
          <Stack direction="row" className="list-item">
            <Box
              sx={{ bgcolor: index === 3 && "#4A57DA" }}
              width={"8px"}
              height={"100%"}
            />
            <img src={`/assets/icons/${menu.icon}.svg`} alt={menu.icon} />
            <Typography
              fontSize={"14px"}
              lineHeight={"36px"}
              sx={{ color: index === 3 && "#4A57DA", ml: "20px" }}
            >
              {menu.title}
            </Typography>
          </Stack>
        );
      })}
      <Divider mt={"auto"} sx={{ mt: "auto", mb: 2, mx: 2 }} />
      <Stack direction="row" className="list-item">
        <Box width={"8px"} height={"100%"} />
        <img src={`/assets/icons/moon.svg`} alt={"moon"} />
        <Typography fontSize={"14px"} lineHeight={"36px"} sx={{ ml: "20px" }}>
          Darkmode
        </Typography>
        <Box ml="auto" mr={2}>
          <IOSSwitch />
        </Box>
      </Stack>
      <Stack direction="row" className="list-item" mb={2}>
        <Box width={"8px"} height={"100%"} />
        <img src={`/assets/icons/login.svg`} alt={"logout"} />
        <Typography fontSize={"14px"} lineHeight={"36px"} sx={{ ml: "20px" }}>
          Logout
        </Typography>
      </Stack>
    </StyledPaper>
  );
};

export default Sidebar;
