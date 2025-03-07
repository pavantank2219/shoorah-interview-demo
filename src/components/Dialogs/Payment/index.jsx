"use client";
import React, { useState } from "react";
import { Box, Dialog, Radio, Stack, Typography } from "@mui/material";
import { payment_options } from "@/data";
import { CommonButton, EditButton, StyledBox } from "../styles";

const PaymentDialog = ({ open, onClose, setIsOpenPaymentModal }) => {
  const [selectedPayment, setSelectedPayment] = useState(0);

  const handleSelectPayment = (index) => {
    setSelectedPayment(index);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => setIsOpenPaymentModal(false)}
      sx={{ borderRadius: "16px" }}
    >
      <Box sx={{ padding: "24px" }}>
        <Typography variant="h3" fontWeight={500}>
          Payment methods
        </Typography>

        <Box mt={4}>
          {payment_options.map((ele, index) => (
            <StyledBox
              key={index}
              selected={selectedPayment === index}
              onClick={() => handleSelectPayment(index)}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Radio
                  checked={selectedPayment === index}
                  onChange={() => handleSelectPayment(index)}
                />
                <img
                  src={`/assets/images/payment/${ele.icon}.svg`}
                  height={35}
                  width={35}
                  alt={`${ele.name}-icon`}
                />
                <Box>
                  <Typography
                    fontSize={12}
                    fontWeight={500}
                    textTransform={"capitalize"}
                  >
                    {ele.name}
                  </Typography>
                  <Typography
                    fontSize={12}
                    fontWeight={500}
                    textTransform={"capitalize"}
                  >
                    {ele.desc}
                  </Typography>
                </Box>
              </Stack>
              {selectedPayment === index && (
                <EditButton>
                  <Typography variant="body2" color="#0B1D2E">
                    Edit
                  </Typography>
                </EditButton>
              )}
            </StyledBox>
          ))}
        </Box>

        <Box mt={2}>
          <Stack direction={"row"} spacing={2}>
            <CommonButton outlined onClick={onClose}>
              Add a new card
            </CommonButton>
            <CommonButton>My Surveys</CommonButton>
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PaymentDialog;
