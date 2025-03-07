"use client";
import React from "react";
import { Box, Dialog, Stack, Typography } from "@mui/material";
import { CommonButton, StyledInput } from "../styles";

const AddNewCardDialog = ({ open, onClose, setIsOpenNewCard }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => setIsOpenNewCard(false)}
      sx={{ borderRadius: "16px" }}
    >
      <Box sx={{ padding: "24px" }}>
        <Typography variant="h3" fontWeight={500}>
          Add a new card
        </Typography>

        <Box mt={4}>
          <Box mt={4}>
            <Typography variant="body1" color="#0B1D2E">
              Cardholders Name
            </Typography>
            <StyledInput placeholder="John Doe" />
          </Box>
          <Box mt={4}>
            <Typography variant="body1" color="#0B1D2E">
              Card Number
            </Typography>
            <StyledInput placeholder="0000-0000-0000-0000" />
          </Box>
          <Stack mt={4} direction={"row"} justifyContent={"space-between"}>
            <Box width={"48%"}>
              <Typography variant="body1" color="#0B1D2E">
                Exp Month
              </Typography>
              <StyledInput placeholder="00/00" />
            </Box>
            <Box width={"48%"}>
              <Typography variant="body1" color="#0B1D2E">
                Exp Year
              </Typography>
              <StyledInput placeholder="000" />
            </Box>
          </Stack>

          <Box mt={4}>
            <Typography variant="body1" color="#0B1D2E">
              CVC Number
            </Typography>
            <StyledInput placeholder="000" />
          </Box>
        </Box>

        <Box mt={2}>
          <CommonButton onClick={onClose} sx={{ m: 0 }}>
            Add your card
          </CommonButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AddNewCardDialog;
