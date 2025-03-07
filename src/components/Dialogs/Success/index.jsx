import React from "react";
import { Box, Dialog, Typography } from "@mui/material";
import Image from "next/image";
import { CommonButton } from "../styles";

const SuccessDialog = ({ open, onClose, setIsSuccessModal }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => setIsSuccessModal(false)}
      sx={{ borderRadius: "16px" }}
    >
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Image src={"/assets/images/success.svg"} height={120} width={120} />
        <Typography mt={4} variant="body1">
          Your payment is currently under review. This process typically takes
          24-48 hours. We’ll notify you as soon as it’s completed
        </Typography>
        <Box mt={4}>
          <CommonButton onClick={onClose}>Got it!</CommonButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default SuccessDialog;
