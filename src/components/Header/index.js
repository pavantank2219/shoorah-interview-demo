'use client';

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { StyledStack } from "./styles";

const Header = () => {
  return (
    <StyledStack direction="row">
      <Box width={"50%"} mt={3}>
        <Typography fontSize={24}>Instant Support</Typography>
        <Typography fontSize={15} mt={1} color="#0B1D2E">
          Expert support, right when it&apos;s needed most. Give your team the
          backing <br /> they deserve, with instant access to professionals
          who can help today.
        </Typography>
      </Box>
      <Stack
        width={"50%"}
        direction="row"
        justifyContent="flex-end"
        height={"max-content"}
        alignItems={"center"}
        gap={2}
      >
        <Box className="bell-icon" height={"40px"} width={"40px"}>
          <img src="/assets/images/notification.svg" alt="notification" />
        </Box>
        <Stack className="user-profile" direction="row">
          <img src="/assets/images/user-profile.png" alt="user-profile" />
          <Box>
            <Typography fontWeight={600}>Reuben Hale</Typography>
            <Typography color="#969696">Sub Admin</Typography>
          </Box>
        </Stack>
      </Stack>
    </StyledStack>
  )
}

export default Header