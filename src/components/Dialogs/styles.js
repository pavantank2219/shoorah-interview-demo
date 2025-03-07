import { Box, Button, OutlinedInput, styled } from "@mui/material";

export const EditButton = styled(Box)`
  padding: 4px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e7e8ea;
  border-radius: 50px;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ selected }) => (selected ? "1px solid #E7E8EA" : "none")};
  padding: 18px;
  border-radius: 8px;
  cursor: pointer;
`;

export const CommonButton = styled(Button)`
  background-color: ${({ outlined }) => (outlined ? "#fff" : "#4f5adf")};
  color: ${({ outlined }) => (outlined ? "#000" : "#fff")};
  border: ${({ outlined }) => (outlined ? "1px solid #000" : "none")};
  width: max-content;
  height: 44px;
  font-weight: 500;
  text-transform: none;
  border-radius: 100px;
  padding: 8px 32px;
  font-weight: 600;
  margin: 0 0 24px 24px;
`;

export const StyledInput = styled(OutlinedInput)`
  background-color: #f4f4f4;
  height: 40px;
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;

  &.MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;