import { Box, Paper, styled } from "@mui/material";

export const StyledRootBox = styled(Box)`
  width: 100%;

  .support-btn {
    background: #fff;
    color: #4a56da;
    font-weight: 600;
    font-size: 10px;
    padding: 7px 16px;
    border-radius: 25px;
    text-transform: none;
  }
`;

export const StyledPaper = styled(Paper)`
  width: 15vw;
  height: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;

  > img {
    margin-bottom: 36px;
    margin-inline: 56px;
  }

  .list-item {
    height: 50px;
    display: flex;
    align-items: center;

    > img {
      height: 24px;
      width: 24px;
      margin-left: 24px;
    }
  }
`;