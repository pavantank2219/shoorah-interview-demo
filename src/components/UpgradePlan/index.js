'use client';

import React, { useState } from "react";
import { Box, Button, Divider, MenuItem, Paper, Radio, Select, Stack, Typography, styled } from "@mui/material";
import MainLayout from "@/layout/MainLayout";
import PaymentDialog from "../Dialogs/Payment";
import AddNewCardDialog from "../Dialogs/AddCard";
import SuccessDialog from "../Dialogs/Success";
import { StyledPaper, UpgradeButton } from "./styles";

const UpgradePlan = () => {
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false)
  const [isOpenNewCard, setIsOpenNewCard] = useState(false)
  const [isSuccessModal, setIsSuccessModal] = useState(false)

  const openPaymentModal = () => {
    setIsOpenPaymentModal(true);
    setIsOpenNewCard(false);
    setIsSuccessModal(false);
  };

  const openAddNewCardModal = () => {
    setIsOpenPaymentModal(false);
    setIsOpenNewCard(true);
    setIsSuccessModal(false);
  };


  const openSuccessModal = () => {
    setIsOpenPaymentModal(false);
    setIsOpenNewCard(false);
    setIsSuccessModal(true);
  };

  return (
    <MainLayout>
      <StyledPaper className="content-container">
        <Box p={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={500}>Select an add-on plan</Typography>
          </Stack>

          <Stack className="info-banner" direction="row">
            <img style={{ height: 16 }} src="/assets/images/info-circle.svg" alt="info-circle" />
            <Typography fontSize={'14px'}>This payment is an add-on and does not affect your existing Shoorah subscription. Regular subscription payments, such as monthly charges, will continue as usual.</Typography>
          </Stack>

          <Stack sx={{ border: "1px solid #DDDDDD", borderRadius: "16px" }} mt={2}>
            <Stack direction="row" alignItems="center" p={2} className="options-header">
              <Typography>How many employees do you wish to add to this plan?</Typography>
              <Select
                labelId="employee-select"
                id="employee-select"
                value={5}
                variant="outlined"
                sx={{ width: "120px", height: "36px", bgcolor: "#fff", border: "none" }}
              >
                <MenuItem value={5}>0 - 9</MenuItem>
                <MenuItem value={10}>10 - 100</MenuItem>
                <MenuItem value={20}>100 - 500</MenuItem>
                <MenuItem value={30}>Above 500</MenuItem>
              </Select>
            </Stack>

            <Stack direction="row" p={2} className="options-list">
              <Stack direction="row" alignItems="flex-start">
                <Box>
                  <Typography>Voice call add-on</Typography>
                  <Typography color="#606060" fontSize={14} mt={"5px"}>
                    This accommodates 10-40 employees, with voice calls only
                  </Typography>
                </Box>
              </Stack>
              <Typography fontWeight={500} fontSize={"24px"}>
                £60/yr
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Box className="add-ons">
            <Box p={2} className="options-list">
              <Stack direction="row" width="100%" justifyContent="space-between">
                <Typography>Total Payment: </Typography>
                <Typography>£14</Typography>
              </Stack>
              <Divider sx={{ mt: 2, mb: 1 }} />
              <Stack direction="row" width="100%" alignItems={"center"}>
                <Radio size="small" sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
                <Typography fontSize={'12px'}>Auto Renew your plan</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box className="floating-container">
          <UpgradeButton onClick={openPaymentModal}>Pay £250</UpgradeButton>
        </Box>
      </StyledPaper>

      <PaymentDialog
        open={isOpenPaymentModal}
        setIsOpenPaymentModal={setIsOpenPaymentModal}
        onClose={() => {
          openAddNewCardModal();
        }}
      />
      <AddNewCardDialog
        open={isOpenNewCard}
        setIsOpenNewCard={setIsOpenNewCard}
        onClose={() => {
          openSuccessModal();
        }}
      />
      <SuccessDialog
        open={isSuccessModal}
        setIsSuccessModal={setIsSuccessModal}
        onClose={() => {
          setIsSuccessModal(false);
        }}
      />
    </MainLayout>
  );
};

export default UpgradePlan;
