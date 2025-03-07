"use client";

import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/navigation";
import { StyledRootBox } from "./styles";

const Dashboard = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <StyledRootBox>
        <Stack
          bgcolor={"#4A56DA"}
          height={"180px"}
          direction={"row"}
          borderRadius={"8px"}
          mt={8}
        >
          <Box width={"50%"} p={2} display={"flex"} flexDirection={"column"}>
            <Typography color="#fff" fontSize={"20px"} fontWeight={500}>
              Instant Support
            </Typography>
            <Typography color="#EDEEFC" fontSize={"12px"}>
              Get instant support for your team when they need it <br /> most.
              Connect with an experts and receive assistance <br /> today!
            </Typography>
            <Button
              sx={{ mt: "auto", width: "max-content" }}
              className="support-btn"
              onClick={() => router.push("/plan-select")}
            >
              Get support
            </Button>
          </Box>
          <Box width={"50%"} display={"flex"} justifyContent={"flex-end"}>
            <img src="/assets/images/music.svg" alt="music" />
          </Box>
        </Stack>
      </StyledRootBox>
    </MainLayout>
  );
};

export default Dashboard;
