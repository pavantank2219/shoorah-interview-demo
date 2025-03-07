'use client';

import React, { useState } from "react";
import { Box, Button, MenuItem, Paper, Radio, Select, Stack, Typography, styled } from "@mui/material";
import { extra_add_on, plan_options } from "@/data";
import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/navigation";
import { StyledPaper, UpgradeButton } from "./styles";

const PlanSelection = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState(null);

  const isButtonDisabled = !(selectedPlan && selectedAddOn);

  return (
    <MainLayout>
      <StyledPaper className="content-container">
        <Box p={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={500}>Select an add-on plan</Typography>
            <Typography fontSize={"12px"} sx={{ cursor: "pointer" }}>
              Speak to sales?
            </Typography>
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

            {plan_options.map((plan, index) => (
              <Stack direction="row" p={2} className="options-list" key={index}>
                <Stack direction="row" alignItems="flex-start">
                  <Radio
                    checked={selectedPlan === plan.title}
                    onChange={() => setSelectedPlan(plan.title)}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                  <Box>
                    <Typography>{plan.title}</Typography>
                    <Typography color="#606060" fontSize={14} mt={"5px"}>
                      {plan.description}
                    </Typography>
                  </Box>
                </Stack>
                <Typography fontWeight={500} fontSize={"24px"}>
                  {plan.cost}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Stack mt={3}>
            <Typography mb={3} fontWeight={500}>
              Extra add-on
            </Typography>
          </Stack>

          <Box className="add-ons">
            {extra_add_on.map((addOn, index) => (
              <Stack direction="row" p={2} className="options-list" key={index}>
                <Stack direction="row" alignItems="flex-start">
                  <Radio
                    checked={selectedAddOn === addOn.title}
                    onChange={() => setSelectedAddOn(addOn.title)}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                  <Box>
                    <Typography>{addOn.title}</Typography>
                    <Typography color="#606060" fontSize={14} mt={"5px"}>
                      {addOn.description}
                    </Typography>
                  </Box>
                </Stack>
                <Typography fontWeight={500} fontSize={"24px"}>
                  {addOn.cost}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>

        <Box className="floating-container">
          <UpgradeButton onClick={() => router.push('/upgrade-plan')} disabled={isButtonDisabled}>Upgrade plan</UpgradeButton>
        </Box>
      </StyledPaper>
    </MainLayout>
  );
};

export default PlanSelection;
